
const { v4: uuid } = require('uuid');
const { readData, writeData } = require('../utils/fileHandler');
const file = './data/bookings.json';

exports.createBooking = (req, res) => {
  const bookings = readData(file);
  const booking = { id: uuid(), status: 'Booked', ...req.body };
  bookings.push(booking);
  writeData(file, bookings);
  res.json(booking);
};
