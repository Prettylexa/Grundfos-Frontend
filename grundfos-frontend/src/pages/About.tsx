import React from 'react';

// --- SUB-COMPONENT: Mock Chat UI ---
// This replaces your mock-chat.html file for better performance
const MockChat = () => (
  <div className="w-full max-w-100 bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col h-109 border border-gray-100">
    <div className="bg-[#011d3d] p-4 flex items-center gap-3">
      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
      <span className="text-white font-bold">FlowLogic AI Assistant</span>
    </div>

    <div className="flex-1 p-6 flex flex-col gap-4 overflow-y-auto bg-gray-50">
      {/* User Message */}
      <div className="self-end bg-blue-500 text-white p-4 rounded-2xl rounded-tr-none max-w-[80%] text-sm shadow-md animate-fade-in">
        What is the optimal operating pressure for a Grundfos CR pump?
      </div>

      {/* AI Message */}
      <div className="self-start bg-white text-[#011d3d] p-4 rounded-2xl rounded-tl-none max-w-[80%] text-sm shadow-md border border-gray-100 flex gap-3">
        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
          <span className="text-[10px] font-bold">AI</span>
        </div>
        <p>Based on the RAG knowledge base, the optimal operating pressure for a standard CR pump typically ranges from 16 to 30 bar.</p>
      </div>
    </div>

    <div className="p-4 bg-white border-t flex gap-2">
      <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-gray-400 text-sm flex items-center">
        Type your query...
      </div>
      <div className="w-10 h-10 bg-[#011d3d] rounded-full flex items-center justify-center text-white">
        ✈
      </div>
    </div>
  </div>
);

// --- MAIN PAGE COMPONENT ---
export const About: React.FC = () => {
  return (
    <section id="about" className="relative w-full min-h-screen bg-[#011d3d] py-20 px-6 md:px-12 overflow-hidden">
      {/* BACKGROUND DECORATIVE GLOWS */}
      <div className="absolute top-[10%] left-[-10%] w-[30vw] h-[30vw] bg-blue-400/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />
    
      <div className="max-w-360 mx-auto relative z-10">
        
        {/* HEADER */}
        <header className="text-center mb-16">
          <h1 className="font-['Bakbak_One'] text-white text-6xl md:text-7xl">
            What is FlowLogic AI?
          </h1>
        </header>

        {/* CONTENT GRID: Text on left, Chat on right */}
        <main className="flex flex-col lg:flex-row items-center justify-center gap-20 ">          
          {/* DESCRIPTION BOX */}
            <article className="flex-1 max-w-160 bg-white/95 backdrop-blur-sm rounded-[30px] p-8 md:p-12 shadow-2xl">
            <h2 className="font-['Bakbak_One'] text-[#011d3d] text-4xl mb-6">
              Grundfos FlowLogic AI
            </h2>
            <p className="font-['Kameron'] text-[#011d3d] text-xl md:text-2l lg:text-2xl leading-relaxed">
              An intelligent virtual assistant designed to revolutionize how 
              users access and interact with pump product information. 
              Built on a <span className="font-bold text-blue-600">Retrieval-Augmented Generation (RAG)</span> architecture, 
              the system combines Large Language Models with the precision 
              of manufacturer-vetted knowledge bases.
            </p>
          </article>

          {/* CHAT INTERFACE (The HTML you wanted to add) */}
          <div className="flex-1 flex justify-start lg:justify-start max-w-112.5">
             <MockChat />
          </div>

        </main>
      </div>
    </section>
  );
};

export default About;