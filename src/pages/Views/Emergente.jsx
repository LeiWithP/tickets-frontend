import React, { useState } from 'react';
import Popup from './Popup';
import FormTicket from '../Views/FormTicket';


const Emergente = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const formData = {
        peticion: 'Peticion',
        lastName: 'Doe',
        country: 'usa',
        fechaEntrega: '2022-05-16T00:00:00.000Z'
    };

    return (
        <div className='w-full h-full'>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                onClick={handleOpenPopup}
            >
                Abrir ventana emergente
            </button>

            <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
                <FormTicket formData={formData} />
            </Popup>
        </div>
    );
};

export default Emergente;
