define("bitbucket/internal/util/history",["module","exports","bitbucket/util/events","bitbucket/internal/bbui/history/history","bitbucket/internal/util/deprecation"],function(d,b,a,e,f){function c(a,b){var c="bitbucket.internal.history."+a;g.default.triggerDeprecated("memoir."+a,void 0,b,null,"4.2","5.0");h.default.trigger(c,void 0,b)}Object.defineProperty(b,"__esModule",{value:!0});var h=babelHelpers.interopRequireDefault(a);a=babelHelpers.interopRequireDefault(e);var g=babelHelpers.interopRequireDefault(f);
a.default.on("popstate",c.bind(null,"popstate"));a.default.on("changestate",c.bind(null,"changestate"));b.default=a.default;d.exports=b["default"]});