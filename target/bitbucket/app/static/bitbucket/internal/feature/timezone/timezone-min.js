define("bitbucket/internal/feature/timezone/timezone",["module","exports","jquery","lodash"],function(h,b,k,l){function e(a){if(0<a.element.length&&"optgroup"===a.element[0].tagName.toLowerCase())return bitbucket.internal.feature.timezone.regionHeader({label:a.text});a=(0,d.default)(a.element);return bitbucket.internal.feature.timezone.selection({displayName:a.attr("data-display-name"),extraClasses:a.attr("class"),label:a.attr("data-label"),offset:f(a.attr("data-offset")),value:a.val()})}function f(a){return"Z"===
a?"\u00b100:00":a}function m(a,c,b){if(!a)return!0;a=a.toLowerCase();c=(0,d.default)(b);return[c.attr("data-label"),c.attr("data-display-name"),f(c.attr("data-offset")),c.val()].some(function(b){return b&&g.default.includes(b.toLowerCase(),a)})}Object.defineProperty(b,"__esModule",{value:!0});var d=babelHelpers.interopRequireDefault(k),g=babelHelpers.interopRequireDefault(l);b.default={onReady:function(a){(0,d.default)("#"+a).auiSelect2({formatSelection:e,formatResult:e,matcher:m,escapeMarkup:g.default.identity})}};
h.exports=b["default"]});