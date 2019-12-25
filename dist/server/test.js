const mongoClient = require('mongodb').MongoClient;

mongoClient.connect("mongodb://localhost:27017/scores", (err, client)=>{
    const db = client.db("scores");

    var stats = [{nickname: "Brudo", points: "5"},
                 {nickname: "Kazko", points: "7"},
                 {nickname: "Winno", points: "2"}]
    db.collection("scores").insertMany(stats, function(err, res){
        if (err) throw err;
        console.log("Inserted!")
    });
})