import React from 'react';
import pumpf1 from "../assets/pumpf1.png";
import pumpf3 from "../assets/pumpf3.png";
import pumpf2 from "../assets/pumpf2.jpg";

interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Smart Comparison",
    description: "Logic-based comparative analysis that generates structured comparisons of flow, pressure, efficiency, and operating conditions of pumps.",
    image: pumpf1,
    imageAlt: "Smart comparison dashboard",
  },
  {
    id: 2,
    title: "Site Compatibility Checker",
    description: "Validates physical and electrical compatibility through question-based assessment of space, electrical supply, and environment.",
    image: pumpf2,
    imageAlt: "Site compatibility pump check",
  },
  {
    id: 3,
    title: "Energy Cost Calculator",
    description: "Addresses lifecycle cost optimization of pumps, helping customers to reduce long-term operational costs by selecting efficient solutions.",
    image: pumpf3,
    imageAlt: "Energy savings graph",
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="relative w-full min-h-screen bg-[#011d3d] py-20 px-4 sm:px-6 overflow-hidden">
      
      {/* BACKGROUND DECORATIVE GLOWS - Using responsive widths */}
      <div className="absolute top-[10%] left-[-10%] w-[30vw] h-[30vw] bg-blue-400/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Changed max-w-360 to a standard responsive container */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        <header className="text-center mb-16">
          <h1 className="font-['Bakbak_One'] text-white text-5xl md:text-7xl">
            Core Features
          </h1>
        </header>

        {/* FEATURES GRID */}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {features.map((feature) => (
            <article
              key={feature.id}
              /* Use w-full and max-w to let it shrink on mobile */
              className="group w-full max-w-95 bg-white rounded-[25px] p-6 flex flex-col items-center shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full"
            >
              {/* IMAGE CONTAINER: Smaller and responsive */}
              <div className="w-full h-48 sm:h-56 flex items-center justify-center mb-6 overflow-hidden rounded-2xl">
                <img
                  /* h-full and w-auto ensures the image stays small and fits the box */
                  className="h-[90%] w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                  alt={feature.imageAlt}
                  src={feature.image}
                />
              </div>

              {/* Text Content */}
              <h2 className="font-['Bakbak_One'] text-[#011d3d] text-2xl text-center mb-4">
                {feature.title}
              </h2>

              <p className="font-['Kameron'] text-gray-700 text-base md:text-lg leading-relaxed text-center">
                {feature.description}
              </p>
            </article>
          ))}
        </main>
      </div>
    </section>
  );
};

export default Features;