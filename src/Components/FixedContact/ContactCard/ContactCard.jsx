import React from 'react'
import { Avatar } from 'antd';
import { Icon } from "@iconify/react";
import './ContactCard.scss'
import { Link } from 'react-router-dom';
import ConnectWhatsapp from '../../Connect/ConnectWhatsapp';
import ConnectPhone from '../../Connect/ConnectPhone';
const ContactCard = () => {
  const url = 'https://res.cloudinary.com/dttau3ddh/image/upload/v1708332818/a-female-therapist-sitting-in-her-chamber-alone-in-upscaled_1_v9pffu.jpg'
  return (
    <div className='contactCard'>
      <Avatar className='avatar' size={100} src={<img src={url} alt="avatar" />} />
      <div className="contactButtons">
        <h3 className='name'>Limpee Kalita</h3>
        <p className='designation'>Psychologist</p>
        <div className="callConnect">
         <ConnectWhatsapp phoneNumber="918638583313" size="20" message="Hi, I am seeking assistance from Nurture Mental Health Center"/> 
         <ConnectPhone phoneNumber="918638583313"/>
        </div>
      </div>
    </div>
  )
}

export default ContactCard