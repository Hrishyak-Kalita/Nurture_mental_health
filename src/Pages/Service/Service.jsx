import React from "react";
import { TileDesc, Quote } from "../../Components";
import "./Service.scss";
import serviceData from "../../assets/services.json"
import JoinAndCollaborate from "../JoinAndCollaborate/JoinAndCollaborate";


const Service = () => {

  return (
    <>
<<<<<<<<< Temporary merge branch 1
      {/* <TileDesc name="OUR SERVICES" /> */}
      <Quote heading="Our Services" subHeading="Get the best Therapy and Counselling"/>
=========
      <TileDesc name="OUR SERVICES" description="SERVICES"/>
>>>>>>>>> Temporary merge branch 2

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
            <button className="readMorebtn">Read More</button>
          </div>
        )}
      </div>
    </>
  );
};
export default Service;
