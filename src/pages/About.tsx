import React from 'react';
import AboutEducation from '../components/About-Education';
import AboutWork from '../components/About-Work';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div>
      <AboutEducation />
      <AboutWork />
      <Footer />
    </div>
  );
};

export default About;
