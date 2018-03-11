'use strict';
module.exports = (sequelize, DataTypes) => {
  var person = sequelize.define('person', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    username: {
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
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false
    },

    logged_on: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }

  }, {});
  person.associate = function(models) {
    // associations can be defined here
  };
  return person;
};