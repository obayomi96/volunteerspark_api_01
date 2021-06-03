module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      phonenumber: DataTypes.STRING,
      isVerified: DataTypes.BOOLEAN,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
      type: DataTypes.STRING,
      country: DataTypes.STRING,
      state: DataTypes.STRING,
      city: DataTypes.STRING,
    },
    {}
  );
  User.associate = (models) => {
    // associations can be defined here
  };
  return User;
};
