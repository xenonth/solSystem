import * as THREE from "three";

export default class Planet{
    constructor(radius, positionX, textureFile, axialTilt) {
        this.radius = radius;
        this.positionX = positionX;
        this.textureFile = textureFile;
        this.axialTilt = axialTilt;
    }

    getMesh() {
        if (this.mesh === undefined || this.mesh === null) {
            const geometry = new THREE.SphereGeometry(this.radius);
            const texture = new THREE.TextureLoader().load(this.textureFile);
            const material = new THREE.MeshBasicMaterial({map: texture});
            this.mesh = new THREE.Mesh(geometry, material);
            this.mesh.position.x += this.positionX;
            this.mesh.rotation.z = THREE.MathUtils.degToRad(this.axialTilt); 
        }
        return this.mesh;
    }
}