'use strict';
module.exports = (sequelize, DataTypes) => {
  var payment_info = sequelize.define('payment_info', {
    personID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    card_number: {
      type: DataTypes.STRING,
      allowNull: false
    },

    billing_street_address: {
      type: DataTypes.STRING,
      allowNull: false
    },

    billing_city: {
      type: DataTypes.STRING,
      allowNull: false
    },

    billing_state: {
      type: DataTypes.STRING,
      allowNull: false
    },

    billing_zip: {
      type: DataTypes.STRING,
      allowNull: false
    },

    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    middleName: {
      type: DataTypes.STRING,
      allowNull: true
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }, {});
  payment_info.associate = function(models) {
    // associations can be defined here
  };
  return payment_info;
};