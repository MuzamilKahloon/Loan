import React from 'react';
import './Offers.css';
import { FaHandHoldingUsd, FaCar, FaGraduationCap } from 'react-icons/fa';

const Offers = () => {
  const offers = [
    {
      icon: <FaHandHoldingUsd size={40} />,
      title: 'Home Loan',
      range: '$3000-$10000',
      details: [
        'Borrow - $350 over 3 months',
        'Interest rate - 292% pa fixed',
        'Total amount payable - $525.12',
        'Representative - 1,286% APR',
      ],
    },
    {
      icon: <FaCar size={40} />,
      title: 'Car Loan',
      range: '$3000-$10000',
      details: [
        'Borrow - $350 over 3 months',
        'Interest rate - 292% pa fixed',
        'Total amount payable - $525.12',
        'Representative - 1,286% APR',
      ],
    },
    {
      icon: <FaGraduationCap size={40} />,
      title: 'Education Loan',
      range: '$3000-$10000',
      details: [
        'Borrow - $350 over 3 months',
        'Interest rate - 292% pa fixed',
        'Total amount payable - $525.12',
        'Representative - 1,286% APR',
      ],
    },
  ];

  return (
    <div className="offers-container">
      <h2>What we offer for you</h2>
      <p>We provide online instant cash loans with quick approval that suit your term</p>
      <div className="offers">
        {offers.map((offer, index) => (
          <div className="offer-card" key={index}>
            <div className="icon">{offer.icon}</div>
            <h3>{offer.title}</h3>
            <h4>{offer.range}</h4>
            <ul>
              {offer.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
            <button className="apply-button">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
