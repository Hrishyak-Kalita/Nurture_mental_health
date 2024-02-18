import React from "react";
import "./Contentinfo.scss";

export default function Contentinfo() {
  return (
    <div className="ContentContainer">
      <div className="Medicacontent">
        <h1>
          Welcome to <img width="40" src="/logoOnly.svg" alt="" /> Nurture
          Mental Health
        </h1>

        <p className="ContentPara">
        At  Nurture Mental Health we are dedicated to fostering mental well-being and creating a supportive community where individuals can thrive. Established with a commitment to  promote mental health awareness, providing accessible counseling, etc., we are here to guide and support you on your journey to a healthier, more fulfilling life.
        </p>

        < ul className="li_el_box">
          <li className="li_el">
            {" "}
            <span>Service 1</span>
          </li>
          <li className="li_el">
            {" "}
            <span>Service 2</span>
          </li>
          <li className="li_el">
            {" "}
            <span>Service 3</span>
          </li>
          <li className="li_el">
            {" "}
            <span>Service 4</span>
          </li>
          <li className="li_el">
            {" "}
            <span>Service 5</span>
          </li>
        </ul>
        <button className="Readbtn">Read More</button>
      </div>
      <div className="DocImg">
      </div>
    </div>
  );
}
