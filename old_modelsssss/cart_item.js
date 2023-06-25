'use strict';
module.exports = (sequelize, DataTypes) => {
  const CART_ITEM = sequelize.define('CART_ITEM', {
    cartId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER,
    noOfItems: DataTypes.INTEGER,
    unitPrice: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER
  }, {});
  CART_ITEM.associate = function(models) {
    // associations can be defined here
  };
  return CART_ITEM;
};