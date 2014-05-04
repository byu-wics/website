website
=======
The repository contains two folder, "client" and "server". As of right now, the wics site
really only conists of the client code. 

The server code allows for ease in development. The client code must be run from a server. 
One way to due this is to run the client code in a wamp/lamp server. However, there are 
some developers who may not have wamp nor lamp installed on their machine. For this reason
I have provided a simple nodejs server tha can also run this code. 

If you want to run the code but don't have nodejs installed nor the know how
of a nodejs server you can still run the client code in any other
type of server i.e. WAMPP/LAMPP.

If you want to run the code in the nodejs server you first must have nodejs installed. 
Once you have nodejs installed, in the command line run the file server/server.js. The port
used in the server code is 8080.

Once you have the code running on a server, go to http://localhost:8080. The site will
then be running from your local machine. 
