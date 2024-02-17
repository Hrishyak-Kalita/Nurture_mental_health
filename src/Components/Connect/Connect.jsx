import "./Connect.scss";
import { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
const Connect = ({ data, number,size }) => {
    const [phNo,setPhNo] =useState(number);

    useEffect(()=>{
        setPhNo(number)
    })

    if(!size) size=10

    return (
        
        <div className="connect_container">
                <a href={`https://wa.me/919706245997?text=Service: therapy`} className={`wp_link`}>
                    
                <Icon icon="mdi:whatsapp" width={`${size}`} color="green" />
                    </a>
        </div>
    );
};

export default Connect;
