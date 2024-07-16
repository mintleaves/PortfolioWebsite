import React from "react";
import { motion } from "framer-motion";
import "./skills.scss";

const Skills = () => {
  return (
    <motion.div className="skills">
      <h1>Skills.</h1>
      <div className="skills_card_container">
        <div className="skill_card">
          <img src="./html.png" alt="html" />
          <h4>HTML</h4>
        </div>
        <div className="skill_card">
          <img src="./css.png" alt="css" />
          <h4>CSS</h4>
        </div>
        <div className="skill_card">
          <img src="./js.png" alt="js" />
          <h4>JavaScript</h4>
        </div>
        <div className="skill_card">
          <img src="./react.png" alt="react" />
          <h4>React</h4>
        </div>
        <div className="skill_card">
          <img src="./node.png" alt="nodejs" />
          <h4>Node JS</h4>
        </div>
        <div className="skill_card">
          <img src="./express.png" alt="express" />
          <h4>Express JS</h4>
        </div>
        <div className="skill_card">
          <img src="./mongodb.png" alt="mongodb" />
          <h4>Mongo DB</h4>
        </div>
        <div className="skill_card">
          <img src="./mysql.png" alt="mysql" />
          <h4>MySQL</h4>
        </div>
        <div className="skill_card">
          <img src="./githubSk.png" alt="github" />
          <h4>Github</h4>
        </div>
        <div className="skill_card">
          <img src="./sass.png" alt="sass" />
          <h4>SASS</h4>
        </div>
        <div className="skill_card">
          <img src="./tailwind.png" alt="tailwind" />
          <h4>Tailwind</h4>
        </div>
        <div className="skill_card">
          <img src="./bootstrap.png" alt="bootstrap" />
          <h4>Bootstrap</h4>
        </div>
        <div className="skill_card">
          <img src="./material.png" alt="material" />
          <h4>Material UI</h4>
        </div>
        <div className="skill_card">
          <img src="./blender.png" alt="blender" />
          <h4>Blender</h4>
        </div>
        <div className="skill_card">
          <img src="./figma.png" alt="figma" />
          <h4>Figma</h4>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
