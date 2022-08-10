const router = require("express").Router();
const sequelize = require("../config/connection");
const { Recipe, User, Comment, Vote } = require("../models");

// get all posts for homepage
router.get("/", (req, res) => {
  console.log(req.session);
  Recipe.findAll({
    attributes: [
      "id",
      "recipe_name",
      "diet_type",
      "ingredients",
      "instructions",
    ],
  })
    .then((dbRecipeData) => {
      console.log(dbRecipeData[0]);
      const recipes = dbRecipeData.map((recipe) => recipe.get({ plain: true }));
      res.render("homepage", { recipes });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/search", (req, res) => {
  res.render("search", {});
});

module.exports = router;
