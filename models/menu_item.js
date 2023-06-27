'use strict';
module.exports = (sequelize, DataTypes) => {
  const MENU_ITEM = sequelize.define('MENU_ITEMs', {
    name: DataTypes.STRING,
    foodtype: {
      type: DataTypes.ENUM,
      values: ['veg', 'nonveg']
    },
    mainCategory: DataTypes.STRING,
    price: DataTypes.INTEGER,
    courseType:{
      type: DataTypes.ENUM,
      values: ['starter', 'maincourse', 'dessert']
    },
    rating: DataTypes.INTEGER,
    description: DataTypes.STRING,
    itemImage: DataTypes.INTEGER
  }, {
    timestamps: false,
  });
  MENU_ITEM.associate = function(models) {
    MENU_ITEM.belongsTo(models.IMAGE_MAPPING, {
      foreignKey: {
        name: 'itemImage'
      }
    });
    MENU_ITEM.hasOne(models.CART_ITEMs,{
      foreignKey: 'itemId'
    });
    MENU_ITEM.hasOne(models.ORDER_ITEMs,{
      foreignKey: 'menuItemId'
    })
  };
  return MENU_ITEM;
};