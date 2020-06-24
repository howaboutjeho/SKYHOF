const skyscrap = require("../models/skyscrapModel.js");

const buildingController = {};

buildingController.createBuilding = (req, res, next) => {
  skyscrap
    .insertOne(req.body)
    .then((result) => {
      res.redirect("/");
      next();
    })
    .catch((error) => console.error(error));

};
