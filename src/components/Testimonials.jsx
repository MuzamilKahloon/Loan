import React, { useState } from 'react';
import './Testimonial.css';
import { FaQuoteRight } from 'react-icons/fa'; // Quote symbol
import author from '../../public/Fin/author.png'; // Example image

const testimonialData = [
  {
    text: "Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering through animal welfare when people might depend on livestock as their only source of income or food.",
    author: "Micky Mouse",
    image: author,
  },
  // You can add more testimonials here
  {
    text: "Another example testimonial to show cycling through multiple testimonials.",
    author: "John Doe",
    image: author,
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + testimonialData.length) % testimonialData.length
    );
  };

  const { text, author, image } = testimonialData[currentIndex];

  return (
    <div className="testimonial-container">
      <div className="testimonial-content">
        <div className="testimonial-image">
          <img src={image} alt="Author" />
          <div className="quote-icon">
            <FaQuoteRight />
          </div>
        </div>
        <div className="testimonial-text">
          <p>{`"${text}"`}</p>
          <span className="author-name">- {author}</span>
        </div>
      </div>
      <div className="testimonial-navigation">
        <button className="nav-button" onClick={handlePrev}>&#10094;</button>
        <button className="nav-button" onClick={handleNext}>&#10095;</button>
      </div>
    </div>
  );
};

export default Testimonials;
