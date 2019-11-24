(function(c){"object"==typeof exports&&"object"==typeof module?c(require("../../lib/codemirror"),require("../htmlmixed/htmlmixed"),require("../../addon/mode/overlay")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../htmlmixed/htmlmixed","../../addon/mode/overlay"],c):c(CodeMirror)})(function(c){c.defineMode("django:inner",function(){function c(b,a){if(b.match("{{"))return a.tokenize=m,"tag";if(b.match("{%"))return a.tokenize=l,"tag";if(b.match("{#"))return a.tokenize=n,"comment";
for(;null!=b.next()&&!b.match(/\{[{%#]/,!1););return null}function d(b,a){return function(c,d){!d.escapeNext&&c.eat(b)?d.tokenize=a:(d.escapeNext&&(d.escapeNext=!1),"\\"==c.next()&&(d.escapeNext=!0));return"string"}}function m(b,a){if(a.waitDot){a.waitDot=!1;if("."!=b.peek())return"null";if(b.match(/\.\W+/))return"error";if(b.eat("."))return a.waitProperty=!0,"null";throw Error("Unexpected error while waiting for property.");}if(a.waitPipe){a.waitPipe=!1;if("|"!=b.peek())return"null";if(b.match(/\.\W+/))return"error";
if(b.eat("|"))return a.waitFilter=!0,"null";throw Error("Unexpected error while waiting for filter.");}if(a.waitProperty&&(a.waitProperty=!1,b.match(/\b(\w+)\b/)))return a.waitDot=!0,a.waitPipe=!0,"property";if(a.waitFilter&&(a.waitFilter=!1,b.match(f)))return"variable-2";if(b.eatSpace())return a.waitProperty=!1,"null";if(b.match(/\b\d+(\.\d+)?\b/))return"number";if(b.match("'"))return a.tokenize=d("'",a.tokenize),"string";if(b.match('"'))return a.tokenize=d('"',a.tokenize),"string";if(b.match(/\b(\w+)\b/)&&
!a.foundVariable)return a.waitDot=!0,a.waitPipe=!0,"variable";if(b.match("}}"))return a.waitProperty=null,a.waitFilter=null,a.waitDot=null,a.waitPipe=null,a.tokenize=c,"tag";b.next();return"null"}function l(b,a){if(a.waitDot){a.waitDot=!1;if("."!=b.peek())return"null";if(b.match(/\.\W+/))return"error";if(b.eat("."))return a.waitProperty=!0,"null";throw Error("Unexpected error while waiting for property.");}if(a.waitPipe){a.waitPipe=!1;if("|"!=b.peek())return"null";if(b.match(/\.\W+/))return"error";
if(b.eat("|"))return a.waitFilter=!0,"null";throw Error("Unexpected error while waiting for filter.");}if(a.waitProperty&&(a.waitProperty=!1,b.match(/\b(\w+)\b/)))return a.waitDot=!0,a.waitPipe=!0,"property";if(a.waitFilter&&(a.waitFilter=!1,b.match(f)))return"variable-2";if(b.eatSpace())return a.waitProperty=!1,"null";if(b.match(/\b\d+(\.\d+)?\b/))return"number";if(b.match("'"))return a.tokenize=d("'",a.tokenize),"string";if(b.match('"'))return a.tokenize=d('"',a.tokenize),"string";if(b.match(g))return"operator";
if(b.match(h))return"keyword";var e=b.match(k);if(e)return"comment"==e[0]&&(a.blockCommentTag=!0),"keyword";if(b.match(/\b(\w+)\b/))return a.waitDot=!0,a.waitPipe=!0,"variable";if(b.match("%}"))return a.waitProperty=null,a.waitFilter=null,a.waitDot=null,a.waitPipe=null,a.blockCommentTag?(a.blockCommentTag=!1,a.tokenize=p):a.tokenize=c,"tag";b.next();return"null"}function n(b,a){b.match(/^.*?#\}/)?a.tokenize=c:b.skipToEnd();return"comment"}function p(b,a){if(b.match(/\{%\s*endcomment\s*%\}/,!1))return a.tokenize=
l,b.match("{%"),"tag";b.next();return"comment"}var k="block endblock for endfor true false filter endfilter loop none self super if elif endif as else import with endwith without context ifequal endifequal ifnotequal endifnotequal extends include load comment endcomment empty url static trans blocktrans endblocktrans now regroup lorem ifchanged endifchanged firstof debug cycle csrf_token autoescape endautoescape spaceless endspaceless ssi templatetag verbatim endverbatim widthratio".split(" "),f=
"add addslashes capfirst center cut date default default_if_none dictsort dictsortreversed divisibleby escape escapejs filesizeformat first floatformat force_escape get_digit iriencode join last length length_is linebreaks linebreaksbr linenumbers ljust lower make_list phone2numeric pluralize pprint random removetags rjust safe safeseq slice slugify stringformat striptags time timesince timeuntil title truncatechars truncatechars_html truncatewords truncatewords_html unordered_list upper urlencode urlize urlizetrunc wordcount wordwrap yesno".split(" "),
g="\x3d\x3d !\x3d \x3c \x3e \x3c\x3d \x3e\x3d".split(" "),h=["in","not","or","and"];k=new RegExp("^\\b("+k.join("|")+")\\b");f=new RegExp("^\\b("+f.join("|")+")\\b");g=new RegExp("^\\b("+g.join("|")+")\\b");h=new RegExp("^\\b("+h.join("|")+")\\b");return{startState:function(){return{tokenize:c}},token:function(b,a){return a.tokenize(b,a)},blockCommentStart:"{% comment %}",blockCommentEnd:"{% endcomment %}"}});c.defineMode("django",function(e){var d=c.getMode(e,"text/html");e=c.getMode(e,"django:inner");
return c.overlayMode(d,e)});c.defineMIME("text/x-django","django")});