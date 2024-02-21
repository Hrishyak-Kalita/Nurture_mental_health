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
          src="https://res.cloudinary.com/dttau3ddh/image/upload/v1708417639/a-female-therapist-sitting-in-her-chamber-alone-in-upscaled_1_1_dbml6d.jpg"
        />
      </div>
      <h4 className="emHead">Limpee Kalita</h4>
      <p className="emSubHead">
        Psychologist
        <span className="vr">|</span> CBT Practitioner{" "}
        <span className="vr">|</span> Hypnotherapist{" "}
        <span className="vr">|</span> Art Therapsit{" "}
        <span className="vr">|</span> Color Therapist{" "}
        <span className="vr">|</span> Carrier Counsellor
      </p>
      {/* <button className='readMorebtn' id="ReadEmer">Read More</button> */}
    </div>
  );
};

export default Emergency;
