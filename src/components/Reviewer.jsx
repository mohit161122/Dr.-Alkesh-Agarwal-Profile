import React from 'react';
import './shared.css';

const journals = [
  'IEEE Access',
  'Microwave and Optical Technology Letters (MOP-Wiley)',
  'Journal of Physics Communication (IOP)',
  'Physica Scripta (IOP)',
  'Journal of Physics D: Applied Physics (IOP)'
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
          I have been an active reviewer of papers for many reputed journals and publishers, including IEEE, IOP Science, and Wiley.
        </p>

        <div className="journals-reviewed">
          <h2>Journals Reviewed</h2>
          <ul className="journals-list">
            {journals.map((journal, index) => (
              <li key={index} className="journal-item">
                <span className="check-icon">✓</span>
                {journal}
              </li>
            ))}
          </ul>
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
