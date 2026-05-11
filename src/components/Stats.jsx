import { Star } from 'lucide-react';

const Stats = () => {
  return (

    <section className="bg-indigo-600 py-12 px-6">
      
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-indigo-400">
        <div className="py-4 md:py-0">

          <div className="text-4xl font-black text-white mb-1">50K+</div>
          <div className="text-indigo-100 font-medium">Active Users</div>
        </div>

        <div className="text-center py-4 md:py-0">

          <div className="text-4xl font-black text-white mb-1">200+</div>
          <div className="text-indigo-100 font-medium">Premium Tools</div>
        </div>

    <div className="text-center py-4 md:py-0">
          <div className="text-4xl font-black text-white mb-1">4.9</div>
          <div className="text-indigo-100 font-medium flex items-center justify-center gap-1">

            Rating <Star size={16} fill="currentColor" className="text-amber-400" />
         
          </div>
        </div>

      </div>
      
    </section>
  );
};

export default Stats;
