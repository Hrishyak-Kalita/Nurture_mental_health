import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import {
  Button,
  Navbar,
  Testimonial,
  Appointment_img_icon,
  FixedContact,
  // , Youtube
} from "../../Components";

import Carousel from "../../Components/Carousel/Carousel";
import IntroToAdd from "../../Components/IntroToAdd/IntroToAdd";
import MedicaIntro from "../../Components/MedicaIntro/MedicaIntro";
import Contentinfo from "../../Components/Contentinfo/Contentinfo";
import Testimonial_carousel from "../../Components/Testimonial_carousel/Testimonial_carousel";
import { Helmet } from "react-helmet";
import Hero from "../../Components/Hero/Hero";
// import { Testimonial_Clients } from '../../Components/Testimonial_Clients/Testimonial_Clients'

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nurture Mental Health</title>
        <meta
          name="description"
          content="At Nurture Mental Health, we are dedicated to fostering mental well-being and creating a supportive community where individuals can thrive. Established with a commitment to promote mental health awareness, providing accessible counseling, etc. We are here to guide and support you on your journey to a healthier, more fulfilling life."
        />
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>

      <div className="home">
        {/* <Carousel /> */}
        <Hero
          phoneNumber="918638583313"
          size="20"
          message="Hi, I am seeking assistance from Nurture Mental Health Center"
        />
        <IntroToAdd
          phoneNumber="918638583313"
          size="20"
          message="Hi, I am seeking assistance from Nurture Mental Health Center"
        />

        <MedicaIntro />

        <Contentinfo />

        <Testimonial_carousel />
        {/* <Testimonial_Clients/> */}
        {/* <Youtube width={50} height={35} /> */}
        {/* <Appointment_img_icon/> */}
        <FixedContact />
      </div>
    </>
  );
};

export default Home;
