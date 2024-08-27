import React from "react";
import "./Hero.scss";
const Hero = ({ phoneNumber, message }) => {

    const handleWhatsAppButtonClick = () => {
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 hero">
        <div className="w-full md:mt-32 order-2 md:order-1  left-box">
          <div className="space-y-7">
            <h1 className=" content font-bold" id="hero-head">
              Book a Healing session with Psychology
              <span className="text-pink-500"> Specialist</span>
            </h1>
            <p className="text-xl">
              <div className="name font-bold bg-teal-400 rounded-xl w-fit px-3 my-2 text-white">
                Ms. Limpee Kalita
              </div>
              <br />
              <span className="space-y-4">Ready for Mental Healing?</span>
              <br />
              <div className="bg-red-500 rounded-xl px-3 text-2xl w-fit my-3">
                <button  onClick={handleWhatsAppButtonClick}>Book an Apointment</button>
              </div>
            </p>
          </div>
        </div>
        <div className="w-full order-1 imageBox">
          {/* <img   src={Limpee} alt="" /> */}
          <div className="heroImage"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
