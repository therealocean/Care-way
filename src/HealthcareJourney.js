import React from 'react';
import './HealthcareJourney.css'; // Import the CSS file

const HealthcareJourney = () => {
  return (
    <div className="hc-frame">
      <div
        className="hc-image"
        style={{
          background: 'url(/Images/image15.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hc-frame-content">
          <div className="hc-text-container">
            <div className="hc-title">
              Start Your Healthcare Journey Today
            </div>
            <div className="hc-subtitle">
              Sign up now and take control of your health with Nearby Care.
            </div>
          </div>
          <div className="hc-filled-button">
            <div className="hc-button">Sign Up for free</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareJourney;