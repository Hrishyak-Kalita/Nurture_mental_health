import React from "react";

import "./Appointment.scss";
const Appointment = ({ title }) => {
  return (
    <div className="Appointment">
      <h3>How to Reach us</h3>
      <div className="input">
        <p>
          <ul>
            <h5>Online Services</h5>
          </ul>
          <ul>
            <h5>Offline services :</h5>
            Kestopur, Dunlop, Bally, Joka, Patuli, Kalyani, Durgapur, Asansol,
            Dhanbad
          </ul>
        </p>
      </div>
    </div>
  );
};
export default Appointment;
