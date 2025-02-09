import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
<div className="top-banner">
       <p>Admission is Open, Grab your seat now →</p>
    </div> 
    <nav className="main-nav">
      <div className="logo-container">
        <img  alt="Little Learners Logo" className="logo" />
      </div>
      <ul className="nav-links">
      <li><Link to="/">Home</Link></li> 
          <li><Link to="/about">About Us</Link></li> 
          <li><Link to="/Academics">Academics</Link></li> 
          <li><Link to="/Admissions">Admissions</Link></li> 
          <li><Link to="/Student-life">Student Life</Link></li> 
          <li><Link to="/Contact">Contact</Link></li> 
       
      </ul>
    </nav>
    <section className="contact-section">
      <div className="contact-content">
        <div className="contact-left">
            <img src="../img/Abstract Design.png" alt="" />
          <button className="contact-button">Contact Us</button>
          <h2>Feel Free To Connect With Us</h2>
        </div>
        <div className="contact-right">
          <p>We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods</p>
          <div className="contact-info">
            <div className="info-box">
              <span className="icon">✉</span>
              <p>hello@littlelearners.com</p>
            </div>
            <div className="info-box">
              <span className="icon"></span>
              <p>+91 91813 23 2309</p>
            </div>
            <div className="info-box">
              <span className="icon"></span>
              <p>Somewhere in the World</p>
            </div>
            <div className="info-box">
              <span className="icon">⏱</span>
              <p>Office Hours - 9am-6pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Header
