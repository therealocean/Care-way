// src/HowItWorks.js
import React from 'react';
import './HowItWorks.css'; // Create a separate CSS file for styles

const HowItWorks = () => {
  return (
    <div className="frame-1707478732">
      <div className="how-care-way-works">
        <span>
          <span className="how-care-way-works-span">How</span>
          <span className="how-care-way-works-span2">Care</span>
          <span className="how-care-way-works-span3">Way</span>
          <span className="how-care-way-works-span4">Works</span>
        </span>
      </div>
      <div className="frame-1707478731">
        {/* Add cards for each step */}
        <div className="how-careway-works-card">
          <div className="frame-1707478721">
            <img className="maps-location-01" src="/Icon/maps-location-010.svg" alt="Search Providers" />
          </div>
          <div className="frame-32">
            <div className="search-providers">Search Providers</div>
            <div className="find-healthcare-providers-by-location-specialization-or-fees">
              Find healthcare providers by location, specialization, or fees.
            </div>
          </div>
        </div>
        
        <div className="how-careway-works-card">
          <div className="frame-1707478721">
            <img className="user" src="/Icon/user0.svg" alt="View Profiles" />
          </div>
          <div className="frame-32">
            <div className="search-providers">View Profiles</div>
            <div className="find-healthcare-providers-by-location-specialization-or-fees">
              Check provider details, ratings, and availability.
            </div>
          </div>
        </div>

        <div className="how-careway-works-card">
          <div className="frame-1707478721">
            <img className="appointment-01" src="/Icon/appointment-010.svg" alt="Book Appointments" />
          </div>
          <div className="frame-32">
            <div className="search-providers">Book Appointments</div>
            <div className="find-healthcare-providers-by-location-specialization-or-fees">
              Choose a convenient time slot and book easily.
            </div>
          </div>
        </div>

        <div className="how-careway-works-card">
          <div className="frame-1707478721">
            <img className="heart-check" src="/Icon/heart-check0.svg" alt="Get Quality Care" />
          </div>
          <div className="frame-32">
            <div className="search-providers">Get Quality Care</div>
            <div className="find-healthcare-providers-by-location-specialization-or-fees">
              Receive excellent care and share your feedback.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;