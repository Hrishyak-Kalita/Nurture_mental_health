import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./Testimonial_carousel.module.scss";

import  Testimonial_Clients  from "../Testimonial_Clients/Testimonial_Clients";
import Data from '../../assets/Clients.json'
const Testimonial_carousel = () => {
    
  return (
    <div className={styles.Container}>
    
      <div className={styles.hrline}>x </div>
      <h1 className={styles.title}>Clients Testimonials</h1>
      <Swiper
        className={styles.MySwiper}
        slidesPerView={2.5}
        effect="coverflow"
        grabCursor={1}
        centeredSlides={1}
        autoplay={{
          delay: 3000,
        }}
        loop={1}
        modules={[Navigation, Autoplay]}
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
            slidesPerView: 1.5,
          },
          740: {
            slidesPerView: 3,
          },
        }}

        // swiper end
      >
        
        <div className={styles.sliderControler}>
          <div className={styles.swiperButtonPrev} id="swiper-button-prev">
            <IoIosArrowBack className={styles.bckarrow} />
          </div>
          <div className={styles.swiperButtonNext} id="swiper-button-next">
            <IoIosArrowForward className={styles.nxtarrow} />
          </div>
        </div>

        

        {Data.map((item) => (
          <SwiperSlide /*key={item.id}*/ className={styles.slide}>
            <div className={styles.Box}>

              <Testimonial_Clients item={item}/>
            </div>
          </SwiperSlide>
         ))} 
      </Swiper>
    </div>
  );
};

export default Testimonial_carousel;