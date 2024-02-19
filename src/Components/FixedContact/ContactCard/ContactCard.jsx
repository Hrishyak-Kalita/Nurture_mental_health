import React from 'react'
import { Avatar } from 'antd';
import { Icon } from "@iconify/react";
import './ContactCard.scss'
import { Link } from 'react-router-dom';
const ContactCard = () => {
  const url = 'https://res.cloudinary.com/dttau3ddh/image/upload/v1708332818/a-female-therapist-sitting-in-her-chamber-alone-in-upscaled_1_v9pffu.jpg'
  return (
    <div className='contactCard'>
      <Avatar className='avatar' size={80} src={<img src={url} alt="avatar" />} />
      <div className="contactButtons">
        <h3>Limpee Kalita</h3>
        <p>Psychologist</p>
        <div className="callConnect">
          whatsapp
        </div>
      </div>
    </div>
  )
}

export default ContactCard