const jwt = require('jsonwebtoken');
const { promisify } = require('util');
require('dotenv').config();

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
