import React from 'react'
import './Testimonial.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Tunder from '../../img/tunde.jpeg'
import Ibrahim from '../../img/WhatsApp Image 2023-02-13 at 15.11.32.jpeg'
import Abiodun from '../../img/abiondu.jpeg'
import Sam from '../../img/1000015049.jpg'
import {Pagination} from 'swiper';
import 'swiper/css/pagination'
import 'swiper/css'

const Testimonial = () => {
   const clients = [
        {
            img: Tunder,
            name: "Tunde",
            review:
                "The attention to detail and the constant updates show the developer's commitment to providing a top-notch experience."
        },
        {
            img: Sam,
            name: "Sam",
            review:
                "The seamless integration with other tools and services has saved me time and effort "
        },
        {
            img: Abiodun,
            name: "Abiodun",
            review:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'Content here, content here',"
        },
        {
            img: Ibrahim,
            name: "Ibrahim",
            review:
                "Using this tech app has been a game-changer for me. user-friendly, and packed with powerful features. The app has greatly simplified my workflow and helped me stay organized.  "
        }
    ]


  return (
    <div className='t-wrapper' name='Testimonials'>
        <div className='t-heading'>
            <span>Clients always get </span>
            <span>Exceptional Work </span>
            <span>from me...</span>
            <div className='blur t-blur1' style={{background: "var(--purple)"}}></div>
            <div className='blur t-blur2' style={{background: "skyblue"}}></div>
    

        </div>
        {/* slider  */}
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable: true}}

        
        >
            {clients.map((clients, index)=>{
                return (
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                        <img src={clients.img} alt="" />
                        <span>{clients.name}</span>
                        <span>{clients.review}</span>
                        </div>

                        

                    </SwiperSlide>
                )

            })}

        </Swiper>


    </div>
  )
}

export default Testimonial