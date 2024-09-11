const Review = require('../models/Review');

// Add a review
exports.addReview = async (req, res) => {
  const { collegeId, rating, comment } = req.body;

  const review = new Review({ user: req.user._id, college: collegeId, rating, comment });
  await review.save();
  res.status(201).json(review);
};

// Get all reviews for a college
exports.getReviewsForCollege = async (req, res) => {
  const reviews = await Review.find({ college: req.params.collegeId }).populate('user', 'name');
  res.json(reviews);
};
