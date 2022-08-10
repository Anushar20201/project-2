const router = require("express").Router();
const { User, Recipe } = require("../../models");

// GET all recipes
router.get("/", (req, res) => {
  Recipe.findAll({
    attributes: [
      "id",
      "recipe_name",
      "diet_type",
      "ingredients",
      "instructions",
    ],
  })
    .then((dbRecipeData) => res.json(dbRecipeData))
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/recipe/:name", (req, res) => {
  // find a single recipe by its name
  Recipe.findOne({
    where: {
      recipe_name: req.params.name,
    },
    attributes: [
      "id",
      "recipe_name",
      "diet_type",
      "ingredients",
      "instructions",
    ],
  }).then((dbRecipeData) => {
    if (!dbRecipeData) {
      res.status(404).json({ message: "No recipe found with that name" });
      return;
    }
    res.json(dbRecipeData);
  });
});

router.get("/diet/:type", (req, res) => {
  // find a single recipe by its diet type
  Recipe.findAll({
    where: {
      diet_type: req.params.type,
    },
    attributes: [
      "id",
      "recipe_name",
      "diet_type",
      "ingredients",
      "instructions",
    ],
  }).then((dbRecipeData) => {
    if (!dbRecipeData) {
      res.status(404).json({ message: "No recipe found with that diet type" });
      return;
    }
    res.json(dbRecipeData);
  });
});

// create new recipe
router.post("/", (req, res) => {
  //  req.body should look like this...
  //   {
  //     "recipe_name": "Toast",
  //     "diet_type": "Vegetarian",
  //     "ingredients": "Bread, butter",
  //     "instructions": "Apply some butter on pan, and toast the bread on both sides"
  //   }
  Recipe.create(req.body)
    .then((dbRecipeData) => res.json(dbRecipeData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
