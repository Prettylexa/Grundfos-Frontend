import React from 'react';
import icons8Ai941 from "../assets/icons8-ai-94.png";
import icons8Ai942 from "../assets/icons8-ai-94.png";
import icons8Ai943 from "../assets/icons8-ai-94.png";
import pump31 from "../assets/pumpl.png";

export const LandingPage: React.FC = () => {
  return (
    <div  id="home" className="bg-[#011d3d] overflow-x-hidden min-h-screen w-full relative text-white z-10 pt-15">
      <div className="absolute top-[10%] left-[-10%] w-[30vw] h-[30vw] bg-blue-400/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />
      
      {/* HERO SECTION: Switched to Grid/Flex layout */}
      <main className="relative z-10 max-w-7xl mx-auto px-8 pt-10 flex flex-col items-center text-center lg:flex-row lg:text-left lg:justify-between lg:items-start">        
        {/* Text Content */}
        <section className="max-w-2xl mt-18 flex flex-col items-center lg:items-start mb-10">        
          <div className="font-['Kameron'] text-5xl md:text-6xl font-normal">
            Grundfos
          </div>
          <h1 className="font-['Bakbak_One'] text-6xl md:text-8xl lg:text-8xl leading-tight">
            FlowLogic AI
          </h1>
          <p className="mt-3 text-[18px] md:text-[24px] font-['Kameron'] leading-relaxed opacity-90">
            An engineering companion catered to provide the best and suitable
            pump for you.
          </p>

          <button className="mt-15 flex items-center gap-4 bg-white text-[#011d3d] px-9 py-3 rounded-full hover:scale-105 transition-transform">
            <span className="font-['Bakbak_One'] text-[18px] md:text-[20px] lg:text-[24px]">Start Now!</span>
            <img src={icons8Ai943} alt="" className="w-10 h-10" />
          </button>
        </section>

        {/* 3. Image Content Container */}
<div className="relative mt-16 my-10 lg:mt-0 flex justify-center items-center w-full max-w-150">
  
  {/* The Main Pump Image */}
  <img
    className="w-[80%] md:w-[60%] lg:w-full max-w-137.5 h-auto object-contain mx-auto"
    alt="Grundfos pump product"
    src={pump31}
  />
  
  {/* AI Icon 1 - Top Right */}
  <img
    className="absolute -top-1 -right-5 w-[15%] md:w-20 h-auto animate-tilt"
    alt=""
    src={icons8Ai941}
  />
  
  {/* AI Icon 2 - Bottom Left */}
  <img
    className="absolute -bottom-1 -left-3 w-[12%] md:w-20 h-auto animate-tilt"
    alt=""
    src={icons8Ai942}
  />
  
</div>
      </main>
    </div>
  );
};

export default LandingPage;