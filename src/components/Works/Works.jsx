import { useRef } from "react";
import "./works.scss";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import PropTypes from 'prop-types';

const items = [
  {
    id: 1,
    title: "Professional Portfolio",
    img: "./raha1.png",
    desc: "This website showcases the work of a product designer through homepage, about page and three detailed case studies: Dtail, TalentFirst, and UFit. The site features exceptional layouts, high-quality images, engaging videos, and dynamic animations. It is fully responsive, ensuring an optimal viewing experience across all devices.",
    tech: ["HTML", "CSS", "JS", "Bootstrap", "Figma"],
    viewSite: ["https://rahayudesign.com/"],
  },
  {
    id: 2,
    title: "Tarkov Tracker",
    img: "./tarkov1.png",
    desc: "This is a comprehensive tracking website for the popular game Escape from Tarkov. Our platform integrates Google AdSense and an ad blocker. It features automatic updates via API.The site is fully responsive and utilizes cookies to save update progress. With innovative color animations and a quest reset mechanism, users can enjoy a dynamic interface. Additionally, we support live streaming and offer manual language translation to cater to a global audience.",
    tech: ["HTML", "CSS", "JS", "Bootstrap", "APIs"],
    viewSite: ["https://tarkovtracker.ca/"],
  },
];

const Singlework = ({ item }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section>
      <div className="container" ref={ref}>
        {/* <div className="wrapper"> */}
        <motion.div
          className="imgContainer"
          isInView={isInView}
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            duration: 1,
            delay: 0.1,
          }}
        >
          <img src={item.img} alt="project image" />
        </motion.div>
        <motion.div
          className="textContainer"
          isInView={isInView}
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            duration: 1,
            delay: 0.4,
          }}
        >
          <h2 className="text-3xl font-semibold">{item.title}</h2>
          <p>{item.desc}</p>
          <div className="tech_container">
            {item.tech.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
          <div className="btn_container">
            <button
              type="button"
              className="bg-white text-black font-semibold transition-all duration-[400ms] hover:bg-slate-300 hover:scale-110"
            >
              <a href={item.viewSite} target="_blank">
                View Site
              </a>
            </button>
            {/* <button  type="button" className="bg-white text-black font-medium">Code</button> */}
          </div>
        </motion.div>
        {/* </div> */}
      </div>
    </section>
  );
};
const Works = ({ id }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="works" ref={ref} id={id}>
      <div className="progress">
        <h1>Featured Works<span className="animate-blink">_</span></h1>
        <motion.div
          style={{ scaleX: scaleX, transformOrigin: "0% 0%" }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Singlework item={item} key={item.id} />
      ))}
    </div>
  );
};

Works.propTypes = {
  id: PropTypes.number.isRequired,
};
Singlework.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    viewSite: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};


export default Works;
