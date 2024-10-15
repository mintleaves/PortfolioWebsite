import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Earth = () => {
  const mountRef = useRef(); // Create a ref

  useEffect(() => {
    // URLs for Earth textures
    const earthTextureURL = "https://i.imgur.com/5Kde8zA.jpeg";
    const earthBumpMapURL = "https://i.imgur.com/sB1hQ4u.jpeg";
    const earthSpecMapURL = "https://i.imgur.com/5ngEzAc.jpeg";
    const backgroundWorld =
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/hipp8_s.jpg"; // Background starfield

    // Scene and camera setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append to the mountRef instead of document.body
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;

    // Earth geometry
    const geometry = new THREE.SphereGeometry(2, 60, 60);
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load(earthTextureURL);
    const earthBumpMap = textureLoader.load(earthBumpMapURL);
    const earthSpecMap = textureLoader.load(earthSpecMapURL);

    const material = new THREE.MeshPhongMaterial({
      map: earthTexture,
      bumpMap: earthBumpMap,
      bumpScale: 0.05,
      specularMap: earthSpecMap,
    });

    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(-100, 10, 50);
    scene.add(light);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.1);
    hemiLight.position.set(0, 0, 0);
    scene.add(hemiLight);

    // Background starfield
    const worldGeometry = new THREE.SphereGeometry(1000, 60, 60);
    const worldTexture = textureLoader.load(backgroundWorld);
    const worldMaterial = new THREE.MeshBasicMaterial({
      map: worldTexture,
      side: THREE.BackSide,
    });
    const world = new THREE.Mesh(worldGeometry, worldMaterial);
    scene.add(world);

    camera.position.z = 5;

    // Earth initial rotation
    earth.rotation.x = 3.1415 * 0.02;
    earth.rotation.y = 3.1415 * 1.54;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.002;
      world.rotation.y += 0.0001;
      world.rotation.x += 0.0005;

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resizing
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onResize, false);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-[500px] h-[500px] relative" />; // Ensure the div takes full width and height
};

export default Earth;
