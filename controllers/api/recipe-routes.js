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

router.get("/:id", (req, res) => {
  // find a single recipe by its id
  Recipe.findOne({
    where: {
      id: req.params.id,
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
      res.status(404).json({ message: "No recipe found with that id" });
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
