import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./skills.scss";

const skillVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const skillsVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="skills">
      <h1>Skills__</h1>
      <motion.div
        ref={ref}
        className="skills_card_container"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={skillsVariants}
      >
        <motion.div className="skill_card" variants={skillVariants}>
          <img src="./html.png" alt="html" />
          <h4>HTML</h4>
        </motion.div>
        <motion.div className="skill_card" variants={skillVariants}>
          <img src="./css.png" alt="css" />
          <h4>CSS</h4>
        </motion.div>
        <motion.div className="skill_card" variants={skillVariants}>
          <img src="./js.png" alt="js" />
          <h4>JavaScript</h4>
        </motion.div>
        <motion.div className="skill_card" variants={skillVariants}>
          <img src="./react.png" alt="react" />
          <h4>React</h4>
        </motion.div>
        <motion.div className="skill_card" variants={skillVariants}>
          <img src="./node.png" alt="nodejs" />
          <h4>Node JS</h4>
        </motion.div>
        <motion.div className="skill_card" variants={skillVariants}>
          <img src="./express.png" alt="express" />
          <h4>Express JS</h4>
        </motion.div>
        <motion.div className="skill_card" variants={skillVariants}>
          <img src="./mongodb.png" alt="mongodb" />
          <h4>Mongo DB</h4>
        </motion.div>
        <motion.div className="skill_card" variants={skillVariants}>
          <img src="./mysql.png" alt="mysql" />
          <h4>MySQL</h4>
        </motion.div>
        <motion.div className="skill_card" variants={skillVariants}>
          <img src="./githubSk.png" alt="github" />
          <h4>Github</h4>
        </motion.div>
        <motion.div className="skill_card" variants={skillVariants}>
          <img src="./sass.png" alt="sass" />
          <h4>SASS</h4>
        </motion.div>
        <motion.div className="skill_card" variants={skillVariants}>
          <img src="./tailwind.png" alt="tailwind" />
          <h4>Tailwind</h4>
        </motion.div>
        <motion.div className="skill_card" variants={skillVariants}>
          <img src="./bootstrap.png" alt="bootstrap" />
          <h4>Bootstrap</h4>
        </motion.div>
        <motion.div className="skill_card" variants={skillVariants}>
          <img src="./material.png" alt="material" />
          <h4>Material UI</h4>
        </motion.div>
        <motion.div className="skill_card" variants={skillVariants}>
          <img src="./blender.png" alt="blender" />
          <h4>Blender</h4>
        </motion.div>
        <motion.div className="skill_card" variants={skillVariants}>
          <img src="./figma.png" alt="figma" />
          <h4>Figma</h4>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
