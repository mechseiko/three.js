// Drawing lines
// First set up a camera, scene & renderer
import * as THREE from 'three'

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const aspectRatio = window.innerWidth / window.innerHeight
const camera = new THREE.PerspectiveCamera(45, aspectRatio, 1, 1000);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();
// Create a blue line basic material
const material = new THREE.LineBasicMaterial({color: 0x0000ff})

const points = [];
const firstPointElement = new THREE.Vector3(-10, 0, 0);
const secondPointElement = new THREE.Vector3(0, 10, 0);
const thirdPointElement = new THREE.Vector3(10, 0, 0);
points.push(firstPointElement);
points.push(secondPointElement)
points.push(thirdPointElement)

const geometry = new THREE.BufferGeometry().setFromPoints(points);



                // MOST IMPORTANT LINES OF CODE
                    const line = new THREE.Line(geometry, material);
                    scene.add( line )



renderer.render(scene, camera);
camera.position.z = 5;

// LOG THE THREE IMPORTANT TOOLS TO THE CONSOLE
console.log("renderer: ", renderer)
console.log(`scene: ${scene}`)
console.log("camera: " + camera)