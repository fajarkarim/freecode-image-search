'use strict';
module.exports = (sequelize, DataTypes) => {
  var searchhistory = sequelize.define('searchhistory', {
    term: DataTypes.STRING,
    when: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return searchhistory;
};