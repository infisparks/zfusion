import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-slate-900 to-slate-800 text-white pt-20 pb-10 px-4 md:px-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Brand */}
        <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-wider">ZFUSION LLC MEDICAL SUPPLIES</h2>
            <p className="text-xs text-blue-400 tracking-[0.2em] mt-1">WHERE COMFORT MEETS CARE</p>
        </div>

        <p className="text-slate-400 leading-relaxed max-w-3xl mb-10 text-lg font-light">
            Looking for affordable durable medical equipment in the United States? We offer a complete selection of wheelchairs, hospital beds, oxygen supplies, mobility aids, and more—all with nationwide delivery.
        </p>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 font-medium text-slate-300">
          <Link
            href="/#about"
            className="hover:text-white transition-colors relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/contact"
            className="hover:text-white transition-colors relative group"
          >
            Contact Us
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/privacy-policy"
            className="hover:text-white transition-colors relative group"
          >
            Privacy Policy
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/terms"
            className="hover:text-white transition-colors relative group"
          >
            Terms of Service
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Socials */}
        <div className="flex gap-6 mb-12">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <Icon size={18} />
                </a>
            ))}
        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
            <span>© 2025 ZFusion LLC Medical. All rights reserved.</span>
            <div className="flex gap-6">
                <span>support@zfusion.com</span>
                <span>555 REPUBLIC DR STE 320 PLANO TX 75074</span>
            </div>
        </div>
      </div>
    </footer>
  );
}