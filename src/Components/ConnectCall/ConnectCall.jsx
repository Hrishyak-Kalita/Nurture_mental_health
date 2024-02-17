import "./ConnectCall.scss";
import { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
const ConnectCall = ({ data, number,size }) => {
    const [phNo,setPhNo] =useState(number);

    useEffect(()=>{
        setPhNo(number)
    },[])

    if(!size) size=10

    return (
        
        <div className="connect_container">
                <a href='tel:+91-9706245997' className={`wp_link`}>
                    
                <Icon icon="mdi:phone" width={`${size}`} color="blue" />
                    </a>
        </div>
    );
};

export default ConnectCall;
