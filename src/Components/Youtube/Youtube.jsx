import React from 'react';
import '@splidejs/splide/css';
import './Youtube.scss'
import { ElfsightWidget } from 'react-elfsight-widget';
const Youtube = ({ width, height }) => {
    const videoIds = ["XHG6M6ztbRI", "l3fOcGENSwM", "https://youtu.be/XHG6M6ztbRI?si=zRuzOgiD17aPzpsm"];
    return (
        <div className="video-container">
            <ElfsightWidget widgetId="4266e4f3-9be2-4898-9968-fab00640debe" lazy modern />
        </div>


    );
};

export default Youtube;
