const { User, UserContact } = require('../models');

const createContact = async (req, res) => {
  const { userId } = req.params;
  const { userId: contactId } = req.body;
  const user = await User.findByPk(userId);
  const contact = await User.findByPk(contactId);

  if (!user) return res.status(404).json({ error: 'User not found' });
  if (!contact) return res.status(404).json({ error: 'Contact not found' });

  const createdContact = UserContact.create({ userId, contactId });
  return res.status(201).json(createdContact);
};

const findContacts = async (req, res) => {
  const { userId } = req.params;
  const foundContacts = await User.findByPk(userId, {
    include: { model: UserContact, as: 'contacts' },
  });

  return res.status(200).json(foundContacts);
};

module.exports = { createContact, findContacts };
