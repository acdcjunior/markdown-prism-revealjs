# Reveal.js + PrismJS + Markdown shortcuts

This is a [reveal.js](https://github.com/hakimel/reveal.js) template I use for my own presentations. Here's what's different about it:

- It uses PrismJS instead of Highlight.js
    - Mainly because I wanted the "Highlight line" functionality
        - Now I use the "Line numbers" plugin as well
    - The theme PrismJS had is also used - though I changed the highlight colors
    - Also added a simple regex so Prism's highlight code detects Java @Annotations
- It adds some useful markdown shortcuts, e.g.:
    - Using `#/1/` at the end of a bullet will make it be a fragment of index 1
    - `\`\`\`#[1,2]` after a code block will highlight the lines 1 and 2

That's it.

**IMPORTANT:** As it uses external markdown, you'll have to run the `index.html` file through a web server (or
disable the strict origin policy for local files at your browser). See details at [running.md](running.md). 

For printing, only [decktape](https://github.com/astefanutti/decktape) will do the job (the CSS style for printing did not work at all, so I removed it.)