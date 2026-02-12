"use client";
import Link from 'next/link';
import { Phone, ShoppingCart, Menu, X, Trash2, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import { db } from '@/lib/firebase';
import { ref, push, serverTimestamp } from 'firebase/database';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items, isCartOpen, openCart, closeCart, increment, decrement, remove, clear } = useCart();

  const [quoteName, setQuoteName] = useState('');
  const [quoteEmail, setQuoteEmail] = useState('');
  const [quotePhone, setQuotePhone] = useState('');
  const [isSubmittingQuote, setIsSubmittingQuote] = useState(false);
  const [quoteError, setQuoteError] = useState<string | null>(null);
  const [quoteSuccess, setQuoteSuccess] = useState(false);
  const [showCallInfo, setShowCallInfo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when switching to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = ['About Us', 'Categories', 'Delivery', 'Contact Us'];

  const getHref = (item: string) =>
    item === 'Contact Us' ? '/contact' : `/#${item.toLowerCase().split(' ')[0]}`;

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'glass-nav h-23 shadow-lg' : 'bg-transparent h-20'
      }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* LOGO SECTION */}
        <Link href="/" className="flex items-center cursor-pointer">
            {/* Logo height controlled, navbar height fixed */}
          <img
            src="/logo.png"
            alt="ZFusion LLC Medical Supplies"
            className="h-42 w-auto object-contain"
          />
        </Link>

        {/* CENTER LINKS - DESKTOP */}
        <div className="hidden lg:flex items-center gap-8 text-base font-medium text-white/90">
          {navItems.map((item) => (
                <Link 
                    key={item} 
              href={getHref(item)}
                    className="relative py-1 hover:text-white transition-colors group"
                >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
            ))}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">
          {/* Phone Number - desktop only */}
            <div className="hidden xl:flex items-center gap-2 text-white font-medium">
                <Phone size={18} className="text-white" /> 
            <span className="tracking-wide">239-342-7733</span>
            </div>

          {/* Cart Button - desktop */}
          <button
            className="hidden md:inline-flex bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-2.5 px-6 rounded-md items-center gap-2 transition-transform transform hover:scale-105 shadow-lg shadow-yellow-400/20"
            onClick={() => (isCartOpen ? closeCart() : openCart())}
          >
                <ShoppingCart size={20} /> 
                <span>Cart</span>
            {items.length > 0 && (
              <span className="ml-2 inline-flex items-center justify-center rounded-full bg-slate-900 text-yellow-400 text-xs min-w-6 h-6 px-1">
                {items.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>

          {/* Cart Button - mobile & tablet (icon only) */}
          <button
            className="relative flex md:hidden items-center justify-center w-11 h-11 rounded-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 shadow-lg shadow-yellow-400/40 transition-transform hover:scale-105"
            onClick={() => (isCartOpen ? closeCart() : openCart())}
            aria-label="Open cart"
          >
            <ShoppingCart size={20} />
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center rounded-full bg-slate-900 text-yellow-400 text-[10px] min-w-[1.1rem] h-4 px-0.5 border border-yellow-300">
                {items.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
            </button>

            {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE / TABLET MENU */}
      <div
        className={`lg:hidden overflow-hidden bg-slate-900/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-6 pb-4 pt-2">
          <div className="flex flex-col gap-3 text-white/90 text-base font-medium">
            {navItems.map((item) => (
              <Link
                key={item}
                href={getHref(item)}
                onClick={handleNavClick}
                className="py-2 border-b border-white/10 last:border-b-0 flex justify-between items-center"
              >
                <span>{item}</span>
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CART SLIDE-OVER */}
      {isCartOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={closeCart}
          />
          <div className="fixed inset-y-0 right-0 w-full sm:w-110 sm:inset-y-4 sm:right-4 z-50 flex flex-col rounded-2xl glass-panel shadow-[0_18px_45px_rgba(15,23,42,0.28)]">
            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200/70">
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">
                  Quote Cart
                </p>
                <h2 className="text-lg font-semibold text-slate-900">
                  Get Your Best Price Quote
                </h2>
              </div>
              <button
                onClick={closeCart}
                className="p-1.5 rounded-full bg-white/70 text-slate-500 shadow-sm hover:bg-slate-100 hover:shadow-md transition-all duration-200"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* CONTENT SCROLL AREA */}
            <div className="scroll-area flex-1 overflow-y-auto px-6 py-5 space-y-5 bg-transparent">
              {items.length === 0 ? (
                <p className="text-sm text-slate-500">
                  Your quote cart is empty. Add products to request a custom quote.
                </p>
              ) : (
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-3 rounded-2xl bg-white/90 border border-slate-200/70 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-200 p-3"
                    >
                      <div className="w-16 h-16 rounded-xl bg-slate-100 overflow-hidden flex items-center justify-center shadow-inner">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-slate-900 truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-slate-500 line-clamp-2">
                          {item.desc}
                        </p>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-1.5 py-0.5">
                            <button
                              type="button"
                              className="px-2 py-1 text-xs text-slate-700 hover:bg-slate-100 rounded-full"
                              onClick={() => decrement(item.id)}
                            >
                              -
                            </button>
                            <span className="px-3 text-xs font-semibold text-slate-900">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              className="px-2 py-1 text-xs text-slate-700 hover:bg-slate-100 rounded-full"
                              onClick={() => increment(item.id)}
                            >
                              +
                            </button>
                          </div>
                          <button
                            type="button"
                            className="inline-flex items-center justify-center text-red-500 hover:text-red-600"
                            onClick={() => remove(item.id)}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {items.length > 0 && (
                <div className="mt-4 border-t border-slate-200 pt-4">
                  <p className="text-xs text-slate-500 mb-1">
                    Items in cart
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    {items.reduce((sum, item) => sum + item.quantity, 0)} total
                    products
                  </p>
                </div>
              )}

                <div className="mt-6 space-y-4 border-t border-slate-200 pt-4 bg-white/90 rounded-2xl px-4 pb-5 shadow-md">
                <h3 className="text-sm font-semibold text-slate-900">
                  Request a Price Quote
                </h3>
                <p className="text-xs text-slate-500">
                  Fill out the form below or call us for immediate assistance.
                  Our team will provide a competitive quote for the items in
                  your cart.
                </p>

                <form
                  className="space-y-4"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    if (items.length === 0) return;

                    setQuoteError(null);
                    setQuoteSuccess(false);
                    setIsSubmittingQuote(true);

                    try {
                      const quoteRef = ref(db, 'pricequote/pricequote');
                      await push(quoteRef, {
                        fullName: quoteName,
                        email: quoteEmail,
                        phone: quotePhone,
                        items: items.map((item) => ({
                          name: item.name,
                          desc: item.desc,
                          quantity: item.quantity,
                          image: item.image,
                        })),
                        createdAt: serverTimestamp(),
                        createdAtString: new Date().toLocaleString(),
                      });

                      setQuoteSuccess(true);
                      setQuoteName('');
                      setQuoteEmail('');
                      setQuotePhone('');
                      clear();
                    } catch (err) {
                      console.error('Error saving price quote:', err);
                      setQuoteError('Could not submit quote. Please try again.');
                    } finally {
                      setIsSubmittingQuote(false);
                    }
                  }}
                >
                  {/* Floating label input - Name */}
                  <div className="relative group">
                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                        <User size={16} />
                      </span>
                    </span>
                    <input
                      type="text"
                      required
                      value={quoteName}
                      onChange={(e) => setQuoteName(e.target.value)}
                      className="peer w-full rounded-lg border border-slate-200 bg-white/80 pl-14 pr-3 pt-4 pb-2 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                    />
                    <label className="pointer-events-none absolute left-14 top-2 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400 transition-all peer-focus:text-blue-600">
                      Full Name
                    </label>
                  </div>

                  {/* Floating label input - Email */}
                  <div className="relative group">
                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                        @
                      </span>
                    </span>
                    <input
                      type="email"
                      required
                      value={quoteEmail}
                      onChange={(e) => setQuoteEmail(e.target.value)}
                      className="peer w-full rounded-lg border border-slate-200 bg-white/80 pl-14 pr-3 pt-4 pb-2 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                    />
                    <label className="pointer-events-none absolute left-14 top-2 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400 transition-all peer-focus:text-blue-600">
                      Email Address
                    </label>
                  </div>

                  {/* Floating label input - Phone */}
                  <div className="relative group">
                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                        <Phone size={14} />
                      </span>
                    </span>
                    <input
                      type="tel"
                      required
                      value={quotePhone}
                      onChange={(e) => setQuotePhone(e.target.value)}
                      className="peer w-full rounded-lg border border-slate-200 bg-white/80 pl-14 pr-3 pt-4 pb-2 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                    />
                    <label className="pointer-events-none absolute left-14 top-2 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400 transition-all peer-focus:text-blue-600">
                      Phone Number 
                    </label>
                  </div>

                  {quoteError && (
                    <p className="text-xs rounded-full bg-red-50 text-red-600 px-3 py-1 inline-flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                      {quoteError}
                    </p>
                  )}
                  {quoteSuccess && (
                    <p className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      Quote request sent successfully
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmittingQuote || items.length === 0}
                    className="mt-2 w-full bg-linear-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 disabled:opacity-70 disabled:cursor-not-allowed text-white text-sm font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow-[0_12px_30px_rgba(37,99,235,0.55)] hover:scale-[1.01] transition-transform"
                  >
                    {isSubmittingQuote && (
                      <span className="h-4 w-4 rounded-full border-2 border-white/60 border-t-transparent animate-spin" />
                    )}
                    <span>
                      {isSubmittingQuote
                        ? 'Submitting Request...'
                        : 'Request Price Quotation'}
                    </span>
                  </button>
                </form>

                <div className="relative mt-4 pt-4 border-t border-slate-200 overflow-visible">
                  <p className="text-center text-xs text-slate-400 mb-3">OR</p>
                  <button
                    type="button"
                    onClick={() => setShowCallInfo((prev) => !prev)}
                    className="relative w-full inline-flex items-center justify-center gap-2 rounded-lg border border-blue-200 bg-blue-50 text-blue-700 text-sm font-semibold py-3 hover:bg-blue-100 transition-colors"
                  >
                    <Phone size={16} />
                    Call Us: 239-342-7733

                    {showCallInfo && (
                      <div className="absolute left-1/2 bottom-full mb-3 -translate-x-1/2 w-full rounded-2xl bg-white/95 border border-slate-200/80 shadow-[0_18px_40px_rgba(15,23,42,0.35)] text-left p-4 text-sm z-30">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-sm">
                              <Phone size={16} />
                            </div>
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                                Call for Pricing
                              </p>
                              <p className="mt-1 text-[13px] text-slate-700 leading-relaxed">
                                Please call our team at{' '}
                                <a
                                  href="tel:2393427733"
                                  className="font-semibold text-blue-600 hover:underline"
                                >
                                  239-342-7733
                                </a>{' '}
                                for real-time pricing and ordering support.
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowCallInfo(false);
                            }}
                            className="mt-0.5 text-slate-400 hover:text-slate-600"
                            aria-label="Close call info"
                          >
                            <X size={14} />
            </button>
        </div>
      </div>
                    )}
                  </button>

                  {showCallInfo && <div className="pointer-events-none h-0" />}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
