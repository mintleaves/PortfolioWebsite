// import Sidebar from "../Sidebar/Sidebar";

// import Lottie from "lottie-react";
// import homeicon from "./assets/home-lottie.json";
// import skillsicon from "./assets/skills-lottie.json";

import homeIcon from "./assets/home.png";
import skillsIcon from "./assets/skills.png";
import aboutIcon from "./assets/teamwork.png";
import worksIcon from "./assets/works.png";
import serviceIcon from "./assets/services.png";
import testimonialIcon from "./assets/rating.png";
import contactIcon from "./assets/contact.png";
import Button from "../ReuseComponents/Button";

const Navbar = () => {
  return (
    <>
      <div className="navbar fixed top-0 left-0 right-0 max-w-[1366px] m-auto z-50">
        <div className="nav_container flex justify-between items-center border border-white/15 p-2.5 rounded-xl mt-3 bg-gray-900 bg-opacity-70 backdrop-blur-md">
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
              <a href="#Services" id="nav-services">
                <img
                  src={serviceIcon}
                  alt="service_icon"
                  className="h-8 w-8 object-contain aspect-[1/1] hover:scale-110  transition duration-300 ease-in-out"
                />
              </a>
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
          <Button>Start Your Journey</Button>
        </div>

        {/* <Sidebar /> */}
      </div>
    </>
  );
};

export default Navbar;
