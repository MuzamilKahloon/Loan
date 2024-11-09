import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router
import img from '../../public/Fin/bradcam2.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FAQ = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="about-section" style={{ backgroundImage: `url(${img})` }}>
        <Navbar />
        <div className="py-20 text-center about-content">
          <h1 className="text-5xl font-bold">Loan</h1>
        </div>
      </div>
      
      {/* 404 Error Section */}
      <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
        <h1 className="mb-4 text-6xl font-bold text-gray-800">404</h1>
        <p className="mb-6 text-xl text-gray-600">Oops... Page Not Found!</p>
        <p className="mb-8 text-gray-500">Try using the button below to go to the main page of the site</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2 font-semibold text-white bg-teal-400 rounded-md hover:bg-teal-400"
        >
          Back to Home Page
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
