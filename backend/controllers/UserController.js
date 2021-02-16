const { User } = require('../models');

const findUsers = async (_req, res) => {
  const users = await User.findAll();
  return res.status(200).json(users);
};

module.exports = { findUsers };
