import React from 'react';
import './Home.css';
import authorImg from '../assets/author.png';
import wosImg from '../assets/1.png';
import scopusImg from '../assets/2.png';
import orcidImg from '../assets/3.png';
import linkedinImg from '../assets/4.png';
import scholarImg from '../assets/5.png';



const Home = ({ setActiveTab }) => {
  const handleCardClick = (tab) => {
    if (setActiveTab) {
      setActiveTab(tab);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="hero-content">
          <div className="hero-image-container">
            <img src={authorImg} alt="Dr. Alkesh Agrawal" className="hero-image" />
            <br /><br />
            <br />

             <span className="hero-title-sub">President IIC-SRMU</span>
             <span className="hero-title-sub">Convenor-CIIE</span>
             
            <div className="hero-badge">Active Researcher</div>
          </div>
          <div className="hero-text-content">
            <h1 className="hero-title">
              <span className="hero-title-main">Prof. (Dr.) Alkesh Agrawal</span>
              <span className="hero-title-sub">Ph.D in Metamaterial based Microwave Devices</span>
            </h1>
            <p className="hero-description">
               Metamaterial • Microwave Devices • Absorbers  <br />  • Antennas • Web Design
            </p>
            <div className="hero-cta">
              <a href="#about" className="cta-button primary">Learn More</a>
              <a href="#contact" className="cta-button secondary">Get In Touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section" >
        <div className="stats-container">

         <div
            className="stat-card"
            role="button"
            tabIndex={0}
            onClick={() => handleCardClick('Publications')}
            onKeyDown={(event) => event.key === 'Enter' && handleCardClick('Publications')}
          >
            <div className="stat-icon-large">📄</div>
            <div className="stat-number">22+</div>
            <div className="stat-title">Publications</div>
            <div className="stat-description">Peer-reviewed papers in reputed journals</div>
          </div>

          <div
            className="stat-card"
            role="button"
            tabIndex={0}
            onClick={() => handleCardClick('Awards')}
            onKeyDown={(event) => event.key === 'Enter' && handleCardClick('Awards')}
          >
            <div className="stat-icon-large">🏆</div>
            <div className="stat-number">10+</div>
            <div className="stat-title">Awards</div>
            <div className="stat-description">Recognition for academic excellence</div>
          </div>

          <div
            className="stat-card"
            role="button"
            tabIndex={0}
            onClick={() => handleCardClick('Patents')}
            onKeyDown={(event) => event.key === 'Enter' && handleCardClick('Patents')}
          >
            <div className="stat-icon-large">💡</div>
            <div className="stat-number">15+</div>
            <div className="stat-title">Patents</div>
            <div className="stat-description">Innovative research contributions</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2 className="section-title">About Me</h2>
            <div className="about-text">
              <p>
                Ph.D in Broad-band EM Absorber based on Metamaterial. I have a total academic experience of 24+ years with paper presentations and publications in reputed conferences and journals indexed in WoS and SCOPUS. I have been an active reviewer of papers of many reputed journals - IEEE Access, Journal of Physics Communication (IOP), Physica Scripta (IOP), Journal of Physics D: Applied Physics (IOP), Microwave and Optical Technology Letters (Wiley). I am professional member of IEEE and IAENG. <br /> Research interests include design, simulation, fabrication and testing of Metamaterial Absorbers.
              </p>
              
      
            </div>
            <div className="about-highlights">
             
              <div className="highlight-item">
                <span className="highlight-icon">📚</span>
                <span>24+ Years Experience</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🔬</span>
                <span>Active Researcher</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🌐</span>
                <span>IEEE Member</span>
              </div>
               <div className="highlight-item  pdh  ">
                <span className="highlight-icon" >🎓</span>
                <span >Ph.D in Metamaterial based Microwave Devices</span>
              </div>
            </div>
          </div>
          <div className="about-media">
            <div className="youtube-card">
              <div className="youtube-header">
                <span className="youtube-icon">📺</span>
                <h3>YouTube Channel</h3>
              </div>
              <p>Lectutes on Digital Electronics,<br /> Analog & Digital Communication, LabVIEW, CST Simulation </p>
              <a href="https://alkesh-agrawal.github.io/personal-web-page/myyoutubechannel.html" target="_blank" className="youtube-button">
                Visit Channel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-description">Connect with me on professional platforms</p>
          <div className="contact-links">

             <a href="https://publons.com/researcher/Q-5750-2019/" target="_blank" className="contact-link wos">
              <span className="contact-icon">
              <img src={wosImg} alt="Web of Science" />
              </span>
              <div className="contact-info">
                <div className="contact-platform">Web of Science</div>
                <div className="contact-handle">Prof. (Dr.) Alkesh Agrawal</div>
              </div>
            </a>

            <a href="https://www.scopus.com/authid/detail.uri?authorId=57194016744" target="_blank" className="contact-link scopus">
              <span className="contact-icon">
              <img src={scopusImg} alt="Scopus" />
              </span>
              <div className="contact-info">
                <div className="contact-platform">Elsevier SCOPUS</div>
                <div className="contact-handle">Prof. (Dr.) Alkesh Agrawal</div>
              </div>
            </a>


             <a href="https://orcid.org/0000-0001-6326-7560" target="_blank" className="contact-link orcid">
              <span className="contact-icon">
             <img src={orcidImg} alt="ORCID" />
              </span>
              <div className="contact-info">
                <div className="contact-platform">ORCID</div>
                <div className="contact-handle">Prof. (Dr.) Alkesh Agrawal</div>
              </div>
            </a>

            <a href="https://in.linkedin.com/in/dr-alkesh-agrawal-0050a9172" target="_blank" className="contact-link linkedin">
              <span className="contact-icon">
                
              <img src={linkedinImg} alt="LinkedIn" />
                
                 </span>
              <div className="contact-info">
                <div className="contact-platform">LinkedIn</div>
                <div className="contact-handle">Prof. (Dr.) Alkesh Agrawal</div>
              </div>
            </a>

             <a href="https://scholar.google.com/citations?hl=en&user=Yc6hSfcAAAAJ" target="_blank" className="contact-link scholar">
              <span className="contact-icon">
               <img src={scholarImg} alt="Google Scholar" />
              </span>
              <div className="contact-info">
                <div className="contact-platform">Google Scholar</div>
                <div className="contact-handle">Prof. (Dr.) Alkesh Agrawal</div>
              </div>
            </a>

            

           

           

           

            

          </div>
          {/* <div className="copyright">
            © 2026 Alkesh Agrawal. All rights reserved.
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Home;
