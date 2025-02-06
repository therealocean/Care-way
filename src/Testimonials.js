// src/Testimonials.js
import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="frame-1707478758">
      <div className="what-our-users-are-saying">What Our Users Are Saying</div>
      <div className="frame-1707478757">
        {/* Testimonial 1 */}
        <div className="frame-17074787582">
          <div className="frame-313463">
            <div className="testimonial-text">
              CareWay made it incredibly easy to find a reliable pediatrician for my daughter. The process was quick, and the service was excellent!
            </div>
            <div className="frame-241">
              <img className="frame-237" src="/Images/frame-2370.png" alt="Sarah A" />
              <div className="frame-240">
                <div className="frame-238">
                  <div className="sarah-a">Sarah A</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="frame-17074787572">
          <div className="frame-313463">
            <div className="testimonial-text">
              As a healthcare provider, this platform has helped me connect with more patients and manage my schedule seamlessly. Highly recommend!
            </div>
            <div className="frame-241">
              <img className="frame-237" src="/Images/frame-2371.png" alt="James L" />
              <div className="frame-240">
                <div className="frame-238">
                  <div className="james-l">James L</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="frame-313603">
          <div className="frame-313463">
            <div className="testimonial-text">
              CareWay made it incredibly easy to find a reliable pediatrician for my daughter. The process was quick, and the service was excellent!
            </div>
            <div className="frame-241">
              <img className="frame-237" src="/Images/frame-2372.png" alt="Maria R" />
              <div className="frame-240">
                <div className="frame-238">
                  <div className="maria-r">Maria R</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;