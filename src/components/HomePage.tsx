// HomePage.tsx
import React from 'react';
import './HomePage.css';
import Image from '../images/image.jpeg';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <div className="home-content">
        <div className="left-content">
          <h1>Stay ahead of the<br></br> curve and<br></br> future-proof your career</h1>
          <div className="left-content-ptag">
            <p>Cutting-Edge Courses for Modern Developers</p>
          </div>
        </div>

        <div className="right-content">
          {/* Replace the URL with your big image */}
          <img src={Image}
               alt="Profile"
               className="profile-pic"
               style={{
               width: '250px',
               height: '250px',
               borderRadius: '50%',
               border: '2px solid #fff',
               marginRight:'100px',
  }}
 />
        </div>
      </div>
      <div className="enroll-now">
        <a href="https://forms.gle/zFDHpbfz8zEp6Sd57" target="_blank" rel="noopener noreferrer">
          <button>Enroll Now</button>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
