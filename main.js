import * as THREE from 'three';
import SceneInit from "./modules/SceneInit";
import Planet from './modules/Planet';

let solScene = new SceneInit();

solScene.initScene();
solScene.animate();

//add starbackground
const starBackground = new THREE.TextureLoader().load('images/background.jpg');
solScene.scene.background = starBackground;

//variables to create sungeometry
const sunGeometry = new THREE.SphereGeometry(8);
const sunTexture = new THREE.TextureLoader().load("./images/sun.jpg");
const sunMaterial = new THREE.MeshBasicMaterial({map: sunTexture});
const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);

//rendering the sun to the scene.
const solarSystem = new THREE.Group();
solarSystem.add(sunMesh);
solSystem.scene.add(solarSystem);

const planetsOfSol = [
    new Planet (5, 0, "./images/mercury.jpg"),
];

//render planets array to the screen via for loop
planetsOfSol.forEach(planet => {
    const planetSystem = new THREE.Group();
    const planetGeometry = new THREE.SphereGeometry(planet.radius);
    const planetTexture = new THREE.TextureLoader().load(planet.textureFile);
    const planetMaterial = new THREE.MeshBasicMaterial({ map: planetTexture });
    const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);
    planetSystem.add(planetMesh);
    solarSystem.add(planetSystem);
})

console.log(solarSystem.planetSystem);