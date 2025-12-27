
const fs = require('fs');

exports.readData = (file) => {
  if (!fs.existsSync(file)) return [];
  return JSON.parse(fs.readFileSync(file));
};

exports.writeData = (file, data) => {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
};
