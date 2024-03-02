import React, { useState } from "react";
import { Rate ,Avatar,Space} from "antd";
import "./Testimonial_Clients.scss";
import { UserOutlined } from '@ant-design/icons';
import Data from "../../assets/Clients.json";

const Testimonial_Clients = ({item}) => {
  const LinkArray = Data.links;
  const [check,setCheck]= useState(true);
  console.log(LinkArray);

  const checkingRead=()=>{
    if(check) setCheck(false);
    else setCheck(true);
  }

  return (
    <>
    
      
    <div className="main_container">
        <div key={item.id} className="clients">
          <div className="image centerEle">
            <Avatar 
              style={{
                backgroundColor: "white",
                color:"black",
                fontSize:"2rem",
                boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1"
              }}
              // icon={<UserOutlined />}
              size={100}
            >{item.name.slice(0,1)}</Avatar>
          </div>
          <div className="name">
            <h3 className="client_name">{item.name}</h3>
          </div>
          <div className="contain">
            
        
         
            {check? item.content.slice(0,150)+"...." :item.content }
            <div className="testimonial_read_more" >

            <button onClick={checkingRead} className="readMoreButton" >{check?"Read More":"Read Less"}</button>
            </div>
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
