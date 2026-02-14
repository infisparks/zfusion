"use client";
import { ShoppingCart, Check } from 'lucide-react';
import { featuredProducts } from '@/app/data';
import ScrollReveal from './ui/ScrollReveal';
import { useCart } from './CartContext';

export default function FeaturedProducts() {
  const { items, addItem } = useCart();

  return (
    <section id="featured" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-12">
            <ScrollReveal className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Featured Products</h2>
                <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full mb-6"></div>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                    Hand-picked professional grade equipment. Add items to your quote cart for competitive pricing.
                </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuredProducts.map((product, index) => {
                    const inCart = items.some((item) => item.name === product.name);
                    return (
                    <ScrollReveal key={product.id} delay={index * 50}>
                        <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:shadow-emerald-900/10 border border-slate-200 hover:border-emerald-200 overflow-hidden flex flex-col h-full transition-all duration-500 transform hover:-translate-y-1">
                            
                            <div className="h-64 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                                <img 
                                    src={`/products/${product.name.toLowerCase().replace(/ /g, '-')}.png`} 
                                    alt={product.name}
                                    className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500 z-10"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                        (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                    }}
                                />

                                <div className="absolute inset-0 items-center justify-center text-slate-400 font-medium z-0 hidden">
                                    {product.name}
                                </div>

                                {product.tag && (
                                     <span className="absolute top-4 right-4 bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md z-20">
                                        {product.tag}
                                     </span>
                                )}
                                
                                <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/5 transition-colors duration-300 z-0 pointer-events-none"></div>
                            </div>
                            
                            <div className="p-6 flex flex-col grow relative">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">{product.name}</h3>
                                <p className="text-sm text-slate-500 mb-6 line-clamp-2 leading-relaxed">{product.desc}</p>
                                
                                <div className="mt-auto space-y-4">
                                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                                        <h4 className="text-xs font-bold text-slate-700 uppercase mb-2 tracking-wide">Key Features:</h4>
                                        <ul className="text-xs text-slate-600 space-y-1.5">
                                            {product.features.slice(0, 2).map((f, i) => (
                                                <li key={i} className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <button
                                      type="button"
                                      onClick={() =>
                                        addItem({
                                          name: product.name,
                                          desc: product.desc,
                                        })
                                      }
                                      className={`w-full font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${
                                        inCart
                                          ? 'bg-emerald-600 text-white shadow-emerald-600/20'
                                          : 'bg-slate-900 text-white group-hover:bg-emerald-600 shadow-slate-900/10 group-hover:shadow-emerald-600/20'
                                      }`}
                                    >
                                      {inCart ? (
                                        <>
                                          <Check size={18} />
                                          <span>Added to Quote Cart</span>
                                        </>
                                      ) : (
                                        <>
                                          <ShoppingCart size={18} />
                                          <span>Add to Quote Cart</span>
                                        </>
                                      )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                )})}
            </div>
        </div>
    </section>
  );
}