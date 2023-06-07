import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import CV from './DENZYTECH.docx'
import {themeContext} from '../../Context'
import { useContext } from 'react'
import { animated, useSpring } from '@react-spring/web'


const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='services' name='Services'>
        {/* left side */}
        <div className='awesome'>
            <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
            <span>services</span>
            <span>This are few and highligthed web development services
                <br />
                that i render to the tech cravings of my clinets
            </span>
            <a href={CV} download>

            <button className='button s-button'>Download CV</button>
            </a>
            <div className='blur s-blur1' style={{background:'#abf1ff94'}}></div>

        </div>
        {/* right side */}
        <div className='cards'>
            <animated.div 
              style={useSpring({
                from: { left: '25rem' },
                to: { left: '17rem' },
                config: { duration: 2000, loop: true },
              })}
            >
                <Card
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {'Figma, Adobe xd, Photoshop, Adobe,Sketch.'}
                />
            </animated.div>
                {/* second card  */}
            <animated.div 
              style={useSpring({
                from: { left: '-10rem' },
                to: { top: '12rem', left: '-3rem' },
                config: { duration: 2000, loop: true },
              })}
            // style={{top:'12rem', left: '-3rem'}}
            >
            <Card
                emoji = {Glasses}
                heading = {'Developer'}
                detail = {'HTML, CSS, React.js, Python, JavaScript, Django, Tailwind, Github.'}
                />
                {/* Third card  */}

            </animated.div>
            <animated.div 
              style={useSpring({
                from: { left: '19rem' },
                to: { top: '19rem', left: '14rem' },
                config: { duration: 2000, loop: true },
              })}
            // style={{top: '19rem', left: '14rem'}}
            >
            <Card
                emoji = {Humble}
                heading = {'Project Manager'}
                detail = {'Project supervising, Project Documnetation'}
                />
            </animated.div>
            <div className='blur s-blur2' style={{ background: 'var(--purple)'}}>

            </div>
        </div>

    </div>
  )
}

export default Services