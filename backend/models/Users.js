const bcrypt = require('bcryptjs');

const createUsers = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.VIRTUAL,
    passwordHash: DataTypes.STRING,
  });

  Users.addHook('beforeSave', async (user) => {
    if (user.password) {
      user.passwordHash = await bcrypt.hash(user.password, 8);
    }
  });

  Users.prototype.checkPassword = function checkPassword(password) {
    return bcrypt.compare(password, this.passwordHash);
  };

  return Users;
};

module.exports = createUsers;
