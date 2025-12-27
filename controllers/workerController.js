
const { v4: uuid } = require('uuid');
const { readData, writeData } = require('../utils/fileHandler');
const file = './data/workers.json';

exports.registerWorker = (req, res) => {
  const workers = readData(file);
  const worker = { id: uuid(), rating: 0, ...req.body };
  workers.push(worker);
  writeData(file, workers);
  res.json(worker);
};

exports.getWorkers = (req, res) => {
  res.json(readData(file));
};
