const { Post } = require('../models');

const postdata = [
  {
    recipe_name : 'Oatmeal' ,
    diet_type : 'Vegan',
    ingredients : 'Oats, milk',
    instructions : 'Boil some water and oats together ' ,
    user_name : 'Kevin'
  },
  {
    recipe_name : 'Ice',
    diet_type : 'Gluten-free' ,
    ingredients : 'Water',
    instructions : 	'Pour water into an ice tray, and place it in freezer', 
    user_name : 'Ted'
  },
  {
    recipe_name : 'Toast',
    diet_type : 'Vegetarian' ,
    ingredients : 'Bread, butter',
    instructions : 'Apply some butter on pan, and toast the bread on both sides',
    user_name : 'Mary'
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
