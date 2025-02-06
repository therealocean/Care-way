// src/WhyChooseCareWay.js
import React from 'react';
import './WhyChooseCareWay.css'; // Create a separate CSS file for styles

const WhyChooseCareWay = () => {
  return (
    <div className="frame-1707478738">
      <div> 
        <img className="image1" src="/Images/image1.png" alt="Healthcare" />
      </div>
      <div className="frame-1707478772">
        <span>
          <span className="why-choose-care-way-span">Why Choose</span>
          <span className="why-choose-care-way-span2">Care</span>
          <span className="why-choose-care-way-span3">Way</span>
          <span className="why-choose-care-way-span4">?</span>
        </span>
        <div className="why-choose-careway-card">
          <div className="frame-1707478721">
            <img className="shield-01" src="/Icon/shield-010.svg" alt="Verified Providers" />
          </div>
          <div className="frame-32">
            <div className="verified-provider">Verified Providers</div>
            <div className="all-healthcare-professionals-are-thoroughly-vetted-for-credibility">
              All healthcare professionals are thoroughly vetted for credibility.
            </div>
          </div>
        </div>

        <div className="why-choose-careway-card">
          <div className="frame-1707478721">
            <img className="dollar-01" src="/Icon/dollar-010.svg" alt="Transparent Pricing" />
          </div>
          <div className="frame-32">
            <div className="verified-provider">Transparent Pricing</div>
            <div className="all-healthcare-professionals-are-thoroughly-vetted-for-credibility">
              View upfront consultation fees and accepted insurance plans.
            </div>
          </div>
        </div>

        <div className="why-choose-careway-card">
          <div className="frame-1707478721">
            <img className="calendar-add-01" src="/Icon/calendar-add-010.svg" alt="Easy Scheduling" />
          </div>
          <div className="frame-32">
            <div className="verified-provider">Easy Scheduling</div>
            <div className="all-healthcare-professionals-are-thoroughly-vetted-for-credibility">
              Book appointments in a few clicks with reminders.
            </div>
          </div>
        </div>

        <div className="why-choose-careway-card">
          <div className="frame-1707478721">
            <img className="star" src="/Icon/star0.svg" alt="Patient Feedback" />
          </div>
          <div className="frame-32">
            <div className="verified-provider">Patient Feedback</div>
            <div className="all-healthcare-professionals-are-thoroughly-vetted-for-credibility">
              Read reviews and ratings from other patients.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseCareWay;