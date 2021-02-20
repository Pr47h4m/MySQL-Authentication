const express = require("express");
const bodyParser = require("body-parser");

const router = require("./router/router");
const sequelize = require("./utils/database");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

sequelize
  .sync()
  .then(() => {
    app.listen(1810);
  })
  .catch((err) => console.error(err));
