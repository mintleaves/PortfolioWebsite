import React, { useEffect } from "react";
import "./index.css";
import "./app.scss";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Testimonial from "./components/Testimonials/Testimonial";
import Works from "./components/Works/Works";
import ParallaxHero from "./components/ParallaxHero/ParallaxHero";

const App = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);

  return (
    <>
      {/* <section> */}
        <Navbar />
      {/* </section> */}

      {/* <section id="Home">
        <Hero />
      </section> */}

      <section id="Home">
        <ParallaxHero />
      </section>
      
      <section id="About">
        <About />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <Works id="Works" />
      <section id="Services">{/* <Testimonial /> */}</section>
      <section id="Testimonials">
        <Testimonial />
      </section>

      <section id="Contact">
        <Contact />
      </section>
    </>
  );
};

export default App;
