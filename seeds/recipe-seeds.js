const { Recipe } = require("../models");

//sample recipeData
const recipeData = [
  {
    recipe_name: "Oatmeal",
    diet_type: "Vegan",
    ingredients: "Oats, milk",
    instructions: "Boil some water and oats together ",
    username: "Kevin",
  },
  {
    recipe_name: "Ice",
    diet_type: "Gluten-free",
    ingredients: "Water",
    instructions: "Pour water into an ice tray, and place it in freezer",
    username: "Ted",
  },
  {
    recipe_name: "Toast",
    diet_type: "Vegetarian",
    ingredients: "Bread, butter",
    instructions: "Apply some butter on pan, and toast the bread on both sides",
    username: "Mary",
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;
