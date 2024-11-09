import React from 'react';
import './ApplyLoan.css';
import bg1 from '../../public/Fin/bradcam3.png';

const ApplyLoan = () => {
  return (
    <div className="apply-loan-section" style={{ backgroundImage: `url(${bg1})` }}>
      <div className="apply-loan-overlay"></div> {/* Overlay for readability */}
      <div className="apply-loan-content">
        <h1>Apply for a Loan for your startup, education or company</h1>
        <button className="apply-now-btn">Apply Now</button>
      </div>
    </div>
  );
};

export default ApplyLoan;
