const { Users } = require('../models');

const findUsers = async (_req, res) => {
  const users = await Users.findAll();
  return res.status(200).json(users);
};

const createUser = async (req, res) => {
  const { userName, phone, password } = req.body;
  const userExist = await Users.findOne({ where: { phone } });
  if (userExist) {
    return res
      .status(400)
      .json({ message: 'User with this phone number already exists' });
  }
  await Users.create({ userName, phone, password });
  return res.status(201).json({ message: 'User created successfully' });
};

const updateUser = async (req, res) =>
  res.json({
    ok: true,
    test: req.userId,
    test2: process.env.POSTGRES_DATABASE,
  });

module.exports = { findUsers, createUser, updateUser };
