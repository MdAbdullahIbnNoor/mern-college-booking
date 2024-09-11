const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  admissionDates: { type: String, required: true },
  events: { type: [String], required: true },  // Correct: Array of strings
  researchHistory: { type: [String], required: true },  // Correct: Array of strings
  sports: { type: [String], required: true },  // Correct: Array of strings
  rating: { type: Number, required: true }
});


module.exports = mongoose.model('College', collegeSchema);
