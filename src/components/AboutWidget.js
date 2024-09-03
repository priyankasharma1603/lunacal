import React, { useState } from 'react';
import './AboutWidget.css';

const AboutWidget = () => {
  const [activeTab, setActiveTab] = useState('About Me');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="widget about-widget">
      <div className="tabs">
        {['About Me', 'Experiences', 'Recommended'].map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="content">
        <p>
          {activeTab === 'About Me' && `Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.`}
          {/* Additional content for other tabs */}
        </p>
        <p>I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...</p>
      </div>
    </div>
  );
};

export default AboutWidget;
