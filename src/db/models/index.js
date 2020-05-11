import fs from "fs";
import path from "path";
import { Sequelize, DataTypes } from "sequelize";

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../../config/database.js")[env];
const basename = path.basename(__filename);

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

export default Object.assign(
  {},
  ...fs
    .readdirSync(__dirname)
    .filter(function (file) {
      return (
        file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
      );
    })
    .map(function (file) {
      const model = require(path.join(__dirname, file)).default;
      return {
        [model.name]: model.init(sequelize, DataTypes),
      };
    })
);
