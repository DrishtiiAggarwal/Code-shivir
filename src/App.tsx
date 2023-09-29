// App.tsx
import React from 'react';
import Navbar from './components/Navbar'; // Adjust the path based on your project structure
import HomePage from './components/HomePage'; // Adjust the path based on your project structure
import AboutUsPage from './components/AboutUsPage'; // Import the AboutUsPage component
import FaqsPage from './components/FaqsPage';
import ContactUsPage from './components/ContactUsPage';
import AboutMePage from './components/AboutMe';



const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <AboutUsPage />
      <AboutMePage/>
      <FaqsPage />
      <ContactUsPage />

    </div>
  );
};

export default App;
