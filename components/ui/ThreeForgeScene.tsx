"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const ThreeForgeScene: React.FC<{ className?: string }> = ({ className = "" }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.set(0, 0.15, 8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const steel = new THREE.MeshStandardMaterial({
      color: 0xa8b0b8,
      roughness: 0.28,
      metalness: 0.9,
    });
    const orange = new THREE.MeshStandardMaterial({
      color: 0xe88222,
      roughness: 0.42,
      metalness: 0.35,
      emissive: 0x3a1700,
      emissiveIntensity: 0.18,
    });

    const beamGeo = new THREE.BoxGeometry(3.8, 0.18, 0.18);
    for (let i = 0; i < 8; i++) {
      const beam = new THREE.Mesh(beamGeo, i % 3 === 0 ? orange : steel);
      beam.position.set(0, (i - 3.5) * 0.38, (i % 2) * 0.3);
      beam.rotation.z = (i % 2 === 0 ? 1 : -1) * 0.42;
      beam.rotation.x = 0.24;
      group.add(beam);
    }

    const ringGeo = new THREE.TorusGeometry(1.85, 0.035, 12, 96);
    const ring = new THREE.Mesh(ringGeo, orange);
    ring.rotation.x = Math.PI / 2.7;
    group.add(ring);

    const plateGeo = new THREE.CylinderGeometry(1.1, 1.1, 0.08, 6);
    const plate = new THREE.Mesh(plateGeo, steel);
    plate.position.set(0, -0.1, -0.15);
    plate.rotation.x = Math.PI / 2;
    group.add(plate);

    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(180 * 3);
    for (let i = 0; i < 180; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 5.4;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 3.2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2.4;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particleGeo,
      new THREE.PointsMaterial({ color: 0xf6b15b, size: 0.026, transparent: true, opacity: 0.72 })
    );
    scene.add(particles);

    scene.add(new THREE.AmbientLight(0xffffff, 0.72));
    const key = new THREE.DirectionalLight(0xffd4a3, 2.1);
    key.position.set(3, 4, 5);
    scene.add(key);
    const rim = new THREE.PointLight(0xe88222, 12, 12);
    rim.position.set(-2, -1.2, 2.4);
    scene.add(rim);

    const resize = () => {
      const rect = mount.getBoundingClientRect();
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(mount);

    let frame = 0;
    let raf = 0;
    const animate = () => {
      frame += 0.01;
      group.rotation.y = Math.sin(frame) * 0.16;
      group.rotation.x = Math.sin(frame * 0.7) * 0.08;
      particles.rotation.y -= 0.0018;
      ring.rotation.z += 0.0035;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      particleGeo.dispose();
      beamGeo.dispose();
      ringGeo.dispose();
      plateGeo.dispose();
      steel.dispose();
      orange.dispose();
    };
  }, []);

  return <div ref={mountRef} className={className} aria-hidden="true" />;
};
