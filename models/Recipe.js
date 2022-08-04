const {
  Model,
  DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');


class Recipe extends Model {}
//defining Recipe model

Recipe.init({
  id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
  },
  recipe_name: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      len: [1]
    }
  },
  diet_type: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      len: [1]
    }
  },
  ingredients: {
    type: DataTypes.STRING(400),
    allowNull: false
  },
  instructions: {
    type: DataTypes.STRING(1200),
    allowNull: false
  },
  user_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'user',
          key: 'id'
      }
  }
}, {
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: 'recipe'
})


module.exports = Recipe;