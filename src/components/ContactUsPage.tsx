// ContactUsPage.tsx
import React from 'react';
import './ContactUsPage.css';

const ContactUsPage: React.FC = () => {
  return (
    <div className="contact-us-page">
      <div className="contact-box">
        <h1>Elevate Your Coding Journey with CodeShivir :)</h1>
        <a  href="https://forms.gle/zFDHpbfz8zEp6Sd57" target="_blank" rel="noopener noreferrer">
          <button className="enroll-now-button">Enroll Now</button>
        </a>
      </div>
      <footer className="footer">
        <div className="contact-details">
         <h1>CODESHIVIR
</h1>
          <p>+91 9650618632 | codeshivir@gmail.com
</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUsPage;
