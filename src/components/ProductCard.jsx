import { Check, ShoppingCart, PenTool, Layout, Search, Share2, Code, Cloud, Briefcase } from 'lucide-react';

const iconMap = {
  WritingIcon: PenTool,
  DesignIcon: Layout,
  SeoIcon: Search,
  SocialIcon: Share2,
  CodeIcon: Code,
  CloudIcon: Cloud
};

const colorMap = {

  popular: { bg: 'bg-indigo-50', text: 'text-indigo-600', badge: 'badge-primary' },

  new: { bg: 'bg-emerald-50', text: 'text-emerald-600', badge: 'badge-secondary' },

  'best-seller': { bg: 'bg-amber-50', text: 'text-amber-600', badge: 'badge-accent' }

};

const ProductCard = ({ product, onAddToCart, isAdded }) => {
  const IconComponent = iconMap[product.icon] || Briefcase;
  const colors = colorMap[product.tagType] || colorMap.popular;

  return (

    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">

      {product.tag && (
        <div className={`absolute top-4 right-4 badge ${colors.badge} font-bold py-3`}>
          {product.tag}

        </div>
      )}
      
  <div className={`w-14 h-14 ${colors.bg} rounded-xl mb-6 flex items-center justify-center ${colors.text} group-hover:scale-110 transition-transform duration-300`}>

        <IconComponent size={28} />

      </div>
      
  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors leading-tight">{product.name}</h3>

      <p className="text-slate-500 text-sm leading-relaxed mb-6 min-h-[40px]">
        {product.description}
      </p>
      
    <div className="text-3xl font-black mb-6 flex items-baseline gap-1 text-slate-900">
        ${product.price}<span className="text-sm font-normal text-slate-400">/{product.period === 'monthly' ? 'mo' : product.period === 'yearly' ? 'yr' : 'one-time'}</span>

      </div>
      
      <ul className="space-y-3 mb-8">

      {product.features.map((feature, index) => (

          <li key={index} className="flex items-center gap-3 text-sm text-slate-600">
        
        <div className="flex-shrink-0 w-4 h-4 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
              <Check size={10} strokeWidth={3} />
            </div>

            {feature}
          </li>

        ))}

      </ul>
      
      <button className={`w-full py-3.5 rounded-xl border-2 font-bold transition-all flex items-center justify-center gap-2 ${
          isAdded 
            ? 'bg-emerald-600 border-emerald-600 text-white pointer-events-none' 
            : 'border-slate-100 text-slate-700 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white shadow-sm'
        }`
      }
        onClick={() => onAddToCart(product)}
      >
      {isAdded ? (
          <>
            <Check size={18} />
            Added to Cart
          </>
        ) : (
          <>

            <ShoppingCart size={18} />
            Buy Now
          </>

        )}
  </button>
    </div>
    
  );
};

export default ProductCard;
