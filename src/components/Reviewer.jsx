import React from 'react';
import './shared.css';

const journalsData = [
  { count: 16, name: 'Physica Scripta' },
  { count: 6, name: 'IEEE Access' },
  { count: 5, name: 'Engineering Research Express' },
  { count: 2, name: 'Journal of Physics Communications' },
  { count: 11, name: 'Journal of Physics D: Applied Physics' },
  { count: 6, name: 'Waves in Random and Complex Media' },
  { count: 2, name: 'Journal of Optics' },
  { count: 1, name: 'Microwave and Optical Technology Letters' }
];

const certificates = [
  {
    title: 'IEEE Access Reviewer Certificate',
    year: 2019,
    image: 'https://alkesh-agrawal.github.io/personal-web-page/IEEE2019.jpg'
  },
  {
    title: 'MOP-Wiley Reviewer Certificate',
    year: 2019,
    image: 'https://alkesh-agrawal.github.io/personal-web-page/MOP2019.jpg'
  },
   {
    title: 'Journal of Physics Communication Reviewer Certificate',
    year: 2019,
    image: 'https://alkesh-agrawal.github.io/personal-web-page/IOP2019.png'
  },
  {
    title: 'MOP-Wiley Reviewer Certificate',
    year: 2020,
    image: 'https://alkesh-agrawal.github.io/personal-web-page/MOP2020.jpg'
  },
  {
    title: 'Journal of Physics D: Applied Physics Reviewer Certificate',
    year: 2020,
    image: 'https://alkesh-agrawal.github.io/personal-web-page/JPHYD2020.png'
  },
  {
    title: 'Physica Scripta Reviewer Certificate',
    year: 2020,
    image: 'https://alkesh-agrawal.github.io/personal-web-page/PHYSSCR2020.png'
  },
  {
    title: 'MOP-Wiley Reviewer Certificate',
    year: 2021,
    image: 'https://alkesh-agrawal.github.io/personal-web-page/MOP2021.jpg'
  },
  
];

const Reviewer = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Reviewer Certificates</h1>

      <div className="reviewer-summary">
        <p className="reviewer-intro">
          {/* I have been an active reviewer of papers for many reputed journals and publishers, including IEEE, IOP Science, and Wiley. */}
        </p>

        <div className="journals-reviewed">
          <h2>Verified Peer Reviews</h2>
          <div className="journals-grid">
            <div className="journals-column">
              {journalsData.slice(0, 4).map((journal, index) => (
                <div key={index} className="journal-entry">
                  <span className="journal-count">{journal.count}</span>
                  <span className="journal-name">{journal.name}</span>
                </div>
              ))}
            </div>
            <div className="journals-column">
              {journalsData.slice(4).map((journal, index) => (
                <div key={index + 4} className="journal-entry">
                  <span className="journal-count">{journal.count}</span>
                  <span className="journal-name">{journal.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="certificate-section">
        <div className="certificate-header">
          <h2>Certificate Gallery</h2>
          <p className="certificate-description">
            These certificates recognize my reviewer contributions across top journals and publishers.
          </p>
        </div>

        <div className="certificate-grid">
          {certificates.map((certificate, index) => (
            <article
              key={index}
              className="certificate-card"
              onDoubleClick={() => window.open(certificate.image, '_blank', 'noopener')}
              title="Double click to open certificate"
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="certificate-image"
              />
              <div className="certificate-meta">
                <span className="certificate-title">{certificate.title}</span>
                <span className="certificate-year">{certificate.year}</span>
                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-button"
                >
                  View Certificate
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Reviewer;
