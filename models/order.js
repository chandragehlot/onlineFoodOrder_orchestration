'use strict';
module.exports = (sequelize, DataTypes) => {
  const ORDER = sequelize.define('ORDER', {
    orderNumber: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'USER'
        },
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
    totalAmount: DataTypes.INTEGER,
    orderStatus: {
      type: DataTypes.ENUM,
      values: ['ordered', 'inprogress', 'dispatched',  'delivered']
    },
    orderPlaceTime: DataTypes.DATE,
    orderDispatchTime: DataTypes.DATE,
    orderDeliveryTime: DataTypes.DATE,
    orderPrepareEmployee: DataTypes.INTEGER,
    orderDeliverEmployee: DataTypes.INTEGER,
    orderAddress: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  ORDER.associate = function(models) {
    // associations can be defined here
    ORDER.hasMany(models.ORDER_ITEMs, {
      foreignKey: 'orderId'
    });
    ORDER.belongsTo(models.USER, {
      foreignKey: 'userId'
    })
  };
  return ORDER;
};