'use strict';
module.exports = (sequelize, DataTypes) => {
  const InterestArea = sequelize.define('InterestArea', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  InterestArea.associate = function(models) {
    // associations can be defined here
  };
  return InterestArea;
};