'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ngo = sequelize.define('Ngo', {
    mame: DataTypes.STRING,
    logo: DataTypes.STRING,
    about: DataTypes.TEXT,
    type: DataTypes.STRING,
    industry: DataTypes.STRING,
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.TEXT,
    phonenumber: DataTypes.STRING,
    email: DataTypes.STRING,
    website: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    instagram: DataTypes.STRING,
    twitter: DataTypes.STRING
  }, {});
  Ngo.associate = function(models) {
    // associations can be defined here
  };
  return Ngo;
};
