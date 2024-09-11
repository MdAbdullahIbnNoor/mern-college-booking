import React, { useEffect } from 'react';
import useColleges from '../hooks/useColleges';

const Colleges = () => {
  const { colleges, fetchColleges, loading, error } = useColleges();

  useEffect(() => {
    fetchColleges();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Colleges List</h2>
      {colleges.map((college) => (
        <div key={college._id}>
          <h3>{college.name}</h3>
          <p>{college.admissionDates}</p>
        </div>
      ))}
    </div>
  );
};

export default Colleges;
