import React, { useState } from 'react';
import './ApplyLoan.css';
import Navbar from '../components/Navbar'
import img from '../../public/Fin/bradcam2.png'; // Background image
import Working from '../components/Working'
import Footer from '../components/Footer'

const ApplyLoan = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [purpose, setPurpose] = useState('');
  const [amount, setAmount] = useState('');
  const [month, setMonth] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log({ name, email, phone, purpose, amount, month, message });
  };

  return (
    <>
    <Navbar/>
    <div className="about-section" style={{ backgroundImage: `url(${img})` }}>
      <Navbar />
      <div className="about-content">
        <h1>Apply Loan</h1>
        <div className="contact-info">
        </div>
      </div>
    </div>
    <div className="apply-loan-form">
      <h2>How much do you want?</h2>
      <p>We provide online instant cash loans with quick approval that suit your term length</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone no.</label>
          <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="purpose">Purpose</label>
          <select id="purpose" value={purpose} onChange={(e) => setPurpose(e.target.value)}>
            <option value="">Select Purpose</option>
            <option value="Education">Education</option>
            <option value="Medical">Medical</option>
            <option value="Business">Business</option>
            <option value="Home Improvement">Home Improvement</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <select id="amount" value={amount} onChange={(e) => setAmount(e.target.value)}>
            <option value="">Select Amount</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
            <option value="2000">2000</option>
            <option value="5000">5000</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="month">Month</label>
          <select id="month" value={month} onChange={(e) => setMonth(e.target.value)}>
            <option value="">Select Month</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="6">6</option>
            <option value="12">12</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>

        <button className='Xt'>Submit</button>
      </form>

      <p>You have to pay: $0</p>
    </div>
    <Working/>
    <Footer/>
    </>
  );
};

export default ApplyLoan;