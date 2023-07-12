import * as THREE from 'three';

export default function createAsteroids(numAsteroids, radialDistance) {
    const asteroids = new THREE.Group();

    for (let i = 0; i < numAsteroids; i++) {
        const asteroidSize = Math.random() * 0.2;
        const asteroidGeometry = new THREE.OctahedronGeometry(asteroidSize);
        const asteroidTexture = new THREE.TextureLoader().load('./images/asteroid.jpg');
        const asteroidMaterial = new THREE.MeshBasicMaterial({ map: asteroidTexture });
        const asteroidMesh = new THREE.Mesh(asteroidGeometry, asteroidMaterial);

        const angle = (i / numAsteroids) * Math.PI * 2;
        const x = Math.cos(angle) * radialDistance;
        const y = Math.random() * 10 - 5; // Limit y position between -5 and 5
        const z = Math.sin(angle) * radialDistance;

        asteroidMesh.position.set(x, y, z);

        asteroids.add(asteroidMesh);
    }

    const EARTH_YEAR = 2 * Math.PI * (1 / 60); // Earth Year in minutes
    const asteroidRotationSpeed = (2 * Math.PI) / (EARTH_YEAR * numAsteroids);

    asteroids.rotation.y = Math.random() * Math.PI; // Random initial rotation

    asteroids.tick = () => {
        asteroids.rotation.y += asteroidRotationSpeed;
    };

    return asteroids;
}
