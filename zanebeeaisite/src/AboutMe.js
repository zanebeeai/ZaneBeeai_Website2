import React from 'react';
import './AboutMe.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const experiences = [
  {
    title: 'Independent Researcher',
    institution: 'Department of Mathematics, University of Toronto',
    timeframe: 'Jan \'24 - Present',
    description: 'For the past 5 months, I have been researching general relativity under the guidance of a Math P.h.D. student at UofT. The first component of the research will be presented at a conference this week, and potentially at the Canadian Undergraduate Math Conference. Fundamentally, this component uses Alcubierre geometry to analyze the geodesic trajectories of incoming photons at faster-than-light travel in various standard manifolds, such as near a Schwarzschild or Binary black hole system. Further, these geodesics are implemented as rays in a ray casting system to generate images of how such a system would appear to an inertial observer. This is how they made the graphics in Interstellar! (Thorne\'s resources were incidentally incredibly useful) The second component of this research (to be presented 2025) involves processing gravitational wave strain data from LIGO with ML to predict initial properties of a black hole geometry (spin, acceleration, 4-momentum etc.). These properties can be used to create a metric tensor, which can be passed through to the first component and create new, live visualizations of black holes in our universe.',
    image: '/images/experiences/uoftResearch.png',
    links: [
      { name: 'Link 1', url: '#' },
      { name: 'Link 2', url: '#' }
    ]
  },
  {
    title: 'Independent Researcher',
    institution: 'uWaterloo',
    timeframe: 'Feb \'24 - Present',
    description: 'Investigating quantum mechanics and its applications.',
    image: '/path/to/image2.png',
    links: [
      { name: 'Link 1', url: '#' },
      { name: 'Link 2', url: '#' }
    ]
  },
  {
    title: 'Research Intern',
    institution: 'Sunnybrook',
    timeframe: 'July \'24 - Present',
    description: 'Working on biomedical engineering projects.',
    image: '/path/to/image3.png',
    links: [
      { name: 'Link 1', url: '#' },
      { name: 'Link 2', url: '#' }
    ]
  }
];

const AboutMe = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  return (
    <div>
      <div className="header">
        <div className="header-left">
          <span className="header-name" onClick={() => navigate('/')}>zane beeai.</span>
        </div>
        <div className="header-right">
          <button className="header-button" onClick={() => navigate('/aboutMe')}>aboutMe</button>
          <button className="header-button" onClick={() => navigate('/myStuff')}>myStuff</button>
        </div>
        <div className="header-underline"></div>
      </div>
      <div className="aboutMeContent">
        <div className="description-card">
          <div className="description-subcard">
            <p className="description-text">I research <a href="/myStuff"><strong>stuff</strong></a>. Sometimes I write that <a href="/myStuff"><strong>stuff</strong></a> down.<br/>
            I think of cool <a href="/myStuff"><strong>stuff</strong></a>. Sometimes I build said <a href="/myStuff"><strong>stuff</strong></a>.<br/>
            There's not much else to say :P</p>
          </div>
        </div>
        <div className="experiences">
          <div className="experience-title-container">
            <div className="experience-line"></div>
            <h2>Experiences</h2>
            <div className="experience-line"></div>
          </div>
          <h4 className="experience-subtitle">In case your curiosity extends past that apt description</h4>
          {experiences.map((exp, index) => (
            <div key={index} className="experience">
              <h3 className="experience-title">{exp.title}</h3>
              <div className="experience-header">
                <span className="institution">{exp.institution}</span>
                <span className="timeframe">{exp.timeframe}</span>
              </div>
              <div className="experience-body">
                <img src={exp.image} alt={exp.title} className="experience-image" />
                <div className="experience-description-subcard">
                  <p className="experience-description">{exp.description}</p>
                </div>
              </div>
              <div className="experience-links">
                {exp.links.map((link, linkIndex) => (
                  <a key={linkIndex} href={link.url} target="_blank" rel="noopener noreferrer" className="experience-link">{link.name}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
