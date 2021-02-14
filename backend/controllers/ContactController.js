const Contact = require('../models/Contact');
const User = require('../models/User');

const findContacts = async (req, res) => {
  const { userId } = req.params;

  const user = await User.findByPk(userId, {
    include: { association: 'contact' },
  });
  return res.status(200).json(user);
};

const createContact = async (req, res) => {
  const { contactId } = req.body;
  const { userId } = req.params;

  const user = await User.findByPk(userId);
  const contactToAdd = await User.findByPk(contactId);

  if (!user) return res.status(400).json({ code: 'ERR_USER_NOT_FOUND' });

  if (!contactToAdd)
    return res.status(400).json({ code: 'ERR_CONTACT_NOT_FOUND' });

  const contact = await Contact.create({ userId, contactId });

  return res.status(201).json(contact);
};

module.exports = { createContact, findContacts };
