import * as THREE from 'three';
import SceneInit from "./modules/SceneInit";
import Planet from './modules/Planet';

let solSystem = new SceneInit();

solSystem.initScene();
solSystem.animate();

//variables to create sungeometry
const sunGeometry = new THREE.SphereGeometry(8);
const sunTexture = new THREE.TextureLoader().load("./images/sun.jpg");
const sunMaterial = new THREE.MeshBasicMaterial({map: sunTexture});
const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);

//rendering the sun to the scene.
const solarSystem = new THREE.Group();
solarSystem.add(sunMesh);
solSystem.scene.add(solarSystem);