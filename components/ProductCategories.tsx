"use client";
import { useState } from 'react';
import { productCategories } from '@/app/data';
import { Users, Activity, Lightbulb, Heart, Stethoscope, Shield, ArrowRight } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

const icons: Record<string, any> = { User: Users, Activity, Lightbulb, Heart, Stethoscope, Shield };

export default function ProductCategories() {
  const [activeId, setActiveId] = useState(productCategories[0].id);
  const activeCategory = productCategories.find(c => c.id === activeId);
  const IconComponent = activeCategory ? icons[activeCategory.icon] : Users;

  return (
    <section id="categories" className="py-24 px-4 md:px-12 bg-white relative overflow-hidden">
        {/* Background blobs - Green/Teal */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-60"></div>

        <div className="container mx-auto relative z-10">
            <ScrollReveal className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900">Explore Categories</h2>
                <p className="text-slate-500 mt-4 text-lg">Specialized equipment for every healthcare need.</p>
            </ScrollReveal>

            <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
                {/* Navigation List */}
                <div className="lg:w-1/3 space-y-3">
                    {productCategories.map((cat, idx) => {
                        const CatIcon = icons[cat.icon];
                        const isActive = activeId === cat.id;
                        return (
                            <ScrollReveal key={cat.id} delay={idx * 50}>
                                <button
                                    onClick={() => setActiveId(cat.id)}
                                    className={`w-full p-4 rounded-xl text-left flex items-center gap-4 transition-all duration-300 group border ${
                                        isActive
                                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-600/30 scale-105' 
                                        : 'bg-white text-slate-600 hover:bg-slate-50 border-slate-100 hover:border-emerald-100'
                                    }`}
                                >
                                    <div className={`p-2.5 rounded-lg transition-colors ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-600'}`}>
                                        <CatIcon size={22} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className={`font-bold text-sm ${isActive ? 'text-white' : 'text-slate-800'}`}>{cat.name}</h4>
                                        <p className={`text-xs ${isActive ? 'text-emerald-100' : 'text-slate-400'}`}>{cat.subtitle}</p>
                                    </div>
                                    {isActive && <ArrowRight size={16} className="text-white animate-pulse" />}
                                </button>
                            </ScrollReveal>
                        )
                    })}
                </div>

                {/* Content Display Area */}
                <div className="lg:w-2/3">
                     <ScrollReveal delay={200} className="h-full">
                        <div className="h-full bg-linear-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-2xl shadow-slate-200/50 flex flex-col justify-center relative overflow-hidden">
                             <IconComponent size={300} className="absolute -right-12 -bottom-12 text-emerald-50 opacity-10 rotate-12" />
                             
                             <div className="relative z-10">
                                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                                    <IconComponent size={32} />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{activeCategory?.name}</h3>
                                <p className="text-slate-600 text-lg leading-relaxed mb-8">{activeCategory?.desc}</p>
                             </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    </section>
  );
}