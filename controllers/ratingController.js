
const { readData, writeData } = require('../utils/fileHandler');
const file = './data/ratings.json';

exports.addRating = (req, res) => {
  const ratings = readData(file);
  ratings.push(req.body);
  writeData(file, ratings);
  res.json({ message: 'Rating added' });
};
