# Reveal.js + PrismJS + Markdown shortcuts

## Instructions

Here are our default "commands":

- `---` marks a new slide forward
- `-- --` marks a new slide downward
- `???` marks the notes for any slide
- Using `#/1/` at the end of a bullet will make it be a fragment of index 1
    - Similarly `#/2/` would be of index 2 and so on
- `#[1,2]` after a code block will highlight the lines 1 and 2

# How to Run

- Clone this repo
- Run `index.html`
    - You can do that using the included java web server:
        - Go to `lib/http-server` folder
        - Run `start-java-http-server.bat` or `start-java-http-server.sh`
        - Open the browser at http://127.0.0.1:5000/ (should have been opened automatically)
    - **But, why?**
    	- This is needed because the markdown is not in index.html, but in an external file, you'll have to either:
            - Run the `index.html` file through a web server
            - Or disable the strict origin policy for local files at your browser
        - Check the `lib/http-server` folder for alternatives

# Editing

- Edit [PRESENTATION.md](PRESENTATION.md)
	- If you have/want other markdown (`.md`) file that will be your presentation
		- Edit the `index.html`'s `section` tag, setting its `data-markdown` attribute to the `.md` file of your presentation

---

# What is this again?

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
