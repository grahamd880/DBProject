'use strict';
module.exports = (sequelize, DataTypes) => {
  var employee = sequelize.define('employee', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {});
  employee.associate = function(models) {
    // associations can be defined here
  };
  return employee;
};