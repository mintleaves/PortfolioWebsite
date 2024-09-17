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
      <h1>Skills<span className="animate-blink">_</span></h1>
      <motion.div
        ref={ref}
        className="skills_card_container"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={skillsVariants}
      >
        {skillsIcon.map((skill) => (
          <motion.div key={skill.id} variants={skillVariants}>
            <SkillCard iconName={skill.iconName} iconImg={skill.iconImg} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const SkillCard = ({ iconName, iconImg }) => {
  return (
    <Tilt>
      <motion.div className="green-pink-gradient p-[1px] rounded-lg shadow-card">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-custom-background rounded-lg flex justify-evenly items-center flex-col min-h-[100px] min-w-[80px] sm:h-[140px] sm:w-[120px] md:h-[160px] md:w-[140px] lg:h-[200px] lg:w-[180px]"
        >
          <img
            src={iconImg}
            alt={iconName}
            className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
          />
          <h4 className="text-white text-[12px] md:text-[14px] lg:text-[15px] font-normal text-center">
            {iconName}
          </h4>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default Skills;
