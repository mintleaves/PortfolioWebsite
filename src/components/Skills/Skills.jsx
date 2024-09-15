import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Tilt from "react-parallax-tilt";
import "./skills.scss";

const skillsIcon = [
  { id: 1, iconName: "HTML", iconImg: "./html.png" },
  { id: 2, iconName: "CSS", iconImg: "./css.png" },
  { id: 3, iconName: "JavaScript", iconImg: "./js.png" },
  { id: 4, iconName: "React", iconImg: "./react.png" },
  { id: 5, iconName: "Node JS", iconImg: "./node.png" },
  { id: 6, iconName: "Express JS", iconImg: "./express.png" },
  { id: 7, iconName: "Mongo DB", iconImg: "./mongodb.png" },
  { id: 8, iconName: "MySQL", iconImg: "./mysql.png" },
  { id: 9, iconName: "Github", iconImg: "./githubSk.png" },
  { id: 10, iconName: "SASS", iconImg: "./sass.png" },
  { id: 11, iconName: "Tailwind", iconImg: "./tailwind.png" },
  { id: 12, iconName: "Bootstrap", iconImg: "./bootstrap.png" },
  { id: 13, iconName: "Material UI", iconImg: "./material.png" },
  { id: 14, iconName: "Blender", iconImg: "./blender.png" },
  { id: 15, iconName: "Figma", iconImg: "./figma.png" },
];

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
          {skillsIcon.map((skill) => (
            <motion.div
              key={skill.id}
              className="skill_card"
              variants={skillVariants}
            >
              <img src={skill.iconImg} alt={skill.iconName} />
              <h4>{skill.iconName}</h4>
            </motion.div>
          ))}
        </motion.div>
    </div>
  );
};

export default Skills;
