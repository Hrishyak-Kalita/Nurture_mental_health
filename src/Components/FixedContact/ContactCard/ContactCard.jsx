import { Avatar } from "antd";
import React from "react";
import ConnectPhone from "../../Connect/ConnectPhone";
import ConnectWhatsapp from "../../Connect/ConnectWhatsapp";
import "./ContactCard.scss";
const ContactCard = () => {
  const url =
    "https://res.cloudinary.com/dttau3ddh/image/upload/v1709041556/IMG_20240226_140813_scggzm.jpg";
  return (
    <div className="contactCard">
      <Avatar
        className="avatar"
        size={100}
        src={<img src={url} alt="avatar" />}
      />
      <div className="contactButtons">
        <h3 className="name">Limpee Kalita</h3>
        <p className="designation">Psychologist</p>
        <div className="callConnect">
          <ConnectWhatsapp
            phoneNumber="918638583313"
            size="20"
            message="Hi, I am seeking assistance from Nurture Mental Health Center"
          />
          <ConnectPhone phoneNumber="8638583313" />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
