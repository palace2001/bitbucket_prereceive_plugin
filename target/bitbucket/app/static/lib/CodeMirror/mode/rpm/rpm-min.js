(function(b){"object"==typeof exports&&"object"==typeof module?b(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],b):b(CodeMirror)})(function(b){b.defineMode("rpm-changes",function(){var b=/^-+$/,e=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)  ?\d{1,2} \d{2}:\d{2}(:\d{2})? [A-Z]{3,4} \d{4} - /,f=/^[\w+.-]+@[\w.-]+/;return{token:function(d){if(d.sol()&&(d.match(b)||d.match(e)))return"tag";if(d.match(f))return"string";
d.next();return null}}});b.defineMIME("text/x-rpm-changes","rpm-changes");b.defineMode("rpm-spec",function(){var b=/^(i386|i586|i686|x86_64|ppc64le|ppc64|ppc|ia64|s390x|s390|sparc64|sparcv9|sparc|noarch|alphaev6|alpha|hppa|mipsel)/,e=/^[a-zA-Z0-9()]+:/,f=/^%(debug_package|package|description|prep|build|install|files|clean|changelog|preinstall|preun|postinstall|postun|pretrans|posttrans|pre|post|triggerin|triggerun|verifyscript|check|triggerpostun|triggerprein|trigger)/,d=/^%(ifnarch|ifarch|if)/,g=
/^%(else|endif)/,h=/^(\!|\?|\<\=|\<|\>\=|\>|\=\=|\&\&|\|\|)/;return{startState:function(){return{controlFlow:!1,macroParameters:!1,section:!1}},token:function(a,c){if("#"==a.peek())return a.skipToEnd(),"comment";if(a.sol()){if(a.match(e))return"header";if(a.match(f))return"atom"}if(a.match(/^\$\w+/)||a.match(/^\$\{\w+\}/))return"def";if(a.match(g))return"keyword";if(a.match(d))return c.controlFlow=!0,"keyword";if(c.controlFlow){if(a.match(h))return"operator";if(a.match(/^(\d+)/))return"number";a.eol()&&
(c.controlFlow=!1)}if(a.match(b))return a.eol()&&(c.controlFlow=!1),"number";if(a.match(/^%[\w]+/))return a.match(/^\(/)&&(c.macroParameters=!0),"keyword";if(c.macroParameters){if(a.match(/^\d+/))return"number";if(a.match(/^\)/))return c.macroParameters=!1,"keyword"}if(a.match(/^%\{\??[\w \-\:\!]+\}/))return a.eol()&&(c.controlFlow=!1),"def";a.next();return null}}});b.defineMIME("text/x-rpm-spec","rpm-spec")});