import React from 'react'
import './Working.css'
const Working = () => {
  return (
    <div>
      <div className="works-area">
      <div className="container">
        <div className="section-title text-center">
          <h3>How it Works</h3>
          <p>We provide online instant cash loans with quick approval that suit your term</p>
        </div>
        <div className="works-steps">
          <div className="single-work">
            <span className="step-number">01</span>
            <h3>Apply for loan</h3>
            <p>We will customize a loan based on the amount of cash your company needs.</p>
          </div>
          <div className="single-work">
            <span className="step-number">02</span>
            <h3>Application review</h3>
            <p>We will review your application and customize a loan based on your needs.</p>
          </div>
          <div className="single-work">
            <span className="step-number">03</span>
            <h3>Get funding fast</h3>
            <p>Once approved, get your funding quickly to support your business growth.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Working
