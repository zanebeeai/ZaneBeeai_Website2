import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import './Home.css';

const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const fontLoader = new FontLoader();
    const textureLoader = new THREE.TextureLoader();

    // Load the textures
    const matcapTexture = textureLoader.load("textures/matcaps/4.png");
    const imageTexture = textureLoader.load("images/zaneEVC.jpg");
    const frameTexture = textureLoader.load("textures/matcaps/3.png");
    const linksTexture = textureLoader.load("textures/matcaps/2.png");

    // Create materials
    const material = new THREE.MeshMatcapMaterial({ matcap: matcapTexture });
    const imageMaterial = new THREE.MeshBasicMaterial({ map: imageTexture });
    const frameMaterial = new THREE.MeshMatcapMaterial({ matcap: frameTexture });
    const linksMaterial = new THREE.MeshMatcapMaterial({ matcap: linksTexture });

    const rad = 1.1;
    // Create the center circle image
    const imageGeometry = new THREE.CircleGeometry(rad, 32);
    const imageCircle = new THREE.Mesh(imageGeometry, imageMaterial);
    imageCircle.rotation.x = Math.PI / 2;  // Rotate image 90 degrees

    // Create the frame with a hole
    const outerRadius = rad + 0.05;
    const innerRadius = rad;
    const shape = new THREE.Shape();

    let orbitRadiusX = 2; // Initial value for desktop
    const orbitRadiusY = 1; // Height of the orbit remains constant

    // Draw the outer circle
    shape.absarc(0, 0, outerRadius, 0, Math.PI * 2, false);

    // Draw the hole
    const hole = new THREE.Path();
    hole.absarc(0, 0, innerRadius, 0, Math.PI * 2, true);
    shape.holes.push(hole);

    const extrudeSettings = {
      depth: 0.1,
      bevelEnabled: false,
    };
    const frameGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    const frame = new THREE.Mesh(frameGeometry, frameMaterial);
    frame.rotation.x = Math.PI / 2;  // Rotate frame 90 degrees

    // Add image and frame to a group
    const framedImage = new THREE.Group();
    framedImage.add(imageCircle);
    framedImage.add(frame);

    // Tilt angle variable
    const tiltAngle = Math.PI / 6; // 30 degrees in radians
    framedImage.rotation.x = -tiltAngle;

    scene.add(framedImage);

    // Array to store stars
    const stars = [];

    // Function to create stars
    function createStars() {
      const starGeometry = new THREE.SphereGeometry(0.02, 24, 24);
      const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

      for (let i = 0; i < 500; i++) {
        const star = new THREE.Mesh(starGeometry, starMaterial);
        star.position.set(
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 40,
          -Math.random() * 50 - 5 // Position stars outside the view
        );
        star.velocity = Math.random() * 0.05 + 0.02; // Slightly varying velocities
        stars.push(star);
        scene.add(star);
      }
    }

    // Create stars initially
    createStars();

    // Function to adjust positions and sizes for different screen sizes
    function adjustForScreenSize() {
      if (sizes.width <= 1000) {
        console.log('Mobile screen detected');
        // Adjust frame size for mobile
        framedImage.scale.set(0.7, 0.7, 0.7);

        // Adjust sphere positions for mobile
        spheres.forEach((sphere, index) => {
          const row = Math.floor(index / 2);
          const col = index % 2;
          sphere.position.set(col * 0.5 - 0.25, -1.5 - row * 0.5, 0);
        });

        // Update orbit radius for mobile
        orbitRadiusX = 1; // Make the orbit circular on mobile
      } else {
        console.log('Desktop screen detected');
        // Reset frame size for desktop
        framedImage.scale.set(1, 1, 1);

        // Reset sphere positions for desktop
        spheres.forEach((sphere, index) => {
          sphere.position.set(-1.5 + index, -2, 0);
        });

        // Reset orbit radius for desktop
        orbitRadiusX = 2; // Elliptical orbit on desktop
      }
    }

    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Array to store spheres
    const spheres = [];

    // Initial check on load
    adjustForScreenSize();

    // Load the font and create the text geometry
    fontLoader.load("/fonts/helvetiker_bold.json", (font) => {
      const textString = "Zane Beeai Zane Beeai ";
      const textGroups = [];

      // Create each character as a separate mesh and group
      for (let i = 0; i < textString.length; i++) {
        const charGeometry = new TextGeometry(textString[i], {
          font: font,
          size: 0.2,
          height: 0.05,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.01,
          bevelSize: 0.01,
          bevelOffset: 0,
          bevelSegments: 5,
        });

        const charMesh = new THREE.Mesh(charGeometry, material);
        charGeometry.computeBoundingBox();
        const boundingBox = charGeometry.boundingBox;
        const charOffset = new THREE.Vector3();
        boundingBox.getCenter(charOffset).negate();
        charGeometry.translate(charOffset.x, charOffset.y, charOffset.z);

        const charGroup = new THREE.Group();
        charGroup.add(charMesh);

        const angle = (i / textString.length) * Math.PI * 2;
        charGroup.position.x = Math.cos(angle) * orbitRadiusX;
        charGroup.position.y = Math.sin(angle) * orbitRadiusY;
        charGroup.rotation.z = -angle;

        textGroups.push(charGroup);
        scene.add(charGroup);
      }

      // Animation
      const clock = new THREE.Clock();
      const tick = () => {
        const elapsedTime = clock.getElapsedTime();

        // Rotate each character group around the center circle
        textGroups.forEach((group, index) => {
          const angle = (index / textString.length) * Math.PI * 2 + elapsedTime * 0.5;
          group.position.x = Math.cos(angle) * orbitRadiusX;
          group.position.y = Math.sin(angle) * orbitRadiusY;
          group.rotation.z = -angle-Math.PI/2;
        });

        // Move stars towards the foreground
        stars.forEach(star => {
          star.position.z += star.velocity;
          if (star.position.z > 10) { // Reset star position when it goes too far
            star.position.z = -10;
            star.position.x = (Math.random() - 0.5) * 20;
            star.position.y = (Math.random() - 0.5) * 20;
          }
        });

        renderer.render(scene, camera);
        requestAnimationFrame(tick);
      };
      tick();
    });

    window.addEventListener("resize", () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Adjust positions and sizes for mobile displays
      adjustForScreenSize();
    });

    /**
     * Camera
     */
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
    camera.position.set(0, -3, 2);  // Move the camera up and back
    camera.lookAt(framedImage.position);  // Make the camera look at the framed image

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Function to create a double-sided texture
    function createDoubleSidedTexture(logo, callback) {
      const img = new Image();
      img.src = logo;

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        canvas.width = img.width * 2;
        canvas.height = img.height;

        context.drawImage(img, 0, 0);
        context.drawImage(img, img.width, 0);

        const texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;
        callback(texture);
      };
    }

    let spheresLoaded = 0;
    const totalSpheres = 4;

    // Function to add clickable spheres
    function addClickableSphere(position, radius, logo, link, linkName) {
      createDoubleSidedTexture(logo, (texture) => {
        const sphereMaterial = new THREE.MeshBasicMaterial({ map: texture });
        const sphereGeometry = new THREE.SphereGeometry(radius, 32, 32);
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.copy(position);
        sphere.userData = { link: link }; // Store link in userData

        const linkTextGroups = [];

        fontLoader.load("/fonts/helvetiker_bold.json", (font) => {
          for (let i = 0; i < linkName.length; i++) {
            const charGeometry = new TextGeometry(linkName[i], {
              font: font,
              size: 0.05,
              height: 0.05,
              curveSegments: 12,
              bevelEnabled: true,
              bevelThickness: 0.01,
              bevelSize: 0.01,
              bevelOffset: 0,
              bevelSegments: 5,
            });

            const charMesh = new THREE.Mesh(charGeometry, linksMaterial);
            charGeometry.computeBoundingBox();
            const boundingBox = charGeometry.boundingBox;
            const charOffset = new THREE.Vector3();
            boundingBox.getCenter(charOffset).negate();
            charGeometry.translate(charOffset.x, charOffset.y, charOffset.z);

            const charGroup = new THREE.Group();
            charGroup.add(charMesh);

            const angle = (i / linkName.length) * Math.PI * 2;
            charGroup.position.x = Math.cos(angle) * (radius + 0.2);
            charGroup.position.y = Math.sin(angle) * (radius + 0.2);
            charGroup.rotation.z = -angle;

            linkTextGroups.push(charGroup);
            scene.add(charGroup);
          }

          const clock = new THREE.Clock();
          const tick = () => {
            const elapsedTime = clock.getElapsedTime();

            // Rotate each character group around the sphere
            linkTextGroups.forEach((group, index) => {
              const angle = (index / linkName.length) * Math.PI * 2 + elapsedTime * 0.5;
              group.position.x = sphere.position.x + Math.cos(angle) * (radius + 0.05);
              group.position.y = sphere.position.y + Math.sin(angle) * (radius + 0.05);
              group.rotation.z = -angle;
            });

            sphere.rotation.y += 0.01; // Spin the sphere slowly

            renderer.render(scene, camera);
            requestAnimationFrame(tick);
          };
          tick();
        });

        // Handle click events
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        function onClick(event) {
          mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
          raycaster.setFromCamera(mouse, camera);
          const intersects = raycaster.intersectObjects(spheres); // Check all spheres
          if (intersects.length > 0) {
            window.open(intersects[0].object.userData.link, "_blank");
          }
        }

        window.addEventListener('click', onClick, false);

        // Handle cursor style
        function onMouseMove(event) {
          mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
          raycaster.setFromCamera(mouse, camera);
          const intersects = raycaster.intersectObjects(spheres); // Check all spheres
          if (intersects.length > 0) {
            document.body.style.cursor = 'pointer';
          } else {
            document.body.style.cursor = 'default';
          }
        }

        window.addEventListener('mousemove', onMouseMove, false);

        scene.add(sphere);
        spheres.push(sphere); // Add sphere to array

        // Check if all spheres are loaded
        spheresLoaded++;
        if (spheresLoaded === totalSpheres) {
          adjustForScreenSize();
        }
      });
    }

    // Add clickable spheres
    addClickableSphere(new THREE.Vector3(-1.5, -2, 0), 0.1, "images/logos/ORCID.png", "https://orcid.org/0009-0004-8781-5647", "ORCID     ");
    addClickableSphere(new THREE.Vector3(-0.5, -2, 0), 0.1, "images/logos/Linkedin.png", "https://www.linkedin.com/in/zane-beeai/", "LinkedIn     ");
    addClickableSphere(new THREE.Vector3(0.5, -2, 0), 0.1, "images/logos/Github.png", "https://github.com/zanzilla22", "GitHub     ");
    addClickableSphere(new THREE.Vector3(1.5, -2, 0), 0.1, "images/logos/Devpost.png", "https://devpost.com/zanzilla22", "Devpost     ");

    // Initial screen size adjustment will now happen after all spheres are loaded
  }, []);

  return (
    <div>
      <div className="header">
        <div className="header-left">
          <span className="header-name">zane beeai.</span>
        </div>
        <div className="header-right">
          <button className="header-button">aboutMe</button>
          <button className="header-button">myStuff</button>
        </div>
        <div className="header-underline"></div>
      </div>
      <canvas ref={canvasRef} className="webgl"></canvas>
    </div>
  );
};

export default Home;
