define(function (require, exports, module) {
    module.exports = function () {
        (window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})['one.html'] = function () {
            function root(env, context, frame, runtime, cb) {
                var lineno = null;
                var colno = null;
                var output = '';
                try {
                    var parentTemplate = null;
                    output += '<div>';
                    output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, 'data'), env.opts.autoescape);
                    output += '</div>';
                    if (parentTemplate) {
                        parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
                    } else {
                        cb(null, output);
                    }
                    ;
                } catch (e) {
                    cb(runtime.handleError(e, lineno, colno));
                }
            }
            return { root: root };
        }();
    }();
    ;
});