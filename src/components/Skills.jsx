import React from 'react';
import './shared.css';

const skillsData = {
  software: [
    { name: "CST Microwave Studio", level: 99, icon: "📡", description: "Design & Simulation" },
    { name: "MATLAB & Simulink", level: 98, icon: "📊", description: "Programming & Modeling" },
    { name: "LabVIEW", level: 99, icon: "⚙️", description: "Programming & Automation" },
    { name: "Scilab", level: 98, icon: "📈", description: "Scientific Computing" },
    { name: "MS Visio", level: 97, icon: "🖌️", description: "Diagramming & Design" }
  ],
  design: [
    { name: "Web Design", level: 90, icon: "💻", description: "HTML, CSS, JS" },
    
    { name: "Technical Documentation", level: 99, icon: "📄", description: "Specification Writing" }
  ],
  research: [
    { name: "Research Methodology", level: 99, icon: "🔬", description: "Experimental Design" },
    
  ]
};

const Skills = () => {
  const allSkills = Object.values(skillsData).flat();

  return (
    <div className="page-container">
      <h1 className="page-title">Technical Skills</h1>

      {/* Skills Grid */}
      <div className="skills-grid">
        {allSkills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-card-header">
              <div className="skill-icon">{skill.icon}</div>
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

      {/* Skills Summary */}
      <div className="skills-summary">
        <h2>Expertise Overview</h2>
        <div className="summary-grid">
          <div className="summary-item">
            <div className="summary-number">8+</div>
            <div className="summary-text">Software Tools Mastered</div>
          </div>
          {/* <div className="summary-item">
            <div className="summary-number">13+</div>
            <div className="summary-text">Technical Competencies</div>
          </div> */}
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
