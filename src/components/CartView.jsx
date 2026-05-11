import { Trash2, ShoppingBag, ArrowRight, PenTool, Layout, Search, Share2, Code, Cloud, Briefcase } from 'lucide-react';

const iconMap = {
  WritingIcon: PenTool,
  DesignIcon: Layout,
  SeoIcon: Search,
  SocialIcon: Share2,
  CodeIcon: Code,
  CloudIcon: Cloud
};

const CartView = ({ items, onRemove, onCheckout }) => {

  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  if (items.length === 0) {

    return (

      <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">

        <div className="w-24 h-24 bg-slate-100 rounded-3xl flex items-center justify-center mb-6 shadow-inner">

          <ShoppingBag className="w-12 h-12 text-slate-400" />

        </div>

     <h3 className="text-3xl font-bold text-slate-900 mb-2">Your cart is empty</h3>
        <p className="text-slate-500 mb-8 max-w-sm text-lg leading-relaxed">Looks like you haven't added any digital tools to your cart yet. Explore our products to get started!</p>
      </div>

    );

  }

  return (

    <div className="max-w-4xl mx-auto py-12 px-4 animate-fade-in">
      <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden">


        <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">

          <h2 className="text-2xl font-bold text-slate-900">Your Cart ({items.length})</h2>

     <div className="text-indigo-600 font-bold bg-indigo-50 px-4 py-1 rounded-full text-sm">
            Total: ${totalPrice}
          </div>
        </div>
        
        <div className="divide-y divide-slate-100">

          {items.map((item, index) => {

            const IconComponent = iconMap[item.icon] || Briefcase;
            return (

      <div key={`${item.id}-${index}`} className="p-6 flex items-center justify-between hover:bg-slate-50/80 transition-all group">

       <div className="flex items-center gap-6">
            
             <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                    <IconComponent size={28} />

                  </div>
      
                  <div className="text-left">

                    <h4 className="font-bold text-slate-900 text-xl">{item.name}</h4>
                    <p className="text-sm text-slate-500 font-medium">${item.price} / {item.period === 'monthly' ? 'mo' : item.period === 'yearly' ? 'yr' : 'one-time'}</p>


        </div>
    </div>

     <button className="w-12 h-12 rounded-xl flex items-center justify-center text-rose-500 hover:bg-rose-50 hover:text-rose-600 transition-all border border-transparent hover:border-rose-100"
                  onClick={() => onRemove(item.id)}
                  title="Remove Item"
                >

        
                  <Trash2 size={20} />
        
        </button>

              </div>

            );
          })}

        </div>
        
  
  <div className="p-10 bg-slate-50/80 flex flex-col sm:flex-row items-center justify-between gap-8 border-t border-slate-100">


          <div className="text-center sm:text-left">


    <div className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Estimated Total</div>

            <div className="text-4xl font-black text-slate-900">${totalPrice}</div>

          </div>

    <button 
            className="w-full sm:w-auto px-10 py-4 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center gap-3 shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:scale-[1.02] active:scale-95 transition-all"
            onClick={onCheckout}
          >
            Proceed to Checkout
            <ArrowRight size={20} />

       </button>

        </div>
      </div>
    </div>

    
  );
};

export default CartView;
