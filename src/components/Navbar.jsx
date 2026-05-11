import { Menu, ShoppingCart, User } from 'lucide-react';

const Navbar = ({ cartCount, onCartClick, onLogoClick }) => {

  return (

    <nav className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white sticky top-0 z-50">
  
  <div className="flex items-center gap-2 cursor-pointer group" 
        onClick={onLogoClick}
      >

        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold group-hover:bg-indigo-700 transition-colors">
          D
        </div>

 <span className="font-bold text-xl tracking-tight text-indigo-900">DigiTools</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">

        <a href="#products-section" className="hover:text-indigo-600 transition-colors">Products</a>
        <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
        <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
        <a href="#testimonials" className="hover:text-indigo-600 transition-colors">Testimonials</a>
        <a href="#faq" className="hover:text-indigo-600 transition-colors">FAQ</a>
      </div>
      
<div className="flex items-center gap-4">

        <button className="p-2 text-slate-600 hover:text-indigo-600 transition-colors md:hidden">
          <Menu size={20} />
        </button>

  <div className="flex items-center gap-4">
          <button 
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-indigo-600 relative"
            onClick={onCartClick}
          >

            <div className="indicator">

        <ShoppingCart size={20} />
              {cartCount > 0 && (

                <span className="badge badge-sm badge-primary indicator-item text-[10px]">{cartCount}</span>
             
        )}
            </div>

       <span className="hidden sm:inline">Cart</span>

          </button>

    <div className="hidden md:flex items-center gap-4 border-l border-slate-200 pl-4">

            <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-indigo-600">
              <User size={16} /> Login
            </button>

      <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-sm active:scale-95">
              Get Started
            </button>

          
          </div>

        </div>

      
      </div>
    </nav>
  );
};

export default Navbar;
