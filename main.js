import * as THREE from 'three';
import SceneInit from "./modules/SceneInit";
import Planet from './modules/Planet';
import Rotation from './modules/Rotation';

let solScene = new SceneInit();

solScene.initScene();
solScene.animate();

//add starbackground
//const starBackground = new THREE.TextureLoader().load('images/background.jpg');
//solScene.scene.background = starBackground;

//variables to create sungeometry
const sunGeometry = new THREE.SphereGeometry(20);
const sunTexture = new THREE.TextureLoader().load("./images/sun.jpg");
const sunMaterial = new THREE.MeshBasicMaterial({map: sunTexture});
const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);

const solarSystem = new THREE.Group();
solarSystem.add(sunMesh);

//mercury body
const mercury = new Planet(2, 40, "./images/mercury.jpg", 0.03);
const mercuryMesh = mercury.getMesh();
let mercurySystem = new THREE.Group();
mercurySystem.add(mercuryMesh);

//venus body
const venus = new Planet(3, 60, "./images/venus.jpg", 2.64);
const venusMesh = venus.getMesh();
let venusSystem = new THREE.Group();
venusSystem.add(venusMesh);

//Earth System
const earth = new Planet (4, 80, './images/earth.jpg', 23.5);
const earthMesh = earth.getMesh();
let earthSystem = new THREE.Group();
earthSystem.add(earthMesh);

//Mars System
const mars = new Planet(3.5, 100, './images/mars.jpg', 25.2);
const marsMesh = mars.getMesh();
let marsSystem = new THREE.Group();
marsSystem.add(marsMesh);


//Asteroid Belt? (Unique point geometry x range from sun?)

//Jupiter, Uranus, Neptune, Pluto + Deimos? in a dual rotation?


//Adding each system to the mesh
solarSystem.add(mercurySystem, venusSystem, earthSystem, marsSystem);

//mercury's rotation around the sun
const mercuryRotation = new Rotation(mercuryMesh);
const mercuryRotationMesh = mercuryRotation.getMesh();
mercurySystem.add(mercuryRotationMesh);

//venus rotation
const venusRotation = new Rotation(venusSystem);
const venusRotationMesh = venusRotation.getMesh();
venusSystem.add(venusRotationMesh);

//earth rotating around the sun
const earthRotation = new Rotation(earthSystem);
const earthRotationMesh = earthRotation.getMesh();
earthSystem.add(earthRotationMesh);

//mars rotation
const marsRotation = new Rotation(marsSystem);
const marsRotationMesh = marsRotation.getMesh();
marsSystem.add(marsRotationMesh);

solScene.scene.add(solarSystem);

//animating the solar system
//1 Earth Year = 1 minute of rotation
const EARTH_YEAR = 2 * Math.PI * (1/60) * (1/60);
const animate = () => {
    //sunMesh.rotation.y += 0.01;
    mercurySystem.rotation.y += EARTH_YEAR * 4;
    mercurySystem.children[0].rotation.y += (EARTH_YEAR * 6.186);
    
    //venus orbital and axial rotation
    venusSystem.rotation.y += EARTH_YEAR * 2;
    venusSystem.children[0].rotation.y += (EARTH_YEAR * 1.502);

    //earth axial and orbital rotation
    earthSystem.rotation.y += EARTH_YEAR;
    earthSystem.children[0].rotation.y += (EARTH_YEAR * 365.25);

    //earth axial and orbital rotation
    marsSystem.rotation.y += (EARTH_YEAR / 1.88);
    marsSystem.children[0].rotation.y += EARTH_YEAR * 355.6186612576065;
    requestAnimationFrame(animate);
}

animate();