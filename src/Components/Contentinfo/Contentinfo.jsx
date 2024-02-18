import React from "react";
import "./Contentinfo.scss";

export default function Contentinfo() {
    return (

        <div className='ContentContainer'>
            <div className='Medicacontent'>

                <h1>Welcome to <img width='40' src="/logoOnly.svg" alt="" /> Nurture Mental Health</h1>



                <p className='ContentPara'>
                    Lorem uis facilis sed quo cumque numquam suscipit ipsum ipsam sunt sit optio asperiores libero vitae vero amet natus. Nostrum, inventore? Sapiente maiores, a commodi ipsum exercitationem architecto ad magnam eligendi corrupti molestias! Sapiente quae eaque dicta doloribus ratione nostrum recusandae debitis sint veritatis ducimus suscipit nam, perspiciatis pariatur sit, perferendis impedit quaerat magni fugiat maxime labore aliquid?
                </p>

                <ul>
                    <li> <span>Individual Therapy</span></li>
                    <li> <span>Family Therapy</span></li>
                    <li> <span>Couple Therapy</span></li>
                    <li> <span>Kids & Adolescent Therapy</span></li>
                    <li> <span>Awareness & Sensitization Programs</span></li>
                    <li> <span>Carrier Counselling</span></li>
                    <li> <span>Addiction and Substance Abuse Counseling</span></li>
                    <li> <span>LGBTQ+ Affirmative Counseling</span></li>


                </ul>
                <button className='Readbtn'>Read More</button>
            </div>
            <div className='DocImg'>
                <img src="https://res.cloudinary.com/dttau3ddh/image/upload/v1708184699/WhatsApp_Image_2024-02-17_at_19.41.42_qaesue.jpg" alt="" />
            </div>

        </div>

    )
}
