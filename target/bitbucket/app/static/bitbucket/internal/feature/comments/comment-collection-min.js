define("bitbucket/internal/feature/comments/comment-collection",["module","exports","backbone","bitbucket/internal/feature/comments/comment-model"],function(e,a,c,d){Object.defineProperty(a,"__esModule",{value:!0});c=babelHelpers.interopRequireDefault(c);d=babelHelpers.interopRequireDefault(d);a.default=c.default.Collection.extend({initialize:function(a,b){b=b||{};this.urlBuilder=b.urlBuilder||function(){return b.anchor.urlBuilder()}},model:d.default,url:function(){return this.urlBuilder().build()}});
e.exports=a["default"]});