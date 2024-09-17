import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

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

const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const SkillCard = ({ iconName, iconImg, index }) => {
  return (
    <Tilt className="xs:w-[250px]">
      <motion.div
        // variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-custom-background rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={iconImg}
            alt={iconName}
            className="w-16 h-16 object-contain"
          />
          <h4 className="text-white text-[20px] font-bold text-center">
            {iconName}
          </h4>
        </div>
      </motion.div>
    </Tilt>
  );
};

const TiltCards = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-10">
      {skillsIcon.map((skill, index) => (
        <SkillCard key={skill.id} index={index} {...skill} />
      ))}
    </div>
  );
};

export default TiltCards;
