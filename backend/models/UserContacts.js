const createUserContacts = (sequelize, DataTypes) => {
  const UserContacts = sequelize.define('UserContacts', {
    userId: { type: DataTypes.INTEGER, primaryKey: true },
    contactId: { type: DataTypes.INTEGER, primaryKey: true },
  });

  UserContacts.associate = (models) => {
    models.Users.belongsToMany(models.Users, {
      as: 'users',
      through: UserContacts,
      foreignKey: 'userId',
      otherKey: 'contactId',
    });
    models.Users.belongsToMany(models.Users, {
      as: 'contacts',
      through: UserContacts,
      foreignKey: 'contactId',
      otherKey: 'userId',
    });
  };

  return UserContacts;
};

module.exports = createUserContacts;
