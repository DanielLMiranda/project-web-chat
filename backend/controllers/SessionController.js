const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Users } = require('../models');

const createSession = async (req, res) => {
  const { phone, password } = req.body;
  const user = await Users.findOne({ where: { phone } });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const passwordIsValid = await bcrypt.compare(password, user.passwordHash);
  if (!passwordIsValid) {
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

module.exports = { createSession };
