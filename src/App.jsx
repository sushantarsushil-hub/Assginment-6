import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ProductCard from './components/ProductCard';
import CartView from './components/CartView';
import StepsSection from './components/StepsSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import productsData from './data/products.json';

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('digitools_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });


  const [activeSection, setActiveSection] = useState('products'); 

  
  useEffect(() => {

    localStorage.setItem('digitools_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    if (cartItems.find(item => item.id === product.id)) {
      toast.info(`${product.name} is already in your cart!`, {
        position: "top-right",
        autoClose: 2000,

      });

      return;

    }

    setCartItems([...cartItems, product]);

    toast.success(`${product.name} added to cart!`, {
      position: "top-right",

      autoClose: 2000,
    });

  };

  const handleRemoveFromCart = (productId) => {

    const removedItem = cartItems.find(item => item.id === productId);
    setCartItems(cartItems.filter(item => item.id !== productId));
    if (removedItem) {

      toast.error(`${removedItem.name} removed from cart.`, {
        position: "top-right",

        autoClose: 2000,
      });

    }

  };

  const handleCheckout = () => {
    setCartItems([]);

    setActiveSection('products');
    toast.success("Order placed successfully! Thank you for your purchase.", {
      position: "top-center",

      autoClose: 5000,

    });
  };

  const isProductInCart = (productId) => {

    return cartItems.some(item => item.id === productId);

  };

  return (

    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      <ToastContainer />
      <Navbar 
        cartCount={cartItems.length} 
        onCartClick={() => setActiveSection('cart')}

        onLogoClick={() => setActiveSection('products')}
      />

      <main>

        {activeSection === 'products' ? (
          <>
            <Hero onExploreClick={() => {
              const element = document.getElementById('products-section');
              element?.scrollIntoView({ behavior: 'smooth' });
            }} />
            <Stats />

            
  <section id="products-section" className="py-24 px-6 bg-slate-50">

              <div className="max-w-7xl mx-auto">

     <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">

                  <h2 className="text-3xl md:text-5xl font-black text-slate-900">Premium Digital Tools</h2>
                  <p className="text-slate-600 text-lg">Everything you need to streamline your operations and grow your business.</p>
                  
     <div className="flex justify-center gap-4 pt-8">
                    <button 
                      className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${
                        activeSection === 'products' 
                          ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
                          : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                      }`}
                      onClick={() => setActiveSection('products')}
                    >
                      Products
                    </button>


    <button className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all border-2 ${
                        activeSection === 'cart' 
                          ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-200' 
                          : 'border-slate-200 text-slate-600 hover:border-indigo-600 hover:text-indigo-600 bg-white'
                      }`}

                      onClick={() => setActiveSection('cart')}
                    >

                      Cart ({cartItems.length})
                    </button>
                  </div>

                </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {productsData.map(product => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      onAddToCart={handleAddToCart}
                      isAdded={isProductInCart(product.id)}
                    />


                  ))}


                </div>
              </div>
       </section>

            <StepsSection />
            <PricingSection />
          </>
        ) : (
          <div className="min-h-[70vh] bg-slate-50">


   <section className="py-16 px-6 text-center max-w-7xl mx-auto">

               <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Shopping Cart</h1>
        
        <div className="flex justify-center gap-4 mb-12">
                  <button 
                    className="px-8 py-2.5 rounded-full text-sm font-bold transition-all border-2 border-slate-200 text-slate-600 hover:border-indigo-600 hover:text-indigo-600 bg-white"
                    onClick={() => setActiveSection('products')}
                  >
                    Back to Products
                  </button>


     <div className="px-8 py-2.5 rounded-full text-sm font-bold bg-indigo-600 text-white shadow-lg shadow-indigo-200">
                    Cart ({cartItems.length})
                  </div>
                </div>
                <CartView 
                  items={cartItems} 
                  onRemove={handleRemoveFromCart} 
                  onCheckout={handleCheckout} 
                />

            </section>


          </div>
        )}


      </main>

      <Footer />

    </div>
    
  );
}

export default App;
