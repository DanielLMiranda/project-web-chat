const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  phone: DataTypes.STRING,
  passwordHash: DataTypes.STRING,
});

User.associate = (models) => {
  User.belongsToMany(models.User, {
    through: 'Contacts',
    foreignKey: 'userId',
    as: 'user',
  });
  User.belongsToMany(models.User, {
    through: 'Contacts',
    foreignKey: 'contactId',
    as: 'contact',
  });
};

module.exports = User;
