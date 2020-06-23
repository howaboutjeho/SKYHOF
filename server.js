const express = require('express');

const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//
app.post('/modify', (req, res) => {
    console.log(req.body);
  });

app.listen(3000, function () {
  console.log("listening on 3000");
});
