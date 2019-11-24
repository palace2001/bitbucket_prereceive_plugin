define("bitbucket/internal/feature/inbox/inbox-dialog","exports @atlassian/aui jquery lodash react react-dom bitbucket/util/navbuilder bitbucket/util/server bitbucket/util/state bitbucket/internal/bbui/inbox/inbox bitbucket/internal/enums".split(" "),function(f,r,t,u,g,v,w,x,y,h,z){Object.defineProperty(f,"__esModule",{value:!0});f.onReady=function(e){var b=A.default.getCurrentUser();e&&b&&(k=e,l.default.render(m.default.createElement(B,{currentUser:b,pageSize:h.DEFAULT_PAGE_SIZE}),e))};var n=babelHelpers.interopRequireDefault(r),
p=babelHelpers.interopRequireDefault(t),m=babelHelpers.interopRequireDefault(g),l=babelHelpers.interopRequireDefault(v),C=babelHelpers.interopRequireDefault(w),D=babelHelpers.interopRequireDefault(x),A=babelHelpers.interopRequireDefault(y),E=babelHelpers.interopRequireDefault(h),q=babelHelpers.interopRequireDefault(z),k=void 0,B=function(e){function b(F){babelHelpers.classCallCheck(this,b);var a=babelHelpers.possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,F));a.onMorePrsRequested=
function(c){a.state[c].loading||(a.setState(babelHelpers.defineProperty({},c,babelHelpers.extends({},a.state[c],{loading:!0}))),D.default.rest({url:a.getInboxResourceUrlBuilder(c).build(),type:"GET",statusCode:{0:a.handleError,401:a.handleError,500:a.handleError,502:a.handleError}}).done(function(d){a.setState(babelHelpers.defineProperty({},c,babelHelpers.extends({},a.state[c],{pullRequests:a.state[c].pullRequests.concat(d.values),loading:!1,allFetched:d.isLastPage,nextPageStart:(0,u.get)(d,"nextPageStart",
0)})))}))};a.getInboxResourceUrlBuilder=function(c){var d=a.mapTablePropToRole[c];return C.default.rest().addPathComponents("inbox","pull-requests").withParams({role:d,start:a.state[c].nextPageStart,limit:a.props.pageSize,avatarSize:bitbucket.internal.widget.avatarSizeInPx({size:"medium"}),withAttributes:!0,state:"OPEN",order:"oldest"})};a.mapTablePropToRole={created:q.default.ParticipantRole.AUTHOR,reviewing:q.default.ParticipantRole.REVIEWER};a.state={created:{pullRequests:[],allFetched:!1,loading:!1,
nextPageStart:0,onMoreItemsRequested:function(){return a.onMorePrsRequested("created")}},reviewing:{pullRequests:[],allFetched:!1,loading:!1,nextPageStart:0,onMoreItemsRequested:function(){return a.onMorePrsRequested("reviewing")}}};return a}babelHelpers.inherits(b,e);babelHelpers.createClass(b,[{key:"handleError",value:function(b,a,c,d){b={};d&&(b=d.errors?d.errors[0]:d);l.default.unmountComponentAtNode(k);(0,p.default)("#inbox .aui-inline-dialog-contents").html((0,p.default)(bitbucket.internal.inbox.error({title:n.default.I18n.getText("bitbucket.web.header.inbox.error.title"),
text:b.message||n.default.I18n.getText("bitbucket.web.header.inbox.error.unknown")})));return!1}},{key:"render",value:function(){var b=this.state,a=this.props;return m.default.createElement(E.default,{created:b.created,currentUser:a.currentUser,pageSize:a.pageSize,reviewing:b.reviewing})}}]);return b}(g.Component)});