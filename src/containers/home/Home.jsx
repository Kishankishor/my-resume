import React from 'react'
import './home.scss'
import { Animate } from 'react-simple-animate'
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export const Home = () => {
  

  
  return (
    <>

      <section id='home' className='home'>
        <div className='home__text-wrapper'>
          <h1>
            Hi! I'm Kishan Kishore
            <br />
            Web developer
          </h1>

        </div>
        <Animate  
        play
        duration={1.5}
        delay={0}
        start={{
          transform : 'translateY(400px)'
        }}
        end={{
          transform : 'translateX(0px)'
        }}>
          <div className="home__contact-me">
            <a href="https://drive.google.com/file/d/1ANr7FtYs0IrROzjGdC6ahxUXH9lYMSg3/view?usp=drivesdk">
            <button className='home__contact-me__button'  >View Resume</button>
            </a>
           
          </div>
         

        </Animate>
       

        <div className='contact'>
          
            <a href="https://wa.me/qr/Q5OWOC3TO4H4L1">
             
            <FaWhatsappSquare size={30} color='var(--yellow-theme-main-color)' />
            </a>
            <a href="https://www.facebook.com/kishan.kishore.967?mibextid=ZbWKwL">
             
            <FaFacebookSquare size={30} color='var(--yellow-theme-main-color)' />
            </a>
            <a href="https://www.instagram.com/kishan_kishore_m.k?igsh=NGVhN2U2NjQ0Yg==">
             
            <FaInstagramSquare size={30} color='var(--yellow-theme-main-color)' />
            </a>
          </div>
      


      </section>



    </>)

}
