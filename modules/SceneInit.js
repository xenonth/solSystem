//import statements for initialisng boilerplate code.
import * as THREE from "three";

import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

import Stats from "three/examples/jsm/libs/stats.module";

export default class SceneInit {
    constructor (fov = 36, scene, stats, controls, renderer) {
        this.fov = fov;
        this.scene = scene;
        this.stats = stats;
        this.camera = camera;
        this.renderer = renderer;
    }
}
