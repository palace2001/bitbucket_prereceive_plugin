define("bitbucket/internal/bbui/aui-react/spinner",["exports","jquery","prop-types","react","react-dom"],function(c,e,h,a,k){Object.defineProperty(c,"__esModule",{value:!0});c.SpinnerSize=void 0;var f=babelHelpers.interopRequireDefault(e);e=babelHelpers.interopRequireDefault(h);var l=babelHelpers.interopRequireDefault(a),g=babelHelpers.interopRequireDefault(k),d=c.SpinnerSize={SMALL:"small",MEDIUM:"medium",LARGE:"large"};a=function(a){function b(){babelHelpers.classCallCheck(this,b);return babelHelpers.possibleConstructorReturn(this,
(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}babelHelpers.inherits(b,a);babelHelpers.createClass(b,[{key:"componentDidMount",value:function(){this.spin()}},{key:"shouldComponentUpdate",value:function(a){return this.props.size!==a.size}},{key:"componentDidUpdate",value:function(){this.spinStop();this.spin()}},{key:"componentWillUnmount",value:function(){this.spinStop()}},{key:"spin",value:function(){(0,f.default)(g.default.findDOMNode(this)).spin(this.props.size||d.SMALL,{zIndex:"inherit"})}},
{key:"spinStop",value:function(){(0,f.default)(g.default.findDOMNode(this)).spinStop()}},{key:"render",value:function(){return l.default.createElement("div",{className:"bb-spinner"})}}]);return b}(a.Component);a.propTypes={size:e.default.oneOf([d.SMALL,d.MEDIUM,d.LARGE])};c.default=a});