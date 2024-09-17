import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import PropTypes from "prop-types";
import "./contact.scss";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const socialHandleVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <div className="contact">
      <h1>
        Contact Us<span className="animate-blink">_</span>
      </h1>
      <motion.div className="contact_container">
        <motion.div
          className="intro_section"
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="work_handle" variants={itemVariants}>
            <motion.div
              className="logo"
              initial={{ "--x": "100%" }}
              animate={{ "--x": "-100%" }}
              whileTap={{ scale: 0.97 }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1,
                type: "spring",
                stiffness: 20,
                damping: 15,
                mass: 2,
              }}
            >
              <h1>&lt;GrubHTML&#47;&gt;</h1>
            </motion.div>

            <motion.div className="projects">
              <motion.h2
                whileHover={{
                  borderBottom: "2px solid white",
                  transition: { duration: 0.3 },
                }}
              >
                Projects
              </motion.h2>
            </motion.div>
            <div className="services">
              <h2>Services</h2>
              <div className="service_category">
                <p>Development</p>
                <p>UX Design</p>
                <p>Bug Fixing</p>
                <p>Hosting</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="social_handle"
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={socialHandleVariants}
          >
            <motion.a variants={itemVariants}>
              <DrawOutlineButton>LinkedIn</DrawOutlineButton>
            </motion.a>
            <motion.a variants={itemVariants}>
              <DrawOutlineButton>Github</DrawOutlineButton>
            </motion.a>
            <motion.a variants={itemVariants}>
              <DrawOutlineButton>Dribble</DrawOutlineButton>
            </motion.a>
            <motion.a variants={itemVariants}>
              <DrawOutlineButton>Behance</DrawOutlineButton>
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="mail_section"
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.form onSubmit={handleSubmit}>
            <div className="form_names">
              <motion.div variants={itemVariants}>
                <label htmlFor="firstName">First Name:</label>
                <br />
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Your first name"
                  required
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="lastName">Last Name:</label>
                <br />
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Your last name"
                  required
                />
              </motion.div>
            </div>
            <motion.div variants={itemVariants}>
              <label htmlFor="email">Email:</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label htmlFor="description">
                Tell us about your project goals:
              </label>
              <br />
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your project's key features, and any specific requirements or ideas you have in mind."
                required
              />
            </motion.div>
            <div className="form_btn">
              <motion.button type="submit" variants={itemVariants}>
                <DrawOutlineButton>Send</DrawOutlineButton>
              </motion.button>
            </div>
          </motion.form>
          <div className="mail_reciever">
            <motion.img
              src="./boss.png"
              alt="reciever photo"
              variants={itemVariants}
            />
            <motion.h3 variants={itemVariants}>
              DevWiz here! Let&apos;s chat about your amazing ideas and
              projects.
            </motion.h3>
            <motion.p variants={itemVariants}>
              &quot; I&apos;m passionate about transforming your concepts into
              reality through our talented team.&quot;
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
      <div className="container_border"></div>
    </div>
  );
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 lg:px-6 lg:py-4 font-medium text-slate-100 transition-all duration-[400ms] hover:scale-110"
    >
      <span className="group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-violet-700 group-hover:bg-clip-text group-hover:text-transparent">
        {children}
      </span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-violet-700 to-sky-400 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-gradient-to-r from-violet-700 to-sky-400 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-gradient-to-r from-violet-700 to-sky-400 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-gradient-to-r from-violet-700 to-sky-400 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

DrawOutlineButton.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Contact;
