import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page-container">
      <div className="contact-header">
        <h1 className="contact-title">Let's Connect</h1>
        <p className="contact-subtitle">
          I am always open to discussing research collaborations, academic developments, and professional consulting opportunities.
        </p>
      </div>

      <div className="contact-bento-grid">
        
        {/* Direct Contact Box (Email & Phone) */}
        <div className="contact-box main-contact">
          <div className="direct-method">
            <div className="direct-icon">📧</div>
            <div className="direct-info">
              <h3>Email Me</h3>
              <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; alkesh.ec@srmu.ac.in</p>
              <p>alkesh.agrawal26@gmail.com</p>
            </div>
          </div>

          <div className="divider-line"></div>
          
          <div className="direct-method">
            <div className="direct-icon">📱</div>
            <div className="direct-info">
              <h3>Call Me</h3>
              <p>(+91) 99353 63326</p>
            </div>
          </div>
        </div>

        {/* Social Media Holders */}
        <a href="https://in.linkedin.com/in/dr-alkesh-agrawal-0050a9172" target="_blank" rel="noopener noreferrer" className="contact-box social linkedin">
          <div className="social-icon">
            <img className='Contect-Icons' src="/src/assets/4.png" alt="LinkedIn" />
          </div>
          <h2 className="social-name">LinkedIn</h2>
          <p className="social-desc">Connect professionally and explore academic networking opportunities.</p>
        </a>

        <a href="https://scholar.google.com/citations?hl=en&user=Yc6hSfcAAAAJ" target="_blank" rel="noopener noreferrer" className="contact-box social scholar">
          <div className="social-icon">
            <img className='Contect-Icons' src="/src/assets/5.png" alt="Google Scholar" />
          </div>
          <h2 className="social-name">Google Scholar</h2>
          <p className="social-desc">Explore my complete list of indexed research publications and citations.</p>
        </a>

        <a href="https://publons.com/researcher/Q-5750-2019/" target="_blank" rel="noopener noreferrer" className="contact-box social facebook">
          <div className="social-icon">
            <img className='Contect-Icons' src="/src/assets/1.png" alt="Web of Science" />
          </div>
          <h2 className="social-name">Web of Science Researcher</h2>
          {/* <p className="social-desc">Follow my personal updates and community engagement.</p> */}
          <p className="social-desc">A verified record of my publications, citations, and peer review contributions.</p>
        </a>

        <a href="https://alkesh-agrawal.github.io/personal-web-page/myyoutubechannel.html" target="_blank" rel="noopener noreferrer" className="contact-box social youtube">
          <div  className="social-icon">📺</div>
          <h2 className="social-name">YouTube</h2>
          <p className="social-desc">Watch my latest technical video lectures on digital communication.</p>
        </a>

      </div>
    </div>
  );
};

export default Contact;
