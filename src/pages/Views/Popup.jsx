import React from 'react';

const Popup = ({ onClose, children }) => {
    return (
        <div className="popup">
            <div className="popup-content">
                {children}
            </div>
            <button className="popup-close" onClick={onClose}>Cerrar</button>
        </div>
    );
};

export default Popup;
