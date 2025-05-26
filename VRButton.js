import { VRButton } from "three/examples/jsm/VRButton.js";


document.body.appendChild(VRButton.createButton(renderer));
renderer.xr.enabled = true;

const animate = () => {
    renderer.render(scene, camera);
}
renderer.setAnimationLoop( animate )