import React from "react";
import { TileDesc, Quote } from "../../Components";
import "./Service.scss";
import serviceData from "../../assets/services.json"
import ConnectWhatsapp from "../../Components/Connect/ConnectWhatsapp";
import ConnectPhone from "../../Components/Connect/ConnectPhone";


const Service = () => {

  return (
    <>
   
      <Quote heading="Our Services" subHeading="Get the best Therapy and Counselling"/>


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
              <ConnectWhatsapp className="s_btn"/>
              <ConnectPhone className="s_btn"/>
              </div>
          </div>
        )}

      </div>
    </>
  );
};
export default Service;
