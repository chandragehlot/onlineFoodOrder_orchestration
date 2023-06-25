'use strict';
module.exports = (sequelize, DataTypes) => {
  const MENU_ITEM = sequelize.define('MENU_ITEM', {
    name: DataTypes.STRING,
    type: {
      type: DataTypes.ENUM,
      values: ['veg', 'nonveg']
    },
    mainCategory: DataTypes.STRING,
    subCategory: DataTypes.STRING,
    price: DataTypes.INTEGER,
    courseType: {
      type: DataTypes.ENUM,
      values: ['starter','main','deserts']
    },
    rating: DataTypes.INTEGER,
    description: DataTypes.STRING,
    itemImage: DataTypes.INTEGER
  }, {});
  MENU_ITEM.associate = function(models) {
    // associations can be defined here
  };
  return MENU_ITEM;
};