'use client';

import { useEffect } from 'react';
import * as THREE from 'three';

const Background = () => {
    useEffect(() => {
        // Same Three.js code as before

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        const canvas = renderer.domElement;
        document.body.appendChild(canvas);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        function animate() {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        }

        animate();

        return () => {
            // Cleanup code if necessary
        };
    }, []);

    return null; // Empty component to render nothing but canvas background
};

export default Background;
