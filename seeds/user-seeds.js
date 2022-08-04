const sequelize = require('../config/connection');
const { User, Recipe } = require('../models');

const userdata = [
  {
    user_name: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123'
  },
  {
    user_name: 'jwilloughway1',
    email: 'rmebes1@sogou.com',
    password: 'password123'
  },
  {
    user_name: 'iboddam2',
    email: 'cstoneman2@last.fm',
    password: 'password123'
  },
  {
    user_name: 'dstanmer3',
    email: 'ihellier3@goo.ne.jp',
    password: 'password123'
  },
  {
    user_name: 'djiri4',
    email: 'gmidgley4@weather.com',
    password: 'password123'
  },
  {
    user_name: 'msprague5',
    email: 'larnout5@imdb.com',
    password: 'password123'
  },
  {
    user_name: 'mpergens6',
    email: 'hnapleton6@feedburner.com',
    password: 'password123'
  },
  {
    user_name: 'tpenniell7',
    email: 'kperigo7@china.com.cn',
    password: 'password123'
  },
  {
    user_name: 'msabbins8',
    email: 'lmongain8@google.ru',
    password: 'password123'
  },
  {
    user_name: 'jmacarthur9',
    email: 'bsteen9@epa.gov',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
