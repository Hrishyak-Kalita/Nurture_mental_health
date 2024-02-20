import React from 'react'
import "./Home.scss"
import { Link } from 'react-router-dom'
import { Button ,Navbar,Testimonial, Appointment_img_icon, FixedContact, Youtube} from '../../Components'
import Carousel from '../../Components/Carousel/Carousel'
import IntroToAdd from '../../Components/IntroToAdd/IntroToAdd'
import MedicaIntro from '../../Components/MedicaIntro/MedicaIntro'
import Contentinfo from '../../Components/Contentinfo/Contentinfo'
import Testimonial_carousel from '../../Components/Testimonial_carousel/Testimonial_carousel'
// import { Testimonial_Clients } from '../../Components/Testimonial_Clients/Testimonial_Clients'

const Home = () => {
  
  return (
    <div className='home'>
 
      <Carousel />
      <IntroToAdd />
      <MedicaIntro />

      <Contentinfo />    

       <Testimonial_carousel/>
       {/* <Testimonial_Clients/> */}
       <Youtube width={50} height={35} />
     {/* <Appointment_img_icon/> */}
     <FixedContact/>


    </div>
  )
}

export default Home