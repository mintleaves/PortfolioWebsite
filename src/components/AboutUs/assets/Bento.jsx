<div className="bento-container mt-10 relative">
  <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(140,69,255,.2),rgba(255,255,255,0))]"></div>
  <div className="absolute bottom-0 right-[-15%] top-[25%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(140,69,255,.3),rgba(255,255,255,0))]"></div>

  <div className="grid h-dvh gap-2 grid-cols-6  grid-rows-4">
    {/* we're skilled */}
    <div className="col-span-3 row-span-2 border border-white/15 rounded-lg p-6 flex flex-col items-center justify-center  text-md md:text-lg lg:text-xl  gap-3 md:gap-5 text-gray-400">
      <p className="">
        We&apos;re skilled{" "}
        <span className="text-xl md:text-2xl lg:text-3xl">
          Software Engineers{" "}
        </span>
        proficient in the{" "}
        <span className="text-xl md:text-2xl lg:text-3xl">MERN</span> stack,
        with a solid foundation in Computer Science and Engineering, graduated
        in 2022 and have honed our expertise in{" "}
        <span className="text-xl md:text-2xl lg:text-3xl">
          Data Structures and Algorithms
        </span>
        .
      </p>
      <p className="">
        Our proven track record includes successful project completion over the
        past two years, culminating in the launch of our entrepreneurial
        venture,{" "}
        <span className="text-xl md:text-2xl lg:text-3xl"> GrubHTML</span>.
      </p>
    </div>
    {/* we priotize */}
    <div className="col-span-3 row-span-1 border border-white/15 rounded-lg flex items-center gap-4 p-6">
      <p className="text-xl text-gray-400">We prioritize</p>
      <div className="client-service1 flex flex-col gap-4">
        <div className="px-4 py-5 text-center bg-[#121113] text-gray-400 rounded-md text-">
          Open Communication
        </div>
        <div className="px-4 py-5 text-center bg-[#121113] text-gray-400 rounded-md text-">
          100% Satisfaction
        </div>
      </div>
      <div className="client-service2 flex flex-col gap-4">
        <div className="px-4 py-5 text-center bg-[#121113] text-gray-400 rounded-md text-">
          Active Collaboration
        </div>
        <div className="px-4 py-5 text-center bg-[#121113] text-gray-400 rounded-md text-">
          Visual Refinements
        </div>
      </div>
      <p className="text-lg text-gray-400">for our clients</p>
    </div>
    {/* clock */}
    <div className="col-span-1 row-span-1 border border-white/15 rounded-lg flex justify-center items-center">
      <Clock />
    </div>
    {/* time zone */}
    <div className="col-span-2 row-span-1 border border-white/15 rounded-lg overflow-hidden relative flex justify-center items-start">
      <div
        className="absolute inset-0 bg-cover bg-bottom"
        style={{ backgroundImage: `url(${map})` }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <h2 className="relative mt-6 text-xl text-gray-400">
        Your Time Zone, Our Flexibility!
      </h2>
    </div>
    {/* seamless browsing */}
    <div className="col-span-2 row-span-2 border border-white/15 rounded-lg flex flex-col justify-between relative">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <h2 className="relative text-xl text-gray-400 p-4 text-center">
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
          <div className="mobile-inner border border-white/15 h-[115px] w-[54px] rounded-xl stripe  flex justify-center">
            <div className="border border-white/15 h-[5px] w-[20px] bg-black mt-[4px] rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
    {/* ai  */}
    <div className="relative col-span-1 row-span-1 border border-white/15 rounded-lg overflow-hidden flex flex-col justify-evenly">
      <div className="internet-logo flex justify-end relative ">
        <div className="absolute inset-0 bg-black bg-opacity-90"></div>
        <img
          src={internet}
          className="h-11 w-11 me-2 border rounded-md"
          alt="internet"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-2 text-gray-400">
        <div className="ai-icon text-2xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] h-[70px] w-[70px] flex justify-center items-center rounded-lg">
          AI
        </div>
        <h2 className="relative text-2xl"> Enthusiast</h2>
      </div>
      <div className="network-logo relative flex justify-between px-3">
        <div className="absolute inset-0 bg-black bg-opacity-85"></div>
        <img src={network} className="h-11 w-11 rounded-md p-2" alt="network" />
      </div>
    </div>
    {/* maven */}
    <div className="relative col-span-1 row-span-1 border border-white/15 rounded-lg overflow-hidden flex flex-col justify-evenly">
      <div className="internet-logo flex relative ">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <img
          src={shape}
          className="h-11 w-11 ms-2 border border-white/15 rounded-md"
          alt="internet"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-2 text-gray-400">
        <div className="ai-icon text-2xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] h-[70px] w-[70px] flex justify-center items-center rounded-lg">
          3D
        </div>
        <h2 className="relative text-2xl"> Maven</h2>
      </div>
      <div className="network-logo relative flex justify-end px-3">
        <div className="absolute inset-0 bg-black bg-opacity-90"></div>
        <img src={objects} className="h-11 w-11 rounded-md" alt="objects" />
      </div>
    </div>
    {/* we deliver */}
    <div className="relative col-span-2 row-span-2 border border-white/15 rounded-lg overflow-hidden flex flex-col justify-between">
      <h2 className="text-xl text-gray-400 mt-6 px-4 text-center">
        We deliver a complete solution encompassing{" "}
        <span className="text-2xl">Design</span>,{" "}
        <span className="text-2xl">Development</span>,{" "}
        <span className="text-2xl">SEO</span>&{" "}
        <span className="text-2xl">Hosting</span>
      </h2>
      <div className="platform flex justify-end me-5">
        <div className="h-[240px] w-[330px] rounded-lg bg-[#121113] p-4">
          <div className="inline-flex gap-2 items-center mb-1">
            <div className="h-5 w-5 rounded-full bg-black"></div>
            <div className="h-4 w-[80px] bg-black rounded-lg"></div>
            <div className="h-4 w-[120px] bg-black rounded-lg"></div>
          </div>
          <div className="h-4 w-[300px] bg-black rounded-lg mb-2"></div>
          <div className="inline-flex gap-2 items-center mb-2">
            <div className="h-4 w-[170px] bg-black rounded-lg"></div>
            <div className="h-4 w-[120px] bg-black rounded-lg"></div>
          </div>
          <div className="inline-flex gap-2 items-center mb-2">
            <div className="h-4 w-[120px] bg-black rounded-lg"></div>
            <div className="h-4 w-[120px] bg-black rounded-lg"></div>
          </div>
          <div className="inline-flex gap-2 items-center mb-2">
            <div className="h-4 w-[170px] bg-black rounded-lg"></div>
            <div className="h-4 w-[120px] bg-black rounded-lg"></div>
          </div>
          <div className="h-4 w-[230px] bg-black rounded-lg mb-2"></div>
          <div className="inline-flex gap-2 items-center mb-2">
            <div className="h-4 w-[100px] bg-black rounded-lg"></div>
            <div className="h-4 w-[150px] bg-black rounded-lg"></div>
          </div>
          <div className="h-4 w-[280px] bg-black rounded-lg mb-2"></div>
          <div className="h-4 w-[220px] bg-black rounded-lg mb-2"></div>
        </div>
      </div>
    </div>
    {/* do you want */}
    <div className="col-span-2 row-span-1 border border-white/15 rounded-lg flex flex-col items-center justify-evenly  p-4">
      <h2 className="text-xl text-gray-400">
        Do you want to start a project together?
      </h2>
      <button className="bubbly-button px-8 py-3 text-lg font-medium text-purple-900 border-2 border-purple-950 rounded-full shadow-[0px_0px_12px_#441178] transform transition-transform duration-300 hover:scale-110">
        Copy Our Email!
      </button>
    </div>
  </div>
</div>;
