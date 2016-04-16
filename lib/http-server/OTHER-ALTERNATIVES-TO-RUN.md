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

- PHP and NODE are also very simple to use.
 	- If you use `npm start`, it actually uses node's `http-server` package

More at: https://gist.github.com/willurd/5720255