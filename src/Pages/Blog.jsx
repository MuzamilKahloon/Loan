import React from 'react';
import './Blog.css';
import img from '../../public/Fin/bradcam2.png'; // Background image
import Navbar from '../components/Navbar';
import { FaCalendarAlt, FaComments, FaTags } from 'react-icons/fa'; // Icons from react-icons
import img1 from '../../public/Fin/single_blog_1.png';
import img2 from '../../public/Fin/single_blog_2.png';
import Footer from '../components/Footer'

const Blog = () => {
  return (
    <div>
      {/* Header Section with Navbar */}
      <div className="about-section" style={{ backgroundImage: `url(${img})` }}>
        <Navbar />
        <div className="about-content">
          <h1>Blog</h1>
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

      {/* Additional Blog Section */}
      <div className="blog-container">
        <div className="blog-card">
          <div className="blog-image">
            <img src={img2} alt="Another Blog" />
            <div className="icon-section">
              <FaCalendarAlt className="icon" /> 10 Feb
              <FaTags className="icon" /> Science, Technology
              <FaComments className="icon" /> 05 Comments
            </div>
          </div>
          <div className="blog-content">
            <h2>New Technological Innovations in 2024</h2>
            <p>
              Exploring groundbreaking advancements in science and technology
              this year. From AI developments to space travel, discover what's
              coming next...
            </p>
            <div className="blog-meta">Written by Another Author</div>
          </div>
        </div>
        
      </div>
      <Footer/>
    </div>
  );
};

export default Blog;
