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

    {
      projName: 'Voyager-O',
      title: 'NASA Space Apps Challenge \'24',
      description: (
        <div>
          Voyager-O is a platform developed during the NASA Space Apps Challenge 2024 to expand the functionality of the existing Eyes on Exoplanets platform. 🚀✨ 
          <ul>
            <li><strong>Mission:</strong></li>
            <ul>
              <li>Enhanced celestial visualization by integrating datasets from the NASA/IPAC Exoplanet Archive, Gaia, and Star Chart APIs.</li>
              <li>Introduced interactive features, such as custom constellations, star mapping relative to exoplanets, and time-lapsed planetary movements.</li>
            </ul>
            <li><strong>Features:</strong></li>
            <ul>
              <li>Photorealistic renders of exoplanetary skies using data-driven star luminosity, heat, and spectral color mapping.</li>
              <li>Generated culturally relevant constellation stories using generative AI and geographic context.</li>
              <li>Reduced GPU load with efficient shaders for real-time star cluster visualizations.</li>
            </ul>
            <li><strong>Applications:</strong></li>
            <ul>
              <li>Immersive educational tools for teaching astronomy and space science.</li>
              <li>Scientific visualization for researchers exploring planetary data and rotations.</li>
              <li>Film and game development for realistic depictions of alien skies and planetary systems.</li>
            </ul>
          </ul>
          also we met <i>Gen V</i> actors shooting @ UTM which was AWESOME!  
        </div>
      ),
      images: [
        '/images/projects/voyagero1.png',
        '/images/projects/voyagero4.jpg',
        // '/images/projects/voyagero2.png',
        '/images/projects/voyagero3.png',

      ],
      links: [
        { name: 'Try Voyager-O', url: 'https://voyager-o.ca/' },
        { name: 'Project Summary', url: 'https://docs.google.com/presentation/d/1nLMgDGwfKsTfv4cKflvGhIW8QraJ2w0tziyHBR2Iors/edit?usp=sharing' },
        { name: 'Github', url: 'https://github.com/Sattelite-Campus/frontend-exosky' },
      ]
  },

  {
    projName: 'Dunamis',
    title: 'FBLA Canadian Nationals',
    description: (
      <div>
      Dunamis is an interactive platform designed to streamline student engagement and collaboration. Inspired by the Greek word for "potential" (δύναμις), the platform empowers users by providing tailored dashboards, robust authentication systems, and intuitive user interfaces. 🌟
      <ul>
        <li><strong>Key Features:</strong></li>
        <ul>
          <li>Category and region-based activity tracking.</li>
          <li>Secure authentication with JWT and MongoDB integration.</li>
          <li>Scalable backend architecture to support growing user bases.</li>
        </ul>
        <li><strong>Impact:</strong></li>
        <ul>
          <li>Over 60 active users in public beta with endorsement from an HDSB trustee.</li>
          <li>Plans for expansion into B2B integration, customizable profiles, and mobile app support.</li>
        </ul>
      </ul>
    </div>
    ),
    images: [
      '/images/projects/dunamis1.jpg',
      '/images/projects/dunamis2.png',

    ],
    links: [
      { name: 'Try Dunamis', url: 'https://www.mydunamis.ca/' },
      // { name: 'Project Summary', url: 'https://docs.google.com/presentation/d/1nLMgDGwfKsTfv4cKflvGhIW8QraJ2w0tziyHBR2Iors/edit?usp=sharing' },
      // { name: 'Github', url: 'https://github.com/Sattelite-Campus/frontend-exosky' },
    ]
},
{
  projName: 'N.O.M.A.D.',
  title: 'UofT Robotics Association',
  description: (
    <div>
      The Natural Observation Multiterrain Analysis Device (N.O.M.A.D.) is a sustainable robotics solution designed to revolutionize soil analysis and environmental monitoring. N.O.M.A.D. addresses the need for actionable data to combat climate change and optimize agricultural practices. 🌱🤖
      <ul>
        <li><strong>Core Features:</strong></li>
        <ul>
          <li>Autonomous soil sampling with a 5-degree-of-freedom robotic arm for precision in diverse terrains.</li>
          <li>Real-time ultrasonic distance sensing for obstacle detection and navigation.</li>
          <li>Sustainably powered to align with environmental goals.</li>
        </ul>
        <li><strong>Applications:</strong></li>
        <ul>
          <li>Improves soil fertility understanding for optimized crop growth and land management.</li>
          <li>Monitors environmental pollutants, aiding conservation efforts.</li>
          <li>Contributes to climate change research by analyzing soil temperatures and carbon sink dynamics.</li>
        </ul>
        <li><strong>Innovations:</strong></li>
        <ul>
          <li>Compressed 40+ hours of 3D printing into 12 hours to accelerate prototyping.</li>
          <li>Implemented inverse kinematics for precise trajectory planning and sampling.</li>
          <li>Planned enhancements, including data analysis UI and SLAM (Simultaneous Localization and Mapping).</li>
        </ul>
      </ul>
      N.O.M.A.D. empowers sustainable decision-making and inspires future technological solutions for a healthier planet. 🌍🔬
    </div>
  ),
  images: [
    '/images/projects/nomad1.jpg',
    '/images/projects/nomad2.jpg',
    // '/images/projects/nomad3.xpng',
  ],
  links: [
    { name: 'Devpost', url: 'https://devpost.com/software/n-o-m-a-d' },
    { name: 'Project Summary', url: 'https://satellite-campus.tech/' },
  ]
},
{
  projName: 'DeltaPump',
  title: 'MoHacks HealthQuest Hackathon',
  description: (
    <div>
      DeltaPump is an RFID-authenticated, accelerometer-based IoT solution designed to enhance accountability and efficiency in IV pump usage. By integrating modern hardware and software technologies, DeltaPump ensures secure authentication, real-time monitoring, and precise tracking of medical equipment. ⚙️💉
      <ul>
        <li><strong>Core Features:</strong></li>
        <ul>
          <li>RFID authentication for secure access and usage tracking.</li>
          <li>Accelerometer-based sensors to monitor use states and detect anomalies.</li>
          <li>ESP-32 microcontroller integration for IoT-based real-time data streaming.</li>
        </ul>
        <li><strong>Applications:</strong></li>
        <ul>
          <li>Improves accountability by maintaining detailed change logs, use history and centralized monitoring.</li>
          <li>Detects unauthorized usage/misuse, ensuring patient safety.</li>
        </ul>
        <li><strong>Innovation:</strong></li>
        <ul>
          <li>Developed an economic feasibility analysis for scaling implementation in healthcare facilities.</li>
          <li>Streamlined sensor integration with an intuitive IoT dashboard for real-time insights.</li>
        </ul>
      </ul>
    </div>
  ),
  images: [
    '/images/projects/deltapump1.jpg',
    '/images/projects/deltapump2.jpg',
  ],
  links: [
    // { name: 'Project Overview', url: 'https://your-link-to-detailed-project-docs.pdf' },
  ]
},

{
  projName: 'Water Recycling Irrigation System',
  title: 'St. Thomas Aquinas Secondary School',
  description: (
    <div>
      Designed and implemented an automated water-recycling irrigation system for the rooftop garden at St. Thomas Aquinas SS. 🌱💧
      <ul>
        <li><strong>Core Features:</strong></li>
        <ul>
          <li>Rainwater collection system integrated with ESP-controlled irrigation.</li>
          <li>Electrical engineering design for supply-based automatic water distribution.</li>
          <li>Manual refill option to ensure consistent irrigation cycles.</li>
        </ul>
        <li><strong>Impact:</strong></li>
        <ul>
          <li>Reduced water wastage by utilizing rooftop-collected rainfall.</li>
          <li>Promoted sustainability and environmental awareness within the school.</li>
        </ul>
      </ul>
      This project highlights the potential of IoT and engineering principles in fostering sustainable practices. 🌍🔧
    </div>
  ),
  images: [
    '/images/projects/waterirrigation1.png',
    '/images/projects/waterirrigation2.jpg',
  ],
  links: [
    // { name: 'Overview', url: 'https://your-link-to-project-docs-or-presentation.pdf' },
  ]
}



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
