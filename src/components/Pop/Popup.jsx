import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Popup = ({ isOpen, onClose, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="fixed inset-0 flex items-center justify-center z-10"
            overlayClassName="fixed inset-0 bg-black opacity-95 z-10"
        >
            <div className="bg-white rounded p-4 shadow-lg w-[75%] h-[75%] ">
                <div className=' h-5/6 '>{children}</div>
                <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4"
                    onClick={onClose}>
                    Cerrar
                </button>
            </div>
        </Modal>
    );
};

export default Popup;