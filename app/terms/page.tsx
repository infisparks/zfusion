"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      {/* 1️⃣ HERO SECTION: Matches Contact & Privacy pages */}
      <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden bg-slate-900">
        {/* Deep Green Gradient Background */}
        <div className="absolute inset-0 bg-linear-to-br from-emerald-900 via-slate-900 to-slate-950 z-0"></div>
        
        {/* Animated/Blurry Background Shapes */}
        <div className="absolute top-0 right-0 w-125 h-125 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-75 h-75 bg-teal-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
            <ScrollReveal>
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-md">
                    Terms of Service
                </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
                <p className="text-emerald-200 text-lg font-medium tracking-wide">
                    Last Updated: 2025-09-16
                </p>
            </ScrollReveal>
        </div>
      </section>

      {/* 2️⃣ MAIN CONTENT SECTION */}
      <section className="py-16 px-4 md:px-12 relative">
        <ScrollReveal>
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-16 text-slate-700 leading-relaxed space-y-8">
                
                {/* Agreement Section */}
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Agreement</h2>
                    
                    <p className="mb-6 font-medium text-lg text-slate-800">
                        Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the website (the "Service") operated by ZFUSION LLC  ("us", "we", or "our").
                    </p>
                    
                    <p className="mb-6">
                        Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
                    </p>
                    
                    <p className="p-4 bg-slate-50 border-l-4 border-emerald-500 rounded-r-lg text-slate-600 italic">
                        By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
                    </p>
                </div>

            </div>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}