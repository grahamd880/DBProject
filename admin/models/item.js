'use strict';
module.exports = (sequelize, DataTypes) => {
  var item = sequelize.define('item', {
    item_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    brand: {
      type: DataTypes.STRING,
      allowNull: false
    },

    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },

    quantity_in_stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    model: {
      type: DataTypes.STRING,
      allowNull: false
    },

    picture: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }, {});
  item.associate = function(models) {
    // associations can be defined here
  };
  return item;
};