'use strict';
module.exports = (sequelize, DataTypes) => {
  const USER_ADDRESS = sequelize.define('USER_ADDRESS', {
    fullName: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    city: DataTypes.STRING,
    pincode: DataTypes.STRING,
    addresstype:{
      type: DataTypes.ENUM,
      values: ['home', 'office']
    },
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
    }
  }, {
    timestamps: false
  });
  USER_ADDRESS.associate = function(models) {
    // associations can be defined here
    USER_ADDRESS.belongsTo(models.USER);
  };
  return USER_ADDRESS;
};