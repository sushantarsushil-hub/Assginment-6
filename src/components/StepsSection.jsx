import { User, Briefcase, Globe } from 'lucide-react';

const StepsSection = () => {
  const steps = [
    { 
      icon: <User size={32} />, 
      title: 'Create Account', 
      desc: 'Sign up in seconds with your email or social accounts.' 
    },
    { 
      icon: <Briefcase size={32} />, 
      title: 'Choose Products', 
      desc: 'Select from our wide range of professional tools.' 
    },
    { 
      icon: <Globe size={32} />, 
      title: 'Start Creating', 
      desc: 'Launch your project and see the magic happen.' 
    }
  ];

  return (

    <section className="px-6 py-24 bg-white" id="features">

      <div className="max-w-7xl mx-auto space-y-16">

    <div className="text-center space-y-4">

          <h2 className="text-4xl font-extrabold text-slate-900">Get Started in 3 Steps</h2>
          <p className="text-slate-600 text-lg">The fastest way to take your workflow to the next level.</p>
        </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (

    <div key={i} className="text-center space-y-6 group">

      <div className="w-24 h-24 bg-indigo-50 text-indigo-600 rounded-3xl mx-auto flex items-center justify-center relative shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-9 h-9 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">
                  {i + 1}
                </div>

              </div>
              <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed max-w-xs mx-auto text-base">{step.desc}</p>
            </div>

          ))}

        </div>
      </div>
      
    </section>
  );
};

export default StepsSection;
