const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoURI = 'mongodb://localhost/skyhof';
mongoose.connect(mongoURI, { useNewUrlParser: true });


const skyhofSchema = new Schema({
  name: { type: String, required: true, unique: true },
  city: { type: String, required: true },
  img: { type: String, required: true, unique: true },
  detail: { type: String, required: true },
  date: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("skyhof", skyhofSchema);




// const MongoClient = require("mongodb").MongoClient;
// MongoClient.connect("127.0.0.1:27017", { useNewUrlParser: true })
  // .then((client) => {
  //   db = client.db("skyhof");
  //   const skyscrap = db.collection("skyscrap");
  //   return skyscrap;
  // })
  // .catch((err) => {
  //   return console.log(err);
  // });
