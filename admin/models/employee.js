'use strict';
module.exports = (sequelize, DataTypes) => {
  var employee = sequelize.define('employee', {
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {});
  employee.associate = function(models) {
    // associations can be defined here
    employee.belongsTo(models.person,{
      foreignKey:{
        allowNull: false
      }
    })
  };
  return employee;
};