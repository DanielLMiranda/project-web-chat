const yup = require('yup');
const { Users, UserContacts } = require('../models');

exports.createContact = async (req, res) => {
  const { contactId } = req.body;
  const { userId } = req;
  const schema = yup.object().shape({
    contactId: yup.number().required(),
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({ message: 'Invalid input' });
  }

  const user = await Users.findByPk(userId);
  const contact = await Users.findByPk(contactId);

  if (!user) return res.status(404).json({ message: 'User not found' });
  if (!contact) return res.status(404).json({ message: 'Contact not found' });

  UserContacts.create({ userId, contactId });
  return res.status(201).json({ message: 'Contact added successfully' });
};

exports.findContacts = async (req, res) => {
  const { userId } = req;
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
