/*import React, { useState } from 'react';
import Popup from './Popup';

const Emergente = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleOpenPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleOpenPopup}
            >
                Mostrar Ventana Emergente
            </button>

            {showPopup && (
                <Popup onClose={handleClosePopup}>
                    Contenido de la Ventana Emergente
                </Popup>
            )}
        </div>
    );
};

export default Emergente;
*/
import React, { useState } from 'react';
import Popup from './Popup';

const Emergente = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleOpenPopup}
      >
        Abrir ventana emergente
      </button>

      <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
        Contenido de la ventana emergente
      </Popup>
    </div>
  );
};

export default Emergente;
