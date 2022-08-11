const router = require("express").Router();

const apiRoutes = require("./api/");
const homeRoutes = require("./home-routes.js");
const newrecipeRoutes = require("./newrecipe-routes.js");

router.use("/", homeRoutes);
router.use("/newrecipe", newrecipeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
