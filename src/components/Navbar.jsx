import  { useState } from 'react';
import './Navbar.css';

const Navbar = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { id: 'Home', label: 'Home' },
    { id: 'Publications', label: 'Publications' },
    { id: 'Awards', label: 'Awards' },
    { id: 'Patents', label: 'Patents' },
    { id: 'Reviewer', label: 'Reviewer' },
    { id: 'Skills', label: 'Skills' },
    { id: 'Images', label: 'Gallery' },
    { id: 'Contact', label: 'Contact' }
  ];

  const externalLinks = [
    { label: 'CV', url: "https://alkesh-agrawal.github.io/personal-web-page/CurriculamVitae.pdf" },
    { label: 'Resume', url: 'https://alkesh-agrawal.github.io/My-resume/' }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="pill-navbar">
      <div className="pill-navbar-inner">
        <div className="pill-navbar-logo" onClick={() => handleTabClick('Home')}>
          Prof. (Dr.) Alkesh Agrawal
        </div>
        
        {/* Hamburger Menu for Mobile */}
        <button 
          className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu */}
        <div className={`pill-navbar-mobile ${isMenuOpen ? 'open' : ''}`}>
          <ul className="pill-navbar-links-mobile">
            {tabs.map((tab) => (
              <li 
                key={tab.id} 
                className={`pill-navbar-item-mobile ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </li>
            ))}
            <div className="navbar-spacer-mobile"></div>
            {externalLinks.map((link) => (
              <li key={link.label} className="pill-navbar-item-mobile external">
                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="pill-navbar-links">
          {tabs.map((tab) => (
            <li 
              key={tab.id} 
              className={`pill-navbar-item ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </li>
          ))}
          <div className="navbar-spacer"></div>
          {externalLinks.map((link) => (
            <li key={link.label} className="pill-navbar-item external">
              <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
