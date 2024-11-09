import React from 'react';
import './Choice.css';
import about from '../../public/Fin/about.png';

const Choice = () => {
  return (
    <div className="choice-container">
      <div className="image-container">
        <img src={about} alt="About us" className="about-image" />
      </div>
      <div className="content-container">
        <h2>Why Choose Us?</h2>
        <p>
          Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing. Apartments frequently or motionless on reasonable.
        </p>
        <ul>
          <li>Loans with quick approval.</li>
          <li>Customize a loan based on the amount.</li>
          <li>Good credit profile and you have built your loan.</li>
          <li>We provide online instant cash loans.</li>
        </ul>
        <button className="about-button">About Us</button>
      </div>
    </div>
  );
};

export default Choice;
