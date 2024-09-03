import React from 'react';
import AboutWidget from './components/AboutWidget.js';
import GalleryWidget from './components/GalleryWidget';
import './App.css';

function App() {
  
  return (
    <div className="App">
      {/* Responsive container keeping left side empty */}
      <div className="content-container">
        <div className="empty-space" />
        <div className="widgets-container">
          <AboutWidget />
          <div className="divider"></div> {/* Divider Line */}
          <GalleryWidget />
          <div className="divider"></div> {/* Divider Line */}
        </div>
      </div>
    </div>
  );
}

export default App;
