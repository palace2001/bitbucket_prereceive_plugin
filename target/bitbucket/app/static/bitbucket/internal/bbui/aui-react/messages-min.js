define("bitbucket/internal/bbui/aui-react/messages",["exports","classnames","prop-types","react"],function(b,a,f,g){Object.defineProperty(b,"__esModule",{value:!0});b.Message=b.WarningMessage=void 0;var h=babelHelpers.interopRequireDefault(a);a=babelHelpers.interopRequireDefault(f);var e=babelHelpers.interopRequireDefault(g);b.WarningMessage=function(c){return e.default.createElement(d,babelHelpers.extends({type:"warning"},c))};var d=b.Message=function(c){var a=c.type,b=c.title,d=c.className;c=c.children;
a=(0,h.default)("aui-message","aui-message-"+a,d);return e.default.createElement("div",{className:a},b&&e.default.createElement("p",{className:"title"},b),c)};d.propTypes={type:a.default.oneOf(Object.values({ERROR:"error",WARNING:"warning",SUCCESS:"success",INFO:"info"})),title:a.default.string,children:a.default.node,className:a.default.string}});