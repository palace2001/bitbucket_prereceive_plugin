define("bitbucket/internal/feature/repository/filterable-repository-table/filterable-repository-table","exports @atlassian/aui classnames prop-types react bitbucket/util/navbuilder bitbucket/internal/bbui/aui-react/avatar bitbucket/internal/enums bitbucket/internal/util/analytics bitbucket/internal/util/highlight bitbucket/internal/widget/filterable-entity-table/filterable-entity-table bitbucket/internal/widget/icons/icons".split(" "),function(k,d,a,u,g,h,n,v,w,x,y,p){Object.defineProperty(k,"__esModule",
{value:!0});k.RepositoryRow=void 0;var z=babelHelpers.interopRequireDefault(a);a=babelHelpers.interopRequireDefault(u);var b=babelHelpers.interopRequireDefault(g),q=babelHelpers.interopRequireDefault(h),A=babelHelpers.interopRequireDefault(w),r=babelHelpers.interopRequireDefault(x);h=babelHelpers.interopRequireDefault(y);var B=function(a){var c=a.filter,t=a.onClick,l=a.project;return b.default.createElement("span",{className:"project-name"},b.default.createElement(n.Avatar,{avatarSrc:l.avatarUrl,
size:n.AvatarTShirtSize.SMALL,isProject:l.type===v.ProjectType.NORMAL}),b.default.createElement("a",{href:q.default.project(l).build(),onClick:t?function(){return t(l)}:null},b.default.createElement(r.default,{text:l.name,query:c})))},C=function(a){return(a=a.origin)?b.default.createElement(p.ForkSmallIcon,{className:"repository-icon",title:d.I18n.getText("bitbucket.web.repository.is.a.fork.of",a.project.name,a.name)},d.I18n.getText("bitbucket.web.repository.repository.forked")):b.default.createElement(p.RepositorySmallIcon,
{className:"repository-icon"},d.I18n.getText("bitbucket.web.repository.repository"))},D=function(){return b.default.createElement("span",{className:"aui-lozenge aui-lozenge-subtle public-lozenge"},d.I18n.getText("bitbucket.web.repository.public.lozenge"))},m=k.RepositoryRow=function(a){function c(){babelHelpers.classCallCheck(this,c);return babelHelpers.possibleConstructorReturn(this,(c.__proto__||Object.getPrototypeOf(c)).apply(this,arguments))}babelHelpers.inherits(c,a);babelHelpers.createClass(c,
[{key:"render",value:function(){var a=this.props,c=a.filter,e=a.focused,d=a.onProjectClick,g=a.onRepoClick,h=a.primaryRefCallback,f=a.repository,E=a.showProject;a=a.showPublic;return b.default.createElement("tr",{className:(0,z.default)({focused:e})},b.default.createElement("td",null,E?b.default.createElement(B,{filter:c,project:f.project,onClick:d}):b.default.createElement(C,f),b.default.createElement("span",{className:"repository-name"},b.default.createElement("a",{href:q.default.project(f.project).repo(f).build(),
onClick:g?function(){return g(f)}:null,ref:function(a){return h?h(a):null}},b.default.createElement(r.default,{text:f.name,query:c}))),a&&(f.public||f.project.public)&&b.default.createElement(D,null)))}}]);return c}(g.PureComponent);m.propTypes={focused:a.default.bool,onProjectClick:a.default.func,onRepoClick:a.default.func,primaryRefCallback:a.default.func,repository:a.default.object,showProject:a.default.bool,showPublic:a.default.bool};m.defaultProps={showProject:!1,showPublic:!0};g=function(a){function c(){var a,
d,e,g;babelHelpers.classCallCheck(this,c);for(var h=arguments.length,k=Array(h),f=0;f<h;f++)k[f]=arguments[f];return g=(d=(e=babelHelpers.possibleConstructorReturn(this,(a=c.__proto__||Object.getPrototypeOf(c)).call.apply(a,[this].concat(k))),e),e.onProjectClick=function(a){var b=e.props,c=b.filter;(b=b.onProjectClick)&&b(a,c)},e.onRepoClick=function(a){var b=e.props,c=b.entities,d=b.filter;(b=b.onRepoClick)&&b(a,d,c);A.default.add("repository-list.item.clicked",{"repository.id":a.id,"project.id":a.project.id})},
e.row=function(a){var c=a.item;return b.default.createElement(m,{filter:e.props.filter,focused:a.focused,key:c.id,onProjectClick:e.onProjectClick,onRepoClick:e.onRepoClick,repository:c,showProject:e.props.showProject,showPublic:e.props.showPublic,primaryRefCallback:a.primaryRefCallback})},d),babelHelpers.possibleConstructorReturn(e,g)}babelHelpers.inherits(c,a);return c}(h.default);g.propTypes=babelHelpers.extends({},h.default.propTypes,{onProjectClick:a.default.func,onRepoClick:a.default.func,showProject:a.default.bool,
showPublic:a.default.bool});g.defaultProps=babelHelpers.extends({},h.default.defaultProps,{className:"filterable-repository-table",header:function(){return b.default.createElement("tr",null,b.default.createElement("th",null,d.I18n.getText("bitbucket.web.repository.col.name")))},lastPageMessage:d.I18n.getText("bitbucket.web.repository.allfetched"),loadMoreMessage:d.I18n.getText("bitbucket.web.repository.loadmore"),noItemsMessage:d.I18n.getText("bitbucket.web.repository.nonefound"),showProject:!1,showPublic:!0,
filterPlaceholder:d.I18n.getText("bitbucket.web.repository.filter.placeholder")});k.default=g});