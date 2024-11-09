import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import './Ask.css';
import happy from '../../public/Fin/happy.webp';

const faqData = [
  {
    question: 'Adieus who direct esteem It esteems luckily?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
  {
    question: 'Who direct esteem It esteems?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
  {
    question: 'Duis consectetur feugiat auctor?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
  {
    question: 'Consectetur feugiat auctor?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
];

const Ask = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="ask-container">
      <div className="image-container">
        <img src={happy} alt="Happy person" className="happy-image" />
      </div>
      <div className="faq-content">
        <h2>Frequently Asked Questions</h2>
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <span>{item.question}</span>
              {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
            </div>
            {activeIndex === index && <p className="faq-answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ask;
