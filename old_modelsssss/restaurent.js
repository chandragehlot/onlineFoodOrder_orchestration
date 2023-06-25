'use strict';
module.exports = (sequelize, DataTypes) => {
  const RESTAURENT = sequelize.define('RESTAURENT', {
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    phoneNo: DataTypes.STRING,
    ownerInfo: DataTypes.STRING
  }, {});
  RESTAURENT.associate = function(models) {
    // associations can be defined here
  };
  return RESTAURENT;
};