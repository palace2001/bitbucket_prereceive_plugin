define("bitbucket/internal/feature/tasks/task-view/task-view","module exports @atlassian/aui backbone jquery lodash bitbucket/internal/feature/tasks/model/task-state bitbucket/internal/util/async-element-resize-helper bitbucket/internal/util/events bitbucket/internal/util/function".split(" "),function(k,e,f,l,c,m,n,p,q,r){Object.defineProperty(e,"__esModule",{value:!0});var g=babelHelpers.interopRequireDefault(f);f=babelHelpers.interopRequireDefault(l);var h=babelHelpers.interopRequireDefault(c),
d=babelHelpers.interopRequireDefault(m),t=babelHelpers.interopRequireDefault(n),u=babelHelpers.interopRequireDefault(p),v=babelHelpers.interopRequireDefault(q);c=babelHelpers.interopRequireDefault(r);var b={VIEW:"view",EDIT:"edit"};c=f.default.View.extend({events:{"click .task-checkbox":"transitionTaskHandler","click .task-edit":"onTaskEditClick","click .task-save":"onTaskSaveClick","click .task-cancel":"onTaskCancelClick","keydown .task-text":"onTaskKeyDown","click .task-delete":"onTaskDeleteClick",
"keypress textarea":"onTaskTextareaKeypress"},defaults:{showLink:!1,mode:b.VIEW},initialize:function(a){d.default.bindAll(this,"focusEditor","_onResize");this.listenTo(this.model,"change invalid",this.render);this.listenToOnce(this.model,"destroy",this._onResize);this.options=d.default.assign({},this.defaults,a);this.mode=this.options.mode;this.mode===b.EDIT&&(this.originalText=this.model.getText());this._enableExpandingTextareas()},template:c.default.dot("bitbucket.internal.feature.tasks.taskView.task")(window),
render:function(){var a=(0,h.default)(this.template({task:this.model.toJSON(),mode:this.mode,showLink:this.options.showLink,error:this.model.validationError}));this.$el.replaceWith(a);this.setElement(a);this._enableExpandingTextareas();this.mode===b.EDIT&&d.default.defer(this.focusEditor);d.default.defer(this._onResize);return this},transitionTaskHandler:function(){this.model.transitionToNextState()},saveTask:function(){var a=this,w=this.$(".task-text").val();a.switchMode(b.VIEW);this.model.updateText(w).fail(function(){a.switchMode(b.EDIT)})},
switchMode:function(a){this.mode=a;a===b.EDIT&&(this.originalText=this.model.getText()||this.originalText);this.render()},cancelTaskEdit:function(){this.model.isNew()?this.model.destroy():(this.model.setText(this.originalText),this.model.isValid(),this.originalText=null,this.switchMode(b.VIEW))},onTaskDeleteClick:function(a){var b=this;a.preventDefault();this.model.isNew()||(b.model.changeState(t.default.DELETED),b.model.destroy({wait:!0,error:function(){b.model.changeState(b.model.getLastState())}}))},
focusEditor:function(){this.$(".task-text").focus()},getEditorText:function(){return this.$(".task-text").val()},onTaskKeyDown:function(a){a.keyCode===g.default.keyCode.ESCAPE?(a.preventDefault(),a.stopPropagation(),this.cancelTaskEdit()):a.keyCode===g.default.keyCode.ENTER&&(a.preventDefault(),this.saveTask())},onTaskEditClick:function(a){a.preventDefault();this.model.isNew()||this.switchMode(b.EDIT)},onTaskSaveClick:function(a){a.preventDefault();this.saveTask()},onTaskCancelClick:function(a){a.preventDefault();
this.cancelTaskEdit()},onTaskTextareaKeypress:d.default.debounce(function(a){(0,h.default)(a.target).removeClass("task-error")},300),_enableExpandingTextareas:function(){if(this.mode===b.EDIT)this.$("textarea.expanding").expandingTextarea().on("input.expanding",this._onResize)},_onResize:function(){var a=this.$el[0];a&&(0,u.default)(a,function(){v.default.trigger("bitbucket.internal.webpanel.resize",null,{location:"bitbucket.comments.extra",el:a})})}},{Mode:b});e.default=c;k.exports=e["default"]});