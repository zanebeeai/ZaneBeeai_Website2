import React, { useState, useEffect } from 'react';
import './AboutMe.css';
import Header from './Header';

const experiences = [
  {
    title: 'Student Researcher',
    institution: 'Department of Mathematics, University of Toronto',
    timeframe: 'Jan \'24 - May \'24',
    description: (
      <div>
        Under the guidance of Dr. Ahmed Ellithy at UofT, I have been researching GR in raycasting applications. 📚✨
        <ul>
          <li><strong>First component:</strong></li>
          <ul>
            <li>Presented @ Canadian Undergrad Math Conference (UBC) & Undergraduate Research in Technology Conference (MIT) </li>
            <li>Analyzes geodesic trajectories of incoming photons at faster-than-light travel in various standard manifolds (Schwarzschild, Binary black hole systems)</li>
            <li>Accepted publication in IEEE Xplore (May 2025)</li>
          </ul>
          <li><strong>Application:</strong></li>
          <ul>
            <li>Geodesics implemented as rays in a ray-casting system</li>
            <li>Generates images of how such a system would appear to an inertial observer</li>
            <li>Similar method used for graphics in Interstellar! 🌌🎬 (Thorne's resources were incredibly useful)</li>
          </ul>
        </ul>
        The second component of this research (to be presented in 2025) involves processing gravitational wave strain data from LIGO with ML to predict initial properties of a black hole geometry (spin, acceleration, 4-momentum, etc.). 💻🔭
        <ul>
          <li><strong>Outcome:</strong></li>
          <ul>
            <li>Produces a unique metric tensor</li>
            <li>Enables live visualizations of binary black hole systems in our universe 🌠🌌</li>
          </ul>
        </ul>
      </div>
    ),
    images: [
      '/images/experiences/uoftResearch2-logo.png',
      '/images/experiences/uoftResearch1-logo.png',
      '/images/experiences/uoftResearch3-logo.png',
    ],
    links: [
      { name: 'Beamer', url: 'https://drive.google.com/file/d/1TQltJbAtJvbY7m3fiIe0j8cCMClyZOub/view?usp=sharing' },
      // { name: 'CUMC Video', url: '#' }
    ]
  },
  
  {
    title: 'Research Assistant',
    institution: 'Sunnybrook Research Institute',
    timeframe: 'July \'24 - Present',
    description: (
      <div>
        Researched simultaneous optical and acoustic signatures of bubble cavitation in small channels for antivascular therapy under the mentorship of Dr. David Goertz. 🔬✨
        <ul>
          <li><strong>Focus:</strong></li>
          <ul>
            <li>Analyzed high-speed optical imaging and acoustic frequency spectra of microbubble clouds.</li>
            <li>Studied dynamic behaviors under pressures ranging from 100 kPa to 3000 kPa, relevant for focused ultrasound (FUS) therapies.</li>
          </ul>
          <li><strong>Techniques:</strong></li>
          <ul>
            <li>Developed custom segmentation algorithms for tracking microbubble dynamics.</li>
            <li>Performed Fourier, short-time Fourier, and S-transform analyses of cavitation data.</li>
          </ul>
        </ul>
        This work identifies harmonic and subharmonic patterns to improve the precision and safety of FUS therapies. Contributions have implications for both cancer and neurological treatments. 💻🔭
        <ul>
          <li><strong>Outcome:</strong></li>
          <ul>
            <li>Proposed markers for cavitation thresholds to enhance antivascular therapy.</li>
            <li>Developed insights into structured cavitation behaviors in small channels.</li>
          </ul>
        </ul>
        also I ranked <i>dead last</i> in the lab's baking contest. 🍪🥲
      </div>
    ),
    images: [
      '/images/experiences/sunnybrook1.jpg',
      '/images/experiences/sunnybrook2.jpg',
      '/images/experiences/sunnybrook3.jpg',
    ],
    links: [
      // { name: 'Abstract', url: 'https://drive.google.com/your-abstract-link' }, no links yet bc privacy
    ]
  }
  
];

const AboutMe = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <Header />
      <div className="aboutMeContent">
        <div className="description-card">
          <div className="description-subcard">
            <p className="description-text">I research <a href="/myStuff"><strong>stuff</strong></a>. Sometimes I write that <a href="/myStuff"><strong>stuff</strong></a> down.<br/>
            I think of cool <a href="/myStuff"><strong>stuff</strong></a>. Sometimes I build said <a href="/myStuff"><strong>stuff</strong></a>.<br/>
            <div className = "description-text-small"> there's not much else to say :P</div></p>
          </div>
        </div>
        <div className="experiences">
          <div className="experience-title-container">
            <div className="experience-line"></div>
            <h2>Experiences</h2>
            <div className="experience-line"></div>
          </div>
          <h4 className="experience-subtitle">in case your curiosity extends past that apt description.</h4>
          {experiences.map((exp, index) => (
            <div key={index} className="experience">
              <h3 className="experience-title">{exp.title}</h3>
              <div className="experience-header">
                <span className="institution">{exp.institution}</span>
                <span className="timeframe">{exp.timeframe}</span>
              </div>
              <div className="experience-body">
                <div className="experience-images">
                  {isMobile
                    ? exp.images.length > 0 && (
                        <img
                          src={exp.images[0]}
                          alt={`${exp.title} Main Image`}
                          className="experience-image"
                        />
                      )
                    : exp.images.map((image, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={image}
                          alt={`${exp.title} Image ${imgIndex + 1}`}
                          className="experience-image"
                        />
                      ))}
                </div>
                <div className="experience-description-subcard">
                  <div className="experience-description">{exp.description}</div>
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
