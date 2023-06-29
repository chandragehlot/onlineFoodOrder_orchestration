'use strict';
module.exports = (sequelize, DataTypes) => {
  const CART = sequelize.define('CART', {
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
    cartTotal: DataTypes.INTEGER,
    noOfItems: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  CART.associate = function(models) {
    // associations can be defined here
    CART.belongsTo(models.USER);
    CART.hasMany(models.CART_ITEMs, {
      foreginKey: 'cartId'
    })
  };
  return CART;
};