/**
 * This function enables markdown shortcuts.
 */
var processMarkdownShortcuts = (function () {

    /**
     * Shortcut:
     *    ^^/1/
     *
     * Where 1 is a number, will be replaced with:
     *    &lt;!-- .element: class="fragment" data-fragment-index="1" -->
     *
     * The number (1 in the example) will be the fragment index.
     *
     * AT BULLETS OR HEADERS:
     *     If the ^^/1/ is used at the end of a line whose first char is
     * a - (bullet) or # (header), optionally preceded by tabs or spaces,
     * the fragment will be applied to the whole line, that is, to the
     * bullet or header..
     *
     */
    function replaceHeaderOrBulletFragments(markdown) {
        var regexFragment = /(^[ \t]*(?:-|#+)[ \t])([^\n]+)\^\^\/(\d+)\/([ \t\r\n])/gm;
        var fragmentReplace = "$1<!-- .element: class=\"fragment\" data-fragment-index=\"$3\" -->$2$4";

        return markdown.replace(regexFragment, fragmentReplace);
    }

    /**
     * Shortcut:
     *    ^^/1/  or  ^^!/1/
     *
     * Where 1 is a number, will be replaced with:
     *    &lt;!-- .element: class="fragment" data-fragment-index="1" -->
     *
     * The number (1 in the example) will be the fragment index.
     *
     * ANYWHERE:
     *     If the ^^/1/ is used at somewhere other than the specified above, it will
     * add the fragment literally where it is.
     *     If you use an exclamation point: ^^!/1/ it will be applied literally at
     * where it is, even if the line starts with a - or #.
     */
    function replaceStandaloneFragments(markdown) {
        var regexFragment = /\^\^!?\/(\d+)\/(\r?\n)/gm;
        var fragmentReplace = "<!-- .element: class=\"fragment\" data-fragment-index=\"$1\" -->$2";

        return markdown.replace(regexFragment, fragmentReplace);
    }

    /**
     * ```
     * ^^[1-2, 5, 9-20]
     *
     * Highlighting lines at code blocks.
     *
     * Example:

     * ```java
     * public class Bola {
     *    private int stuff;
     *    private String pamonha;
     * }
     * ```
     * ^^[2, 3]
     *
     * http://prismjs.com/plugins/line-highlight/
     */
    function replaceLineHighlightFragments(markdown) {
        var regexFragment = /^```\s*(?:\r?\n)\^\^\[(\d+(?:\s*,\s*\d+)*)](\r?\n)/gm;
        var fragmentReplace = "```$2<!-- .element: data-line=\"$1\" -->$2";
        return markdown.replace(regexFragment, fragmentReplace);
    }

    function replaceHideSlideFragments(markdown) {
        var regexFragment = /^\^\^\/h\/(\r?\n)/gm;
        var fragmentReplace = "<!-- .slide: class=\" hidden-slide \" -->$1";
        return markdown.replace(regexFragment, fragmentReplace);
    }

    return function (markdown) {
        var replaceFragmentFunctions = [replaceHeaderOrBulletFragments, replaceStandaloneFragments,
                                        replaceLineHighlightFragments, replaceHideSlideFragments];
        var modifiedMarkdown = markdown;
        replaceFragmentFunctions.forEach(function (f) {
            modifiedMarkdown = f(modifiedMarkdown);
        });
        return modifiedMarkdown;
    };

})();