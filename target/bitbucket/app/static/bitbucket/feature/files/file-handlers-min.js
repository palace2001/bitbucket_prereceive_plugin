define("bitbucket/feature/files/file-handlers",["module","exports","bitbucket/internal/util/handler-registry","bitbucket/internal/util/object"],function(d,b,a,c){Object.defineProperty(b,"__esModule",{value:!0});a=babelHelpers.interopRequireDefault(a);c=babelHelpers.interopRequireDefault(c);a=new a.default;a.builtInHandlers={ERROR:"error",DIRECTORY:"directory",SOURCE_TEXT:"source-text",SOURCE_EMPTY:"source-empty",SOURCE_IMAGE:"source-image",SOURCE_BINARY:"source-binary",DIFF_TEXT_SIDE_BY_SIDE:"diff-text-side-by-side",
DIFF_TEXT_UNIFIED:"diff-text-unified",DIFF_EMPTY:"diff-empty",DIFF_TOO_LARGE:"diff-too-large",DIFF_IMAGE:"diff-image",DIFF_BINARY:"diff-binary"};c.default.freeze(a.builtInHandlers);b.default=a;d.exports=b["default"]});