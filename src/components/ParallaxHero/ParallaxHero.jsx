import React from "react";
import Button from "../ReuseComponents/Button";
import globe from "./globe.mp4";
import starBG from "./starBg5.jpg";

const ParallaxHero = () => {
  return (
    <section
      className="flex items-center justify-center overflow-hidden relative"
      style={{ backgroundImage: `url(${starBG})` }}
    >
      <div className="absolute h-[500px] w-[500px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src={globe}
          autoPlay
          loop
          muted
        ></video>
      </div>
      {/* first ring */}
      <div className="absolute h-[580px] w-[580px] border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-white opacity-20">
        <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2 border border-white inline-flex justify-center items-center">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </div>
      {/* 2nd ring */}
      <div className="absolute h-[745px] w-[745px]  rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white opacity-20 border-dotted">
      </div>
      {/* 3rd ring */}
      <div className="absolute h-[900px] w-[900px]  rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white opacity-20 border-dotted">
        <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="text_container relative">
        <h1 className="text-8xl font-semibold tracking-lighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          GrubHTML
        </h1>
        <p className="text-lg text-white/50 mt-5 text-center">
          Your go-to partner for creating stunning animations, intuitive user
          experiences, and full-stack web solutions that drive results.
        </p>
        <div className="flex justify-center mt-5">
          <Button>Boost Your Success</Button>
        </div>

        {/* MY OWN IDEA OF HERO SECTION */}

        {/* <div className="relative w-[500px] h-[500px] rounded-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={globe}
          autoPlay
          loop
          muted
        ></video>
      </div> */}
      </div>
    </section>
  );
};

export default ParallaxHero;
