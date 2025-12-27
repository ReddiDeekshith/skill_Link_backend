
const { readData, writeData } = require('../utils/fileHandler');
const file = './data/locations.json';

exports.updateLocation = (req, res) => {
  const locations = readData(file);
  locations.push(req.body);
  writeData(file, locations);
  res.json({ message: 'Location updated' });
};

exports.getLocation = (req, res) => {
  const locations = readData(file);
  res.json(locations.find(l => l.workerId === req.params.workerId));
};
