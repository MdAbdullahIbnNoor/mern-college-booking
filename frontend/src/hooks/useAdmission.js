import { useState } from 'react';
import axios from '../api/axios';

const useAdmissions = () => {
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitAdmission = async (admissionData) => {
    setLoading(true);
    try {
      const response = await axios.post('/admissions', admissionData);
      setAdmissions([...admissions, response.data]);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const fetchMyAdmissions = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/admissions');
      setAdmissions(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return { admissions, loading, error, submitAdmission, fetchMyAdmissions };
};

export default useAdmissions;
