import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./About.scss";


const textVariants = {
  hidden: {
    x: 500,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="about" ref={ref}>
      <motion.div className="text_container" variants={textVariants}   initial="hidden"
        animate={controls}>
        {/* <motion.h2>INTRODUCTION</motion.h2> */}
        <motion.h1>Introduction.</motion.h1>
        <motion.p>
        As a skilled software engineer proficient in JavaScript, React, and Node.js, I possess a strong foundation in Computer Science and Engineering, earned through my 2022 graduation. My knowledge of data structures and algorithms enables me to develop efficient and scalable solutions for complex challenges. I thrive in collaborative environments, delivering user-centric products by closely aligning with client needs.
        </motion.p>
        <br />
        <motion.p>With a passion for both software development and design, I have honed my 3D modeling skills using Blender and am eager to explore AI applications. My entrepreneurial spirit led to the founding of GrubHTML, where I have successfully completed freelance projects over the past two years. I am excited to leverage my skills and experience to bring your vision to life.</motion.p>
      </motion.div>
    </div>
  );
};

export default About;
