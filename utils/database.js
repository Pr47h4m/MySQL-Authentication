const Sequelize = require("sequelize");

const databaseSecrets = require("../secrets/database-creds");

const sequelize = new Sequelize(
  databaseSecrets.database,
  databaseSecrets.user,
  databaseSecrets.password,
  {
    host: databaseSecrets.host,
    dialect: "mysql",
    logging: (query) => console.log(query),
  }
);

module.exports = sequelize;
