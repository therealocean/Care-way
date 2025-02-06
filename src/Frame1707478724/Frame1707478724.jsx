import "./Frame1707478724.css";
import { Home01 } from "../Home01/Home01.jsx";
import { FilledButtonProperty1Enabled } from "../FilledButtonProperty1Enabled/FilledButtonProperty1Enabled.jsx";
import { OutlineButtonProperty1Enabled } from "../OutlineButtonProperty1Enabled/OutlineButtonProperty1Enabled.jsx";

export const Frame1707478724 = ({ className, ...props }) => {
  return (
    <div className={"frame-1707478724 " + className}>
      <div className="ellipse-1"></div>
      <div className="frame-1707478730">
        <div className="frame-313946">
          <div className="frame-32">
            <div className="find-trusted-healthcare-providers-near-you">
              <span>
                <span className="find-trusted-healthcare-providers-near-you-span">
                  Find Trusted
                </span>
                <span className="find-trusted-healthcare-providers-near-you-span2">
                  Healthcare Providers
                </span>
                <span className="find-trusted-healthcare-providers-near-you-span3">
                  Near You!
                </span>
              </span>{" "}
            </div>
            <div className="care-way-connects-patients-with-verified-healthcare-professionals-ensuring-accessibility-transparency-and-quality-care">
              CareWay connects patients with verified healthcare professionals,
              ensuring accessibility, transparency, and quality care.{" "}
            </div>
          </div>
          <div className="header-button-group">
            <FilledButtonProperty1Enabled
              instance={<Home01 className="home-01-instance" />}
              boolean={false}
              text="Get Started"
              className="filled-button-instance"
            ></FilledButtonProperty1Enabled>
            <OutlineButtonProperty1Enabled
              instance={<Home01 className="home-01-instance" />}
              boolean={false}
              text="Learn More"
              className="outline-button-instance"
            ></OutlineButtonProperty1Enabled>
          </div>
        </div>
        <div className="frame-1707478729">
          <div className="trusted-by-thousands-of-patients-and-providers">
            Trusted by Thousands of Patients and Providers{" "}
          </div>
          <div className="frame-1707478728">
            <div className="frame-1707478725">
              <div className="_50-000">50,000+ </div>
              <div className="patients-served">Patients Served </div>
            </div>
            <div className="frame-1707478726">
              <div className="_10-000">10,000+ </div>
              <div className="verified-providers">Verified Providers. </div>
            </div>
            <div className="frame-1707478727">
              <div className="_99">99% </div>
              <div className="satisfaction-rate">Satisfaction Rate. </div>
            </div>
          </div>
        </div>
        <div className="frame-1707478770">
          <img className="first-aid-kit" src="first-aid-kit0.svg" />
        </div>
      </div>
      <img className="image" src="image0.png" />
      <div className="frame-1707478769">
        <img className="stethoscope" src="stethoscope0.svg" />
      </div>
      <div className="frame-1707478771">
        <img className="health" src="health0.svg" />
      </div>
    </div>
  );
};
