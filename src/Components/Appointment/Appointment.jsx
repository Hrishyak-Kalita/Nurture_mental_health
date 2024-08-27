import React from "react";

import "./Appointment.scss";
const Appointment = ({ title }) => {
  return (
    <div className="Appointment">
      <h3>How to Reach us</h3>
      <div className="input">
        <p>
          <ul>
            <li>
              <h5>Online Services</h5>
            </li>
          </ul>
          <ul>
            <li>
              <h5>Offline services :</h5>
            </li>
            Kestopur, Dunlop, Bally, Joka, Patuli, Kalyani, Durgapur, Asansol,
            Dhanbad
          </ul>
        </p>
      </div>
    </div>
  );
};
export default Appointment;
