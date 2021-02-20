const yup = require('yup');
const { Users } = require('../models');

exports.findUsers = async (_req, res) => {
  const users = await Users.findAll();
  return res.status(200).json(users);
};

exports.createUser = async (req, res) => {
  const schema = yup.object().shape({
    userName: yup.string().required(),
    phone: yup.string().required(),
    password: yup.string().required().min(8),
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({ message: 'Invalid input' });
  }

  const { userName, phone, password } = req.body;
  const userExist = await Users.findOne({ where: { phone } });
  if (userExist) {
    return res
      .status(400)
      .json({ message: 'User with this phone number already exists' });
  }
  const { userId } = await Users.create({ userName, phone, password });
  return res.status(201).json({ userId, userName, phone });
};

exports.updateUser = async (req, res) => {
  const { phone: updatedPhone, oldPassword, newPassword } = req.body;

  const schema = yup.object().shape({
    userName: yup.string(),
    phone: yup.string(),
    oldPassword: yup.string().min(8),
    newPassword: yup
      .string()
      .min(8)
      .when('oldPassword', (oldPasswd, field) =>
        oldPasswd ? field.required() : field,
      ),
    repeatedPassword: yup
      .string()
      .when('newPassword', (newPasswd, field) =>
        newPasswd ? field.required().oneOf([yup.ref('newPassword')]) : field,
      ),
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({ message: 'Invalid input' });
  }

  const user = await Users.findByPk(req.userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  if (updatedPhone && updatedPhone !== user.phone) {
    const userExists = await Users.findOne({ where: { phone: updatedPhone } });
    if (userExists) {
      return res
        .status(400)
        .json({ message: 'User with this phone number already exists' });
    }
  }

  if (oldPassword && !(await user.checkPassword(oldPassword))) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  if (await user.checkPassword(newPassword)) {
    return res
      .status(401)
      .json({ message: "New password can't be the same as the old one" });
  }

  const { userId, userName, phone } = await user.update(req.body);

  return res.status(200).json({ userId, userName, phone });
};
