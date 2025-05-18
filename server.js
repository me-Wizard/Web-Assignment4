require('dotenv').config();
const express   = require('express');
const cors      = require('cors');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL }));

// Connect Database
connectDB();

// Routes
app.use('/api/education',   require('./routes/educationRoutes'));
app.use('/api/skills',      require('./routes/skillRoutes'));
app.use('/api/projects',    require('./routes/projectRoutes'));
app.use('/api/experience',  require('./routes/experienceRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
