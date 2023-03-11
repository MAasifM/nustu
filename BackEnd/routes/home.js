//All Requirements
const express = require("express");
const homeController = require("../controllers/home");
const Passport = require("passport");

//All Constants
const router = express.Router();

//All Routes
router.route("/").get((req, res) => {
  res.send("Hello");
});

router
  .route("/login")
  .get(homeController.getAll)
  .post(Passport.authenticate("local"), homeController.postAll);

router.route("/logout").get(homeController.logOut);

//Export Routes
module.exports = router;
