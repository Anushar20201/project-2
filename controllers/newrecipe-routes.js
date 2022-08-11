const router = require("express").Router();
const sequelize = require("../config/connection");
const { Recipe, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  res.render("newrecipe", { loggedIn: true });
});

module.exports = router;
