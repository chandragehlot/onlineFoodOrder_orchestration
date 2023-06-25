'use strict';
module.exports = (sequelize, DataTypes) => {
  const IMAGE_MAPPING = sequelize.define('IMAGE_MAPPING', {
    imagekey: DataTypes.STRING,
    imageurl: DataTypes.STRING
  }, {});
  IMAGE_MAPPING.associate = function(models) {
    // associations can be defined here
  };
  return IMAGE_MAPPING;
};