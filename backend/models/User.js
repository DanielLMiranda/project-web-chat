const createUsers = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userId: { type: DataTypes.INTEGER, primaryKey: true },
    userName: DataTypes.STRING,
    phone: DataTypes.STRING,
  });

  return User;
};

module.exports = createUsers;
