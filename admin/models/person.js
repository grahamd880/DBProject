'use strict';
module.exports = (sequelize, DataTypes) => {
  var person = sequelize.define('person', {
    id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    firstName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
    logged_on: DataTypes.BOOLEAN
  }, {});
  person.associate = function(models) {
    // associations can be defined here
  };
  return person;
};