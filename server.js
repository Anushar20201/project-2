const path = require("path");
const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3002;

const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

const session = require("express-session");

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: process.env.DB_PASSWORD,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
//using sesion here
app.use(session(sess));
//configuring the handlebar as the defualt engine
app.engine('handlebars', exphbs.engine({
  layoutsDir: 'views/Layouts', 
  defaultLayout: 'main', 
  extname: '.handlebars'
}));

app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//calling routes (controllers)
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
