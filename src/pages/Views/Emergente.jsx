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
        <div className='w-full h-full '>
            <button
                className="mr-36 ml-10 space-x-8 bg-gradient-to-bl from-primary to-green-300 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer hover:scale-125"
                onClick={handleOpenPopup}
            >
                Crear
            </button>

            <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
                <FormTicket formData={formData} />
            </Popup>
        </div>
    );
};

export default Emergente;