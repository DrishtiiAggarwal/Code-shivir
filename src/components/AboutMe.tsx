// src/components/AboutMePage.tsx
import React from 'react';
import './AboutMe.css';
import Image from '../images/image.jpeg';
const AboutMePage: React.FC = () => {
  return (
    <div className="about-me">
      <div className='aboutme-content'>
        <div className="left-content">
          <h1>Your Teacher or Mentor</h1>
          <div className="img-right">
            <img src={Image}
              alt="Profile"
              className="profile-pic"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '20%',
                border: '2px solid #fff',
                marginLeft: '60px',

              }}
            />

          </div>
          <h2>Abhishek Gupta</h2>
          <p>
            Hi there! I'm Abhishek, a software developer specializing in backend systems and infrastructure.Beyond coding, I am passionate about sharing my knowledge and insights with others. While I occasionally write about software-related topics, I'm always striving to contribute more to the tech community.
          </p>
        </div>
      </div>
    </div>


  );
};

export default AboutMePage;
