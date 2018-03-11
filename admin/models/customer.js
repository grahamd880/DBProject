'use strict';
module.exports = (sequelize, DataTypes) => {
  var customer = sequelize.define('customer', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    registration_date: {
      type: DataTypes.TIMESTAMP,
      allowNull: false
    }

  }, {});
  customer.associate = function(models) {
    // associations can be defined here
  };
  return customer;
};