import { useEffect, useRef } from "react";
import "./skills.scss";

const skillsIcon = [
  { id: 1, iconName: "HTML", iconImg: "./html.png" },
  { id: 2, iconName: "CSS", iconImg: "./css.png" },
  { id: 3, iconName: "JavaScript", iconImg: "./js.png" },
  { id: 4, iconName: "React", iconImg: "./react.png" },
  { id: 5, iconName: "Node JS", iconImg: "./node.png" },
  { id: 6, iconName: "Express JS", iconImg: "./express.png" },
  { id: 7, iconName: "Mongo DB", iconImg: "./mongodb.png" },
  { id: 8, iconName: "MySQL", iconImg: "./mysql.png" },
  { id: 9, iconName: "Github", iconImg: "./githubSk.png" },
  { id: 10, iconName: "SASS", iconImg: "./sass.png" },
  { id: 11, iconName: "Tailwind", iconImg: "./tailwind.png" },
  { id: 12, iconName: "Bootstrap", iconImg: "./bootstrap.png" },
  { id: 13, iconName: "Material UI", iconImg: "./material.png" },
  { id: 14, iconName: "Blender", iconImg: "./blender.png" },
  { id: 15, iconName: "Figma", iconImg: "./figma.png" },
];

const useSpotlight = (containerRef) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const cards = Array.from(container.children);
    const mouse = { x: 0, y: 0 };
    const containerSize = { w: 0, h: 0 };

    const initContainer = () => {
      containerSize.w = container.offsetWidth;
      containerSize.h = container.offsetHeight;
    };

    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      const rect = container.getBoundingClientRect();
      const { w, h } = containerSize;
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const inside = x < w && x > 0 && y < h && y > 0;
      if (inside) {
        mouse.x = x;
        mouse.y = y;
        cards.forEach((card) => {
          const cardX =
            -(card.getBoundingClientRect().left - rect.left) + mouse.x;
          const cardY =
            -(card.getBoundingClientRect().top - rect.top) + mouse.y;
          card.style.setProperty("--mouse-x", `${cardX}px`);
          card.style.setProperty("--mouse-y", `${cardY}px`);
        });
      }
    };

    initContainer();
    window.addEventListener("resize", initContainer);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("resize", initContainer);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [containerRef]);
};

const Skills = () => {
  const containerRef = useRef(null);
  useSpotlight(containerRef);

  return (
    <div className="skills max-w-[1366px] mx-auto px-2 md:px-0">
      <h2 className="text-white/50 text-lg md:text-xl text-center mt-5">
        Areas of Expertise.
      </h2>
      <p className="text-3xl md:text-4xl text-center tracking-tighter font-medium mt-4">
        Our Core Competencies
      </p>
      <div
        ref={containerRef}
        className="skills-container border border-white/15 rounded-lg mt-10 flex gap-3 py-16 flex-wrap justify-center items-center group"
        data-spotlight
      >
        {skillsIcon.map((skill) => (
          <div
            key={skill.id}
            className="relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-60 before:h-60 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-slate-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden flex flex-col items-center justify-center flex-grow-0 flex-shrink-0 basis-1/5"
          >
            <div className="relative h-full w-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden flex flex-col items-center justify-center gap-3">
              {/* <!-- Radial gradient --> */}
              {/* <div
                className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                aria-hidden="true"
              >
                <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
              </div> */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <img
                src={skill.iconImg}
                alt={skill.iconName}
                className="w-12 h-12"
              />

              <span className="text-gray-400 text-center text-sm relative">
                {skill.iconName}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
