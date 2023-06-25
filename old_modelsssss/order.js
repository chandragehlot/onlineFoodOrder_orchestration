'use strict';
module.exports = (sequelize, DataTypes) => {
  const ORDER = sequelize.define('ORDER', {
    userId: DataTypes.INTEGER,
    totalAmount: DataTypes.INTEGER,
    orderStatus: {
      type: DataTypes.ENUM,
      values: ['ordered', 'cancelled', 'delivered']
    },
    orderPlaceTime: DataTypes.DATE,
    orderDispatchTime: DataTypes.DATE,
    orderDeliveryTime: DataTypes.DATE,
    orderPrepareEmployee: DataTypes.INTEGER,
    orderDeliverEmployee: DataTypes.INTEGER,
    orderAddress: DataTypes.INTEGER
  }, {});
  ORDER.associate = function(models) {
    // associations can be defined here
  };
  return ORDER;
};