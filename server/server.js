const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const userController = require("./controllers/userController");

app.use(express.static(path.resolve(__dirname, "../index.html")));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../index.html"));
});
//
app.post("/modify", (req, res) => {
  console.log('hello');
  // skyscrap.insertOne(req.body)
  //   .then((result) => {
  //     res.redirect("/");
  //   })
  //   .catch((error) => console.error(error));
});

app.listen(3000, () => {
  console.log('listening on 3000');
});
