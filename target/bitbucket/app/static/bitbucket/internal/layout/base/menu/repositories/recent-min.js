define("bitbucket/internal/layout/base/menu/repositories/recent","module exports jquery react react-dom bitbucket/util/events bitbucket/util/navbuilder bitbucket/util/server bitbucket/internal/feature/repository/search-results/search-results-list bitbucket/internal/util/html bitbucket/internal/util/shortcuts".split(" "),function(f,a,h,k,l,m,n,p,q,r,t){Object.defineProperty(a,"__esModule",{value:!0});var b=babelHelpers.interopRequireDefault(h),u=babelHelpers.interopRequireDefault(k),v=babelHelpers.interopRequireDefault(l),
d=babelHelpers.interopRequireDefault(m),w=babelHelpers.interopRequireDefault(n),x=babelHelpers.interopRequireDefault(p),y=babelHelpers.interopRequireDefault(q),z=babelHelpers.interopRequireDefault(r),A=babelHelpers.interopRequireDefault(t);a.default={initMenu:function(c){var a=(0,b.default)("#"+c);c=(0,b.default)("#"+z.default.sanitizeId(a.attr("aria-controls"))).addClass("recent-repositories-menu");c.find(".aui-dropdown2-section").addClass("repository-list-container").find("ul").addClass("repository-list");
var e=c.find(".recent-repositories-section ul"),g=(0,b.default)(bitbucket.internal.layout.menu.loadingRecentReposMenuItem());A.default.bind("recentRepositories",function(){return a.click()});c.on("aui-dropdown2-show",function(){d.default.trigger("bitbucket.internal.ui.nav.repositories.opened")});c.find(".public-repo-list-link-section").on("click","a",function(){d.default.trigger("bitbucket.internal.ui.nav.repositories.public.clicked")});var f=function(a){d.default.trigger("bitbucket.internal.ui.nav.repositories.item.clicked",
null,{repositoryId:a.currentTarget.dataset.repositoryId})};e.append(g);(0,b.default)(window).on("load",function(){x.default.rest({url:w.default.rest().profile().recent().repos().withParams({avatarSize:bitbucket.internal.widget.avatarSizeInPx({size:"medium"}),limit:10}).build(),statusCode:{"*":!1}}).done(function(a){a&&a.size?(e.replaceWith('\x3cdiv id\x3d"recent-repositories-list-container"/\x3e'),v.default.render(u.default.createElement(y.default,{repositories:a.values,onItemClick:f}),document.getElementById("recent-repositories-list-container"))):
e.append((0,b.default)(bitbucket.internal.layout.menu.noRecentReposMenuItem()));d.default.trigger("bitbucket.internal.feature.repositories.recent.loaded",this,a)}).fail(function(){e.append((0,b.default)(bitbucket.internal.layout.menu.errorLoadingRecentReposMenuItem()))}).always(function(){g.remove()})})}};f.exports=a["default"]});