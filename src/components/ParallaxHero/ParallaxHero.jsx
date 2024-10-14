import { useEffect } from "react";
import Button from "../ReuseComponents/Button";
import globe from "./globe.mp4";
// import starBG from "./starBg5.jpg";
import { createRandomSparkle, initSparkles } from "./heroBg";
import "./phero.scss";

const ParallaxHero = () => {
  useEffect(() => {
    initSparkles();
  }, []);
  return (
    <section
      className="starBG flex items-center justify-center overflow-hidden relative"
      // style={{ backgroundImage: `url(${starBG})` }}
    >
      <div className="absolute h-[400px] w-[400px] md:h-[500px] md:w-[500px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src={globe}
          // autoPlay
          // loop
          muted
        ></video>
      </div>
      {/* first ring */}
      <div className="absolute h-[450px] w-[450px] md:h-[560px] md:w-[560px] lg:h-[600px] lg:w-[600px] border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-white opacity-20 border-dotted">
        <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2 border border-white inline-flex justify-center items-center">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </div>
      {/* 2nd ring */}
      <div className="absolute h-[550px] w-[550px] md:h-[700px] md:w-[700px] lg:h-[800px] lg:w-[800px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white opacity-20 border-dotted">
        <div className="absolute h-2 w-2 bg-white rounded-full bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"></div>
      </div>
      {/* 3rd ring */}
      <div className="absolute h-[650px] w-[650px] md:h-[850px] md:w-[850px] lg:h-[1000px] lg:w-[1000px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white opacity-20 border-dotted">
        <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      {/* 4th ring */}
      <div className="absolute h-[750px] w-[750px] md:h-[990px] md:w-[990px] lg:h-[1200px] lg:w-[1200px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white opacity-20 border-dotted hidden md:block"></div>

      <div className="text_container relative">
        <h1 className="text-7xl md:text-8xl font-semibold tracking-lighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          GrubHTML
        </h1>
        <p className="text-md md:text-lg text-white/50 mt-5 text-center max-w-xl mx-auto">
          Your go-to partner for creating stunning animations, intuitive user
          experiences, and full-stack web solutions that drive results.
        </p>
        <div className="flex justify-center mt-5">
          <Button>Boost Your Success</Button>
        </div>
      </div>
    </section>
  );
};

export default ParallaxHero;
