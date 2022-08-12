const { User, Recipe } = require("../models");

//sample userdata
const userData = [
  {
    username: "sam",
    email: "sam@cbc.ca",
    password: "password123",
  },
  {
    username: "Bob",
    email: "Bob1@sogou.com",
    password: "password123",
  },
  {
    username: "Mark",
    email: "Mark2@last.fm",
    password: "password123",
  },
  {
    username: "Kevin",
    email: "Kevin3@goo.ne.jp",
    password: "password123",
  },
  {
    username: "Mary",
    email: "Mary4@weather.com",
    password: "password123",
  },
  {
    username: "Ted",
    email: "Ted@imdb.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
