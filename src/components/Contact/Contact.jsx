import React from 'react'
import './Contact.css'
import {themeContext} from '../../Context'
import { useContext } from 'react'

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    
  return (
    <div className='contact-form'>
        <div className='w-left'>
            <div className='awesome'>
                <span style={{color: darkMode? 'white': ''}}>Get in touch</span>
                <span>Contact me</span>
                <div 
                    className='blur s-blur1'
                    style={{background:"#abf1ff94"}}
                ></div>
            </div>
        </div>

        <div className='c-right'>
            <form action="https://getform.io/f/1b77363a-8d02-4180-988e-fbd9411fb9d1" method='POST'>
                <input type="text" name="name" className='user' placeholder='Name' />
                <input type="email" name="email" className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='Message'/>
                <input type="submit" value='Send' className='button' />
                <div
                className='blur c-blur1'
                style={{background: 'var(--purple)'}} 
                >

                </div>
            </form>

        </div>

    </div>
  )
}

export default Contact