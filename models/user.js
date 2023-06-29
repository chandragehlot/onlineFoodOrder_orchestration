'use strict';
module.exports = (sequelize, DataTypes) => {
  const USER = sequelize.define('USER', {
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNo: DataTypes.STRING
  }, {
    timestamps: false
  });
  USER.associate = function(models) {
    // associations can be defined here
    USER.hasMany(models.USER_ADDRESS);
    USER.hasOne(models.CART);
  };
  return USER;
};