// import Lottie from "lottie-react";
// import homeicon from "./assets/home-lottie.json";
// import skillsicon from "./assets/skills-lottie.json";
import { useState } from "react";
import { motion } from "framer-motion";
import "./navbar.scss";

import homeIcon from "./assets/home.png";
import skillsIcon from "./assets/skills.png";
import aboutIcon from "./assets/teamwork.png";
import worksIcon from "./assets/works.png";
// import serviceIcon from "./assets/services.png";
import testimonialIcon from "./assets/rating.png";
import contactIcon from "./assets/contact.png";
import Button from "../ReuseComponents/Button";
import Toggle from "./Toggle";
import Links from "./Links";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at calc(100% - 50px) 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(40px at calc(100% - 20px) 20px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <>
      <div className="navbar fixed top-0 right-0 left-0 max-w-[1366px] m-auto z-50">
        <div className="nav_container flex justify-between items-center border border-white/15 p-2.5 rounded-xl my-3 mx-2 bg-gray-900 bg-opacity-70 backdrop-blur-md">
          <div className="nav_logo relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#97B4FF] via-[#6F94F4] to-[#4770DC] blur-md h-12 w-12"></div>
            <img
              src="./grubhtml.png"
              alt="logo"
              className="w-12 h-12 bg-black rounded-xl relative"
            />
          </div>
          <div className="hidden md:block">
            <nav className="nav_items flex items-center gap-8">
              {/* <Lottie animationData={homeicon} loop={true} className="h-8 w-8"/> */}
              {/* <Lottie animationData={skillsicon} loop={true} className="h-8 w-8"/> */}
              <a href="#Home" id="nav-home">
                <img
                  src={homeIcon}
                  alt="home_icon"
                  className="h-8 w-8 object-contain aspect-[1/1] hover:scale-110  transition-all duration-300 ease-in-out"
                />
              </a>
              <a href="#About" id="nav-about">
                <img
                  src={aboutIcon}
                  alt="about_icon"
                  className="h-8 w-8 object-contain aspect-[1/1] hover:scale-110  transition duration-300 ease-in-out"
                />
              </a>
              <a href="#Skills" id="nav-skills">
                <img
                  src={skillsIcon}
                  alt="skills_icon"
                  className="h-8 w-8 object-contain aspect-[1/1] hover:scale-110  transition duration-300 ease-in-out"
                />
              </a>
              <a href="#Works" id="nav-works">
                <img
                  src={worksIcon}
                  alt="works_icon"
                  className="h-8 w-8 object-contain aspect-[1/1] hover:scale-110  transition duration-300 ease-in-out"
                />
              </a>
              {/* <a href="#Services" id="nav-services">
                <img
                  src={serviceIcon}
                  alt="service_icon"
                  className="h-8 w-8 object-contain aspect-[1/1] hover:scale-110  transition duration-300 ease-in-out"
                />
              </a> */}
              <a href="#Testimonials" id="nav-testimonials">
                <img
                  src={testimonialIcon}
                  alt="testimonial_icon"
                  className="h-8 w-8 object-contain aspect-[1/1] hover:scale-110  transition duration-300 ease-in-out"
                />
              </a>
              <a href="#Contact" id="nav-contact">
                <img
                  src={contactIcon}
                  alt="contact_icon"
                  className="h-8 w-8 object-contain aspect-[1/1] hover:scale-110  transition duration-300 ease-in-out"
                />
              </a>
            </nav>
          </div>
          <Button className="hidden md:block">Start Your Journey</Button>
          <motion.div
            className="md:hidden block sidebar"
            animate={open ? "open" : "closed"}
          >
            <motion.div
              className="sidebar_circle_bg bg-gradient-to-r from-[#97B4FF] via-[#6F94F4] to-[#4770DC] fixed top-0 right-0 w-[300px] h-screen text-black z-10"
              variants={variants}
            >
              <Links />
            </motion.div>
            <Toggle setOpen={setOpen} />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
