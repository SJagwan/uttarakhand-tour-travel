"use client";

import { useState } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from 'next-intl';
import { Menu, X } from "lucide-react";

export default function Navbar({ locale }: { locale: string }) {
  const t = useTranslations('navbar');
  const common = useTranslations('common');
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path || pathname?.startsWith(`${path}/`);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm relative">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" locale={locale as any} onClick={() => setIsMobileMenuOpen(false)} className="flex flex-col group relative z-50">
          <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter uppercase italic group-hover:text-green-600 transition-colors leading-none">
            {t('logo').split(' ')[0]} <br />
            <span className="text-green-600 group-hover:text-slate-900 not-italic">{t('logo').split(' ').slice(1).join(' ')}</span>
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/tours" locale={locale as any} className={`text-xs font-black uppercase tracking-widest transition-colors ${isActive('/tours') ? 'text-green-600' : 'text-slate-600 hover:text-green-600'}`}>
            {common('packages')}
          </Link>
          <Link href="/destinations" locale={locale as any} className={`text-xs font-black uppercase tracking-widest transition-colors ${isActive('/destinations') ? 'text-green-600' : 'text-slate-600 hover:text-green-600'}`}>
            {t('links.destinations')}
          </Link>
          <Link href="/experience" locale={locale as any} className={`text-xs font-black uppercase tracking-widest transition-colors ${isActive('/experience') ? 'text-green-600' : 'text-slate-600 hover:text-green-600'}`}>
            {locale === 'hi' ? 'अनुभव' : 'Experience'}
          </Link>
          <Link href="/about" locale={locale as any} className={`text-xs font-black uppercase tracking-widest transition-colors ${isActive('/about') ? 'text-green-600' : 'text-slate-600 hover:text-green-600'}`}>
            {t('links.about')}
          </Link>
          
          {/* LANGUAGE SWITCHER */}
          <div className="flex gap-4 border-l border-slate-200 pl-10">
            <Link 
              href={pathname || "/"} 
              locale="en" 
              className={`text-[10px] font-black uppercase tracking-widest ${locale === 'en' ? 'text-green-600' : 'text-slate-500 hover:text-green-600 transition-colors'}`}
            >
              EN
            </Link>
            <Link 
              href={pathname || "/"} 
              locale="hi" 
              className={`text-[10px] font-black uppercase tracking-widest ${locale === 'hi' ? 'text-green-600' : 'text-slate-500 hover:text-green-600 transition-colors'}`}
            >
              HI
            </Link>
          </div>
        </div>

        {/* CTA & MOBILE TOGGLE */}
        <div className="flex items-center gap-2 md:gap-4 relative z-50">
          <Link 
            href="/contact" 
            locale={locale as any}
            className="flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-2.5 bg-green-600 text-white text-[10px] lg:text-xs font-black uppercase tracking-widest rounded-full hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
          >
            {t('links.booking')}
          </Link>
          <button 
            className="md:hidden text-slate-900 p-2 hover:bg-slate-100 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl flex flex-col p-6 gap-6 transition-all duration-300 ease-in-out origin-top ${isMobileMenuOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'}`}
      >
        <div className="flex flex-col gap-6">
          <Link 
            href="/tours" 
            locale={locale as any} 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-sm font-black uppercase tracking-widest ${isActive('/tours') ? 'text-green-600' : 'text-slate-900'}`}
          >
            {common('packages')}
          </Link>
          <Link 
            href="/destinations" 
            locale={locale as any} 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-sm font-black uppercase tracking-widest ${isActive('/destinations') ? 'text-green-600' : 'text-slate-900'}`}
          >
            {t('links.destinations')}
          </Link>
          <Link 
            href="/about" 
            locale={locale as any} 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-sm font-black uppercase tracking-widest ${isActive('/about') ? 'text-green-600' : 'text-slate-900'}`}
          >
            {t('links.about')}
          </Link>
          <Link 
            href="/contact" 
            locale={locale as any} 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-sm font-black uppercase tracking-widest ${isActive('/contact') ? 'text-green-600' : 'text-slate-900'}`}
          >
            {t('links.contact') || t('links.booking')}
          </Link>
        </div>
        
        {/* MOBILE LANGUAGE SWITCHER */}
        <div className="flex items-center gap-6 pt-6 border-t border-slate-100">
          <Link 
            href={pathname || "/"} 
            locale="en" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-sm font-black uppercase tracking-widest ${locale === 'en' ? 'text-green-600' : 'text-slate-500'}`}
          >
            English
          </Link>
          <div className="w-1 h-1 bg-slate-300 rounded-full" />
          <Link 
            href={pathname || "/"} 
            locale="hi" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-sm font-black uppercase tracking-widest ${locale === 'hi' ? 'text-green-600' : 'text-slate-500'}`}
          >
            हिंदी
          </Link>
        </div>
      </div>
    </nav>
  );
}
