import React from 'react';
import './shared.css';

const awardsList = [
  {
    id: 1,
    title: "Best Paper Award",
    details: "Kunal Krishna Upadhyay, Alkesh Agrawal and Mukul Misra — Wide-band CPW-Fed Slotted Rectangular Patch Antenna loaded with Ring Resonators for C-band Applications at the 2019 International Conference on Cutting-edge Technologies in Engineering (ICon-CuTE), November 16-18, 2019. IEEE Conference Record No. 47290.",
    link: "https://ieeexplore.ieee.org/document/8991515"
  },
  {
    id: 2,
    title: "Best Paper Award",
    details: "Alkesh Agrawal, Ashutosh Singh, and Mukul Misra — A Dual Broadband Metamaterial Absorber with Concentric Continuous and Split Rings Resonator Structure, presented in 3rd IEEE Uttar Pradesh Section International Conference on Electrical, Computer and Electronics organized by IIT (BHU), Varanasi, December 9-11, 2016.",
    link: "https://ieeexplore.ieee.org/document/7894722"
  },
  {
    id: 3,
    title: "Best Paper Award",
    details: "Alkesh Agrawal, Ashutosh Singh, and Mukul Misra — A Multiband Metamaterial Absorber using Concentric Circular Ring Shaped Structure, presented in 10th International Conference on Microwave Antenna, Propagation and Remote Sensing (ICMARS-14), organized by International Centre for Radio Waves, Jodhpur, India, December 09-12, 2014."
  },
  {
    id: 4,
    title: "Best Faculty Award",
    details: "Academic year 2009-10 by SRM College of Engineering and Management."
  },
  {
    id: 5,
    title: "Appreciation Letter",
    details: "Academic year 2008-09 by SRM College of Engineering and Management."
  },
  {
    id: 6,
    title: "Best Faculty Award",
    details: "Academic year 2002-03 by SRM College of Engineering and Management."
  },
  {
    id: 7,
    title: "Suhrota Roy Memorial Scholarship",
    details: "For securing highest marks in Physics and Maths in B.Sc.-I in 1996."
  },
  {
    id: 8,
    title: "Malvea Memorial Scholarship",
    details: "For securing highest marks in B.Sc.-I (PCM) in 1996."
  },
  {
    id: 9,
    title: "Smt. Chandramani Agrawal Memorial Scholarship",
    details: "For securing highest marks in Physics in B.Sc.-I & II, session 1997-98."
  },
  {
    id: 10,
    title: "Mitra Memorial Scholarship",
    details: "For securing highest marks in Maths in B.Sc.-I & II, session 1997-98."
  },
  {
    id: 11,
    title: "Ewing Christian College Gold Medal",
    details: "For highest marks in B.Sc. (PCM/PSM/PEM group) 1995-98."
  }
];

const Awards = () => {
  return (
    <div className="page-container awards-page">
      <div className="awards-header">
        <p className="awards-label">Awards</p>
        <h1 className="page-title"> Awards, Scholarships & Medals</h1>
        <p className="awards-description">
          A curated list of academic and research recognitions, including paper awards, faculty honors, scholarships, and medals.
        </p>
      </div>

      <div className="award-list-section">
        <div className="award-list-card">
          <ul className="award-list">
            {awardsList.map((award) => (
              <li key={award.id} className="award-list-item">
                <div className="award-item-heading">
                  <h3>{award.title}</h3>
                  {award.link && (
                    <a href={award.link} target="_blank" rel="noopener noreferrer" className="award-link">
                      View Publication
                    </a>
                  )}
                </div>
                <p className="award-item-details">{award.details}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Awards;
