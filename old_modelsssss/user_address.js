'use strict';
module.exports = (sequelize, DataTypes) => {
  const USER_ADDRESS = sequelize.define('USER_ADDRESSes', {
    fullName: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    city: DataTypes.STRING,
    pincode: DataTypes.STRING,
    addresstype: {
      type: DataTypes.ENUM,
      values: [['Home', 'Office']]
    },
    userId: DataTypes.INTEGER
  }, {});
  USER_ADDRESS.associate = function(models) {
    // associations can be defined here
  };
  return USER_ADDRESS;
};