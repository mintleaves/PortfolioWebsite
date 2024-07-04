import ThreedModel from "../ThreeJs/ThreedModel";
import "./hero.scss";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <div className="text_container">
        <h2>MINT LEAVES</h2>
        <h1>Crafting animated visuals, UI design and Full-stack web apps</h1>
        <div className="button_scroll_wrapper">
          <div className="buttons">
            <button>My Works</button>
            <button>Contact Me</button>
          </div>
          <div className="scroll_wrapper">
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
          </div>
        </div>
      </div>

      <div className="threed_container">
        <ThreedModel />
      </div>
    </div>
  );
};

export default Hero;
