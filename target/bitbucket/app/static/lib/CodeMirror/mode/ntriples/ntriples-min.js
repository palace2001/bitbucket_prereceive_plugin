(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){e.defineMode("ntriples",function(){function d(f,b){var c=f.location;f.location=c==a.PRE_SUBJECT&&"\x3c"==b?a.WRITING_SUB_URI:c==a.PRE_SUBJECT&&"_"==b?a.WRITING_BNODE_URI:c==a.PRE_PRED&&"\x3c"==b?a.WRITING_PRED_URI:c==a.PRE_OBJ&&"\x3c"==b?a.WRITING_OBJ_URI:c==a.PRE_OBJ&&"_"==b?a.WRITING_OBJ_BNODE:c==a.PRE_OBJ&&
'"'==b?a.WRITING_OBJ_LITERAL:c==a.WRITING_SUB_URI&&"\x3e"==b?a.PRE_PRED:c==a.WRITING_BNODE_URI&&" "==b?a.PRE_PRED:c==a.WRITING_PRED_URI&&"\x3e"==b?a.PRE_OBJ:c==a.WRITING_OBJ_URI&&"\x3e"==b?a.POST_OBJ:c==a.WRITING_OBJ_BNODE&&" "==b?a.POST_OBJ:c==a.WRITING_OBJ_LITERAL&&'"'==b?a.POST_OBJ:c==a.WRITING_LIT_LANG&&" "==b?a.POST_OBJ:c==a.WRITING_LIT_TYPE&&"\x3e"==b?a.POST_OBJ:c==a.WRITING_OBJ_LITERAL&&"@"==b?a.WRITING_LIT_LANG:c==a.WRITING_OBJ_LITERAL&&"^"==b?a.WRITING_LIT_TYPE:" "!=b||c!=a.PRE_SUBJECT&&
c!=a.PRE_PRED&&c!=a.PRE_OBJ&&c!=a.POST_OBJ?c==a.POST_OBJ&&"."==b?a.PRE_SUBJECT:a.ERROR:c}var a={PRE_SUBJECT:0,WRITING_SUB_URI:1,WRITING_BNODE_URI:2,PRE_PRED:3,WRITING_PRED_URI:4,PRE_OBJ:5,WRITING_OBJ_URI:6,WRITING_OBJ_BNODE:7,WRITING_OBJ_LITERAL:8,WRITING_LIT_LANG:9,WRITING_LIT_TYPE:10,POST_OBJ:11,ERROR:12};return{startState:function(){return{location:a.PRE_SUBJECT,uris:[],anchors:[],bnodes:[],langs:[],types:[]}},token:function(a,b){var c=a.next();if("\x3c"==c){d(b,c);var e="";a.eatWhile(function(a){return"#"!=
a&&"\x3e"!=a?(e+=a,!0):!1});b.uris.push(e);if(a.match("#",!1))return"variable";a.next();d(b,"\x3e");return"variable"}if("#"==c){var f="";a.eatWhile(function(a){return"\x3e"!=a&&" "!=a?(f+=a,!0):!1});b.anchors.push(f);return"variable-2"}if("\x3e"==c)return d(b,"\x3e"),"variable";if("_"==c){d(b,c);var g="";a.eatWhile(function(a){return" "!=a?(g+=a,!0):!1});b.bnodes.push(g);a.next();d(b," ");return"builtin"}if('"'==c)return d(b,c),a.eatWhile(function(a){return'"'!=a}),a.next(),"@"!=a.peek()&&"^"!=a.peek()&&
d(b,'"'),"string";if("@"==c){d(b,"@");var h="";a.eatWhile(function(a){return" "!=a?(h+=a,!0):!1});b.langs.push(h);a.next();d(b," ");return"string-2"}if("^"==c){a.next();d(b,"^");var k="";a.eatWhile(function(a){return"\x3e"!=a?(k+=a,!0):!1});b.types.push(k);a.next();d(b,"\x3e");return"variable"}" "==c&&d(b,c);"."==c&&d(b,c)}}});e.defineMIME("application/n-triples","ntriples");e.defineMIME("application/n-quads","ntriples");e.defineMIME("text/n-triples","ntriples")});