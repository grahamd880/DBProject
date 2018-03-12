'use strict';
module.exports = (sequelize, DataTypes) => {
  var employee = sequelize.define('employee', {
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    token:{
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {});
  employee.associate = function(models) {
    // associations can be defined here
    employee.belongsTo(models.person,{
      OnDelete: "CASCADE",
      foreignKey:{
        allowNull: false
      }
    })
  };
  return employee;
};