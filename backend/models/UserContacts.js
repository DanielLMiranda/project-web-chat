const createUserContacts = (sequelize, DataTypes) => {
  const UserContact = sequelize.define('UserContact', {
    userId: { type: DataTypes.INTEGER, primaryKey: true },
    contactId: { type: DataTypes.INTEGER, primaryKey: true },
  });

  return UserContact;
};

module.exports = createUserContacts;
