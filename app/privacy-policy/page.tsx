"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-slate-900 to-slate-950 z-0"></div>
        <div className="absolute top-0 right-0 w-125 h-125 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-75 h-75 bg-cyan-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
            <ScrollReveal>
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-md">
                    Privacy Policy
                </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
                <p className="text-blue-200 text-lg font-medium">
                    Last Updated: 2025-09-16
                </p>
            </ScrollReveal>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 px-4 md:px-12">
        <ScrollReveal>
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-16 text-slate-700 leading-relaxed space-y-8">
                
                {/* Introduction */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
                    <p>Welcome to the Privacy Policy of ZFUSION LLC ("we", "us", or "our"). This policy is designed to help you understand how we collect, use, disclose, and safeguard your personal information when you visit our website, use our services, or interact with our platform.</p>
                </div>

                {/* Information We Collect */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
                    <p className="mb-4">We may collect personal information directly from you, for example through a web form, during an online or in-person registration, while making a reservation, while setting up an account with us, when you contact us for customer support, or at events. Personal information we collect directly from you may include:</p>
                    <ul className="list-disc list-inside space-y-2 mb-6 ml-2 font-medium">
                        <li>Name</li>
                        <li>Address</li>
                        <li>Business Information</li>
                        <li>Phone Number</li>
                        <li>Email Address</li>
                    </ul>
                    
                    <p><span className="font-bold text-slate-900">Information collected from your device:</span> Our website may use tracking technologies such as cookies, web beacons, pixels, and other similar technologies to automatically collect certain information from your device, including for example your IP address, browser and operating system information, geographic location, referring website address, and other information about how you interact with the website. Our website may also use cookies to personalize your experience and enable certain features such as keeping track of items you put in your shopping cart. You may disable cookies in your web browser however parts of our website may not function properly. More information about blocking and deleting cookies is available at <a href="http://www.allaboutcookies.org" className="text-blue-600 hover:underline">http://www.allaboutcookies.org</a>. Our email campaigns may also use tracking technologies such as web beacons, pixels and other similar technologies to automatically collect certain information such as your IP address, browser type and version, and email engagement statistics.</p>
                </div>

                {/* How We Use Your Information */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
                    <p className="mb-4">We may use the personal information we collect for the following purposes:</p>
                    <ul className="list-disc list-inside space-y-2 ml-2">
                        <li>To provide and maintain our services to you.</li>
                        <li>To communicate with you about our programs, events, and initiatives.</li>
                        <li>To personalize your experience and improve our website.</li>
                        <li>To comply with legal obligations.</li>
                    </ul>
                </div>

                {/* Sharing Your Information */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Sharing Your Information</h2>
                    <p>We understand the importance of your privacy, and we do not sell your personal information to third parties. However, we may share your information with trusted partners and service providers who help us deliver our services effectively. These partners are obligated to handle your information securely and are prohibited from using your data for any other purpose.</p>
                </div>

                {/* SMS Compliance */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">SMS Compliance</h2>
                    <p className="mb-4">If you choose to provide us with your mobile phone number, we may use it to send you SMS messages related to our programs, events, or important updates. By providing your mobile number, you consent to receive SMS messages from us. You can opt-out of receiving SMS messages at any time by contacting us or replying STOP to any SMS message you receive from us.</p>
                    <p>Mobile information will not be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>
                </div>

                {/* Cookies and Tracking */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Cookies and Tracking</h2>
                    <p>We use cookies, web beacons, and similar technologies to collect information about your interactions with our platform. These technologies help us analyze trends, administer the website, track users' movements, and gather demographic information. You can control cookie preferences through your browser settings.</p>
                </div>

                {/* Security Measures */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Security Measures</h2>
                    <p>We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. Despite our best efforts, no method of transmission over the internet or electronic storage is completely secure. You are responsible for safeguarding your account information and using secure passwords.</p>
                </div>

                {/* Your Choices */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Choices</h2>
                    <p>You have the right to access, update, correct, and delete your personal information. You can also choose to unsubscribe from marketing communications or adjust your preferences. If you have any questions about your information, please contact us using the details provided below.</p>
                </div>

                {/* Changes to this Policy */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to this Policy</h2>
                    <p>We may update this policy to reflect changes in our practices or legal requirements. We encourage you to review this page periodically for any updates. Continued use of our services after changes to this policy will indicate your acceptance of those changes.</p>
                </div>

                {/* Sharing information consumer data */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Sharing information consumer data</h2>
                    <p>Mobile information will not be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>
                </div>

                {/* Contact Us */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
                    <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please feel free to contact us at <a href="mailto:support@zfusion.com" className="text-blue-600 font-bold hover:underline">support@zfusion.com</a></p>
                </div>
            </div>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}