import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation , Pagination} from "swiper/modules";
import 'swiper/css'
import 'swiper/css/navigation'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./Testimonial_carousel.module.scss";

import  Testimonial_Clients  from "../Testimonial_Clients/Testimonial_Clients";
import Data from '../../assets/Clients.json'
import { useState } from "react";

 

const Testimonial_carousel=()=> {
  const [clicked ,setClicked]=useState(false);
  const isClicked=()=>{
    if(clicked) setClicked(false);
    else setClicked(true);
  }
  return (
    <div className={styles.Container}>

      <div className={styles.hrline}>x </div>
      <h1 className={styles.title}>Clients Testimonials</h1>
      <Swiper
        className={styles.MySwiper}
        slidesPerView={3}
        pagination={true}
        effect="coverflow"
        grabCursor={1}
        centeredSlides={1}
        // autoplay={
        //   clicked?
        //     false:
        //   {
        //     disableOnInteraction: false,
        //     delay:3000,
        //     pauseOnMouseEnter: true,
        //   }
        // }
        loop={1}
        modules={[Navigation, Autoplay, Pagination]}
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        navigation={{
          nextEl: "#swiper-button-next",
          prevEl: "#swiper-button-prev",
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          740: {
            slidesPerView: 1.5,
          },
          1092: {
            slidesPerView: 3,
          }
        }}

      >

        <div className={styles.sliderControler}>
          <div className={styles.swiperButtonPrev} id="swiper-button-prev">
            <IoIosArrowBack size={80} color="#dbdbdb" className={styles.bckarrow} />
          </div>
          <div className={styles.swiperButtonNext} id="swiper-button-next">
            <IoIosArrowForward size={80} color="#dbdbdb" className={styles.nxtarrow} />
          </div>
        </div>



        {Data.map((item) => (
          <SwiperSlide /*key={item.id}*/ className={styles.slide}>
            <div className={styles.Box} onClick={isClicked}>

              <Testimonial_Clients item={item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonial_carousel;