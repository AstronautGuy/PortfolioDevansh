// pages/under-construction.js
'use client'
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const UnderConstruction = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Create the scene
        const scene = new THREE.Scene();

        // Set up the camera
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        // Set up the renderer
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Create a cube
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Create the animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate the cube
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            // Render the scene
            renderer.render(scene, camera);
        };

        animate();

        // Adjust for window resizing
        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="relative w-full h-screen">
            {/* 3D Scene */}
            <div ref={mountRef} className="w-full h-full absolute top-0 left-0 z-0" />

            {/* "Coming Soon" Message */}
            <div className="absolute inset-0 flex items-center justify-center text-white z-10">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-Light text-shadow-lg">
                        We're Launching Soon!
                    </h1>
                    <p className="mt-4 text-lg font-light">Enjoy a 3D experience while you wait...</p>
                </div>
            </div>
        </div>
    );
};

export default UnderConstruction;
