const Sequelize = require("sequelize");


const configOptions = {
  host: "127.0.0.1",
  username: "root",
  password: "Hello12345",
  database: "FRESH_BITE",
  dialect: "mysql",
};

const { username, password, database, dialect } = config;
const sequelizeInstance = new Sequelize(database, username, password, {
  dialect,
});

module.exports = {
    sequelizeInstance
}