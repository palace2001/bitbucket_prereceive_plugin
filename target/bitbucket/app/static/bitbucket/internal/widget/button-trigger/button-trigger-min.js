define("bitbucket/internal/widget/button-trigger/button-trigger",["module","exports","jquery","lodash"],function(f,c,g,h){function b(a,b){this._opts=d.default.extend({},k,b);this._$trigger=(0,d.default)(a).on(this._opts.triggerEvent,e.default.bind(this.triggerClicked,this))}Object.defineProperty(c,"__esModule",{value:!0});var d=babelHelpers.interopRequireDefault(g),e=babelHelpers.interopRequireDefault(h),k={triggerEvent:"click",stopEvent:!0,triggerHandler:function(a,b){throw Error("triggerHandler must be implemented");
}};b.prototype.setTriggerDisabled=function(a){a=void 0===a?!0:!!a;this._$trigger.prop("disabled",a).attr("aria-disabled",a)};b.prototype.isTriggerDisabled=function(){return"true"===this._$trigger.attr("aria-disabled")};b.prototype.setTriggerActive=function(a){this._$trigger.attr("aria-pressed",void 0===a?!0:!!a)};b.prototype.isTriggerActive=function(){return"true"===this._$trigger.attr("aria-pressed")};b.prototype.triggerClicked=function(a){var b=this.isTriggerActive();this.isTriggerDisabled()||this._opts.triggerHandler.apply(this,
[!b].concat(e.default.toArray(arguments)));if(this._opts.stopEvent)return a&&a.stopPropagation&&a.stopPropagation(),!1};c.default=b;f.exports=c["default"]});