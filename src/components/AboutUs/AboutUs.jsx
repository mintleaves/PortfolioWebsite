import { useEffect } from "react";
import "./aboutus.scss";
import Clock from "./Clock";

import aiImg from "./assets/Ai.png";
import building from "./assets/building.jpg";
import seo from "./assets/seo.jpg";
import fullstack from "./assets/fullstack.png";
import hosting from "./assets/hosting.jpg";
import map from "./assets/map.jpg";

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
  // Seamless browsing, any screen.
  return (
    <div className="aboutUs max-w-[1366px] mx-auto px-2 md:px-0">
      <h2 className="text-white/50 text-lg md:text-xl text-center mt-5">
        Meet Our Team.
      </h2>
      <p className="text-3xl md:text-4xl text-center tracking-tighter font-medium mt-4">
        A glipmse into our world
      </p>
      <div className="bento-container mt-10">
        <div className="grid h-dvh grid-cols-6 gap-2 grid-rows-4">
          <div className="col-span-3 row-span-2 border border-white/15 rounded-lg p-6 flex flex-col items-center justify-center  text-md md:text-lg lg:text-xl  gap-3 md:gap-5 bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] text-gray-400">
            {/* <Lottie
              animationData={laptop}
              loop={true}
              className="h-[350px] w-[350px]"
            /> */}
            <p className="">
              We&apos;re skilled{" "}
              <span className="text-xl md:text-2xl lg:text-3xl">
                Software Engineers{" "}
              </span>
              proficient in the{" "}
              <span className="text-xl md:text-2xl lg:text-3xl">MERN</span>{" "}
              stack, with a solid foundation in Computer Science and
              Engineering, graduated in 2022 and have honed our expertise in{" "}
              <span className="text-xl md:text-2xl lg:text-3xl">
                Data Structures and Algorithms
              </span>
              .
            </p>
            <p className="">
              Our proven track record includes successful project completion
              over the past two years, culminating in the launch of our
              entrepreneurial venture,{" "}
              <span className="text-xl md:text-2xl lg:text-3xl"> GrubHTML</span>
              .
            </p>
          </div>

          <div className="col-span-3 row-span-1 border border-white/15 rounded-lg flex items-center gap-4 p-6">
            <p className="text-xl text-gray-400">We prioritize</p>
            <div className="client-service1 flex flex-col gap-4">
              <div className="px-4 py-5 text-center bg-gray-900 rounded-md text-">
                Open Communication
              </div>
              <div className="px-4 py-5 text-center bg-gray-900 rounded-md text-">
                100% Satisfaction
              </div>
            </div>
            <div className="client-service2 flex flex-col gap-4">
              <div className="px-4 py-5 text-center bg-gray-900 rounded-md text-">
                Active Collaboration
              </div>
              <div className="px-4 py-5 text-center bg-gray-900 rounded-md text-">
                Visual Refinements
              </div>
            </div>
            <p className="text-lg text-gray-400">for our clients</p>
          </div>

          <div className="col-span-1 row-span-2 border border-white/15 rounded-lg overflow-hidden relative">
            <Clock />
          </div>

          <div className="col-span-2 row-span-1 border border-white/15 rounded-lg overflow-hidden relative flex justify-center items-start">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${map})` }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <h2 className="relative text-2xl mt-6">
              Your Time Zone, Our Flexibility!
            </h2>
          </div>

          <div className="timezone col-span-2 row-span-2 border border-white/15 rounded-lg flex flex-col justify-between">
            <h2 className="relative text-2xl p-4">
              Seamless browsing, Any Screen Size
            </h2>
            <div className="responsive relative flex items-end justify-between px-2">
              <div className="tab relative z-10 border border-white/15 h-[200px] w-[145px] rounded-xl flex items-center justify-center bg-black">
                <div className="tab-inner border border-white/15 h-[190px] w-[135px] rounded-xl stripe"></div>
              </div>

              <div className="desktop relative z-10 border border-white/15 h-[165px] w-[270px] rounded-xl flex items-center justify-center bg-black">
                <div className="desktop-inner border border-white/15 h-[155px] w-[260px] rounded-xl stripe"></div>
              </div>

              <div className="mobile absolute z-20 border border-white/15 h-[120px] w-[60px] rounded-xl flex items-center justify-center bg-black left-1/3 transform -translate-x-1/4 -translate-y-1/6">
                <div className="mobile-inner border border-white/15 h-[110px] w-[50px] rounded-xl stripe"></div>
              </div>
            </div>
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

          <div className="col-span-2 row-span-1 border border-white/15 rounded-lg flex flex-col items-center justify-evenly  p-4">
            <h2 className="text-xl">
              Do you want to start a project together?
            </h2>
            <button className="bubbly-button px-8 py-3 text-lg font-medium text-purple-800 border-2 border-purple-800 rounded-full shadow-[0px_0px_12px_rebeccapurple] transform transition-transform duration-300 hover:scale-110">
              Copy Our Email!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
