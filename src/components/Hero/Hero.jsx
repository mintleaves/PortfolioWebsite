import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Stage,
  PresentationControls,
  Environment,
} from "@react-three/drei";
import "./hero.scss";
import { motion } from "framer-motion";

function Model(props) {
  const { scene } = useGLTF("/mechanical_spider.glb");
  return <primitive object={scene} {...props} />;
}

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <motion.div className="text_container" variants={textVariants} initial="initial" animate="animate">
        <motion.h2 variants={textVariants}>WELCOME.</motion.h2>
        <motion.h1 variants={textVariants}>Crafting animated visuals, UI design and Full-stack web apps</motion.h1>
        <motion.div variants={textVariants} className="button_scroll_wrapper">
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>My Works</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.div variants={textVariants} className="scroll_wrapper">
            <div className="scroll_animation">
              <a href="#About">
                <div className="scroll_icon">
                  <motion.div
                    animate={{
                      y: [0, 24, 0],
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
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="threed_container">
        <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
          <PresentationControls
            speed={1.5}
            global
            zoom={0.5}
            polar={[-0.1, Math.PI / 4]}
          >
            <Stage environment={null}>
              <Model scale={0.01} />
            </Stage>
          </PresentationControls>
        </Canvas>
      </div>

    </div>
  );
};

export default Hero;
