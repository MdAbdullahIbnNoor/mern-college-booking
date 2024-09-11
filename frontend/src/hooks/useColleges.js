import { useState, useEffect } from 'react';
import axios from '../api/axios';

const useColleges = () => {
  const [colleges, setColleges] = useState([]);
  const [college, setCollege] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchColleges = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/colleges');
      setColleges(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const fetchCollegeById = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`/colleges/${id}`);
      setCollege(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return { colleges, college, loading, error, fetchColleges, fetchCollegeById };
};

export default useColleges;
