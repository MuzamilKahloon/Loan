import React from 'react';
import Navbar from '../components/Navbar';
import './About.css';
import img from '../../public/Fin/bradcam2.png'; // Background image
import Choice from '../components/Choice'
import Working from '../components/Working'
import Ask from '../components/Ask'
import Testimonial from '../components/Testimonials'
import CompanyLogo from '../components/CompanyLogo';
import ApplyLoan from '../components/ApplyLoan'
import Footer from '../components/Footer'
const About = () => {
  return (
    <>
    <div className="about-section" style={{ backgroundImage: `url(${img})` }}>
      <Navbar />
      <div className="about-content">
        <h1>About Us</h1>
        <div className="contact-info">
        </div>
      </div>
    </div>
    <Choice />
    <Working/>
    <Ask/>
    <Testimonial/>
    <CompanyLogo/>
    <ApplyLoan/>
    <Footer/>
    </>
  );
};

export default About;