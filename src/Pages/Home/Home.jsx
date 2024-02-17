import React from 'react'
import "./Home.scss"
import { Link } from 'react-router-dom'
import { Button ,Navbar,Testimonial, Appointment_img_icon, ConnectMe} from '../../Components'
import Carousel from '../../Components/Carousel/Carousel'
import IntroToAdd from '../../Components/IntroToAdd/IntroToAdd'
import MedicaIntro from '../../Components/MedicaIntro/MedicaIntro'
import Contentinfo from '../../Components/Contentinfo/Contentinfo'




const Home = () => {
  return (
    <div className='home'>
      <ConnectMe phone="9706245997" size='30'/>
      <Carousel />
      <IntroToAdd />
      <MedicaIntro />
      <Contentinfo />    
       <Testimonial/>
     {/* <Appointment_img_icon/> */}

    </div>
  )
}

export default Home