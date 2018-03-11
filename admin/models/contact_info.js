'use strict';
module.exports = (sequelize, DataTypes) => {
  var contact_info = sequelize.define('contact_info', {
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
    contact_info.belongsTo(models.person,{
      foreignKey: {
        allowNull: false
      }
    })
  };
  return contact_info;
};