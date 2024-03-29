import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Denzy from '../../img/denzy.png'
import Workimg from '../../img/workimg2.png' 
import Sidebar from '../../img/Denzyimg.png'
import Ecommerce from '../../img/Ecommerce.png'
import 'swiper/css'
import {themeContext} from '../../Context'
import { useContext } from 'react'

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio' name='Portfolio'>
        {/* heading  */}
        <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider  */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'>
            <SwiperSlide>
                <img src={Denzy} alt="" />

            </SwiperSlide>
            <SwiperSlide>
                <img src={Workimg} alt="" />

            </SwiperSlide>
            <SwiperSlide>
                <img src={Sidebar} alt="" />

            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt="" />

            </SwiperSlide>


        </Swiper>


    </div>
  )
}

export default Portfolio