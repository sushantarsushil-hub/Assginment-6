import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "0",
      desc: "Perfect for individuals",
      features: ["Access to basic tools", "Community support", "Single project"],
      button: "Get Started",
      featured: false
    },
    {
      name: "Pro",
      price: "29",
      desc: "For power users",
      features: ["All Premium Tools", "Priority Support", "Unlimited Projects", "Custom Branding"],
      button: "Start Free Trial",
      featured: true
    },
    {
      name: "Enterprise",
      price: "99",
      desc: "For large teams",
      features: ["Team Collaboration", "Advanced Analytics", "SLA Support", "API Access"],
      button: "Contact Sales",
      featured: false
    }
  ];

  return (
    <section className="px-6 py-24 bg-slate-900 text-white overflow-hidden relative" id="pricing">
     

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-indigo-600/10 blur-[120px] rounded-full -z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">

        <div className="text-center space-y-4">

          <h2 className="text-4xl md:text-5xl font-black">Simple, Transparent Pricing</h2>
          <p className="text-slate-400 text-lg">Choose the plan that fits your needs. No hidden fees.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`p-10 rounded-3xl border transition-all duration-500 relative flex flex-col ${
                plan.featured 
                  ? 'bg-indigo-600 border-indigo-400 shadow-2xl shadow-indigo-900/40 scale-105 z-10' 
                  : 'bg-slate-800/50 backdrop-blur-xl border-slate-700/50 hover:bg-slate-800'
              }`}
            >

              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>

              )}
              
  <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`${plan.featured ? 'text-indigo-100' : 'text-slate-400'} text-sm mb-8`}>{plan.desc}</p>
                <div className="flex items-baseline gap-1">

                  <span className="text-5xl font-black">${plan.price}</span>

                  <span className={`text-lg font-normal ${plan.featured ? 'text-indigo-200' : 'text-slate-500'}`}>/mo</span>

           </div>
              </div>
              
      <ul className="space-y-4 mb-10 flex-grow">

         {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check size={18} className={plan.featured ? 'text-indigo-200' : 'text-indigo-400'} />
                    <span className={plan.featured ? 'text-white font-medium' : 'text-slate-300'}>{feature}</span>

            </li>

                ))}

              </ul>
              
       <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                  plan.featured 
                    ? 'bg-white text-indigo-600 shadow-xl shadow-indigo-900/40 hover:bg-slate-50' 
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}

              >
                {plan.button}
                </button>
            </div>

          ))}

      </div>

      </div>

    </section>
  );
  
};

export default PricingSection;
