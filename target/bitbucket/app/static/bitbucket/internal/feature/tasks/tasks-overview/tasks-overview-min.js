define("bitbucket/internal/feature/tasks/tasks-overview/tasks-overview","module exports baconjs jquery lodash bitbucket/util/events bitbucket/util/state bitbucket/internal/feature/tasks/tasks-overview/tasks-counter bitbucket/internal/feature/tasks/tasks-overview/tasks-overview-panel".split(" "),function(m,c,n,p,q,r,t,u,v){function b(){var a=g.default.getPullRequest().id,c=g.default.getRepository().id,b=w.default.fromPromise(_PageDataPlugin.ready("com.atlassian.bitbucket.server.bitbucket-web:pull-request-tasks-page-provider",
"bitbucket.layout.pullRequest")).map(function(b){return h.default.assign(b.hasOwnProperty("openTaskCount")?b:d.emptyCounter(),{pullRequestId:a,repositoryId:c})});e||(e=d.countPropertyForPullRequest({pullRequestId:a,repositoryId:c},b));(0,x.default)(".plugin-item-task-count").each(function(){f.push(new y.default(this,e))})}function z(a){"bitbucket.pull-request.nav.overview"===a.name&&b()}function A(a){"bitbucket.pull-request.nav.overview"===a.name&&(h.default.invokeMap(f,"destroy"),f=[])}Object.defineProperty(c,
"__esModule",{value:!0});var w=babelHelpers.interopRequireDefault(n),x=babelHelpers.interopRequireDefault(p),h=babelHelpers.interopRequireDefault(q),k=babelHelpers.interopRequireDefault(r),g=babelHelpers.interopRequireDefault(t),l=babelHelpers.interopRequireDefault(u),y=babelHelpers.interopRequireDefault(v),e,d,f=[];c.default={openTaskCountContext:function(a){return l.default.prototype.emptyCounter({pullRequestId:a.pullRequest.id,repositoryId:a.pullRequest.fromRef.repository.id})},onReady:function(){d=
new l.default;k.default.on("bitbucket.internal.page.pull-request.view.contextLoaded",z);k.default.on("bitbucket.internal.page.pull-request.view.contextUnloaded",A);b()}};m.exports=c["default"]});