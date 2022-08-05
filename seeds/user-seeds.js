const { User, Recipe } = require("../models");

const userdata = [
  {
    user_name: "sam",
    email: "sam@cbc.ca",
    password: "password123",
  },
  {
    user_name: "Bob",
    email: "Bob1@sogou.com",
    password: "password123",
  },
  {
    user_name: "Mark",
    email: "Mark2@last.fm",
    password: "password123",
  },
  {
    user_name: "Kevin",
    email: "Kevin3@goo.ne.jp",
    password: "password123",
  },
  {
    user_name: "Mary",
    email: "Mary4@weather.com",
    password: "password123",
  },
  {
    user_name: "Ted",
    email: "Ted@imdb.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
