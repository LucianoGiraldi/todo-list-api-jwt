const User = require('../models/user.model');
const bcrypt = require('bcrypt');

exports.getAllUsers = async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Acesso negado' });
  const users = await User.find().select('-password');
  res.json(users);
};

exports.deleteUser = async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Acesso negado' });
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'Usuário deletado' });
};

exports.updateOwnUser = async (req, res) => {
  const { password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const updated = await User.findByIdAndUpdate(req.user.id, { password: hashed }, { new: true });
  res.json({ message: 'Senha atualizada', updated });
};