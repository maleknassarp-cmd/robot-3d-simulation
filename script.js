// Three.js scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Ground
const groundGeometry = new THREE.PlaneGeometry(10, 10);
const groundMaterial = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = - Math.PI / 2;
scene.add(ground);

// Robot body
const robotBodyGeometry = new THREE.BoxGeometry(1, 0.5, 0.5);
const robotBodyMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
const robotBody = new THREE.Mesh(robotBodyGeometry, robotBodyMaterial);
robotBody.position.set(0, 0.25, 0);
scene.add(robotBody);

// Robot wheels
const wheelGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.1, 16);
const wheelMaterial = new THREE.MeshPhongMaterial({ color: 0x0000ff });

const wheel1 = new THREE.Mesh(wheelGeometry, wheelMaterial);
wheel1.rotation.z = Math.PI / 2;
wheel1.position.set(0.5, 0.1, 0.25);
const wheel2 = wheel1.clone();
wheel2.position.set(0.5, 0.1, -0.25);
const wheel3 = wheel1.clone();
wheel3.position.set(-0.5, 0.1, 0.25);
const wheel4 = wheel1.clone();
wheel4.position.set(-0.5, 0.1, -0.25);
scene.add(wheel1, wheel2, wheel3, wheel4);

// Animation
let angle = 0;
function animate() {
    requestAnimationFrame(animate);
    angle += 0.05;
    wheel1.rotation.x = angle;
    wheel2.rotation.x = angle;
    wheel3.rotation.x = angle;
    wheel4.rotation.x = angle;
    renderer.render(scene, camera);
}

camera.position.z = 5;
animate();