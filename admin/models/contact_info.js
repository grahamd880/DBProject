'use strict';
module.exports = (sequelize, DataTypes) => {
  var contact_info = sequelize.define('contact_info', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false
    },

    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },

    streetAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },

    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    state: {
      type: DataTypes.STRING,
      allowNull: false
    },

    zipcode: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }, {});
  contact_info.associate = function(models) {
    // associations can be defined here
  };
  return contact_info;
};