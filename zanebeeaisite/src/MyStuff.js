import React, { useState, useEffect } from 'react';
import './AboutMe.css';
import Header from './Header';

const experiences = [
    {
        projName: 'WOSS Robotics',
        title: 'Founder, Head Captain',
        description: (
          <div>
            <div style={{ fontSize: '1.5em', fontWeight: 'bold', textAlign: 'center' }}>
                I <b><span style={{ color: '#ff0000' }}>LOVE</span></b> WOSS ROBOTICS!!!!!
            </div>
            As the Founder and Head Captain of WOSS Robotics, I have led efforts to foster a passion for STEM by creating an inclusive and thriving community. 🚀🤖
            <ul>
              <li><strong>Impact:</strong></li>
              <ul>
                <li>Engaged 150+ students in STEM initiatives, including neurodivergent students through our Community Pathways Program.</li>
                <li>Secured $14k in funding to ensure low barriers to entry and access to robotics for all interested students.</li>
              </ul>
              <li><strong>Growth:</strong></li>
              <ul>
                <li>Expanded the program to 3 competitive teams (8433W/X/Y), in addition to guiding 30+ students through individualized robotics-based STEM projects.</li>
                <li>Collaborating with 5+ elementary schools to teach robotics and inspire the next generation of innovators.</li>
              </ul>
              <li><strong>Achievements:</strong></li>
              <ul>
                <li>Earned awards for Skills, Tournament Champions, and Excellence at the regional and provincial levels, qualifying for the US Open Invitational.</li>
                <li>International awards in REC Challenges</li>
                <li>Ranked #1 high school team in Ontario, #5 in Canada, and Top 100 globally.</li>
              </ul>
            </ul>
            The WOSS Robotics program has been by far the most impactful and rewarding initiative I have ever been a part of. We are implementing innovative ideas every day, ranging from optimizing a robot's ladder-climbing abilities to designing strategies that empower underrepresented students to take their first steps into STEM. As a proud founder and member of 8433W, I hope to see you all at Worlds!! 🌟🤝
          </div>
        ),
        images: [
          '/images/projects/wossrobotics1.jpg',
          '/images/projects/wossrobotics2.jpg',
          '/images/projects/wossrobotics3.jpg',
        ],
        links: [
          { name: 'Team Site', url: 'https://wossrobotics.ca' },
          { name: 'Instagram', url: 'https://www.instagram.com/wossrobotics/' },
          { name: '8433W Robotevents', url: 'https://www.robotevents.com/teams/V5RC/8433W' },
        ]
    },
    
  
];

const MyStuff = () => {
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
        
        <div className="experiences">
          <div className="experience-title-container">
            <div className="experience-line"></div>
            <h2>Projects</h2>
            <div className="experience-line"></div>
          </div>
          <h4 className="experience-subtitle">here lies the elsewhere-mentioned "stuff".</h4>
          {experiences.map((exp, index) => (
            <div key={index} className="experience">
              <h3 className="experience-title">{exp.projName}</h3>
              <div className="experience-header">
                <span className="institution">{exp.title}</span>
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

export default MyStuff;
