import React from 'react'
import './Single.css'
import img from '../../public/Fin/bradcam2.png'; // Background image
import Navbar from '../components/Navbar';
import { FaCalendarAlt, FaComments, FaTags } from 'react-icons/fa'; // Icons from react-icons
import img1 from '../../public/Fin/single_blog_1.png';
import Testimonial from '../components/Testimonials'
import { FaHome, FaPhone, FaEnvelope } from 'react-icons/fa';
import Footer from '../components/Footer'
const SingleBlog = () => {
  return (
    <div>
      <div className="about-section" style={{ backgroundImage: `url(${img})` }}>
        <Navbar />
        <div className="about-content">
          <h1> Single Blog</h1>
        </div>
      </div>
      {/* Main Blog Section */}
      <div className="blog-container">
        {/* Left Side Blog Content */}
        <div className="blog-card">
          <div className="blog-image">
            <img src={img1} alt="Blog" />
            <div className="icon-section">
              <FaCalendarAlt className="icon" /> 15 Jan
              <FaTags className="icon" /> Travel, Lifestyle
              <FaComments className="icon" /> 03 Comments
            </div>
          </div>
          <div className="blog-content">
            <h2>Blog Post Title</h2>
            <p>
              This is an example of a blog post description. It provides a short
              overview of the content inside this article...
            </p>
            <div className="blog-meta">Written by Author Name</div>
          </div>
        </div>

        {/* Right Side Search & Category Section */}
        <div className="sidebar">
          {/* Search Box */}
          <div className="search-container">
            <input
              type="text"
              placeholder="Search Keyword"
              className="search-input"
            /> 
            
          </div>
          <button className="search-button">SEARCH</button>

          {/* Category List */}
          <div className="category-section">
            <h3>Category</h3>
            <ul>
              <li>Restaurant food (37)</li>
              <li>Travel news (10)</li>
              <li>Modern technology (03)</li>
              <li>Product (11)</li>
              <li>Inspiration (21)</li>
              <li>Health Care (21)</li>
            </ul>
          </div>
        </div>
      </div>
      <Testimonial />


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

      <Footer/>
    </div>
  )
}

export default SingleBlog
