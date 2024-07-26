import { useRef } from "react";
import "./works.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Personal Portfolio",
    img: "./portfolio.png",
    desc: "We develop a personal portfolio which have three case studt where we implemented some more features.",
    tech: ["HTML", "CSS", "JS", "Bootstrap", "Figma"],
  },
  {
    id: 2,
    title: "Tarkov Tracker",
    img: "./tracker.jpg",
    desc: "We develop a personal portfolio which have three case studt where we implemented some more features.",
    tech: ["HTML", "CSS", "JS", "Bootstrap", "API"],
  },
  {
    id: 3,
    title: "Custom CRM",
    img: "./dashboard.png",
    desc: "We develop a personal portfolio which have three case studt where we implemented some more features.",
    tech: ["HTML", "CSS", "JS", "PHP", "Bootstrap", "Laravel", "APIs"],
  },
  {
    id: 4,
    title: "Apparel Studio",
    img: "./apparel.jpg",
    desc: "We develop a personal portfolio which have three case studt where we implemented some more features.",
    tech: ["HTML", "CSS", "Bootstrap", "MySQL"],
  },
];

const Singlework = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="project image" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="tech_container">
              {item.tech.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
            <div className="btn_container">
              <button>View Site</button>
              <button>Code</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Works = () => {
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
    <div className="works" ref={ref}>
      <div className="progress">
        <h1>Featured Works__</h1>
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

export default Works;
