import { CheckCircle2, Truck, DollarSign, Headset } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

export default function WhyChooseUs() {
  const features = [
    { icon: CheckCircle2, title: "Wide Selection", desc: "Top-tier durable medical equipment for every need." },
    { icon: Truck, title: "Fast Delivery", desc: "Reliable nationwide shipping to your doorstep." },
    { icon: DollarSign, title: "Affordable", desc: "Premium brands at competitive, transparent prices." },
    { icon: Headset, title: "Expert Support", desc: "U.S.-based team ready to guide your healthcare journey." },
  ];

  return (
    <section id="about" className="py-24 px-4 md:px-12 bg-white relative">
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                
                {/* Left Text */}
                <div className="lg:w-1/2 space-y-8">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                            Your Partner in <br />
                            <span className="text-blue-600">Health & Independence</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={100}>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                            <p>
                                At ZFUSION LLC MEDICAL SUPPLIES, we believe healthcare should be accessible, reliable, and affordable. We specialize in providing durable medical equipment (DME) that improves quality of life.
                            </p>
                            <p>
                                With nationwide shipping and exceptional service, we ensure every customer receives the care and equipment they need without hassle.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Right Cards Grid */}
                <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                    {features.map((feature, index) => (
                        <ScrollReveal key={index} delay={index * 100}>
                            <div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 transform hover:-translate-y-2">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    <feature.icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{feature.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}