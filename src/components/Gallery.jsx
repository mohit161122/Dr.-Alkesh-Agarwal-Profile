import React from 'react';
import './Gallery.css';
import authorImg from '../assets/author.png';

const researchImages = [
  {
    id: 1,
    title: "Metamaterial Absorber-1",
    description: "Fabricated MMA structure with two-dimensional periodic arrays comprising of 100 unit cells within an area of 180 mm by 180 mm.",
    url: "https://alkesh-agrawal.github.io/personal-web-page/MMA-1.jpg",
    link: "http://www.jpier.org/PIERM/pier.php?paper=17061302"
  },
  {
    id: 2,
    title: "Metamaterial Absorber-2",
    description: "Fabricated MMA structure with two-dimensional periodic arrays consisting of 144 unit cells within an area of 210 mm by 210 mm.",
    url: "https://alkesh-agrawal.github.io/personal-web-page/MMA-2.jpg",
    link: " https://iopscience.iop.org/article/10.1088/2053-1591/aadd83",
  },
  {
    id: 3,
    title: "Metamaterial Absorber-3",
    description: "Fabricated MMA structure with two-dimensional periodic arrays consisting of 900 unit cells within an area of 210 mm by 210 mm.",
    url: "https://alkesh-agrawal.github.io/personal-web-page/MMA-3.jpg",
    link: "https://doi.org/10.1590/2179-10742021v20i31207",
  },
  {
    id: 4,
    title: "Wide-Band Log-Periodic Microstrip Antenna",
    description: "Wide-Band Log-Periodic Microstrip Antenna with DGS for C-Band Applications.",
    url: "https://alkesh-agrawal.github.io/personal-web-page/Ant1.png",
    link: "https://www.jpier.org/PIERC/pier.php?paper=21031106"
  },
  {
    id: 5,
    title: "Microstrip Patch Antenna - Front",
    description: "Microstrip Patch Antenna with DGS Loaded with Metamaterial Unit Cells for ITS (Front View).",
    url: "https://alkesh-agrawal.github.io/personal-web-page/Ant2.jpg",
    link: "https://www.jpier.org/issues/volume.html?paper=25101001"
  },
  {
    id: 6,
    title: "Microstrip Patch Antenna - Back",
    description: "Microstrip Patch Antenna with DGS Loaded with Metamaterial Unit Cells for ITS (Back View).",
    url: "https://alkesh-agrawal.github.io/personal-web-page/Ant3.jpg",
    link: "https://www.jpier.org/issues/volume.html?paper=25101001"
  }
];

const Gallery = () => {
  return (
    <div className="gallery-page">
      {/* Author Section at Top */}
      <div className="author-section">
        <div className="author-card">
          <div className="author-image-container">
            <img src={authorImg} alt="Dr. Alkesh Agrawal" className="author-image" />
          </div>
          <div className="author-info">
            <h1 className="author-name">Dr. Alkesh Agrawal</h1>
            <p className="author-title">Lead Researcher and Author</p>
            <p className="author-description">
              Ph.D in Metamaterials with 24+ years of academic experience in research,
              fabrication, and testing of advanced electromagnetic structures.
            </p>
          </div>
        </div>
      </div>

      {/* Research Visuals Section */}
      <div className="research-section">
        <div className="gallery-header">
          <h2 className="gallery-title">Gallery-Fabricated Devices</h2>
          <p className="gallery-subtitle">
            Detailed 
          </p>
        </div>

        <div className="research-grid">
          {researchImages.map((image) => (
            <div key={image.id} className="research-card">
              <div className="research-visual">
                <img src={image.url} alt={image.title} className="research-photo" />
              </div>

              <div className="research-details">
                <h3 className="research-item-title">{image.title}</h3>
                <p className="research-item-desc">{image.description}</p>

                {image.link && (
                  <a href={image.link} target="_blank" rel="noopener noreferrer" className="research-action">
                    Read Full Paper ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
