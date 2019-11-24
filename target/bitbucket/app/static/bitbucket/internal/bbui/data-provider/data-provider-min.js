define("bitbucket/internal/bbui/data-provider/data-provider",["module","exports","jquery","../javascript-errors/javascript-errors","../widget/widget"],function(g,a,e,d,h){Object.defineProperty(a,"__esModule",{value:!0});var f=babelHelpers.interopRequireDefault(e);e=function(a){function c(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;babelHelpers.classCallCheck(this,c);b=babelHelpers.possibleConstructorReturn(this,(c.__proto__||
Object.getPrototypeOf(c)).call(this,b));b.initialData=a;return b}babelHelpers.inherits(c,a);babelHelpers.createClass(c,[{key:"reset",value:function(){this.abort();this.currentData=null;delete this.initialData;this.trigger("reset")}},{key:"abort",value:function(){this._requestPromise&&(this._requestPromise.abort(),this._requestPromise=null,this.trigger("abort"))}},{key:"fetch",value:function(){var b=this,a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.url;this.abort();this.initialData&&
(this.currentData=this.transform(this.initialData),delete this.initialData);if(this.currentData)return f.default.Deferred().resolve(this.currentData);this.trigger("data-requested");this._requestPromise=this._fetch(a);if(!this._requestPromise.abort)throw Error("no abort method on DataProvider#_requestPromise.");return this._requestPromise.then(this.transform,function(){return f.default.Deferred().reject(b.errorTransform.apply(b,arguments))}).done(function(a){b.trigger("data-loaded",a);b.currentData=
a}).fail(function(a){b.trigger("data-request-failed",a)}).always(function(){b._requestPromise=null})}},{key:"_fetch",value:function(){throw new d.NotImplementedError;}},{key:"transform",value:function(){return this._transform.apply(this,arguments)}},{key:"_transform",value:function(){throw new d.NotImplementedError;}},{key:"_validate",value:function(a){throw new d.NotImplementedError;}},{key:"errorTransform",value:function(){return this._errorTransform.apply(this,arguments)}},{key:"_errorTransform",
value:function(){throw new d.NotImplementedError;}},{key:"isFetching",get:function(){return!!this._requestPromise}}]);return c}(babelHelpers.interopRequireDefault(h).default);a.default=e;g.exports=a["default"]});