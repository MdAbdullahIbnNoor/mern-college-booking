import React from 'react';
import CollegeCard from './CollegeCard';
// import Gallery from '../components/Gallery';
// import ResearchLinks from '../components/ResearchLinks';
// import Reviews from '../components/Reviews';

const Home = () => {
  return (
    <div>
      <section className="search-section">
        <input type="text" placeholder="Search College..." className="search-bar" />
      </section>

      <section className="college-cards">
        <h2>Colleges</h2>
        <div className="college-list">
          <CollegeCard />
          <CollegeCard />
          <CollegeCard />
        </div>
      </section>

      <section className="gallery-section">
        <h2>College Image Gallery</h2>
        {/* <Gallery /> */}
      </section>

      <section className="research-section">
        <h2>Research Papers</h2>
        {/* <ResearchLinks /> */}
      </section>

      <section className="review-section">
        <h2>Reviews</h2>
        {/* <Reviews /> */}
      </section>
    </div>
  );
};

export default Home;
