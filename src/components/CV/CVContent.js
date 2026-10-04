import React from "react";

const CVContent = () => {
  return (
    <div className="section cv-content">
      <div className="cv-embed-container" style={{ height: '1000px', width: '100%', marginTop: '20px' }}>
        <iframe
          src="https://drive.google.com/file/d/1mOcz7Cojstoz0IK2XIx4Bq87h6Jm3IgZ/preview"
          width="100%"
          height="100%"
          allow="autoplay"
          title="Full CV"
        ></iframe>
      </div>
    </div>
  )
}

export default CVContent;