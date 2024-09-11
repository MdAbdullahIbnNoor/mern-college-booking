const express = require('express');
const { createCollege, getAllColleges, getCollegeById, updateCollege, deleteCollege } = require('../controllers/collegeController');

const router = express.Router();

router.post('/', createCollege);
router.get('/', getAllColleges);
router.get('/:id', getCollegeById);
router.put('/:id', updateCollege);
router.delete('/:id', deleteCollege);

module.exports = router;
