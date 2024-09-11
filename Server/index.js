const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

const authRoutes = require('./routes/authRoutes');
const collegeRoutes = require('./routes/collegeRoutes');
const admissionRoutes = require('./routes/admissionRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

app.use(cors());
app.use(express.json());

dotenv.config();

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/colleges', collegeRoutes);
app.use('/api/admissions', admissionRoutes);
app.use('/api/reviews', reviewRoutes);   


// Import the upload route
const uploadRoute = require('./routes/upload');
app.use('/api', uploadRoute); // API route to handle image upload

app.get('/', (req, res) => {
    res.send('College Booking API is running');
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
