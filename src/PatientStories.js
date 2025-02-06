import React from 'react';
import './PatientStories.css';

const PatientStories = () => {
    const stories = [
        {
            title: "Peace of Mind Through Accessible Mental Health Support",
            name: "John T",
            service: "Mental Health Service",
            image: "/Images/image8.png", // Replace with actual image path
            size: "medium1",
        },
        {
            title: "A Compassionate Pediatrician for My Daughter",
            name: "Sophia R",
            service: "Pediatric Service",
            image: "/Images/image9.png", // Replace with actual image path
            size: "large1",
        },
        {
            title: "CareWay Helped Me Stay Healthy on the Go",
            name: "Carlos M",
            service: "Orthopedic Service",
            image: "/Images/image10.png", // Replace with actual image path
            size: "large2",
        },
        {
            title: "A Life-Changing Diagnosis Made Possible by Early Detection",
            name: "Anita K",
            service: "Cancer",
            image: "/Images/image11.png", // Replace with actual image path
            size: "medium2",
        },
    ];

    return (
        <div className="frame-stories">
            <h2 className="real-stories-from-our-patients">Real Stories from Our Patients</h2>
            <div className="frame-1707478753">
                <div className="story-row">
                    {stories.slice(0, 2).map((story, index) => (
                        <div key={index} className={`frame-1707478750 ${story.size}`}>
                            <div className="image">
                                <img src={story.image} alt={story.title} />
                                <div className="play-circle">
                                    <img src={`${process.env.PUBLIC_URL}/Icon/play-circle-020.svg`} alt="Play" className="play-icon" />
                                </div>
                            </div>
                            <h3 className="headline">{story.title}</h3>
                            <div className="frame-1707478749">
                                <p className="john-t">{story.name}</p>
                                <p className="mental-health-service">{story.service}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="story-row">
                    {stories.slice(2).map((story, index) => (
                        <div key={index} className={`frame-1707478750 ${story.size}`}>
                            <div className="image">
                                <img src={story.image} alt={story.title} />
                                <div className="play-circle">
                                    <img src={`${process.env.PUBLIC_URL}/Icon/play-circle-020.svg`} alt="Play" className="play-icon" />
                                </div>
                            </div>
                            <h3 className="headline">{story.title}</h3>
                            <div className="frame-1707478749">
                                <p className="john-t">{story.name}</p>
                                <p className="mental-health-service">{story.service}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PatientStories;