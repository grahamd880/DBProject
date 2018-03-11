'use strict';
module.exports = (sequelize, DataTypes) => {
  var customer = sequelize.define('customer', {
    registration_date: {
      type: DataTypes.DATE,
      allowNull: false
    }

  }, {});
  customer.associate = function(models) {
    // associations can be defined here
    customer.belongsTo(models.person,{
      foreignKey: {
        allowNull: false
      }
    })
  };
  return customer;
};