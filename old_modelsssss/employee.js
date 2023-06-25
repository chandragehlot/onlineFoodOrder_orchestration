'use strict';
module.exports = (sequelize, DataTypes) => {
  const EMPLOYEE = sequelize.define('EMPLOYEE', {
    employeeName: DataTypes.STRING,
    employeeId: DataTypes.INTEGER,
    employeeAge: DataTypes.INTEGER,
    employeeContactNo: DataTypes.STRING,
    employeeJoningDate: DataTypes.DATE,
    employeeEmailId: DataTypes.STRING,
    employeeRole: DataTypes.INTEGER,
    employeeSalary: DataTypes.INTEGER
  }, {});
  EMPLOYEE.associate = function(models) {
    // associations can be defined here
  };
  return EMPLOYEE;
};