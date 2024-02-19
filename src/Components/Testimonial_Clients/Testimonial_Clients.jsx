import React from "react";
import { Rate } from "antd";
import "./Testimonial_Clients.scss";
import Data from "../../assets/Clients.json";

const Testimonial_Clients = ({item}) => {
  const LinkArray = Data.links;
  console.log(LinkArray);

  return (
    <>
    
      
    <div className="main_container">
        <div key={item.id} className="clients">
          <div className="image">
            <img src={item.image} alt="client" />
          </div>
          <div className="name">
            <h3 className="client_name">{item.name}</h3>
          </div>
          <div className="contain">
            {item.content}
          </div>
          <div className="star_rate">
            <Rate disabled defaultValue={item.star_rated} />
          </div>
        </div>
    </div>
      </>
  );
};

export default Testimonial_Clients;
