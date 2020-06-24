const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoURI = 'mongodb://localhost/skyhof';
mongoose.connect(mongoURI, { useNewUrlParser: true });

// const mongoURI =
//   process.env.NODE_ENV === 'test'
//     ? 'mongodb://localhost/unit11test'
//     : 'mongodb://localhost/unit11dev';
// mongoose.connect(mongoURI);

const skyhofSchema = new Schema({
  name: { type: String, required: true, unique: true },
  city: { type: String, required: true },
  img: { type: String, required: true, unique: true },
  detail: { type: String, required: true },
  date: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("skyhof", skyhofSchema);
