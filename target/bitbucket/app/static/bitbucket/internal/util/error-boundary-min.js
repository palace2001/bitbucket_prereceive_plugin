define("bitbucket/internal/util/error-boundary",["module","exports","@atlassian/aui","prop-types","react"],function(k,b,l,d,a){Object.defineProperty(b,"__esModule",{value:!0});d=babelHelpers.interopRequireDefault(d);var m=babelHelpers.interopRequireDefault(a);a=function(a){function e(){var g,a,c,b;babelHelpers.classCallCheck(this,e);for(var d=arguments.length,h=Array(d),f=0;f<d;f++)h[f]=arguments[f];return b=(a=(c=babelHelpers.possibleConstructorReturn(this,(g=e.__proto__||Object.getPrototypeOf(e)).call.apply(g,
[this].concat(h))),c),c.state={},a),babelHelpers.possibleConstructorReturn(c,b)}babelHelpers.inherits(e,a);babelHelpers.createClass(e,[{key:"componentDidCatch",value:function(a){this.setState({error:a})}},{key:"render",value:function(){var a=this.props,b=a.renderFallback;a=a.children;var c=this.state.error;return c?b?b(c,a):m.default.createElement("h2",null,l.I18n.getText("bitbucket.web.we.screwed.up")):a}}]);return e}(a.Component);a.propTypes={renderFallback:d.default.func};b.default=a;k.exports=
b["default"]});