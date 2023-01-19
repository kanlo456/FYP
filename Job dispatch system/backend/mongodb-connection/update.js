var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://oscar:j3SGuIIQbqpiTcWA@cluster0.lpvxprh.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { name: "Kanlo" };
    var newvalues = { $set: { name: "Mickey", password: "Canyon 123" } };
    dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
    });
});