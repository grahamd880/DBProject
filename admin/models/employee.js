'use strict';
module.exports = (sequelize, DataTypes) => {
  var employee = sequelize.define('employee', {
    id: DataTypes.INTEGER
  }, {});
  employee.associate = function(models) {
    // associations can be defined here
  };
  return employee;
};