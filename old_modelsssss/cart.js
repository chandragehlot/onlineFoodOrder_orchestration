'use strict';
module.exports = (sequelize, DataTypes) => {
  const CART = sequelize.define('CART', {
    userId: DataTypes.INTEGER,
    cartTotal: DataTypes.INTEGER,
    noOfItems: DataTypes.INTEGER
  }, {});
  CART.associate = function(models) {
    // associations can be defined here
  };
  return CART;
};