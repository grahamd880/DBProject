'use strict';
module.exports = (sequelize, DataTypes) => {
  var customer = sequelize.define('customer', {
    personId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    registration_date: {
      type: DataTypes.DATE,
      allowNull: false
    }

  }, {});
  customer.associate = function(models) {
    // associations can be defined here
  };
  return customer;
};