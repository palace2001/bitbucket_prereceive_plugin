define("bitbucket/internal/bbui/ref-label/ref-label",["module","exports","prop-types","react","../aui-react/avatar"],function(f,d,a,b,g){Object.defineProperty(d,"__esModule",{value:!0});a=babelHelpers.interopRequireDefault(a);var c=babelHelpers.interopRequireDefault(b);b=function(a){var b=a.scmRef,e=a.repository,d=a.accessibilityText||AJS.I18n.getText("refLabel.branch.ariaLabel",b.displayId);return c.default.createElement("span",{className:"ref-label",title:a.title},e&&c.default.createElement("span",
{className:"repository"},e.project&&c.default.createElement(g.ProjectAvatar,{size:"xsmall",project:e.project}),c.default.createElement("span",{className:"name"},e.name)),c.default.createElement("span",{className:"ref "+(b.type||"branch")},c.default.createElement("span",{className:"name","aria-label":d},b.displayId)))};b.propTypes={accessibilityText:a.default.string,repository:a.default.any,scmRef:a.default.any.isRequired,title:a.default.string};d.default=b;f.exports=d["default"]});