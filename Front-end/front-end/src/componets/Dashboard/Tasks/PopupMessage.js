import React from 'react';

function PopupMessage({ message, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={onClose} className="popup-close-button">
          Close
        </button>
      </div>
    </div>
  );
}

export default PopupMessage;
