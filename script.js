// script.js

// Setup scene
const scene = new THREE.Scene();

// Setup camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Setup renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Setup lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 1, 0);
scene.add(ambientLight);
scene.add(directionalLight);

// Setup ground
const groundGeometry = new THREE.PlaneGeometry(200, 200);
const groundMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = - Math.PI / 2;
ground.position.y = -1;
scene.add(ground);

// Robot body
const robotBodyGeometry = new THREE.BoxGeometry(2, 1, 1);
const robotBodyMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const robotBody = new THREE.Mesh(robotBodyGeometry, robotBodyMaterial);
scene.add(robotBody);

// Robot wheels
const wheelGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.2, 32);
const wheelMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
const wheel1 = new THREE.Mesh(wheelGeometry, wheelMaterial);
const wheel2 = new THREE.Mesh(wheelGeometry, wheelMaterial);
const wheel3 = new THREE.Mesh(wheelGeometry, wheelMaterial);
const wheel4 = new THREE.Mesh(wheelGeometry, wheelMaterial);

// Position wheels
wheel1.rotation.z = Math.PI / 2;
wheel1.position.set(-0.75, -1, 0.5);
wheel2.rotation.z = Math.PI / 2;
wheel2.position.set(0.75, -1, 0.5);
wheel3.rotation.z = Math.PI / 2;
wheel3.position.set(-0.75, -1, -0.5);
wheel4.rotation.z = Math.PI / 2;
wheel4.position.set(0.75, -1, -0.5);

scene.add(wheel1, wheel2, wheel3, wheel4);

// Animation loop
const clock = new THREE.Clock();
let robotSpeed = 0.01;

function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    robotBody.position.z -= robotSpeed * delta * 60; // Move robot forward
    wheel1.rotation.x += robotSpeed * delta * 60 * 5; // Rotate wheels
    wheel2.rotation.x += robotSpeed * delta * 60 * 5;
    wheel3.rotation.x += robotSpeed * delta * 60 * 5;
    wheel4.rotation.x += robotSpeed * delta * 60 * 5;

    renderer.render(scene, camera);
}

// Set camera position
camera.position.z = 5;

// Start animation
animate();