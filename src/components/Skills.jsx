import React, { useState } from 'react';
import './shared.css';

// Import all skill images
import img14 from '../assets/14.png';
import img6  from '../assets/6.gif';
import img7  from '../assets/7.png';
import img8  from '../assets/8.webp';
import img9  from '../assets/9.webp';
import img12 from '../assets/12.webp';
import img11 from '../assets/11.webp';
import img13 from '../assets/13.webp';


const SkillLogo = ({ name, image }) => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="skill-icon skill-logo-slot" aria-label={`${name} logo`}>
      {image && !imageFailed ? (
        <img
          src={image}
          alt={`${name} logo`}
          className="skill-logo-image"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span className="skill-logo-placeholder">Logo</span>
      )}
    </div>
  );
};

const skillsData = {
  software: [
    { name: 'CST Microwave Studio', level: 99, image: img14, description: 'Design & Simulation' },
    { name: 'MATLAB & Simulink', level: 98, image:img6, description: 'Programming & Modeling' },
    { name: 'LabVIEW', level: 99, image:img7, description: 'Programming & Automation' },
    { name: 'Scilab', level: 98,image: img8, description: 'Scientific Computing' },
    { name: 'MS Visio', level: 97, image: img9, description: 'Diagramming & Design' }
  ],
  design: [
    { name: 'Web Design', level: 90, image:  img12, description: 'HTML, CSS, JS' },
    { name: 'Technical Documentation', level: 99, image: img11, description: 'Specification Writing' }
  ],
  research: [
    { name: 'Research Methodology', level: 99, image: img13, description: 'Experimental Design' }
  ]
};

const Skills = () => {
  const allSkills = Object.values(skillsData).flat();

  return (
    <div className="page-container">
      <h1 className="page-title">Technical Skills</h1>

      <div className="skills-grid">
        {allSkills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-card-header">
              <SkillLogo name={skill.name} image={skill.image} />
              <h3>{skill.name}</h3>
            </div>

            <p className="skill-description">{skill.description}</p>

            <div className="skill-bar-container">
              <div
                className="skill-bar"
                style={{ width: `${skill.level}%` }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(90deg, var(--primary), #d946ef)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(90deg, var(--primary), var(--secondary))'}
              >
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            </div>

            <div className="skill-stats">
              <span className="proficiency-level">
                {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Proficient'}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="skills-summary">
        <h2>Expertise Overview</h2>
        <div className="summary-grid">
          <div className="summary-item">
            <div className="summary-number">8+</div>
            <div className="summary-text">Software Tools Mastered</div>
          </div>
          <div className="summary-item">
            <div className="summary-number">24+</div>
            <div className="summary-text">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;


