This requires:

- Java
- Git
- Maven

# Download and get to folder

- Download https://github.com/NanoHttpd/nanohttpd/archive/master.zip
    - (`$ git clone https://github.com/NanoHttpd/nanohttpd.git` didn't work well because the tests failed under windows, probably due to some formatting issues)
- Unzip to `nanohttpd-master/`
- Go to folder:

        $ cd nanohttpd-master/webserver

# Edit file: src/main/java/fi/iki/elonen/SimpleWebServer.java

	- Include at line 171:
	
		openLocalHostAtBrowser(port);

	- Include at lines (now) 175-192:
	
		private static void openLocalHostAtBrowser(final int port) {
			try {
				new Thread() {
					@Override
					public void run() {
						try {
							String presentationUrl = "http://127.0.0.1:" + port;
							System.out.println("Starting default browser at " + presentationUrl + "...");
							java.awt.Desktop.getDesktop().browse(new java.net.URI(presentationUrl));
						} catch (Exception e) {
							System.err.println("Error while opening localhost URL at browser: " + e.getMessage());
						}
					}
				}.start();
			} catch (Exception e) {
				System.err.println("Error (outside thread) while opening localhost URL at browser: " + e.getMessage());
			}
		}

# Run command (to generate bundle)

	$ mvn package
	
This should open the browser a few times. Just ignore that, it is normal.

Now copy (to wherever you want) the generated file: `target/nanohttpd-webserver-2.3.1-SNAPSHOT-jar-with-dependencies.jar`

In our case, we also renamed the jar from `nanohttpd-webserver-2.3.1-SNAPSHOT-jar-with-dependencies.jar` to `nanohttpd-webserver.jar`
