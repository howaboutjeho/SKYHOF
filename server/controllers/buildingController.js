const Skyscrap = require("../models/skyscrapModel.js");

const buildingController = {};

// buildingController.createBuilding = (req, res, next) => {
//   const newBuilding = new Skyscrap({
//     name: req.body,name,
//     city: req.body.city,
//     img: req.body.img,
//     detail: req.body.detail,
//     date: req.body.date,
//   });
//   next();
// };m

buildingController.createBuilding = (req, res, next) => {
  // write code here
  const {
    name, city, img, detail, date,
  } = req.body;
  Skyscrap.create({ name, city, img, detail, date }, (err, userObj) => {
    if (err) return next(`Error in buildingController.createUser: ${JSON.stringify(err)}`);
    res.locals = userObj;
    return next();
  });
};

buildingController.createBuilding = (req, res, next) => {
  // write code here
  const {
    name, city, img, detail, date,
  } = req.body;
  Skyscrap.create({ name, city, img, detail, date }, (err, userObj) => {
    if (err) return next(`Error in buildingController.createUser: ${JSON.stringify(err)}`);
    res.locals = userObj;
    return next();
  });
};

buildingController.renderBuilding = (req, res, next) => {
  Skyscrap.find({}, (err, buildings) => {
    // if a database error occurs, call next with the error message passed in
    // for the express global error handler to catch
    if (err) return next(`Error in userController.getAllUsers: ${JSON.stringify(err)}`);

    // store retrieved users into res.locals and move on to next middleware
    res.locals.buildings = buildings;
    return next();
  });
};

module.exports = buildingController;

// skyscrap
//   .insertOne(req.body)
//   .then((result) => {
//     res.redirect("/");
//     next();
//   })
//   .catch((error) => console.error(error));
