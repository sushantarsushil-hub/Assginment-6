import { ChevronRight } from 'lucide-react';

const Hero = ({ onExploreClick }) => {

  return (

<section className="px-6 py-16 md:py-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    <div className="flex-1 space-y-8 animate-fade-in">

    <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
          
          <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
          TRUSTED BY OVER 50,000+ COMPANIES
        </div>

  <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] text-slate-900">
          Supercharge Your <br />

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Digital Workflow</span>
        </h1>

    <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
          The all-in-one platform to create, manage, and scale your digital presence. 
          Built for modern teams who value speed and beauty.
        </p>

  
  <div className="flex flex-wrap gap-4">
          <button 
            className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 hover:scale-[1.02] active:scale-95"
            onClick={onExploreClick}
          >

            Launch Product <ChevronRight size={20} />

          </button>

          <button className="border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:border-indigo-600 hover:text-indigo-600 transition-all">
            Watch Demo
          </button>

        </div>
      </div>

      <div className="flex-1 relative animate-fade-in" style={{ animationDelay: '0.2s' }}>

        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="" 
            alt=""
            className="w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-100 rounded-full blur-3xl -z-10 opacity-60"></div>
        
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl -z-10 opacity-60"></div>
      </div>

    </section>
  );
};

export default Hero;
