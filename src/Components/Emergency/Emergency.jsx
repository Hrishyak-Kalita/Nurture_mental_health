import { Avatar } from "antd";
import React from "react";
import "./Emergency.scss";
const Emergency = ({ title }) => {
  return (
    <div className="Emer">
      {/* <h3>+0080 954 4557 884</h3> */}
      <div className="EmerPara">
        <Avatar
          size={150}
          src="https://res.cloudinary.com/dttau3ddh/image/upload/v1709041556/IMG_20240226_140813_scggzm.jpg"
        />
      </div>
      <h3 className="emHead">Limpee Kalita</h3>
      <p className="emSubHead">
        Psychologist
        <span className="vr">|</span> CBT Practitioner{" "}
        <span className="vr">|</span> Hypnotherapist{" "}
        <span className="vr">|</span> Art Therapsit{" "}
        <span className="vr">|</span> Color Therapist{" "}
        <span className="vr">|</span> Carrier Counsellor
        <span className="vr">|</span> Founder of Nurture Mental Health
      </p>
      {/* <button className='readMorebtn' id="ReadEmer">Read More</button> */}
    </div>
  );
};

export default Emergency;
