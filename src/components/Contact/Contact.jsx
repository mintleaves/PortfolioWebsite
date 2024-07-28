import { useState } from "react";
import { motion } from "framer-motion";

import "./contact.scss";

const Contact = () => {
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
      <h1>Contact Us__</h1>
      <motion.div className="contact_container">
        <motion.div
          className="intro_section"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="work_handle" variants={itemVariants}>
            <div className="logo">
              <h1>&lt;GrubHTML&#47;&gt;</h1>
            </div>
            <div className="projects">
              <h2>Projects</h2>
            </div>
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
            initial="hidden"
            animate="visible"
            variants={socialHandleVariants}
          >
            <motion.a variants={itemVariants}>
              LinkedIn <img src="./up-arrow.png" alt="arrow icon" />
            </motion.a>

            <motion.a variants={itemVariants}>
              Github <img src="./up-arrow.png" alt="arrow icon" />
            </motion.a>

            <motion.a variants={itemVariants}>
              Dribble <img src="./up-arrow.png" alt="arrow icon" />
            </motion.a>

            <motion.a variants={itemVariants}>
              Behance <img src="./up-arrow.png" alt="arrow icon" />
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="mail_section"
          initial="hidden"
          animate="visible"
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
                Send <img src="./right-down.png" alt="" />
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

export default Contact;
