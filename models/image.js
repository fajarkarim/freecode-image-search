'use strict';
module.exports = (sequelize, DataTypes) => {
  var image = sequelize.define('image', {
    url: DataTypes.STRING,
    snippet: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    context: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return image;
};