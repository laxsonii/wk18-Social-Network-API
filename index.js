const express = require('express');
const db = require('./config/connection');
const thoughtRoutes = require('./routes/api/thoughtRoutes');
const userRoutes = require('./routes/api/userRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/thoughts', thoughtRoutes);
app.use('/api/users', userRoutes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
