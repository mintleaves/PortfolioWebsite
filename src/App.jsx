import "./app.scss"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"

const App = () => {
  return (
    <>
     <section id="Home">
        <Navbar />
        <Hero />
     </section>
     <section id="About">About</section>
     <section id="Skills">Skills</section>
     <section id="Work">Parallax</section>     
     <section>Project1</section>
     <section>Project2</section>
     <section>Project3</section>
     <section id="Testimonials">Testimonials</section>     
     <section id="Contact">Parallax</section>     
     <section>Contact</section>
    </>
  )
}

export default App
