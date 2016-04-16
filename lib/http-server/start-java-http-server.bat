:: Starts the webserver at port 5000 with root folder at ../../ (the place where index.html is)
:: This command also (internally) attempts to start the system's default browser at http://127.0.0.1:5000 to save you the trouble
java -jar nanohttpd-webserver.jar -d ../../ -p 5000
pause