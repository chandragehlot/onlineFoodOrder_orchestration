'use strict';
module.exports = (sequelize, DataTypes) => {
  const USER = sequelize.define('USER', {
    userId: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNo: DataTypes.STRING,
    userAddress: DataTypes.INTEGER
  }, {});
  USER.associate = function(models) {
    // associations can be defined here
    USER.hasMany(models.USER_ADDRESSes)
  };
  return USER;
};