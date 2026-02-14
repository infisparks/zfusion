import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20">
      
      {/* 1️⃣ MAIN BACKGROUND: Soft Professional Green Gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(105deg,#059669_0%,#34d399_100%)] z-0"></div>
      
      {/* 2️⃣ CENTER GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* 3️⃣ ABSTRACT CURVES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute -right-[10%] top-[10%] w-200 h-200 rounded-full border border-white/10 opacity-60"></div>
         <div className="absolute -right-[5%] top-[20%] w-150 h-150 rounded-full border border-white/5 opacity-40"></div>
         <div className="absolute right-[10%] top-[40%] w-75 h-75 rounded-full border-r border-t border-white/10 opacity-30 rotate-45"></div>
      </div>
      
      {/* 4️⃣ FLOATING PARTICLES */}
      <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-white/30 rounded-full blur-[1px] animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-emerald-100/40 rounded-full blur-[0px] animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white/20 rounded-full blur-[0px] animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-white/10 rounded-full blur-[2px] animate-pulse-soft"></div>

      {/* CONTENT */}
      <div className="z-10 max-w-5xl space-y-8 relative">
        <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-4 shadow-sm">
                <ShieldCheck size={16} className="text-emerald-50" />
                <span>Proudly Serving the Entire United States</span>
            </div>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white drop-shadow-md">
                Trusted Medical Supplies,<br />
                <span className="text-white opacity-90">Delivered Nationwide</span>
            </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
            <p className="text-lg md:text-xl text-emerald-50 max-w-2xl mx-auto leading-relaxed font-light">
                Experience healthcare excellence with ZFUSION LLC. We provide top-quality durable medical equipment and essential supplies—delivered straight to your doorstep with care.
            </p>
        </ScrollReveal>
        
        <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center mt-8">
                <Link href="/#featured" className="group bg-white text-emerald-700 hover:bg-emerald-50 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-xl shadow-emerald-900/10 hover:shadow-emerald-900/20 hover:-translate-y-1 flex items-center justify-center gap-2">
                    Shop Featured Products
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/#catalog" className="bg-emerald-800/30 hover:bg-emerald-800/40 text-white font-medium py-4 px-8 rounded-full text-lg transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40">
                    View Full Catalog
                </Link>
            </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-16 bg-linear-to-t from-white/10 to-transparent pointer-events-none"></div>
    </section>
  );
}