const { Users, UserContacts } = require('../models');

const createContact = async (req, res) => {
  const { userId } = req.params;
  const { userId: contactId } = req.body;
  const user = await Users.findByPk(userId);
  const contact = await Users.findByPk(contactId);

  if (!user) return res.status(404).json({ message: 'User not found' });
  if (!contact) return res.status(404).json({ message: 'Contact not found' });

  const createdContact = UserContacts.create({ userId, contactId });
  return res.status(201).json(createdContact);
};

const findContacts = async (req, res) => {
  const { userId } = req.params;
  const foundContacts = await Users.findAll({
    where: { userId },
    attributes: ['userId', 'userName', 'phone'],
    include: [
      {
        model: Users,
        as: 'users',
        through: { attributes: [] },
        attributes: ['userId', 'userName', 'phone'],
      },
    ],
  });

  return res.status(200).json(foundContacts);
};

module.exports = { createContact, findContacts };
