'use strict';
module.exports = (sequelize, DataTypes) => {
  const ORDER_ITEM = sequelize.define('ORDER_ITEM', {
    item: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    unitPrice: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER
  }, {});
  ORDER_ITEM.associate = function(models) {
    // associations can be defined here
  };
  return ORDER_ITEM;
};