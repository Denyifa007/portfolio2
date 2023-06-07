import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import {themeContext} from '../../Context'
import { useContext } from 'react'
import { animated, useSpring } from '@react-spring/web'


const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='works'>
        {/* left side */}
        <div className='awesome'>
            <span style={{color: darkMode? 'white': ''}}>Works for All these</span>
            <span>Brands & Clients</span>
            <span>This are few and highligthed web development services
                <br />
                that i render to the tech cravings of my clients,
                <br />
                Creating special and awesome web designs,
                <br />
                 With alot of awesome functionalities
            </span>
            <button className='button s-button'>Hire me</button>
            <div className='blur s-blur1' style={{background:'#abf1ff94'}}></div>
        
         </div>
         {/* right side  */}
         <div className='w-right'>
            <animated.div 
              style={useSpring({
                from: { transform: 'rotate(0deg)' },
                to: { transform: 'rotate(360deg)' },
                config: { duration: 5000, loop: true },
              })}
            className='w-mainCircle'>
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>
            </animated.div>
            {/* background Circle  */}
            <div className='w-backCircle blueCircle'></div>
            <div className='w-backCircle yellowCircle'></div>

         </div>

    </div>
  )
}

export default Works