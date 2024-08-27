import React from "react";
import { TileDesc, Quote } from "../../Components";
import "./Service.scss";
import serviceData from "../../assets/services.json"
import ConnectWhatsapp from "../../Components/Connect/ConnectWhatsapp";
import ConnectPhone from "../../Components/Connect/ConnectPhone";


const Service = () => {

  return (
    <>

      <Quote heading="Our Services" subHeading="Get the best Psychology Therapy and Counselling "  bgImage="https://res.cloudinary.com/dttau3ddh/image/upload/v1709379567/img-zxHGFI9nYnhAG4Td44jdT_n45d7y.png" />


      <div className="ServiceContainer">
        {serviceData?.map((item) =>


          <div className="ServiceBox" key={item?.id}>
            <img
              className="ServImg"
              src={item?.serviceImage}
              alt=""
            />
            <h3>{item?.service}</h3>
            <p className="servicePara">
              {item?.content}
              <ul className="service-key-box">

                {item?.serviceList?.map((listItem,index) =>
                
                    <li className="service-key" key={index}>
                      <span>{listItem}</span>
                    </li>
                )}
              </ul>
            </p>
            <div className="service_btn">
              <ConnectWhatsapp phoneNumber="918638583313" message="Hi, I am seeking assistance from Nurture Mental Health Center" className="s_btn"/>
              <ConnectPhone phoneNumber="8638583313" className="s_btn"/>
              </div>
          </div>
        )}

      </div>
    </>
  );
};
export default Service;
