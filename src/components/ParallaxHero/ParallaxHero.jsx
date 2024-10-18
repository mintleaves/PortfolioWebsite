import { motion } from "framer-motion";
import Button from "../ReuseComponents/Button";
import globe from "./globe.mp4";
import "./phero.scss";

const ParallaxHero = () => {
  const stars = Array.from({ length: 10 }, (_, i) => (
    <div key={i} className="star"></div>
  ));
  return (
    <section className="starBG sky flex items-center justify-center overflow-hidden relative ">
      <div className="hidden md:block firestar"></div>
      <div className="firestar"></div>
      {/* <div className="hidden lg:block shooting-star"></div> */}
      {stars}

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
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 50,
          ease: "linear",
        }}
        className="absolute h-[450px] w-[450px] md:h-[560px] md:w-[560px] lg:h-[600px] lg:w-[600px] border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-white opacity-30 border-dotted"
      >
        <div className="absolute h-2 w-2 bg-[radial-gradient(80%_100%_at_top_left,white,white,rgb(255,56,0,.8))] rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 bg-[radial-gradient(80%_80%_at_top_left,white,yellow,rgb(243,251,7,.8))] rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-7 w-7 rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2 border border-sky-300 inline-flex justify-center items-center">
          <div className="h-3 w-3 bg-[radial-gradient(80%_80%_at_top_left,white,white,rgb(2,180,250,.8))] rounded-full"></div>
        </div>
      </motion.div>
      {/* 2nd ring */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 50,
          ease: "linear",
        }}
        className="absolute h-[550px] w-[550px] md:h-[700px] md:w-[700px] lg:h-[800px] lg:w-[800px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white opacity-30 border-dotted"
      >
        <div className="absolute h-3 w-3  bg-[radial-gradient(70%_70%_at_top_left,white,white,rgb(250,149,7.8))] rounded-full bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"></div>
      </motion.div>

      {/* 3rd ring */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 100,
          ease: "linear",
        }}
        className="earth absolute h-[650px] w-[650px] md:h-[850px] md:w-[850px] lg:h-[1000px] lg:w-[1000px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-dotted rounded-full opacity-30"
      >
        <motion.div
          style={{
            translateY: "-50%",
            translateX: "-50%",
          }}
          animate={{
            rotate: "1turn",
          }}
          transition={{
            repeat: Infinity,
            duration: 2.7,
            ease: "linear",
          }}
          className="moon top-1/2 left-full -translate-x-1/2 -translate-y-1/2"
        ></motion.div>

        <motion.div
          style={{
            translateY: "-50%",
            translateX: "-50%",
          }}
          animate={{
            rotate: "1turn",
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
          className="absolute h-4 w-4 bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2"
        ></motion.div>
      </motion.div>

      {/* 4th ring */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 50,
          ease: "linear",
        }}
        className="absolute h-[750px] w-[750px] md:h-[990px] md:w-[990px] lg:h-[1200px] lg:w-[1200px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white opacity-30 border-dotted hidden md:block"
      >
        <div className="absolute h-4 w-4 rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(33,193,249,.8))]"></div>
        <div className="absolute h-4 w-4 bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(33,193,249,.8))] rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>

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
