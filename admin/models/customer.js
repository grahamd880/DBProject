'use strict';
module.exports = (sequelize, DataTypes) => {
  var customer = sequelize.define('customer', {
    id: DataTypes.INTEGER,
    registration_date: DataTypes.TIMESTAMP
  }, {});
  customer.associate = function(models) {
    // associations can be defined here
  };
  return customer;
};