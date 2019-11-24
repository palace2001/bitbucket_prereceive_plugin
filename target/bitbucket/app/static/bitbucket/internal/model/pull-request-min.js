define("bitbucket/internal/model/pull-request","module exports backbone-brace bitbucket/internal/model/participant bitbucket/internal/model/participant-collection bitbucket/internal/model/revision-reference".split(" "),function(f,c,d,e,a,b){Object.defineProperty(c,"__esModule",{value:!0});d=babelHelpers.interopRequireDefault(d);e=babelHelpers.interopRequireDefault(e);a=babelHelpers.interopRequireDefault(a);b=babelHelpers.interopRequireDefault(b);c.default=d.default.Model.extend({namedAttributes:{id:null,
link:null,links:Object,fromRef:b.default,toRef:b.default,author:e.default,reviewers:a.default,participants:a.default,state:null,open:"boolean",closed:"boolean",locked:"boolean",title:null,createdDate:Date,updatedDate:Date,closedDate:Date,version:null,description:null,descriptionAsHtml:null,attributes:null,properties:null},addParticipant:function(a){this.getParticipants().findByUser(a.getUser())||this.getParticipants().add(a)}},{state:{OPEN:"OPEN",MERGED:"MERGED",DECLINED:"DECLINED"}});f.exports=c["default"]});