const mongoClient = require('mongodb').MongoClient;

const localhost = "mongodb://localhost:27017/scores";
const dbName = "scores";
const collectionName = "HighScores";

function setRoutes(server){
    routeGetScores(server);
    routePostScores(server);
}

function routeGetScores(server){
    server.get('/scores', (request, response)=>{
        mongoClient.connect(localhost, (connectionError, client)=>{
            const database = client.db(dbName);
            
            database.collection(collectionName).find().toArray((err, result)=>{
                if (err) throw err;

                // Removing ID column from collection.
                const arrayWithoutID = []
                result.forEach((item)=>{
                    arrayWithoutID.push({nickname: item.Nickname, points: item.Points})                 
                });
                
                // Representing in JSON format.
                response.send(JSON.stringify(arrayWithoutID));
                client.close();
            });

        });
    });
}

function routePostScores(server){
    server.post('/scores', (request, response)=>{
        let user = request.body;
        console.log(user);
        mongoClient.connect(localhost, (connectionError, client)=>{
            const database = client.db(dbName);

            database.collection(collectionName).insertOne(user, (err, result)=>{
                if(err){
                    response.send(500); // Error
                    throw err;
                }
                response.send(200);  // OK
                client.close();
            });

        });
    });
}

// Enabled using setRoutes in index.js
module.exports = {setRoutes: setRoutes};