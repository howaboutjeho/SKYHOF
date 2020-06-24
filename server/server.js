const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const buildingController = require("./controllers/buildingController");

app.use(express.static('assets'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../index.html"));
});
//
app.post("/add", buildingController.createBuilding, (req, res) => {
  console.log('hello', req.body);
//send response back to the client
// res.sendStatus(200)
// res.json({key: 'value'})
  res.redirect('/');
});

app.put("/update", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "../index.html"));
});

app.delete("/delete", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "../index.html"));
});

app.get('/Hof', buildingController.renderBuilding, (req, res) => {
  return res.render('./../src/comonent/Hof', { buildings: res.locals.building });
});

app.listen(3000, () => {
  console.log('listening on 3000');
});
