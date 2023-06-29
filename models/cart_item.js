'use strict';
module.exports = (sequelize, DataTypes) => {
  const CART_ITEM = sequelize.define('CART_ITEMs', {
    cartId: { 
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'CART'
        },
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
    itemId: { 
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'MENU_ITEM'
        },
        key: 'id',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    },
    noOfItems: DataTypes.INTEGER,
    unitPrice: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  CART_ITEM.associate = function(models) {
    // associations can be defined here
    CART_ITEM.belongsTo(models.CART);
    CART_ITEM.belongsTo(models.MENU_ITEMs, {
      foreignKey: 'itemId'
    });

  };
  return CART_ITEM;
};