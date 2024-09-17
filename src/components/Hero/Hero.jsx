import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";
import { pointsInner, pointsOuter } from "./utils";
import "./hero.scss";
import FlipText from "../Flip/FlipText";

const Hero = () => {
  return (
    <div className="hero">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
      >
        <OrbitControls maxDistance={30} minDistance={10} enableZoom={false} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>

      <div className="heroWrapper">
        {/* <h1>GrubHTML.com</h1> */}
        <FlipText className="text-3xl md:text-5xl lg:text-7xl text-white cursor-pointer">
          GrubHTML.com
        </FlipText>
        <div className="text_container">
          <p>Crafting animated visuals, UI design and Full-stack web apps</p>
        </div>
        <div className="buttons">
          <button className="transition-all duration-[400ms] hover:scale-110">
            {/* <FlipText> */}
              {/* {" "} */}
              <a href="" target="_blank">
                My Works
              </a>
            {/* </FlipText> */}
          </button>
          <button className="transition-all duration-[400ms] hover:scale-110">
            <a href="" target="_blank">
              Contact Me
            </a>
          </button>
        </div>
        <div className="scroll_animation">
          <a href="#About">
            <div className="scroll_icon transition-all duration-[400ms] hover:scale-110">
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
        </div>
      </div>
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
