define("bitbucket/internal/feature/comment-count/comment-count",["module","exports"],function(c,b){Object.defineProperty(b,"__esModule",{value:!0});b.default={pullRequestRowItem:function(a){a=a.pullRequest;return a.properties&&a.properties.commentCount?bitbucket.internal.feature.commentCount({count:a.properties.commentCount}):""}};c.exports=b["default"]});