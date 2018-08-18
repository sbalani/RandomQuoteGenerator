# RandomQuoteGenerator
This app serves REST API using NodeJS and uses MongoDB

So this REST API, servers two contexts,

GET - /quotegenerator: Chooses a random quote from the database. <br>
POST - /quotegenerator : Lets user add a new quote using quote, author as main fields.
<br>

Important libraries to import are:

<br><b>Nodemon:</b> nodmon will help us to keep track of changes to our application by watching changed files and automatically restart the server.
<br>npm install --save-dev nodemon<br>
<br><b>NOTE:</b> Once nodemon is installed, you will have to add the following line manually into the package.json file, under scripts(if already not there):
<br>"start": "nodemon server.js"<br>

<br><b>Express:</b> express will be used to create the server
<br>npm install express --save<br>

<br><b>Mongoose:</b> Mongoose is what we will use to interact with a MongoDB(Database) instance.
<br>npm install mongoose --save<br>

<br><b>Mongoose Random:</b> Used to choose the random document from the chosen mongoose collection.
<br>npm install mongoose-random <br>
