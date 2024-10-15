import AiImg from "./assets/Ai.png";
import building from "./assets/building.jpg";
import seo from "./assets/seo.jpg";
import fullstack from "./assets/fullstack.png";
import hosting from "./assets/hosting.jpg";
import timezone from "./assets/timezone.mp4";

const AboutUs = () => {
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
          <div className="col-span-2 row-span-2 border border-gray-200/20 rounded-lg p-6 flex flex-col items-center justify-center text-xl gap-5 bg-gradient-to-r from-[#705d91] via-purple-500 to-[#6128b6] bg-clip-text text-transparent">
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
          <div className="col-span-3 row-span-1 border border-gray-200/20 rounded-lg flex flex-col items-center justify-evenly">
            <h2 className="text-3xl">
              Do you want to start a project together?
            </h2>
            <button>
              {" "}
              <a
                href="#_"
                className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-purple-600 border-2 border-purple-600 rounded-full hover:text-white group hover:bg-gray-50"
              >
                <span className="absolute left-0 block w-full h-0 transition-all bg-purple-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative">Our Email – Copy It!</span>
              </a>
            </button>
          </div>

          <div className="col-span-1 row-span-2 border border-gray-200/20 rounded-lg overflow-hidden relative ">
            <div className="absolute top-1/3 left-0 overflow-hidden">
              <video
                className="w-full h-full object-cover"
                src={timezone}
                autoPlay
                loop
                muted
              ></video>
            </div>
            <h2 className="relative text-2xl text-center mt-10">
            Your Time Zone, Our Flexibility!
            </h2>
          </div>
          <div className="timezone col-span-2 row-span-2 border border-gray-200/20 rounded-lg bg-lime-500">
          </div>
          <div className="relative col-span-1 row-span-1 border border-gray-200/20 rounded-lg overflow-hidden flex justify-center items-center group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-6"
              style={{ backgroundImage: `url(${AiImg})` }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <h2 className="relative text-3xl font-bold">AI Enthusiast</h2>
          </div>

          <div className="relative col-span-1 row-span-1 border border-gray-200/20 rounded-lg overflow-hidden flex justify-center items-center group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-6"
              style={{ backgroundImage: `url(${building})` }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <h2 className="relative text-3xl font-bold">3D Maven</h2>
          </div>
          <div className="relative col-span-1 row-span-1 border border-gray-200/20 rounded-lg overflow-hidden flex justify-center items-center group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-6"
              style={{ backgroundImage: `url(${seo})` }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <h2 className="relative text-3xl font-bold">SEO Strategist</h2>
          </div>

          <div className="relative col-span-1 row-span-1 border border-gray-200/20 rounded-lg overflow-hidden flex justify-center items-center group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-6"
              style={{ backgroundImage: `url(${fullstack})` }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <h2 className="relative text-3xl font-bold">Full Stack Pro</h2>
          </div>

          <div className="relative col-span-1 row-span-1 border border-gray-200/20 rounded-lg overflow-hidden flex justify-center items-center group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-6"
              style={{ backgroundImage: `url(${hosting})` }}
            ></div>

            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <h2 className="relative text-3xl font-bold">Hosting Advisor</h2>
          </div>

          <div className="col-span-2 row-span-1 border border-gray-200/20 rounded-lg bg-pink-800"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
