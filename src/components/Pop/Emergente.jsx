import React, { useState } from 'react';
import Popup from './Popup';


const Emergente = ({ form }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className='w-full h-full '>
            <button
                className="mr-2 ml-10 space-x-8 bg-gradient-to-bl from-primary to-green-300 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer hover:scale-125"
                onClick={handleOpenPopup}
            >
                Crear
            </button>

            <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
                {/* <TicketForm formData={formData} /> */}
                {form}
            </Popup>
        </div>
    );
};

export default Emergente;