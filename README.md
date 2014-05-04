website
=======

The client code is the main code for the site. The site as of right now
consists only of client side code. However, due to the nature of XSS security
the angularjs clien code must have the site running on a server. For this
reason the repository provides a simple nodejs server to run on. 

If you want to run the code but don't have nodejs installed nor the know how
of a nodejs server you can run the client code in any other
type of server i.e. WAMPP/LAMPP.

If you want to run the code in the nodejs server you first must have nodejs installed. 
Once you have nodejs installed, in the command line run the file server/server.js. The port
used in the code is 8080.

Once you have the code running on a server, go to http://localhost:8080. The site will
then be running from your local machine. 
