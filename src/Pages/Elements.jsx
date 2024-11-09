import React from 'react';
import './Elements.css';
import img from '../../public/Fin/bradcam2.png'; // Background image
import img2 from '../../public/Fin/g7.jpg'
import Navbar from '../components/Navbar'
import g1 from '../../public/Fin/g1.jpg'
import g2 from '../../public/Fin/g2.jpg'
import g3 from '../../public/Fin/g3.jpg'
import g4 from '../../public/Fin/g4.jpg'
import g5 from '../../public/Fin/g5.jpg'
import g6 from '../../public/Fin/g6.jpg'
import Footer from '../components/Footer'
const Elements = () => {
  return (
    <>
    <div className="about-section" style={{ backgroundImage: `url(${img})` }}>
      <Navbar />
      <div className="about-content">
        <h1>Elements</h1>
        <div className="contact-info">
        </div>
      </div>
    </div>
    <div className="text-container">
      <h2 className="title">Text Sample</h2>
      <p className="text">
        Every avid independent filmmaker has <span className="bold">Bold</span> about making that <span className="italic">Italic</span> interest documentary, or short film to show off their creative prowess. Many have great ideas and want to “wow” the<span className="superscript">Superscript</span> scene, or video renters with their big project. But once you have the<span className="subscript">Subscript</span> “in the can” (no easy feat), how do you move from a <span className="strikethrough">Strike</span> through of master DVDs with the <span className="underline">"Underline"</span> marked hand-written title inside a secondhand CD case, to a pile of cardboard boxes full of shiny new, retail-ready DVDs, with UPC barcodes and polywrap sitting on your doorstep? You need to create eye-popping artwork and have your project replicated. Using a reputable full service DVD Replication company like PacificDisc, Inc. to partner with is certainly a helpful option to ensure a professional end result, but to help with your DVD replication project, here are 4 easy steps to follow for good DVD replication results:
      </p>
    </div>

    {/* Content container */}
    <div className="content-container">
        <h2 className="title">Left Aligned</h2>
        <div className="aligned-section">
          <img src={img2} alt="Left Aligned" className="aligned-image" />
          <p className="aligned-text">
            Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government. But, after a fortnight, the online casino industry came up with a solution and new online casinos started taking root. These began to operate under a different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major part of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me. Listed in this article are the electronic banking systems that accept players from the United States that wish to play in online casinos.
          </p>
        </div>
      </div>

      <div className="content-right">
        <h2 className="title-right">Right Aligned</h2>
        <div className="aligned-section-right">
          <img src={img2} alt="Left Aligned" className="aligned-image" />
          <p className="aligned-text-right">
            Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks such as Party Gaming and PlayTech left the United States. Overnight, online casino players found themselves being chased by the Federal government. But, after a fortnight, the online casino industry came up with a solution and new online casinos started taking root. These began to operate under a different business umbrella, and by doing that, rendered the transfer of money to and from them legal. A major part of this was enlisting electronic banking systems that would accept this new clarification and start doing business with me. Listed in this article are the electronic banking systems that accept players from the United States that wish to play in online casinos.
          </p>
        </div>
      </div>


      {/* Image Gallery */}

      <div className="main">
        <h1>Image Gallery</h1>
        <div className="one">
          <img src={g1} alt="" />
          <img src={g2} alt="" />
          <img src={g3} alt="" />
        </div>
        <div className="two">
          <img src={g4} alt="" />
          <img src={g5} alt="" />
          <img src={g6} alt="" />
        </div>
      </div>'
      
      
      <Footer/>
    </>
  );
}

export default Elements;
