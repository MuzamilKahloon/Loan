import React from 'react';
import './Contact.css';
import Navbar from '../components/Navbar';
import img from '../../public/Fin/bradcam2.png'; // Background image
import Footer from '../components/Footer';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { FaHome, FaPhone, FaEnvelope } from 'react-icons/fa';

const containerStyle = {
  width: '100%',
  height: '400px',
  marginBottom: '20px',
};

const center = {
  lat: 40.712776,  // Latitude for New York City
  lng: -74.005974, // Longitude for New York City
};

const Contact = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
  });

  return (
    <div>
      {/* Background Image Section */}
      <div className="about-section" style={{ backgroundImage: `url(${img})` }}>
        <Navbar />
        <div className="about-content">
          <h1>Contact</h1>
        </div>
      </div>

      {/* Google Map Section */}
      <section className="custom-map-section">
        {isLoaded ? (
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
            <Marker position={center} />
          </GoogleMap>
        ) : (
          <p>Loading map...</p>
        )}
      </section>

      {/* Form and Contact Info Section */}
      <div className="contact-container">
        <h1>Get in Touch</h1>
        <div className="contact-content">
          <form className="contact-form">
            <textarea placeholder="Enter Message"></textarea>
            <div className="form-row">
              <input type="text" placeholder="Enter your name" />
              <input type="email" placeholder="Enter email address" />
            </div>
            <input type="text" placeholder="Enter Subject" />
            <button type="submit" className="contact-submit">SEND MESSAGE</button>
          </form>

          <div className="contact-info">
            <div className="info-item">
              <FaHome className="icon" />
              <div className="info-item-text">
                <strong>Buttonwood, California.</strong>
                <p>Rosemead, CA 91770</p>
              </div>
            </div>
            <div className="info-item">
              <FaPhone className="icon" />
              <div className="info-item-text">
                <strong>00 (440) 9865 562 786 55</strong>
                <p>Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className="info-item">
              <FaEnvelope className="icon" />
              <div className="info-item-text">
                <strong>support@colorlib.com</strong>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
