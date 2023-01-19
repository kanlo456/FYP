var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://oscar:j3SGuIIQbqpiTcWA@cluster0.lpvxprh.mongodb.net/?retryWrites=true&w=majority";


MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { name: "Admin1", password: "AdmiN825" };
    dbo.collection("customers").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});