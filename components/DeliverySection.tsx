import { Truck, Award, Rocket, HeartHandshake } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

export default function DeliverySection() {
  return (
    <section id="delivery" className="py-24 px-4 md:px-12 bg-slate-50">
        <div className="container mx-auto space-y-16">
            
            {/* Delivery Hero Card */}
            <ScrollReveal>
                <div className="bg-linear-to-r from-emerald-600 to-emerald-800 rounded-3xl p-8 md:p-16 text-white shadow-2xl shadow-emerald-900/20 relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[16px_16px]"></div>
                    
                    <div className="flex-1 relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Fast, Reliable Nationwide Delivery</h2>
                        <p className="text-emerald-50 text-lg leading-relaxed max-w-xl">
                            No matter where you are in the U.S., ZFUSION LLC delivers right to your home or healthcare facility. We partner with top logistics providers to ensure on-time delivery, safe packaging, and tracking updates.
                        </p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-full backdrop-blur-md border border-white/20 relative z-10 animate-float">
                        <Truck size={80} strokeWidth={1.5} className="text-white" />
                    </div>
                </div>
            </ScrollReveal>

            {/* Features Grid */}
            <div className="text-center">
                <ScrollReveal>
                    <h3 className="text-3xl font-bold text-slate-900 mb-12">We’re more than a store—we’re your partner.</h3>
                </ScrollReveal>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Award, title: "Quality First", desc: "Trusted medical brands you can depend on." },
                        { icon: Rocket, title: "Nationwide Reach", desc: "From major cities to small towns, we cover it all." },
                        { icon: HeartHandshake, title: "Dedicated Support", desc: "Expert guidance before and after your purchase." }
                    ].map((item, idx) => (
                        <ScrollReveal key={idx} delay={idx * 100}>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center">
                                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon size={32} />
                                </div>
                                <h4 className="font-bold text-xl text-slate-900 mb-3">{item.title}</h4>
                                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}