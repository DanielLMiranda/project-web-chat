const jwt = require('jsonwebtoken');
const yup = require('yup');
const { Users } = require('../models');

exports.createSession = async (req, res) => {
  const { phone, password } = req.body;
  const schema = yup.object().shape({
    phone: yup.string().required(),
    password: yup.string().required(),
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({ message: 'Invalid input' });
  }

  const user = await Users.findOne({ where: { phone } });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  if (!(await user.checkPassword(password))) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  const { userId, userName } = user;

  return res.json({
    user: {
      userId,
      userName,
      phone,
    },
    token: jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
    }),
  });
};
