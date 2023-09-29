// AboutUsPage.tsx
import React from 'react';
import './AboutUsPage.css';

const AboutUsPage: React.FC = () => {
  return (
    <div className="about-us-page">
      <h1>Why CodeShivir?</h1>
      <p>Because Choosing Us for Your Future-Ready Coding Journey will the best decision.</p>
      <div className="card-container">
        {/* Add your cards here */}
        <div className="card">
          <p>Mastering Emerging Technologies.</p>
        </div>
        <div className="card">
          <p>Networking with Industry Experts.</p>
        </div>
        <div className="card">
          <p>Flexible Scheduling for Busy Developers.</p>
        </div>
        <div className="card">
          <p>Affordable Pricing and Payment Plans.</p>
        </div>
        <div className="card">
          <p>Interview Preparation and Resume Review.</p>
        </div>
        {/* Repeat the same structure for the other cards */}
      </div>
    </div>
  );
};

export default AboutUsPage;
