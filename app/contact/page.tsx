"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { db } from '@/lib/firebase';
import { ref, push, serverTimestamp } from 'firebase/database';

export default function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setError(null);

    try {
      const contactRef = ref(db, 'contact/message');
      await push(contactRef, {
        fullName,
        phone,
        email,
        message,
        createdAt: serverTimestamp(),
        createdAtString: new Date().toLocaleString(),
      });

      setIsSuccess(true);
      setFullName('');
      setPhone('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error('Error saving contact message:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      {/* 1️⃣ HEADER: Emerald/Slate Gradient */}
      <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-900 via-slate-900 to-slate-950 z-0"></div>
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-125 h-125 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-75 h-75 bg-teal-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <ScrollReveal>
                <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight drop-shadow-md">
                    Get In Touch
                </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
                <p className="text-emerald-100/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                    We're here to help! Our experienced team is ready to assist you with product questions, order support, and finding the right medical solutions.
                </p>
            </ScrollReveal>
        </div>
      </section>

      {/* 2️⃣ MAIN CONTENT SECTION */}
      <section className="py-20 px-4 md:px-12 relative">
        <div className="max-w-6xl mx-auto">
            <ScrollReveal>
                <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row border border-slate-100">
                    
                    {/* LEFT: Enhanced Contact Form */}
                    <div className="lg:w-3/5 p-8 md:p-12 lg:p-16">
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold text-slate-900 mb-3">Send Us a Message</h2>
                            <p className="text-slate-500">Fill out the form below and our team will get back to you within 24 hours.</p>
                        </div>
                        
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2 group">
                                    <label className="text-sm font-semibold text-slate-700 ml-1 group-focus-within:text-emerald-600 transition-colors">Full Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="John Doe"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        required
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 placeholder:text-slate-400" 
                                    />
                                </div>
                                <div className="space-y-2 group">
                                    <label className="text-sm font-semibold text-slate-700 ml-1 group-focus-within:text-emerald-600 transition-colors">Phone Number <span className="text-slate-400 font-normal text-xs">(Optional)</span></label>
                                    <input 
                                        type="text" 
                                        placeholder="(555) 123-4567"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 placeholder:text-slate-400" 
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 group">
                                <label className="text-sm font-semibold text-slate-700 ml-1 group-focus-within:text-emerald-600 transition-colors">Email Address</label>
                                <input 
                                    type="email" 
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 placeholder:text-slate-400" 
                                />
                            </div>

                            <div className="space-y-2 group">
                                <label className="text-sm font-semibold text-slate-700 ml-1 group-focus-within:text-emerald-600 transition-colors">Your Message <span className="text-slate-400 font-normal text-xs">(Optional)</span></label>
                                <textarea 
                                    placeholder="Tell us how we can help..." 
                                    rows={4}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 placeholder:text-slate-400 resize-none"
                                ></textarea>
                            </div>

                            <div className="flex items-start gap-3 bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                                <div className="pt-0.5">
                                    <input type="checkbox" className="w-4 h-4 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500" />
                                </div>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    Stay connected! By submitting this form, you agree to receive marketing text messages (such as promotions and cart reminders) from ZFUSION LLC at the number provided. Consent is not required for purchase. Message and data rates may apply, and frequency may vary. You can opt out anytime by replying STOP. For assistance, reply HELP. Read our <a href="/privacy-policy" className="text-emerald-600 font-bold hover:underline">Privacy Policy</a> and <a href="/terms" className="text-emerald-600 font-bold hover:underline">Terms</a> for more details.
                                </p>
                            </div>

                            {error && <p className="text-sm text-red-500">{error}</p>}
                            {isSuccess && (
                              <p className="flex items-center gap-2 text-sm text-emerald-600">
                                <CheckCircle2 size={16} /> Message sent successfully!
                              </p>
                            )}

                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="group w-full md:w-auto bg-linear-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                              <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
                              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>

                    {/* RIGHT: Modern Info Panel - Green Theme */}
                    <div className="lg:w-2/5 bg-linear-to-br from-emerald-600 to-emerald-800 text-white p-8 md:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                Contact Information
                                <div className="h-px bg-white/30 flex-1"></div>
                            </h3>
                            
                            <div className="space-y-8">
                                {[
                                    { icon: Phone, title: "Phone Number", val: "239-342-7733", sub: "Mon-Fri 8am-6pm" },
                                    { icon: Mail, title: "Email Address", val: "support@zfusionllc.com", sub: "Online support 24/7" },
                                    { icon: MapPin, title: "Our Location", val: "30 N Gould St 39479, Sheridan, WY 82801", sub: "Visit us or send mail" },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-5 group">
                                        <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-emerald-600 transition-all duration-300 shadow-lg">
                                            <item.icon size={22} />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-emerald-100 text-sm mb-1">{item.title}</p>
                                            <p className="font-bold text-lg leading-tight">{item.val}</p>
                                            <p className="text-xs text-emerald-200 mt-1 opacity-80">{item.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Hours Card */}
                        <div className="relative z-10 mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                            <div className="flex items-center gap-3 mb-4 text-teal-300">
                                <Clock size={20} />
                                <span className="font-bold uppercase tracking-wider text-xs">Business Hours (EST)</span>
                            </div>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between border-b border-white/10 pb-2">
                                    <span>Monday - Friday</span>
                                    <span className="font-bold">8:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between pt-1">
                                    <span>Saturday</span>
                                    <span className="font-bold">9:00 AM - 4:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}