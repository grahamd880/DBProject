'use strict';
module.exports = (sequelize, DataTypes) => {
  var person = sequelize.define('person', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
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
    },
    
    token: {
      type: DataTypes.String,
      allowNull: true
    }

  }, {});
  person.associate = function(models) {
    // associations can be defined here
    person.hasMany(models.customer);
    person.hasMany(models.employee);
    person.hasMany(models.contact_info);
    person.hasMany(models.payment_info);
    person.hasMany(models.reviews);
    person.hasMany(models.shopping_cart);
  };
  return person;
};