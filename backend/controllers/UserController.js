const User = require('../models/User');

const findUsers = async (_req, res) => {
  const users = await User.findAll();
  return res.status(200).json(users);
};

const createUser = async (req, res) => {
  const { name, phone, passwordHash } = req.body;

  const user = await User.create({ name, phone, passwordHash });

  return res.status(201).json(user);
};

module.exports = { createUser, findUsers };
