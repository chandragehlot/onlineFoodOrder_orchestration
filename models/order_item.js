'use strict';
module.exports = (sequelize, DataTypes) => {
  const ORDER_ITEM = sequelize.define('ORDER_ITEMs', {
    menuItemId: { 
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'MENU_ITEMs'
        },
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
    orderId: { 
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'ORDER'
        },
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
    unitPrice: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  ORDER_ITEM.associate = function(models) {
    // associations can be defined here
    ORDER_ITEM.belongsTo(models.ORDER, {
      foreignKey: 'orderId'
    });
    ORDER_ITEM.belongsTo(models.MENU_ITEMs, {
      foreignKey: 'menuItemId'
    })
  };
  return ORDER_ITEM;
};