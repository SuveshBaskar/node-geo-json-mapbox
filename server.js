const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load Environment Variables
dotenv.config({ path: './config/config.env' });

// Initialize Express
const app = express();

// Connect to DB
connectDB();

// Body Parser
app.use(express.json());

// CORS
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/v1/stores', require('./routes/stores'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} environment on port ${PORT}`
  );
});
