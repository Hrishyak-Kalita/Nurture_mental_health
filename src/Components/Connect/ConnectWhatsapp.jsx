import React from 'react';
import './ConnectUs.scss';
import { Icon } from "@iconify/react";
const ConnectWhatsapp = ({ phoneNumber, message }) => {
    const handleWhatsAppButtonClick = () => {
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <button className='connectBtn' onClick={handleWhatsAppButtonClick}>
            <Icon icon="jam:whatsapp" width="30" style={{color: "#5ca206"}} />
        </button>
    );
}

export default ConnectWhatsapp;
