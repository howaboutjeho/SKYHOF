const express = require("express");

const bodyParser = require("body-parser");

const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1:27017";
const dbName = "skyhof";
let db;

MongoClient.connect(url, { useNewUrlParser: true })
  // (err, client) => {
  // Storing a reference to the database so you can use it later
  .then((client) => {
    db = client.db(dbName);
    const skyscrap = db.collection("skyscrap");

    app.get("/", (req, res) => {
      res.sendFile(path.resolve(__dirname, '../index.html'));
    });
    //
    app.post("/modify", (req, res) => {
      skyscrap
        .insertOne(req.body)
        .then((result) => {
          res.redirect('/');
        })
        .catch((error) => console.error(error));
    });

    console.log(`Connected MongoDB: ${url}`);
    console.log(`Database: ${dbName}`);
  })
  .catch(console.error);

app.listen(3000, () => {
  console.log('listening on 3000');
});
