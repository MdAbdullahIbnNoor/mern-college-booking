const express = require('express');
const { createAdmission, getMyAdmissions, getAdmissionById, deleteAdmission } = require('../controllers/admissionController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, createAdmission);
router.get('/', protect, getMyAdmissions);
router.get('/:id', protect, getAdmissionById);
router.delete('/:id', protect, deleteAdmission);

module.exports = router;
