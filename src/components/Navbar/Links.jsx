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
    "Services",
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
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className=" font-semibold text-3xl"
        >
          {listItem}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
