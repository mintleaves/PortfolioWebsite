import React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.07,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const listItemvariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
const Links = () => {
  const listItems = [
    "Home",
    "About",
    "Skills",
    "Works",
    "Testimonials",
    "Contact",
  ];
  return (
    <motion.div className="links" variants={variants}>
      {listItems.map((listItem) => (
        <motion.a
          href={`#${listItem}`}
          key={listItem}
          variants={listItemvariants}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.95}}
        >
          <FlipLinks>{listItem}</FlipLinks>
          {/* {listItem} */}
        </motion.a>
      ))}
    </motion.div>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;
const FlipLinks = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black sm:text-4xl md:text-5xl lg:text-6xl"
      style={{
        lineHeight: 0.85,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default Links;
