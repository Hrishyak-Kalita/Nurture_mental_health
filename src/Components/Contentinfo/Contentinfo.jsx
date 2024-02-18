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
          At Nurture Mental Health, we are dedicated to fostering mental
          well-being and creating a supportive community where individuals can
          thrive. Established with a commitment to promote mental health
          awareness, providing accessible counseling, etc. We are here to guide
          and support you on your journey to a healthier, more fulfilling life.
        </p>

        <ul className="li_el_box">
          <li className="li_el">
            {" "}
            <span>Individual Therapy</span>
          </li>
          <li className="li_el">
            {" "}
            <span> Admission to Rehabilitation Center Services</span>
          </li>
          <li className="li_el">
            {" "}
            <span>Volunteer at Our Awareness & Sensitization Programs</span>
          </li>
          <li className="li_el">
            {" "}
            <span>Family Therapy</span>
          </li>
          <li className="li_el">
            {" "}
            <span>Couple Therapy</span>
          </li>
          <li className="li_el">
            {" "}
            <span>Kids & Adolescent Therapy</span>
          </li>
         
          <li className="li_el">
            {" "}
            <span>Carrier Counselling</span>
          </li>
          <li className="li_el">
            {" "}
            <span>Addiction and Substance Abuse Counseling</span>
          </li>
          <li className="li_el">
            {" "}
            <span>LGBTQ+ Affirmative Counseling</span>
          </li>
          
        </ul>
        <button className="Readbtn">Read More</button>
      </div>
      <div className="DocImg">
        <img
          src="https://res.cloudinary.com/dttau3ddh/image/upload/v1708184699/WhatsApp_Image_2024-02-17_at_19.41.42_qaesue.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
