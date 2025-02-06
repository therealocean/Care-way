import React, { useState } from "react";
import "./SpecialistsSlider.css"; // Create a separate CSS file for slider styles

const SpecialistsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const specialists = [
    {
      name: "Dr. Susan Carter",
      specialty: "Pediatrician",
      image: "/Image/image2.png",
    },
    {
      name: "Dr. Michael Lee",
      specialty: "Cardiologist",
      image: "/Image/image3.png",
    },
    {
      name: "Dr. Priya Singh",
      specialty: "Dentist",
      image: "/Image/image4.png",
    },
    {
      name: "Dr. Ahmed Salim",
      specialty: "Orthopedic Surgeon",
      image: "/Image/image5.png",
    },
    {
      name: "Dr. James O’Connor",
      specialty: "General Practitioner",
      image: "/Image/image6.png",
    },
  ];

  const showSlide = (index) => {
    if (index >= specialists.length) {
      setCurrentSlide(0);
    } else if (index < 0) {
      setCurrentSlide(specialists.length - 1);
    } else {
      setCurrentSlide(index);
    }
  };

  return (
    <div className="frame-1707478744">
      <div className="meet-our-specialists">Meet Our Specialists</div>
      <div className="slider-container">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {specialists.map((specialist, index) => (
            <div className="slide" key={index}>
              <div
                className="image"
                style={{
                  background: `url(${specialist.image}) center`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="frame-1707478740">
                  <div className="frame-1707 478773">
                    <div className="dr-name">{specialist.name}</div>
                    <div className="specialty">{specialist.specialty}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="prev" onClick={() => showSlide(currentSlide - 1)}>
          &#10094;
        </button>
        <button className="next" onClick={() => showSlide(currentSlide + 1)}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default SpecialistsSlider; 