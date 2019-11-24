(function(k){"object"==typeof exports&&"object"==typeof module?k(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],k):k(CodeMirror)})(function(k){k.defineMIME("text/x-erlang","erlang");k.defineMode("erlang",function(y){function z(a,b){if(b.in_string)return b.in_string=!n(a,'"',"\\"),c(b,a,"string");if(b.in_atom)return b.in_atom=!n(a,"'","\\"),c(b,a,"atom");if(a.eatSpace())return c(b,a,"whitespace");if(!m(b)&&a.match(/-\s*[a-z\u00df-\u00f6\u00f8-\u00ff][\w\u00d8-\u00de\u00c0-\u00d6\u00df-\u00f6\u00f8-\u00ff]*/))return g(a.current(),
A)?c(b,a,"type"):c(b,a,"attribute");var d=a.next();if("%"==d)return a.skipToEnd(),c(b,a,"comment");if(":"==d)return c(b,a,"colon");if("?"==d)return a.eatSpace(),a.eatWhile(p),c(b,a,"macro");if("#"==d)return a.eatSpace(),a.eatWhile(p),c(b,a,"record");if("$"==d)return"\\"!=a.next()||a.match(B)?c(b,a,"number"):c(b,a,"error");if("."==d)return c(b,a,"dot");if("'"==d){if(!(b.in_atom=!n(a,"'","\\"))){if(a.match(/\s*\/\s*[0-9]/,!1))return a.match(/\s*\/\s*[0-9]/,!0),c(b,a,"fun");if(a.match(/\s*\(/,!1)||a.match(/\s*:/,
!1))return c(b,a,"function")}return c(b,a,"atom")}if('"'==d)return b.in_string=!n(a,'"',"\\"),c(b,a,"string");if(/[A-Z_\u00d8-\u00de\u00c0-\u00d6]/.test(d))return a.eatWhile(p),c(b,a,"variable");if(/[a-z_\u00df-\u00f6\u00f8-\u00ff]/.test(d)){a.eatWhile(p);if(a.match(/\s*\/\s*[0-9]/,!1))return a.match(/\s*\/\s*[0-9]/,!0),c(b,a,"fun");d=a.current();if(g(d,C))return c(b,a,"keyword");if(g(d,D))return c(b,a,"operator");if(a.match(/\s*\(/,!1))return!g(d,E)||":"==m(b).token&&"erlang"!=m(b,2).token?g(d,F)?
c(b,a,"guard"):c(b,a,"function"):c(b,a,"builtin");var f=a.match(/([\n\s]+|%[^\n]*\n)*(.)/,!1);return":"==(f?f.pop():"")?"erlang"==d?c(b,a,"builtin"):c(b,a,"function"):g(d,["true","false"])?c(b,a,"boolean"):c(b,a,"atom")}f=/[0-9]/;var r=/[0-9a-zA-Z]/;return f.test(d)?(a.eatWhile(f),a.eat("#")?a.eatWhile(r)||a.backUp(1):a.eat(".")&&(a.eatWhile(f)?a.eat(/[eE]/)&&(a.eat(/[-+]/)?a.eatWhile(f)||a.backUp(2):a.eatWhile(f)||a.backUp(1)):a.backUp(1)),c(b,a,"number")):v(a,G,t)?c(b,a,"open_paren"):v(a,H,w)?c(b,
a,"close_paren"):x(a,I,J)?c(b,a,"separator"):x(a,K,L)?c(b,a,"operator"):c(b,a,null)}function v(a,b,d){if(1==a.current().length&&b.test(a.current())){for(a.backUp(1);b.test(a.peek());)if(a.next(),g(a.current(),d))return!0;a.backUp(a.current().length-1)}return!1}function x(a,b,d){if(1==a.current().length&&b.test(a.current())){for(;b.test(a.peek());)a.next();for(;0<a.current().length;){if(g(a.current(),d))return!0;a.backUp(1)}a.next()}return!1}function n(a,b,d){for(;!a.eol();){var f=a.next();if(f==b)return!0;
f==d&&a.next()}return!1}function g(a,b){return-1<b.indexOf(a)}function c(a,b,d){var f=b.current();var c=b.column();b=b.indentation();f={token:f,column:c,indent:b,type:d};"comment"!=f.type&&"whitespace"!=f.type&&(c=a.tokenStack,b=c.length-1,0<b&&"record"===c[b].type&&"dot"===f.type?c.pop():(0<b&&"group"===c[b].type&&c.pop(),c.push(f)),a.tokenStack=c,a.tokenStack=M(a.tokenStack));switch(d){case "atom":return"atom";case "attribute":return"attribute";case "boolean":return"atom";case "builtin":return"builtin";
case "close_paren":return null;case "colon":return null;case "comment":return"comment";case "dot":return null;case "error":return"error";case "fun":return"meta";case "function":return"tag";case "guard":return"property";case "keyword":return"keyword";case "macro":return"variable-2";case "number":return"number";case "open_paren":return null;case "operator":return"operator";case "record":return"bracket";case "separator":return null;case "string":return"string";case "type":return"def";case "variable":return"variable";
default:return null}}function N(a){return{token:a,column:0,indent:0,type:a}}function m(a,b){var d=a.tokenStack.length;b=b?b:1;return d<b?!1:a.tokenStack[d-b]}function M(a){if(!a.length)return a;var b=a.length-1;if("dot"===a[b].type)return[];if(1<b&&"fun"===a[b].type&&"fun"===a[b-1].token)return a.slice(0,b-1);switch(a[b].token){case "}":return e(a,{g:["{"]});case "]":return e(a,{i:["["]});case ")":return e(a,{i:["("]});case "\x3e\x3e":return e(a,{i:["\x3c\x3c"]});case "end":return e(a,{i:"begin case fun if receive try".split(" ")});
case ",":return e(a,{e:"begin try when -\x3e , ( [ { \x3c\x3c".split(" ")});case "-\x3e":return e(a,{r:["when"],m:["try","if","case","receive"]});case ";":return e(a,{E:"case fun if receive try when".split(" ")});case "catch":return e(a,{e:["try"]});case "of":return e(a,{e:["case"]});case "after":return e(a,{e:["receive","try"]});default:return a}}function e(a,b){for(var d in b)for(var c=a.length-1,r=b[d],h=c-1;-1<h;h--)if(g(a[h].token,r)){var e=a.slice(0,h);switch(d){case "m":return e.concat(a[h]).concat(a[c]);
case "r":return e.concat(a[c]);case "i":return e;case "g":return e.concat(N("group"));case "E":return e.concat(a[h]);case "e":return e.concat(a[h])}}return"E"==d?[]:a}function O(a,b){var d,c=y.indentUnit;b=b.match(/,|[a-z]+|\}|\]|\)|>>|\|+|\(/);b=l(b)&&0===b.index?b[0]:"";var e=m(a,1),h=m(a,2);if(a.in_string||a.in_atom)return k.Pass;if(h){if("when"==e.token)return e.column+c;if("when"===b&&"function"===h.type)return h.indent+c;if("("===b&&"fun"===e.token)return e.column+3;if("catch"===b&&(d=u(a,["try"])))return d.column;
if(g(b,["end","after","of"]))return(d=u(a,"begin case fun if receive try".split(" ")))?d.column:k.Pass;if(g(b,w))return(d=u(a,t))?d.column:k.Pass;if(g(e.token,[",","|","||"])||g(b,[",","|","||"]))return a=a.tokenStack.slice(0,-1),d=q(a,"type",["open_paren"]),(d=l(a[d])?a[d]:!1)?d.column+d.token.length:c;if("-\x3e"==e.token)return g(h.token,["receive","case","if","try"])?h.column+c+c:h.column+c;if(g(e.token,t))return e.column+e.token.length;a=a.tokenStack;d=q(a,"type",["open_paren","separator","keyword"]);
b=q(a,"type",["operator"]);d=l(d)&&l(b)&&d<b?a[d+1]:l(d)?a[d]:!1;return l(d)?d.column+c:0}return 0}function u(a,b){a=a.tokenStack;b=q(a,"token",b);return l(a[b])?a[b]:!1}function q(a,b,d){for(var c=a.length-1;-1<c;c--)if(g(a[c][b],d))return c;return!1}function l(a){return!1!==a&&null!=a}var A=["-type","-spec","-export_type","-opaque"],C="after begin catch case cond end fun if let of query receive try when".split(" "),I=/[\->,;]/,J=["-\x3e",";",","],D="and andalso band bnot bor bsl bsr bxor div not or orelse rem xor".split(" "),
K=/[\+\-\*\/<>=\|:!]/,L="\x3d + - * / \x3e \x3e\x3d \x3c \x3d\x3c \x3d:\x3d \x3d\x3d \x3d/\x3d /\x3d || \x3c- !".split(" "),G=/[<\(\[\{]/,t=["\x3c\x3c","(","[","{"],H=/[>\)\]\}]/,w=["}","]",")","\x3e\x3e"],F="is_atom is_binary is_bitstring is_boolean is_float is_function is_integer is_list is_number is_pid is_port is_record is_reference is_tuple atom binary bitstring boolean function integer list number pid port record reference tuple".split(" "),E="abs adler32 adler32_combine alive apply atom_to_binary atom_to_list binary_to_atom binary_to_existing_atom binary_to_list binary_to_term bit_size bitstring_to_list byte_size check_process_code contact_binary crc32 crc32_combine date decode_packet delete_module disconnect_node element erase exit float float_to_list garbage_collect get get_keys group_leader halt hd integer_to_list internal_bif iolist_size iolist_to_binary is_alive is_atom is_binary is_bitstring is_boolean is_float is_function is_integer is_list is_number is_pid is_port is_process_alive is_record is_reference is_tuple length link list_to_atom list_to_binary list_to_bitstring list_to_existing_atom list_to_float list_to_integer list_to_pid list_to_tuple load_module make_ref module_loaded monitor_node node node_link node_unlink nodes notalive now open_port pid_to_list port_close port_command port_connect port_control pre_loaded process_flag process_info processes purge_module put register registered round self setelement size spawn spawn_link spawn_monitor spawn_opt split_binary statistics term_to_binary time throw tl trunc tuple_size tuple_to_list unlink unregister whereis".split(" "),
p=/[\w@\u00d8-\u00de\u00c0-\u00d6\u00df-\u00f6\u00f8-\u00ff]/,B=/[0-7]{1,3}|[bdefnrstv\\"']|\^[a-zA-Z]|x[0-9a-zA-Z]{2}|x{[0-9a-zA-Z]+}/;return{startState:function(){return{tokenStack:[],in_string:!1,in_atom:!1}},token:function(a,b){return z(a,b)},indent:function(a,b){return O(a,b)},lineComment:"%"}})});