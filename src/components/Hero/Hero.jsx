import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";
import { pointsInner, pointsOuter } from "./utils";
import "./hero.scss";

const textVariants = {
  initial: {
    y: -800,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
      >
        <OrbitControls maxDistance={30} minDistance={10} enableZoom={false}/>
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>

      <h1>GrubHTML.com</h1>
     
      <div className="text_container">
        <p>Crafting animated visuals, UI design and Full-stack web apps</p>
      </div>
      <div className="buttons">
        <button>My Works</button>
        <button><a href="" target="_blank">Contact Me</a></button>
      </div>
      <motion.div
        className="scroll_animation"
        initial="initial"
        animate="animate"
        variants={textVariants}
      >
        <a href="#About">
          <div className="scroll_icon">
            <motion.div
              animate={{
                y: [0, 30, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="scroll_icon_circle"
            ></motion.div>
          </div>
        </a>
      </motion.div>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default Hero;
