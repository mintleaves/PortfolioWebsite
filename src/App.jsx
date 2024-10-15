import { useEffect } from "react";
import "./index.css";
import "./app.scss";
// import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Testimonial from "./components/Testimonials/Testimonial";
import Works from "./components/Works/Works";
import ParallaxHero from "./components/ParallaxHero/ParallaxHero";
import AboutUs from "./components/AboutUs/AboutUs";

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

    {/* parallax hero is Right */}
      <section id="Home">
        <ParallaxHero />
      </section>

    {/* About is Right */}
      {/* <section id="About">
        <About />
      </section> */}
      
      <section>
        <AboutUs />
      </section>

      {/* Skils has problem */}
      {/* <section id="Skills">
        <Skills />
      </section> */}
     
    {/* Works has problem */}
      {/* <Works id="Works" /> */}

      {/* <section id="Services"></section>
      <section id="Services"></section>
      <section id="Services"></section> */}

      {/* Testimonial is right */}
      <section id="Testimonials">
        <Testimonial />
      </section>

      {/* Contact has problem */}
      <section id="Contact">
        <Contact />
      </section>
    </>
  );
};

export default App;
