const express = require('express');
const { addReview, getReviewsForCollege } = require('../controllers/reviewController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, addReview);
router.get('/:collegeId', getReviewsForCollege);

module.exports = router;
