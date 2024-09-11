import React from 'react';
import { Link } from 'react-router-dom';

const CollegeCard = () => {
  return (
    <div className="college-card">
      <img src="college-image-url" alt="College" className="college-image" />
      <h3>College Name</h3>
      <p>Admission Dates: 01/01/2024 - 01/02/2024</p>
      <p>Events: Annual Sports Day, Cultural Fest</p>
      <Link to={`/colleges/1`} className="details-button">
        Details
      </Link>
    </div>
  );
};

export default CollegeCard;
