'use strict';
module.exports = (sequelize, DataTypes) => {
  const IMAGE_MAPPING = sequelize.define('IMAGE_MAPPING', {
    imagekey: DataTypes.STRING,
    imageurl: DataTypes.STRING
  }, {
    timestamps: false
  });
  IMAGE_MAPPING.associate = function(models) {
    IMAGE_MAPPING.hasOne(models.MENU_ITEM, {
      foreignKey: 'itemImage'
    });
  };
  return IMAGE_MAPPING;
};