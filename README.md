website
=======
The repository contains two folder, "client" and "server". As of right now, the wics site
in production/live site only runs code in the "client" folder. 

The server code allows for ease in development. The client code must be run from a server. This is because
although the code on the WiCS site is only browser side code, some calls in angularjs must
be called through an http type protocol. If this is not the case the pages are not rendered properly due to the Cross-Site Scripting errors. Thus the client codemust be running on a server of some type. 

One type of server that the code can run on is through a WAMP/LAMP server. 

However, there are some developers who may not have wamp nor lamp installed on their machine. For this reason the server code exists. It provides a simple nodejs server than can be run from the command line. 

If you want to run the code in the nodejs server you first must have nodejs installed. 
Once you have nodejs installed, in the command line run the file server/server.js. To do this change directory location in a command prompt to the "server" folder. Then run the command "node server.js". Once you have the code running on a server, go to http://localhost:8080 in a browser (Chrome, Firefox, etc). You will then see the site running from your own local machine. 
