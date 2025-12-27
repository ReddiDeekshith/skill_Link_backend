
const { v4: uuid } = require('uuid');
const { readData, writeData } = require('../utils/fileHandler');
const file = './data/users.json';

exports.registerUser = (req, res) => {
  const users = readData(file);
  const user = { id: uuid(), ...req.body };
  users.push(user);
  writeData(file, users);
  res.json(user);
};
