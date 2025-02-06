// src/App.js
import React from 'react';
import Header from './Header';
import HealthcareProviders from './HealthcareProviders';
import HowItWorks from './HowItWorks';
import WhyChooseCareWay from './WhyChooseCareWay';
import SpecialistsSlider from './SpecialistsSlider';
import Testimonials from './Testimonials';
import PatientStories from './PatientStories';
import StayHealthy from './StayHealthy';
import FAQ from './FAQ';
import HealthcareJourney from './HealthcareJourney';
import Footer from './Footer';
import './App.css'; // Ensure you have your main app styles here

const App = () => {
  return (
    <div>
      <Header />
      <HealthcareProviders />
      <HowItWorks />
      <WhyChooseCareWay />
      <SpecialistsSlider />
      <Testimonials />
      <PatientStories />
      <StayHealthy />
      <FAQ />
      <HealthcareJourney />
      <Footer />
    </div>
  );
};

export default App;