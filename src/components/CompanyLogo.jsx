import React from 'react';
import png1 from '../../public/Fin/1.png';
import png2 from '../../public/Fin/2.png';
import png3 from '../../public/Fin/3.png';
import png4 from '../../public/Fin/4.png';
import png5 from '../../public/Fin/5.png';
import './CompanyLogo.css';

const CompanyLogo = () => {
  return (
    <div className="company-logo-container">
      <img src={png1} alt="Dopkin" />
      <img src={png2} alt="Verticle" />
      <img src={png3} alt="Shallow" />
      <img src={png4} alt="Diggo" />
      <img src={png5} alt="Next" />
    </div>
  );
};

export default CompanyLogo;