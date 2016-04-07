# Reveal.js + PrismJS + Markdown shortcuts

This is a [reveal.js](https://github.com/hakimel/reveal.js) template I use for my own presentations. Here's what's different about it:

- It uses reveal.js with PrismJS instead of Highlight.js
    - Mainly because I wanted the [*Line Highlight*](http://prismjs.com/plugins/line-highlight/) functionality
        - Now I use the [*Line Numbers*](http://prismjs.com/plugins/line-numbers/) plugin as well
    - The theme PrismJS had is also used - though I changed the highlight colors
    - Also added a simple regex so Prism's highlight code detects Java @Annotations
- It adds some useful markdown shortcuts, e.g.:
    - Using `#/1/` at the end of a bullet will make it be a fragment of index 1
    - `#[1,2]` after a code block will highlight the lines 1 and 2
- It includes some modifications so [decktape](https://github.com/astefanutti/decktape) can print it (export to PDF, actually)
    - It is important to note that only decktape can print it any good, so I removed CSS style for printing

That's it.

**IMPORTANT:** As it uses external markdown, you'll have to run the `index.html` file through a web server (or
disable the strict origin policy for local files at your browser). See details at [RUNNING-AT-BROWSER.md](RUNNING-AT-BROWSER.md).

# How to use

- Create a folder
- Create a `bower.json` file at it, pointing to this repo, such as:
```json
{
    "name": "my-presentation",
    "version": "1.0.0",
    "dependencies": {
        "markdown-prism-revealjs": "https://github.com/acdcjunior/markdown-prism-revealjs.git"
    }
}
```
- Run `bower update`
- Copy `bower_component/markdown-prism-revealjs/index.html`, `prismjs/`, `custom.css`, `markdown-shortcuts.js`, `modified-markdown-plugin.js` and `prismjs-revealjs-setup.js` to your folder
- Create a markdown (`.md`) file that will be your presentation
    - by (our) default, `---` marks a new slide forward, `-- --` marks a new slide downward and `???` marks the notes
    - this can be changed as a regular reveal.js slide would
    - check the [EXAMPLE-PRESENTATION.md](EXAMPLE-PRESENTATION.md) for a demo
- Edit the `index.html`'s `section` tag, setting its `data-markdown` attribute to the `.md` file of your presentation
- Run `index.html`!
