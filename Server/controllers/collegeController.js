const College = require('../models/College');

// Create new college
exports.createCollege = async (req, res) => {
  const { name, image, admissionDates, events, researchHistory, sports } = req.body;
  const college = new College({ name, image, admissionDates, events, researchHistory, sports });
  await college.save();
  res.status(201).json(college);
};

// Get all colleges
exports.getAllColleges = async (req, res) => {
  const colleges = await College.find();
  res.json(colleges);
};

// Get a specific college by ID
exports.getCollegeById = async (req, res) => {
  const college = await College.findById(req.params.id);
  if (!college) return res.status(404).json({ message: 'College not found' });
  res.json(college);
};

// Update college
exports.updateCollege = async (req, res) => {
  const { name, image, admissionDates, events, researchHistory, sports } = req.body;
  const college = await College.findById(req.params.id);
  
  if (!college) return res.status(404).json({ message: 'College not found' });

  college.name = name || college.name;
  college.image = image || college.image;
  college.admissionDates = admissionDates || college.admissionDates;
  college.events = events || college.events;
  college.researchHistory = researchHistory || college.researchHistory;
  college.sports = sports || college.sports;

  await college.save();
  res.json(college);
};

// Delete college
exports.deleteCollege = async (req, res) => {
  const college = await College.findById(req.params.id);
  if (!college) return res.status(404).json({ message: 'College not found' });

  await college.remove();
  res.json({ message: 'College removed' });
};
