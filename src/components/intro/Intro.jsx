import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesemoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import {themeContext} from '../../Context'
import { useContext } from 'react'
import { animated, useSpring } from '@react-spring/web'


const Intro = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='intro'>
        <div className="i-left">
            <div className='i-name'>
                <span style={{color: darkMode? 'white': ''}}>Hi! I Am </span>
                <span>Oyeindenyifa Samuel Diegbegha</span>
                <span>Frontend Developer with high level of experience in web designing and development, producing Quality work</span>

            </div>
            <button className='button i-button'>Hire me</button>
            <div className="i-icons">
                <a href=""><img src={Github} alt="" /></a>
                <a href=""><img src={Linkedin} alt="" /></a>
                <a href=""><img src={Instagram} alt="" /></a>
           
                
            </div>

        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt=""  />
            <img src={boy} alt=""   />
            <animated.img
                style={useSpring({
                    from: { transform: 'translateX(-30%)' },
                    to: { transform: 'translateX(25%)' },
                    config: { duration: 2000 },

                })}
            src={glassesemoji} alt=""  />
            <animated.div 
              style={useSpring({
                from: { top: '-4%', left: '74%' },
                to: { top: '-4%', left: '68%' },
                config: { duration: 2000, loop: true },
              })}
            
            
            className='floating-div'>
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </animated.div>
            <animated.div
               style={useSpring({
                from: { top: '18rem', left: '9rem' },
                to: { top: '18rem', left: '0rem' },
                config: { duration: 2000, loop: true },
              })}
                    
            className='floating-div'>
                <FloatingDiv image={thumbup} txt1='Very unique' txt2='Designs'/>
            </animated.div>
            {/* blur */}
            <div className='blur' style={{background: 'rgb(238 210 255)'}}>

            </div>
            <div className='blur' style={{background: '#c1f5ff', top: '17rem', width:"21rem", height: "11rem", left:"-9rem"}}>

            </div>
            

        </div>
    </div>
  )
}

export default Intro