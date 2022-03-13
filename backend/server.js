const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const { errorHandler } = require('./middleware/middleware');

// initialize
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/goals', require('./routes/goalRoutes'));

// error handler
app.use(errorHandler);

// start/listener server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
