const mongoClient = require('mongodb').MongoClient;

const localhost = "mongodb://localhost:27017/scores";
const dbName = "scores";
const collectionName = "HighScores";

mongoClient.connect(localhost, (connectionError, client)=>{
    const database = client.db(dbName);
    database.dropCollection(collectionName);
    
});