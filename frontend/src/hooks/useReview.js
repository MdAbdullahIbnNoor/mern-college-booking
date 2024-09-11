import { useState } from 'react';
import axios from '../api/axios';

const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addReview = async (reviewData) => {
    setLoading(true);
    try {
      const response = await axios.post('/reviews', reviewData);
      setReviews([...reviews, response.data]);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const fetchReviewsForCollege = async (collegeId) => {
    setLoading(true);
    try {
      const response = await axios.get(`/reviews/${collegeId}`);
      setReviews(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return { reviews, loading, error, addReview, fetchReviewsForCollege };
};

export default useReviews;
