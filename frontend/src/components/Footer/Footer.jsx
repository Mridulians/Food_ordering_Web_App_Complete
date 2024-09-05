// import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ex quibusdam dolores eum deserunt rerum libero doloremque magnam ipsam rem modi omnis tenetur doloribus repudiandae numquam cum corporis, sit provident!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-232-232-4230</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
        Copyright 2024 © Tomato.com - All rights reserved.
        </p>
    </div>
  )
}

export default Footer