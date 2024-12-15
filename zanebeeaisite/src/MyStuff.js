import React, { useState, useEffect } from 'react';
import './MyStuff.css';
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
    projName: 'WOSS Electrathon',
    // title: 'University of Waterloo Electric Vehicle Competition',
    title: 'Founder, President',
    description: (
      <div>
        Captained design and construction of a full-scale electric car to compete in uWaterloo's Electric Vehicle Competition. ⚡🚗
        <ul>
          <li><strong>Key Highlights:</strong></li>
          <ul>
            <li>Secured <strong>$3,000 in funding</strong> to support project materials and tools.</li>
            <li>Collaborated with the school’s apprenticeship program and technical education curriculum to provide hands-on engineering access to <strong>40+ underrepresented students</strong> in STEM.</li>
          </ul>
          <li><strong>Leadership & Teamwork:</strong></li>
          <ul>
            <li>Led a diverse team of over <strong>30 students</strong> specializing in metalworking, welding, machining, CNCing, and CAD.</li>
          </ul>
          <li><strong>Technical Contributions:</strong></li>
          <ul>
            <li>Utilized CAD tools (Fusion360, AutoCAD, OnShape, Inventor) to design the electric vehicle and its subsystems, including the front suspension and rear drivetrain.</li>
            <li>Conducted FEA and physics simulations to optimize the car design for speed and stability.</li>
            <li>Created detailed technical drawings to manufacture vehicle components using a lathe, mill, riveting, and CNC machining.</li>
          </ul>
        </ul>
        This initiative exemplifies the intersection of engineering, teamwork, and innovative design, inspiring a new generation of STEM learners. 🚀🔧
      </div>
    ),
    images: [
      '/images/projects/electrathon1.jpg',
      '/images/projects/electrathon2.png',
      '/images/projects/electrathon3.jpg',
    ],
    links: [
      // { name: 'University of Waterloo EV Competition', url: 'https://uwaterloo.ca/ev-challenge/' },
      // { name: 'Learn More About Electrathon', url: 'https://example.com/electrathon-overview' },
    ]
  },
  {
    projName: 'LEGO Historical Firearms',
    title: 'A Kid-Friendly Arsenal',
    description: (
      <div>
        <p>
          Designed and constructed <b>15+ full-scale LEGO firearms</b> featuring historical accuracy and functional firing capabilities. Each model balances intricate detailing, mechanical precision, and instructional clarity to replicate iconic firearms using LEGO bricks. 🔧🔫
        </p>
        <ul>
          <li>
            <strong>Key Models:</strong>
            <ul>
              <li><b>Steyr AUG:</b> Fully automatic, magazine-fed firing mechanism.</li>
              <li><b>Glock 19:</b> Semi-automatic, magazine-fed functionality.</li>
              <li><b>M4A1:</b> Full-scale replica with functional, accurate magazine design.</li>
              <li><b>M1918 Thompson:</b> Historically accurate model with functional magazines.</li>
            </ul>
          </li>
          <li>
            <strong>Innovations:</strong>
            <ul>
              <li>Engineered firing systems using LEGO Technic and brick mechanisms.</li>
              <li>Produced full instructional sheets for all models to enable replication.</li>
              <li>Ensured historically accurate dimensions and assembly techniques.</li>
            </ul>
          </li>
          <li>
            <strong>Impact:</strong>
            <ul>
              <li>Blended engineering design principles with creative LEGO construction.</li>
              <li>Published and shared instructional sheets with the LEGO community.</li>
              <li>Inspiring others to explore mechanical engineering through LEGO modeling.</li>
            </ul>
          </li>
        </ul>
        <p>
          This project demonstrates the power of creative engineering and design, combining historical research and functional prototyping to deliver models that are both <b>accurate</b> and <b>functional</b>. 🔨📏
        </p>
      </div>
    ),
    images: [
      '/images/projects/lego_aug.png', // Replace with actual paths
      '/images/projects/lego_thompson.png',
      '/images/projects/lego_glock19.png',
      '/images/projects/lego_m4a1.png',
    ],
    links: [
      // Include links if there are published instruction sheets or photo galleries
    ],
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
  projName: 'Water-Recycling Irrigation System',
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
},

{
  projName: 'Bean Bags of the Coalition',
  title: 'Halton Hacks',
  description: (
    <div>
      <p>
        Returning to the nostalgic roots of local multiplayer gaming, <b>Bean Bags of the Coalition</b> was developed in under 8 hours during Halton Hacks. Inspired by <em>Call of Duty Black Ops 2</em> split-screen, this FPS brought back the joy of laid-back, screen-peeking gaming with friends. 🎮🕹
      </p>
      <ul>
        <li>
          <strong>Development Highlights:</strong>
          <ul>
            <li>Created a dynamic local multiplayer FPS game in 8 hours.</li>
            <li>Features smooth, competitive gameplay and custom-designed maps.</li>
            <li>Optimized visuals for nostalgic "BO2-style" aesthetics.</li>
          </ul>
        </li>
        <li>
          <strong>Recognition:</strong>
          <ul>
            <li>Awarded <b>Best Hack</b> by Regional Councillor Sammy Ijaz 🏆.</li>
            <li>Praised for balancing creativity, fun, and execution.</li>
          </ul>
        </li>
        <li>
          <strong>Future Expansion:</strong>
          <ul>
            <li>Integrating keyboard/mouse support and online multiplayer features.</li>
            <li>Expanding maps and gameplay modes.</li>
            <li>Potential for console publishing.</li>
          </ul>
        </li>
      </ul>
      <p>
        Halton Hacks was an incredible opportunity to develop something light-hearted while revisiting game development roots. Thank you for the <b>great food</b> and an unforgettable experience. 🚀
      </p>
    </div>
  ),
  images: [
    '/images/projects/bbc1.png', // Replace with actual paths
    '/images/projects/bbc2.jpg',
    '/images/projects/bbc3.jpg',
  ],
  links: [
    { name: 'Project Presentation', url: 'https://docs.google.com/presentation/d/1k-UtxzSdLXrclMWZuTcn0i3ZcpjFQPFlTxZ36tkNOxc/edit#slide=id.g26364cd06a6_1_3448' },
    { name: 'Devpost Page', url: 'https://devpost.com/software/bean-bags-of-the-coalition' },
    { name: 'News Coverage 📰', url: 'https://www.miltonvillager.com/haltons-first-hackathon-held-in-milton/' },
  ],
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
  projName: 'Solara CFC',
  title: 'NASA Space Apps Challenge \'23',
  description: (
    <div>
      Solara, developed during the NASA Space Apps Challenge 2023, enhances the open-source VISIONS platform to tackle climate change by visualizing chlorofluorocarbon (CFC) emissions and their impact on global warming. 🌍💡
      <ul>
        <li><strong>Core Features:</strong></li>
        <ul>
          <li>Integrated datasets on CFC emissions, solar flux, ozone, and temperature from NASA and other open sources.</li>
          <li>Advanced visualization algorithms for greenhouse gas signatures, including CO<sub>2</sub> and methane.</li>
          <li>Geospatial mapping to assess the effectiveness of policies like the Montreal Protocol.</li>
        </ul>
        <li><strong>Impact:</strong></li>
        <ul>
          <li>Demonstrates the global effect of reduced CFCs after the Montreal Protocol.</li>
          <li>Highlights the critical role of atmospheric dynamics in tackling climate change.</li>
          <li>Supports policy development by visualizing emissions trends and their impact.</li>
        </ul>
        <li><strong>Next Steps:</strong></li>
        <ul>
          <li>Incorporate geo-diverse datasets for broader leak detection capabilities.</li>
          <li>Allow researchers to input and visualize novel datasets.</li>
          <li>Improve the user interface for accessibility and stakeholder engagement.</li>
        </ul>
      </ul>
      Solara was selected as a Global Finalist for the biggest hackathon in the world; top 40 teams of 56k participants.🌞🌿
    </div>
  ),
  images: [
    '/images/projects/solara1.jpg', // Replace with actual paths or mockup links
    '/images/projects/solara2.jpg',
  ],
  links: [
    { name: 'Try Solara', url: 'https://solara.earth' },
    { name: 'Project Documentation', url: 'https://www.spaceappschallenge.org/2023/find-a-team/satellite-campus-20/?tab=project' },
    { name: 'News Coverage 📰', url: 'https://spaceq.ca/canadians-are-global-finalists-in-the-space-apps-challenge/' },

    // { name: '', url: 'https://solara.earth' },
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


];
const MyStuff = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardClick = (experience) => {
    setSelectedExperience(experience);
  };

  const handleBackClick = () => {
    setSelectedExperience(null);
  };

  return (
    <div>
      <Header />
      <div className="myStuffContent">
        <div className="experiences">
          {!selectedExperience ? (
            // Grid view
            <>
              <div className="experience-title-container">
                <div className="experience-line"></div>
                <h2>Projects</h2>
                <div className="experience-line"></div>
              </div>
              <h4 className="experience-subtitle">Here lies the elsewhere-mentioned "stuff".</h4>
              <h4 className="experience-subtitle"><i>if a link doesn't work, i stopped paying for the domain :P</i></h4>
              <div className="experience-grid">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="experience-card"
                    onClick={() => handleCardClick(exp)} // Set selectedExperience on click
                  >
                    <div className="experience-card-image-container">
                      <img
                        src={exp.images[0]}
                        alt={`${exp.title} Main Image`}
                        className="experience-card-image"
                      />
                    </div>
                    <div className="experience-card-overlay">
                      <h3 className="experience-card-title">{exp.projName}</h3>
                      <p className="experience-card-subtitle">{exp.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            // Detailed view
            <div className="experience">
  <button onClick={handleBackClick} className="back-button">
    back →
  </button>
  <h3 className="experience-title">{selectedExperience.projName}</h3>
  <div className="experience-header">
    <span className="institution">{selectedExperience.title}</span>
  </div>
  <div className="experience-body">
    {isMobile ? (
      <>
        <div className="experience-images">
          <img
            src={selectedExperience.images[0]}
            alt={`${selectedExperience.title} Main Image`}
            className="experience-main-image"
          />
        </div>
        <div className="experience-description-subcard">
          <div className="experience-description">
            {selectedExperience.description}
          </div>
        </div>
        <div className="experience-images-grid">
          {selectedExperience.images.slice(1).map((image, imgIndex) => (
            <img
              key={imgIndex}
              src={image}
              alt={`${selectedExperience.title} Image ${imgIndex + 2}`}
              className="experience-image-grid-item"
            />
          ))}
        </div>
      </>
    ) : (
      <>
        <div className="experience-images">
          {selectedExperience.images.map((image, imgIndex) => (
            <img
              key={imgIndex}
              src={image}
              alt={`${selectedExperience.title} Image ${imgIndex + 1}`}
              className="experience-image"
            />
          ))}
        </div>
        <div className="experience-description-subcard">
          <div className="experience-description">
            {selectedExperience.description}
          </div>
        </div>
      </>
    )}
  </div>
  <div className="experience-links">
    {selectedExperience.links.map((link, linkIndex) => (
      <a
        key={linkIndex}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="experience-link"
      >
        {link.name}
      </a>
    ))}
  </div>
</div>

          )}
        </div>
      </div>
    </div>
  );
};

export default MyStuff;
