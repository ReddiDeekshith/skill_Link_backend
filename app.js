
const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/workers', require('./routes/workerRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/ratings', require('./routes/ratingRoutes'));
app.use('/api/location', require('./routes/locationRoutes'));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`SkillLink Backend running on port ${PORT}`);
});
