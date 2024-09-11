const Admission = require('../models/Admission');

// Create an admission record
exports.createAdmission = async (req, res) => {
  const { name, subject, email, phone, address, dob, image, collegeId } = req.body;

  const admission = new Admission({ name, subject, email, phone, address, dob, image, college: collegeId });
  await admission.save();
  res.status(201).json(admission);
};

// Get all admissions for the user
exports.getMyAdmissions = async (req, res) => {
  const admissions = await Admission.find({ user: req.user._id });
  res.json(admissions);
};

// Get a specific admission record
exports.getAdmissionById = async (req, res) => {
  const admission = await Admission.findById(req.params.id);
  if (!admission) return res.status(404).json({ message: 'Admission not found' });
  res.json(admission);
};

// Delete admission record
exports.deleteAdmission = async (req, res) => {
  const admission = await Admission.findById(req.params.id);
  if (!admission) return res.status(404).json({ message: 'Admission not found' });

  await admission.remove();
  res.json({ message: 'Admission record deleted' });
};
