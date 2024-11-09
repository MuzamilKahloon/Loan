import React from 'react';
import banner from '../../public/Fin/banner.png';
import '../Pages/Home.css'; // Import the CSS file
import Working from '../components/Working';
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials';
import Choice from '../components/Choice';
import Ask from '../components/Ask';
import Offers from '../components/Offers';
import ApplyLoan from '../components/ApplyLoan';
import Footer from '../components/Footer';
import CompanyLogo from '../components/CompanyLogo';
const Home = () => {
  return (
   <>
    <div className="home-container">
       <Navbar />
      <img src={banner} alt="Banner" className="banner-image" />
      <div className="overlay"></div>

      {/* Main Content */}
      <div className="content">
        <div className="text-section">
          <h1 className="main-heading">Get Loan for your Business growth or startup</h1>
          <button className="cta-button">How It Works</button>
        </div>

        {/* Form Section */}
        <div className="form-section">
          <h2 className="form-heading">How much do you want?</h2>
          <p className="form-subtext">We provide online instant cash loans with quick</p>
          <div className="form-controls">
            <select className="form-select">
              <option>Amount</option>
            </select>
            <select className="form-select">
              <option>Month</option>
            </select>
          </div>
          <p className="payment-info">You have to pay: $0</p>
          <button className="continue-button">Continue</button>
          </div>
      </div>

      
    </div>
    <Working />
    <Offers/>
    <Choice/>
    <Testimonials/>
    <ApplyLoan />
    <CompanyLogo/>
    <Ask/>
    <Footer/>
    </>
  );
};

export default Home;
