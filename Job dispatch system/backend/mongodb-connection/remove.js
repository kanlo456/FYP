var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://oscar:j3SGuIIQbqpiTcWA@cluster0.lpvxprh.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { name: "Kanlo" };
    dbo.collection("customers").deleteMany(myquery, function(err, obj) {
        if (err) throw err;
        console.log(obj.result.n + " document(s) deleted");
        db.close();
    });
});