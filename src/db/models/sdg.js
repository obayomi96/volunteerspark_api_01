'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sdg = sequelize.define('Sdg', {
    mame: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Sdg.associate = function(models) {
    // associations can be defined here
  };
  return Sdg;
};