import React from 'react';
import './Media.css';
import media1 from '../assets/media1.png';
import media2 from '../assets/media2.png';
import media3 from '../assets/media3.jpg';
import media4 from '../assets/media4.jpeg';
import media5 from '../assets/media5.png';

const mediaHighlights = [
  {
    id: 1,
    category: 'Newspaper Feature',
    title: 'Techfest Organized at Shri Ramswaroop Memorial University',
    image: media1,
    description: 'Hindi news coverage highlighting the zonal round of Indian Institute of Technology Bombay TechFest organized at SRMU under the supervision of Dr. Alkesh Agrawal.',
    link: media1,
    cta: 'See full page'
  },
  {
    id: 2,
    category: 'Newspaper Feature',
    title: 'Techfest Organized at Shri Ramswaroop Memorial University',
    image: media2,
    description: 'English news coverage highlighting the zonal round of Indian Institute of Technology Bombay TechFest organized at SRMU under the supervision of Dr. Alkesh Agrawal.',
    link: media2,
    cta: 'See full page'
  },
  {
    id: 3,
    category: 'Newspaper Feature',
    title: 'IEEE International Conference IConCuTE-2019 Organized at SRMU',
    image: media5,
    description: 'Press release for the three-days IEEE international conference "IConCuTE-2019" organized at Shri Ramswaroop Memorial University.',
    link: media3,
    cta: 'See full page'
  },
  {
    id: 4,
    category: 'Newspaper Feature',
    title: 'Silver Jubilee Reunion at JK Institute',
    image: media4,
    description: 'Coverage in Amar Ujala regarding the Silver Jubilee Reunion program of the 2001 batch of B.Tech Electronics and Communication at JK Institute, Allahabad University.',
    link: media4,
    cta: 'See full page'
  }
];

const Media = () => {
  return (
    <div className="page-container media-page">
      <div className="media-header">
        <h1 className="page-title">Media Coverage </h1>
        
      </div>

      <div className="media-grid">
        {mediaHighlights.map((item) => (
          <article key={item.id} className="media-card">
            <div className="media-image-wrapper">
              <img 
                src={item.image} 
                alt={item.title} 
                className="media-card-image" 
                style={{ width: '100%', height: '300px', objectFit: 'cover' }} 
              />
            </div>
            
            <div className="media-content">
              <span className="media-chip">{item.category}</span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="media-link">
                {item.cta}
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Media;