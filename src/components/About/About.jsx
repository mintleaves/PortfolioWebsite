import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./About.scss";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const secPartTexts =
    "As a skilled software engineer proficient in JavaScript, React, and Node.js, We possess a strong foundation in Computer Science and Engineering, earned through our 2022 graduation. Our knowledge of data structures and algorithms enables us to develop efficient and scalable solutions for complex challenges. We thrive in collaborative environments, delivering user-centric products by closely aligning with client needs.";
  return (
    <div className="about">
      <h1>Introduction__</h1>
      <div className="text_container" ref={ref}>
        <AboutSecondText isInView={isInView} text={secPartTexts} />
        <br />
        <AboutFirstText isInView={isInView} />
      </div>

      <div className="animation_container">
        <motion.img
          ref={ref}
          src="./building-website.svg"
          alt="team image"
          initial={{ x: -1250, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            duration: 5,
          }}
        />
      </div>
    </div>
  );
};

const wrapTextInSpans = (text) => {
  return text.split("").map((char, idx) => (
    <span className="hoverText" key={idx}>
      {char}
    </span>
  ));
};

const AboutFirstText = ({ isInView }) => {
  const text =
    "With a passion for both software development and design, We have honed our 3D modeling skills using Blender and we're eager to explore AI applications. Our entrepreneurial spirit led to the founding of GrubHTML.com, where we have successfully completed freelance projects over the past two years. We are excited to leverage our skills and experience to bring your vision to life.";

  return (
    <motion.p
      className="animation_texts"
      initial={{ x: 100, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
        duration: 1,
        delay: 0.3,
      }}
    >
      {wrapTextInSpans(text)}{" "}
    </motion.p>
  );
};

const AboutSecondText = ({ text, isInView }) => {
  return (
    <motion.p
      className="animation_texts"
      initial={{ x: -100, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
        duration: 1,
        delay: 0.6,
      }}
    >
      {wrapTextInSpans(text)}
    </motion.p>
  );
};

export default About;
