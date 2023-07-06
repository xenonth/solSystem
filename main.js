import * as THREE from 'three';
import SceneInit from "./modules/SceneInit";

let solSystem = new SceneInit();

solSystem.initScene();
solSystem.animate();