//import statements for initialisng boilerplate code.
import * as THREE from "three";

import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

import Stats from "three/examples/jsm/libs/stats.module";

export default class SceneInit {
    constructor (fov = 36, scene, stats, camera, controls, renderer) {
        this.fov = fov;
        this.scene = scene;
        this.stats = stats;
        this.camera = camera;
        this.controls = controls;
        this.renderer = renderer;
    }
    initScene() {
        this.camera = new THREE.PerspectiveCamera(
            this.fov,
            window.innerWidth/window.innerHeight,
            1,
            1000
        );
        this.camera.position.z = 128;

        this.scene = new THREE.Scene();
        //const starBackground = new THREE.TextureLoader.load('../images/background.jpg');
        // this.scene.background = starBackground;

        this.renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById("mySolSystem"),
            antialias: true,
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        this.controls = new OrbitControls(this.camera,  this.renderer.domElement);

        this.stats = Stats();
        document.body.appendChild(this.stats.dom);

        //ambient light to light up the whole scene
        // let ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        //ambientLight.castShadow = false;
        //this.scene.add(ambientLight);

        //spotlight illuminating the chart directly
        //let spotLight = new Three.spotLight(0xffffff, 0.7);
        //spotLight.castShadow = false;
        //spotLight.position.set(0, 40,0);
        //this.scene.add(spotLight);

        //if window rezizes
        window.addEventListener("resize", () => this.onWindowResize(), false);
    }
    
    //animating the scene
    animate() {
        window.requestAnimationFrame(this.animate.bind(this));
        this.render();
        this.stats.update();
        //this.controls.update();
    }

    //rendering the scene
    render() {
        this.renderer.render(this.scene, this.camera)
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
}
