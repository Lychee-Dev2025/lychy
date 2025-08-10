import React from 'react';
import './BlurredBlobsBackground.css';


function BlurredBlobsBackground() {
  return (
    <div className="blobs-rounded-container">
      <div className="blobs-bg">
        <div className="blob blob1" />
        <div className="blob blob2" />
        <div className="blob blob3" />
        <div className="blob blob4" />
      </div>
      {/* You can add children or content here if needed */}
    </div>
  );
}

export default BlurredBlobsBackground; 