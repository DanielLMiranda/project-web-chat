const { Users } = require('../models');

const findUsers = async (_req, res) => {
  const users = await Users.findAll();
  return res.status(200).json(users);
};

const createUser = async (req, res) => {
  const { userName, phone, passwordHash } = req.body;
  const createdUser = await Users.create({ userName, phone, passwordHash });
  return res.status(201).json(createdUser);
};

module.exports = { findUsers, createUser };
