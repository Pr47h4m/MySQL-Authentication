const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  displayName: {
    type: Sequelize.STRING,
  },
  photoUrl: {
    type: Sequelize.STRING,
  },
  tokenId: {
    type: Sequelize.STRING,
    unique: true,
  },
  refreshToken: {
    type: Sequelize.STRING,
    unique: true,
  },
  tokenExpiry: {
    type: Sequelize.DATE,
  }
});

module.exports = User;
