import React, { useEffect, useState } from 'react'
import './Carousel.scss'


const Carousel = () => {
   const data = [
      { id: 1, src: "https://res.cloudinary.com/dttau3ddh/image/upload/v1708417639/a-female-therapist-sitting-in-her-chamber-alone-in-upscaled_1_1_dbml6d.jpg", },
      { id: 2, src: "https://res.cloudinary.com/dttau3ddh/image/upload/v1709365848/IMG_20230720_135323_zoxbff.jpg", },
      { id: 3, src: "https://res.cloudinary.com/dttau3ddh/image/upload/v1709367387/IMG_20240220_120138_r8ifiw.jpg", },
      { id: 4, src: "https://res.cloudinary.com/dttau3ddh/image/upload/v1709369587/IMG_20240111_141922_zds8hq.jpg" },
      { id: 5, src: "https://res.cloudinary.com/dttau3ddh/image/upload/v1708184303/A_3D_animate_11cd1d7e-a4af-4c8a-a635-fae01f6dee2a_gly0tq.png" }
   ]

   const [currIdx, setCurrIdx] = useState(0)
   const CarouselInfinteScroll = () => {
      if (currIdx == data.length - 1) {
         return setCurrIdx(0)
      }
      return setCurrIdx(currIdx + 1)
   }

   useEffect(() => {
      const interval = setInterval(() => { CarouselInfinteScroll() }, 4000)

      return () => clearInterval(interval)
   })

   return (
      <div className='carousel-container'>
         {data.map((item, index) => {
            return (
               <>
                  <div className='button-div'>
                     <div className="description">
                        <p className='heading-name'>Nurture Mental Health </p>
                        <p className='Heading-Description'><span className='midStyle'>with</span> Limpee Kalita </p>
                     </div>
                     {/* <div className="all-button">
                           <button className='appointment'>Make an Appointment</button>
                           <button className='read-more'>Read More</button>
                        </div> */}
                  </div>

                  <div className='carousel-item'
                     style={{ transform: `translate(-${currIdx * 100}%)` }}
                     key={index}>
                     {/* <h1>{item.name}</h1> */}
                     <img key={item.id} src={item.src}></img>
                  </div>

               </>)
         })
         }

      </div>
   )
}

export default Carousel
