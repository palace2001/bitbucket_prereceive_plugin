define("bitbucket/internal/widget/mentionable-textarea/mentionable-textarea","module exports @atlassian/aui backbone jquery lodash textarea-caret-position xregexp bitbucket/util/navbuilder bitbucket/internal/model/page-state bitbucket/internal/model/stash-user bitbucket/internal/util/events bitbucket/internal/util/function bitbucket/internal/util/markup bitbucket/internal/widget/autocomplete-dialog/autocomplete-dialog".split(" "),function(n,k,f,p,q,r,t,u,v,w,x,y,z,A,B){function b(){this.init.apply(this,
arguments)}Object.defineProperty(k,"__esModule",{value:!0});var C=babelHelpers.interopRequireDefault(p),g=babelHelpers.interopRequireDefault(q),e=babelHelpers.interopRequireDefault(r),D=babelHelpers.interopRequireDefault(t),m=babelHelpers.interopRequireDefault(u),E=babelHelpers.interopRequireDefault(v),h=babelHelpers.interopRequireDefault(w),F=babelHelpers.interopRequireDefault(x),l=babelHelpers.interopRequireDefault(y),G=babelHelpers.interopRequireDefault(z),H=babelHelpers.interopRequireDefault(A),
I=babelHelpers.interopRequireDefault(B);b.defaults={$container:(0,g.default)(document.body),selector:"textarea",dialogId:"mention-autocomplete-dialog"};b.prototype.init=function(a){this.options&&this.reset();this.options=g.default.extend({},b.defaults,a);e.default.bindAll(this,"onKeyDown","onKeyPress","onPaste","onDocumentClick","updateDialogAnchorPosition","updateResults","onActivity","selectItem","highlightMatches");a=[];h.default.getPullRequest()?a=e.default.invokeMap([h.default.getPullRequest().getAuthor()].concat(h.default.getPullRequest().getReviewers().models,
h.default.getPullRequest().getParticipants().models),"getUser"):h.default.getCommitParticipants&&h.default.getCommitParticipants()&&(a=h.default.getCommitParticipants().map(function(a){return a.getUser()}));this.dataSource=J(a,this.matcher);this.dataSource.on("respond",this.updateResults);this.dataSource.on("activity",this.onActivity);this.isMentioningSelector=e.default.map(this.options.selector.split(","),function(a){return g.default.trim(a)+".isMentioning"}).join(", ");this.options.$container.on("keypress",
this.options.selector,this.onKeyPress);this.options.$container.on("keydown",this.isMentioningSelector,this.onKeyDown);this.options.$container.on("paste",this.isMentioningSelector,this.onPaste)};b.prototype.onKeyDown=function(a){if(this.dialog)switch(a.which){case f.keyCode.ENTER:case f.keyCode.TAB:this.selectHighlightedItem();a.preventDefault();break;case f.keyCode.UP:this.dialog.moveSelectionUp();a.preventDefault();break;case f.keyCode.DOWN:this.dialog.moveSelectionDown();a.preventDefault();break;
case f.keyCode.ESCAPE:this.endAutocomplete();a.preventDefault();a.stopPropagation();break;case f.keyCode.BACKSPACE:case f.keyCode.DELETE:this.onKeyPress(a)}};b.prototype.onKeyPress=function(a){a.which&&e.default.defer(e.default.bind(function(a){var d=(0,g.default)(a.target);if(d.hasClass("isMentioning"))this.updateAutocomplete();else{var c=d.getSelection().start;"@"!==String.fromCharCode(a.which)||H.default.isPositionInsideCodeBlock(c,d.val())||this.beginAutocomplete(d)}},this),a)};b.prototype.onPaste=
function(){e.default.defer(e.default.bind(this.updateAutocomplete,this))};b.prototype.onDocumentClick=function(a){var c=a.target;a=[];this.$textarea&&a.push(this.$textarea);this.dialog&&a.push(this.dialog.$el);e.default.some(a,function(a){return a.is(c)||g.default.contains(a[0],c)})||this.endAutocomplete()};b.prototype.beginAutocomplete=function(a){var c=a.getSelection().start-1;0<c&&/^\w$/.test(a.val().substr(c-1,1))||(this.$textarea=a,this.$textarea.addClass("isMentioning"),this.mentionTriggerPos=
c,this.resultsCollection=new C.default.Collection,this.dialog=new I.default({id:this.options.dialogId,collection:this.resultsCollection,minZIndex:this.options.$container.zIndex(),anchor:this.getCaretDocumentCoordinates(this.$textarea),template:bitbucket.internal.widget.mentionableTextarea.dialog,highlighter:this.highlightMatches}),this.dialog.on("itemSelected",this.selectItem),l.default.on("window.resize.debounced",this.updateDialogAnchorPosition),(0,g.default)(document).on("click focusin mousedown",
this.onDocumentClick),this.updateAutocomplete())};b.prototype.updateAutocomplete=function(){if(this.$textarea){this.currentCaretPos=this.$textarea.getSelection().start;var a=this.$textarea.val().substring(this.mentionTriggerPos,this.currentCaretPos);a&&e.default.startsWith(a,"@")&&!e.default.includes(a,"\n")?(a=a.substr(1),this.dataSource.query(a)):this.endAutocomplete()}};b.prototype.updateDialogAnchorPosition=function(){e.default.defer(e.default.bind(function(){this.dialog&&this.$textarea&&this.dialog.updateAnchorPosition(this.getCaretDocumentCoordinates(this.$textarea))},
this))};b.prototype.updateResults=function(a){this.resultsCollection&&(this.resultsCollection.query=a.query,this.resultsCollection.reset(a.results))};b.prototype.onActivity=function(a){this.dialog&&this.dialog.toggleSpinner(a.activity)};b.prototype.endAutocomplete=function(){this.$textarea&&(this.$textarea.removeClass("isMentioning"),this.$textarea=null);this.currentCaretPos=this.mentionTriggerPos=void 0;this.dialog&&(this.dialog.off("itemSelected",this.selectItem),this.dialog.remove(),this.dialog=
null);this.resultsCollection=null;l.default.off("window.resize.debounced",this.updateDialogAnchorPosition);(0,g.default)(document).off("click focusin mousedown",this.onDocumentClick)};b.prototype.selectHighlightedItem=function(){this.selectItem(this.dialog.getSelectedItemIndex())};b.prototype.selectItem=function(a){if(a=this.resultsCollection.at(a)){a=this.escapeUsername(a.getName());var c=this.$textarea.val(),d=c.substring(0,this.mentionTriggerPos+1);c=c.substring(this.currentCaretPos,c.length);
var b=d.length+a.length+1;" "!==c.charAt(0)&&(c=" "+c);this.$textarea.val(d+a+c);this.$textarea.setSelection(b,b)}this.endAutocomplete()};b.prototype.matcher=function(a,c){if(h.default.getCurrentUser()&&a.getName()===h.default.getCurrentUser().getName())return!1;var d=m.default.cache("(\\b|^|[^\\p{L}\\p{N}])"+RegExp.escape(c),"i");a=[a.getName(),a.getEmailAddress(),a.getDisplayName()];return e.default.some(a,function(a){return!(!a||!d.test(a))})};b.prototype.getMatchParts=function(a,c){var d=m.default.cache("(^|.*?(\\b|\\())("+
RegExp.escape(c)+")(.*)","i"),b={text:a};e.default.includes(a.toLowerCase(),c.toLowerCase())&&a.replace(d,function(a,d,c,e,K){b={prefix:d,match:e,suffix:K}});return b};b.prototype.highlightMatches=function(a,c){var d=this;a.find(".display-name, .email-address").each(function(){var a=(0,g.default)(this).contents().filter(function(){return this.nodeType===Node.TEXT_NODE}),b=e.default.reduce(d.getMatchParts(a.text(),c),function(a,d,b){return a+("match"===b?"\x3cb\x3e"+(0,f.escapeHtml)(d)+"\x3c/b\x3e":
(0,f.escapeHtml)(d))},"");a.replaceWith(b)});return a};b.prototype.getCaretDocumentCoordinates=function(a){var b=a.offset(),d=(0,D.default)(a[0],a[0].selectionStart);a=parseInt(a.css("font-size"),10);d.top+=b.top+a;d.left+=b.left;return d};b.prototype.escapeUsername=function(a){return/^\w*$/.test(a)?a:'"'+a.replace(/"/g,'\\"')+'"'};b.prototype.reset=function(){this.destroy();delete this.options;delete this.dataSource;delete this.$textarea;delete this.dialog;delete this.resultsCollection;delete this.mentionTriggerPos;
delete this.currentCaretPos};b.prototype.destroy=function(){this.dialog&&(this.dialog.off("itemSelected",this.selectItem),this.dialog.remove());this.dataSource.off("respond",this.updateResults);this.dataSource.off("activity",this.onActivity);this.options.$container.off("keypress",this.options.selector,this.onKeyPress);this.options.$container.off("keydown",this.isMentioningSelector,this.onKeyDown);this.options.$container.off("paste",this.isMentioningSelector,this.onPaste);l.default.off("window.resize.debounced",
this.updateDialogAnchorPosition);(0,g.default)(document).off("click focusin mousedown",this.onDocumentClick)};var J=e.default.once(function(a,b){a=new f.ProgressiveDataSet(a,{queryEndpoint:E.default.rest().users().build(),queryParamKey:"filter",queryData:{avatarSize:bitbucket.internal.widget.avatarSizeInPx({size:"small"}),permission:"LICENSED_USER"},maxResults:5,model:F.default,matcher:b});a.query=function(a){this.value=a;var b=this.getFilteredResults(a);this.respond(a,b);!a||!this._queryEndpoint||
this.hasQueryCache(a)||!this.shouldGetMoreResults(b)||2>a.length||this.remoteQuery(a)}.bind(a);a.remoteQuery=function(a){var b=this.fetch(a);this.activeQueryCount++;this.trigger("activity",{activity:!0});b.always(e.default.bind(function(){this.activeQueryCount--;this.trigger("activity",{activity:!!this.activeQueryCount})},this));b.done(e.default.bind(function(b,d,c){this.addQueryCache(a,b,c)},this));b.done(e.default.bind(function(){a=this.value;this.respond(a,this.getFilteredResults(a))},this))}.bind(a);
a.remoteQuery=e.default.debounce(a.remoteQuery,300);a.parse=G.default.dot("values");a.getFilteredResults=function(a){var b=this.filter(function(b){return!!this.matcher(b,a)},this);this._maxResults&&(b=e.default.take(b,this._maxResults));return b};return a});k.default=b;n.exports=k["default"]});