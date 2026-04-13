import  { useEffect, useState } from 'react';
import './shared.css';

const indianPatents = [
  {
    id: 1,
    title: "Ultra-Thin Ultra Broad-band Metamaterial Microwave Absorber Based on Novel Non-Linearity in Unit Cell Design for X-band Applications",
    journal: "Patent Office Journal No. 37/2021",
    date: "10/09/2021",
    appNo: "202011009840 A",
    image: "https://alkesh-agrawal.github.io/personal-web-page/P1.png",
    link: "https://alkesh-agrawal.github.io/personal-web-page/P1.png"
  },
  {
    id: 2,
    title: "De-Centralized Solar Charge cum Docking Station for 48Vdc Electric Vehicles",
    journal: "Patent Office Journal No. 25/2020",
    date: "19/06/2020",
    appNo: "201911044345 A",
    image: "https://alkesh-agrawal.github.io/personal-web-page/P2.png",
    link: "https://alkesh-agrawal.github.io/personal-web-page/P2.png"
  },
  {
    id: 3,
    title: "Dual Power Mode Sensor Based Automated Low Cost SMART Bin Under Swachh Bharat Abhiyan",
    journal: "Patent Office Journal No. 12/2024",
    date: "22/03/2024",
    appNo: "202211052875 A",
    image: "https://alkesh-agrawal.github.io/personal-web-page/P3.png",
    link: "https://alkesh-agrawal.github.io/personal-web-page/P3.png"
  },
  {
    id: 4,
    title: "Automated Engine Seize System Using Over Consumed Alcohol Sensors to Prevent Road Accidents",
    journal: "Patent Office Journal No. 15/2024",
    date: "12/04/2024",
    appNo: "202211058007 A",
    image: "https://alkesh-agrawal.github.io/personal-web-page/P4.png",
    link: "https://alkesh-agrawal.github.io/personal-web-page/P4.png"
  },
  {
    id: 5,
    title: "Robotic Wheel Chair for Physically Disabled",
    journal: "Patent Office Journal No. 34/2024",
    date: "23/08/2024",
    appNo: "202311011812 A",
    image: "https://alkesh-agrawal.github.io/personal-web-page/P5.png",
    link: "https://alkesh-agrawal.github.io/personal-web-page/P5.png"
  },
  {
    id: 6,
    title: "Microstrip Patch Antenna with Metamaterial Unit Cells Loaded Radiating Patches and Ground Structure for ITS Applications",
    journal: "Patent Office Journal No. 14/2025",
    date: "04/04/2025",
    appNo: "202511024894 A",
    image: "https://alkesh-agrawal.github.io/personal-web-page/P6.png",
    link: "https://alkesh-agrawal.github.io/personal-web-page/P6.png"
  }
];

const ukPatents = [
  {
    id: 1,
    title: "AI-Driven UAV Seeding System for Enhanced Atmospheric Visibility",
    number: "6422703",
    image: "https://alkesh-agrawal.github.io/personal-web-page/UK1.jpg",
    link: "https://alkesh-agrawal.github.io/personal-web-page/UK1.jpg"
  },
  {
    id: 2,
    title: "Hybrid UAV with AI-Based Flight Optimization of Fog Clearance",
    number: "6422704",
    image: "https://alkesh-agrawal.github.io/personal-web-page/UK2.jpg",
    link: "https://alkesh-agrawal.github.io/personal-web-page/UK2.jpg"
  },
  {
    id: 3,
    title: "UV Ray Generator-Integrator UAV for Fog Dispersal",
    number: "6422705",
    image: "https://alkesh-agrawal.github.io/personal-web-page/UK3.jpg",
    link: "https://alkesh-agrawal.github.io/personal-web-page/UK3.jpg"
  },
  {
    id: 4,
    title: "Portable UAV-Mounted UV Ray Generator for Atmospheric Modifications",
    number: "6422706",
    image: "https://alkesh-agrawal.github.io/personal-web-page/UK4.jpg",
    link: "https://alkesh-agrawal.github.io/personal-web-page/UK4.jpg"
  },
  {
    id: 5,
    title: "High Precision UV Ray Emission Apparatus for Drones",
    number: "6422707",
    image: "https://alkesh-agrawal.github.io/personal-web-page/UK5.jpg",
    link: "https://alkesh-agrawal.github.io/personal-web-page/UK5.jpg"
  },
  {
    id: 6,
    title: "AI-Controlled UV Ray Distribution Apparatus for UAVs",
    number: "6422708",
    image: "https://alkesh-agrawal.github.io/personal-web-page/UK6.jpg",
    link: "https://alkesh-agrawal.github.io/personal-web-page/UK6.jpg"
  },
  {
    id: 7,
    title: "Autonomous Fog Identification and Tracking Apparatus for UAVs",
    number: "6422709",
    image: "https://alkesh-agrawal.github.io/personal-web-page/UK7.jpg",
    link: "https://alkesh-agrawal.github.io/personal-web-page/UK7.jpg"
  },
  {
    id: 8,
    title: "Multi-Spectral Imaging Device for Real-Time Fog Detection and Mapping",
    number: "6422710",
    image: "https://alkesh-agrawal.github.io/personal-web-page/UK8.jpg",
    link: "https://alkesh-agrawal.github.io/personal-web-page/UK8.jpg"
  },
  {
    id: 9,
    title: "Multi-Purpose UAV for Meteorological Data Collection & Dispersal Operations",
    number: "6422711",
    image: "https://alkesh-agrawal.github.io/personal-web-page/UK9.jpg",
    link: "https://alkesh-agrawal.github.io/personal-web-page/UK9.jpg"
  },
  {
    id: 10,
    title: "AI-Enabled UAV for Automated Fog Dispersal & Visibility Enhancement",
    number: "6422712",
    image: "https://alkesh-agrawal.github.io/personal-web-page/UK10.jpg",
    link: "https://alkesh-agrawal.github.io/personal-web-page/UK10.jpg"
  },
 
];

const Patents = ({ defaultTab = 'indian' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  return (
    <div className="page-container patents-page">
      <div className="patents-header">
        <p className="patents-label">Innovations</p>
        <h1 className="page-title">Patents</h1>
        {/* <p className="patents-description">
          A comprehensive portfolio of patents including innovative metamaterial technologies, IoT solutions, and advanced UAV systems.
        </p> */}
      </div>

      <div className="patent-tabs">

         <button 
          className={`patent-tab-btn ${activeTab === 'uk' ? 'active' : ''}`}
          onClick={() => setActiveTab('uk')}
        >
           UK Patents ({ukPatents.length})
        </button>


        <button 
          className={`patent-tab-btn ${activeTab === 'indian' ? 'active' : ''}`}
          onClick={() => setActiveTab('indian')}
        >
           Indian Patents ({indianPatents.length})
        </button>


       

      </div>

      {activeTab === 'indian' && (
        <div className="patent-list-section">
          <div className="patent-grid-box">
            {indianPatents.map((patent) => (
              <div key={patent.id} className="patent-box-card">
                <div className="patent-box-header">
                  <span className="patent-badge">Indian Patent</span>
                  <span className="patent-count">#{patent.id}</span>
                </div>
                {patent.image && (
                  <div className="patent-box-image">
                    <img src={patent.image} alt="Patent Design" />
                  </div>
                )}
                <h3 className="patent-box-title">{patent.title}</h3>
                <div className="patent-box-divider"></div>
                <div className="patent-box-details">
                  <div className="detail-item">
                    <span className="detail-label">Journal</span>
                    <span className="detail-text">{patent.journal}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Date</span>
                    <span className="detail-text">{patent.date}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">App No</span>
                    <span className="detail-text">{patent.appNo}</span>
                  </div>
                </div>
                <div className="patent-link-section">
                  {patent.link ? (
                    <a href={patent.link} target="_blank" rel="noopener noreferrer" className="patent-read-btn">
                      📖 Read Patent
                    </a>
                  ) : (
                    <input
                      type="text"
                      placeholder="Paste patent link here"
                      className="patent-link-input"
                      onBlur={(e) => {
                        if (e.target.value) {
                          patent.link = e.target.value;
                          window.location.reload();
                        }
                      }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'uk' && (
        <div className="patent-list-section">
          <div className="patent-grid-box">
            {ukPatents.map((patent) => (
              <div key={patent.id} className="patent-box-card">
                <div className="patent-box-header">
                  <span className="patent-badge uk">UK Patent</span>
                  <span className="patent-count">#{patent.id}</span>
                </div>
                {patent.image && (
                  <div className="patent-box-image">
                    <img src={patent.image} alt="Patent Design" />
                  </div>
                )}
                <h3 className="patent-box-title">{patent.title}</h3>
                <div className="patent-box-divider"></div>
                <div className="patent-box-details">
                  <div className="detail-item">
                    <span className="detail-label">Design No</span>
                    <span className="detail-text">{patent.number}</span>
                  </div>
                </div>
                <div className="patent-link-section">
                  {patent.link ? (
                    <a href={patent.link} target="_blank" rel="noopener noreferrer" className="patent-read-btn">
                      📖 Read Patent
                    </a>
                  ) : (
                    <input
                      type="text"
                      placeholder="Paste patent link here"
                      className="patent-link-input"
                      onBlur={(e) => {
                        if (e.target.value) {
                          patent.link = e.target.value;
                          window.location.reload();
                        }
                      }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Patents;
