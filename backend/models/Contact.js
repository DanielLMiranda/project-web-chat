const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Contact = sequelize.define('Contact', {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  contactId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
});

Contact.removeAttribute('id');

module.exports = Contact;
