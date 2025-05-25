import * as THREE from 'three';


// For any three.js scene, we need three things:
// 1. A scene
// 2. A camera
// 3. A renderer
// Addons
// OrbitControls & GLTFLoader addons
// import {OrbitControls, orbitControls} from 'three/addons/controls/OrbitControls.js';
// import {GLTFLoader, GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

// const controls = new OrbitControls(camera, renderer.domElement);
// const loader = new GLTFLoader();


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Aspect ratio = window.innerWidth / window.innerHeight
// const camera = new THREE.PerspectiveCamera(field of View(FOV), aspect ratio, near clipping plane, far clipping plane);
// To render the cube using the BoxGeometry:
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
const cube = new THREE.Mesh(geometry, material);
scene.add( cube );
camera.position.z = 5;


// Finally
// To render something to the page using a render/animation loop
const animate = () => {
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
    renderer.render(scene, camera);
}
renderer.setAnimationLoop( animate );