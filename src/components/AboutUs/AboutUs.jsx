import { useEffect } from "react";
import "./aboutus.scss";

import aiImg from "./assets/Ai.png";
import building from "./assets/building.jpg";
import seo from "./assets/seo.jpg";
import fullstack from "./assets/fullstack.png";
import hosting from "./assets/hosting.jpg";
import timezone from "./assets/timezone.mp4";

const AboutUs = () => {
  useEffect(() => {
    const animateButton = (e) => {
      e.preventDefault();
      e.target.classList.remove("animate");
      e.target.classList.add("animate");
      setTimeout(() => {
        e.target.classList.remove("animate");
      }, 700);
    };

    const bubblyButtons = document.getElementsByClassName("bubbly-button");
    for (let i = 0; i < bubblyButtons.length; i++) {
      bubblyButtons[i].addEventListener("click", animateButton, false);
    }

    return () => {
      for (let i = 0; i < bubblyButtons.length; i++) {
        bubblyButtons[i].removeEventListener("click", animateButton, false);
      }
    };
  }, []);
  return (
    <div className="aboutUs max-w-[1366px] mx-auto px-2 md:px-0">
      <h2 className="text-white/50 text-lg md:text-xl text-center mt-5">
        Meet Our Team.
      </h2>
      <p className="text-3xl md:text-4xl text-center tracking-tighter font-medium mt-4">
        A glipmse into our world
      </p>
      <div className="bento-container mt-10">
        <div className="grid h-dvh grid-cols-5 gap-2 grid-rows-4">
          <div className="col-span-2 row-span-2 border border-white/15 rounded-lg p-6 flex flex-col items-center justify-center text-xl gap-5 bg-gradient-to-r from-[#705d91] via-purple-500 to-[#6128b6] bg-clip-text text-transparent">
            {/* <Lottie
              animationData={laptop}
              loop={true}
              className="h-[350px] w-[350px]"
            /> */}
            <p className="">
              We&apos;re skilled{" "}
              <span className="text-3xl">Software Engineers </span>proficient in
              the <span className="text-3xl">MERN</span> stack, with a solid
              foundation in Computer Science and Engineering, graduated in 2022
              and have honed our expertise in{" "}
              <span className="text-3xl">Data Structures and Algorithms</span>.
            </p>
            <p className="">
              Our proven track record includes successful project completion
              over the past two years, culminating in the launch of our
              entrepreneurial venture,{" "}
              <span className="text-3xl"> GrubHTML</span>.
            </p>
          </div>

          <div className="col-span-3 row-span-1 border border-white/15 rounded-lg flex flex-col items-center justify-evenly">
            <h2 className="text-3xl">
              Do you want to start a project together?
            </h2>

            <button className="bubbly-button px-12 py-3 text-lg font-medium text-sky-800 border-2 border-sky-800 rounded-full shadow-[0px_0px_12px_#6F94F4] transform transition-transform duration-300 hover:scale-110">
              Tap to Copy Our Email!
            </button>
          </div>

          <div className="col-span-1 row-span-2 border border-white/15 rounded-lg overflow-hidden relative ">
            <div className="absolute top-[200px] left-0 overflow-hidden">
              <video
                className="w-full h-full object-cover"
                src={timezone}
                autoPlay
                loop
                muted
              ></video>
            </div>
            <h2 className="relative text-3xl text-center mt-10">
              Your Time Zone, Our Flexibility!
            </h2>
          </div>

          <div className="timezone col-span-2 row-span-2 border border-white/15 rounded-lg bg-lime-500">
          <h1>Ui/UX design, powerful CMS, responsive design, secure, our tools and stacks</h1>
          </div>
          <div className="relative col-span-1 row-span-1 border border-white/15 rounded-lg overflow-hidden flex justify-center items-center group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-6"
              style={{ backgroundImage: `url(${aiImg})` }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <h2 className="relative text-3xl font-bold">AI Enthusiast</h2>
          </div>

          <div className="relative col-span-1 row-span-1 border border-white/15 rounded-lg overflow-hidden flex justify-center items-center group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-6"
              style={{ backgroundImage: `url(${building})` }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <h2 className="relative text-3xl font-bold">3D Maven</h2>
          </div>
          <div className="relative col-span-1 row-span-1 border border-white/15 rounded-lg overflow-hidden flex justify-center items-center group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-6"
              style={{ backgroundImage: `url(${seo})` }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <h2 className="relative text-3xl font-bold">SEO Strategist</h2>
          </div>

          <div className="relative col-span-1 row-span-1 border border-white/15 rounded-lg overflow-hidden flex justify-center items-center group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-6"
              style={{ backgroundImage: `url(${fullstack})` }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <h2 className="relative text-3xl font-bold">Full Stack Pro</h2>
          </div>

          <div className="relative col-span-1 row-span-1 border border-white/15 rounded-lg overflow-hidden flex justify-center items-center group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-6"
              style={{ backgroundImage: `url(${hosting})` }}
            ></div>

            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <h2 className="relative text-3xl font-bold">Hosting Advisor</h2>
          </div>

          <div className="col-span-2 row-span-1 border border-white/15 rounded-lg bg-pink-800">
          <h1>My Blog</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
