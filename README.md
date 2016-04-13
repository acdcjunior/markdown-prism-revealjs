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
disable the strict origin policy for local files at your browser). See details at *Other alternatives to run in a browser* below.

# How to use

- Clone this rempo
- Run `npm install`
- Edit [PRESENTATION.md](PRESENTATION.md)
	- Or create other markdown (`.md`) file that will be your presentation
		- Edit the `index.html`'s `section` tag, setting its `data-markdown` attribute to the `.md` file of your presentation
    - by (our) default, `---` marks a new slide forward, `-- --` marks a new slide downward and `???` marks the notes
    - this can be changed as a regular reveal.js slide would
- Run `npm start`: it will start a `http-server`	
- Visit [http://127.0.0.1:3000](http://127.0.0.1:3000)


---

# Other alternatives to run in a browser

Due to the external markdown file, to run it, you'll need to either setup a web server or run the browser with the strict origin policy disabled.

### Disabling strict origin policy (so runnning a web server is not needed)

- Chrome

        chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security

- Firefox

        about:config -> security.fileuri.strict_origin_policy -> false


		### Using web servers:

- POWERSHELL:

        Add-Type -AssemblyName "System.Web";$Hso=New-Object Net.HttpListener;$Hso.Prefixes.Add("http://localhost:8000/");$Hso.Start();While ($Hso.IsListening){$HC=$Hso.GetContext();$HRes=$HC.Response;$HRes.Headers.Add("Content-Type",[System.Web.MimeMapping]::GetMimeMapping($HC.Request.RawUrl));$Stream=[System.IO.File]::OpenRead((Join-Path $Pwd ($HC.Request.RawUrl)));$HRes.ContentLength64=$Stream.Length;$Stream.CopyTo($HRes.OutputStream);$Stream.Close();$HRes.Close()};$Hso.Stop()

- PHP and NODE are very simple to use.

More at: https://gist.github.com/willurd/5720255

