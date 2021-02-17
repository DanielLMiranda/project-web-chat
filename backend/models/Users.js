const createUsers = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    userId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userName: DataTypes.STRING,
    phone: DataTypes.STRING,
  });

  // Users.associate = (models) => {
  //   Users.hasMany(models.UserContacts, {
  //     foreignKey: 'userId',
  //     as: 'contacts',
  //   });
  // };

  return Users;
};

module.exports = createUsers;
