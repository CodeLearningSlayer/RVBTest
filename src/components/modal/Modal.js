import React from 'react';
import "./modal.scss"
const Modal = ({active, setActive, children}) => {
    return (
        <div className={`${active ? 'modal modal--active' : 'modal'}`}>
            <div className='modal__content'>
                {children}
            <span onClick={() => setActive(false)} className='close-modal'/>
            </div>
        </div>
    );
};

export default Modal;