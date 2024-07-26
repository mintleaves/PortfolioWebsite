import "./app.scss";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Testimonial from "./components/Testimonials/Testimonial";
import Works from "./components/Works/Works";

const App = () => {
  return (
    <>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <Works />
      <section id="Testimonials">
        <Testimonial />
      </section>
      {/* <section id="Contact">Parallax</section> */}
      <section id="Contact">Contact</section>
    </>
  );
};

export default App;
