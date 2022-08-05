// import models
const Recipe = require("./Recipe");
const User = require("./User");

// create associations
User.hasMany(Recipe, {
  foreignKey: "user_id",
});

Recipe.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = {
  Recipe,
  User,
};
