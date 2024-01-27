import React from 'react'
import "./Footer.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import logo from "../../asset/logo.png";
const Footer = () => {
  return (
    <footer id='footer'>
      <div className='container footer'>
        <div className='footer-box'>
          <h4>UseFul Links</h4>
          <div className='footer-links'>
            <a href="#">&bull; Support</a>
            <a href="#">&bull; About</a>
            <a href="#">&bull; Learn</a>
            <a href="#">&bull; Hosting</a>
            <a href="#">&bull; Messenger</a>
          </div>
        </div>
        <div className='footer-box'>
        <h4>Support</h4>
          <div className='footer-links'>
            <a href="#">&bull; Support</a>
            <a href="#">&bull; About</a>
            <a href="#">&bull; Learn</a>
            <a href="#">&bull; Hosting</a>
            <a href="#">&bull; Messenger</a>
          </div>
        </div>
        <div className='footer-box'>
        <h4>Contact US</h4>
          <div className='footer-contact'>
            <p>
              <FaMapMarkerAlt /> &nbsp; Address:United States.
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +1230 123
            </p>
            <p>
              <FaFax /> &nbsp; Fax:+12345674866
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: info@socialx.
            </p>
            <p>
              <FaGlobe /> &nbsp; Website: WWW.socialx.com
            </p>
          </div>
        </div>
        <div className='footer-box'>
          <img src={logo} alt="logo" />
          <p className='u-small-text'>
            &copy; Copyright 2021. SocialX.com
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer