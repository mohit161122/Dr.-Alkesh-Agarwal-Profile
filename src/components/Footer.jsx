import React from 'react';
import './Footer.css';

const Footer = ({ setActiveTab, setPatentView }) => {
  const currentYear = new Date().getFullYear();

  const handleFooterLinkClick = (event, tab, options = {}) => {
    event.preventDefault();
    if (setActiveTab) {
      if (tab === 'Patents' && options.patentTab && setPatentView) {
        setPatentView(options.patentTab);
      }
      setActiveTab(tab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const anchor = document.querySelector(`#${tab.toLowerCase()}`);
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Footer Sections */}
        <div className="footer-grid">
          {/* Quick Links */}
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li>
                <a href="#home" onClick={(e) => handleFooterLinkClick(e, 'Home')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#skills" onClick={(e) => handleFooterLinkClick(e, 'Skills')}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#research" onClick={(e) => handleFooterLinkClick(e, 'Publications')}>
                  Research
                </a>
              </li>
              <li>
                <a href="#patents" onClick={(e) => handleFooterLinkClick(e, 'Patents', { patentTab: 'indian' })}>
                  Patents
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#contact" onClick={(e) => handleFooterLinkClick(e, 'Contact')}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleFooterLinkClick(e, 'Images')}>
                  Gallery
                </a>
              </li>
              <li>
                <a href="#awards" onClick={(e) => handleFooterLinkClick(e, 'Awards')}>
                  Awards
                </a>
              </li>
              <li>
                <a href="#publications" onClick={(e) => handleFooterLinkClick(e, 'Publications')}>
                  Publications
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a
                href="https://in.linkedin.com/in/dr-alkesh-agrawal-0050a9172"
                title="LinkedIn"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗
              </a>
              <a
                href="https://twitter.com"
                title="Twitter"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                𝕏
              </a>
              <a
                href="mailto:contact@example.com"
                title="Email"
                className="social-icon"
              >
                ✉️
              </a>
              <a
                href="https://github.com/alkesh-agrawal"
                title="GitHub"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                🐙
              </a>
            </div>
          </div>

          {/* About */}
          <div className="footer-section">
            <h4>About</h4>
            <p>24+ Years of Teaching Experience <br /> with 22+ Research Publications <br /> in WOS & Scopus, 10+ Patents Grants(National & International)</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Dr. Alkesh Agarwal. All rights reserved.</p>
          <p>Built with <span className="heart">❤️</span> using React </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        className="scroll-to-top" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title="Back to top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
