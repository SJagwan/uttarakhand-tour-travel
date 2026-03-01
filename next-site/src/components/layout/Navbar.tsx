"use client";

import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from 'next-intl';
import { Menu, Phone, MapPin } from "lucide-react";

export default function Navbar({ locale }: { locale: string }) {
  const t = useTranslations('navbar');
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path || pathname?.startsWith(`${path}/`);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex flex-col group">
          <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter uppercase italic group-hover:text-green-600 transition-colors leading-none">
            Uttarakhand <br />
            <span className="text-green-600 group-hover:text-slate-900 not-italic">Tour & Travels</span>
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/tours" className={`text-xs font-black uppercase tracking-widest transition-colors ${isActive('/tours') ? 'text-green-600' : 'text-slate-600 hover:text-green-600'}`}>
            Tours
          </Link>
          <Link href="/destinations" className={`text-xs font-black uppercase tracking-widest transition-colors ${isActive('/destinations') ? 'text-green-600' : 'text-slate-600 hover:text-green-600'}`}>
            Destinations
          </Link>
          <Link href="/about" className={`text-xs font-black uppercase tracking-widest transition-colors ${isActive('/about') ? 'text-green-600' : 'text-slate-600 hover:text-green-600'}`}>
            About
          </Link>
          
          {/* LANGUAGE SWITCHER */}
          <div className="flex gap-4 border-l border-slate-200 pl-10">
            <Link 
              href={pathname || "/"} 
              locale="en" 
              className={`text-[10px] font-black uppercase tracking-widest ${locale === 'en' ? 'text-green-600' : 'text-slate-500'}`}
            >
              EN
            </Link>
            <Link 
              href={pathname || "/"} 
              locale="hi" 
              className={`text-[10px] font-black uppercase tracking-widest ${locale === 'hi' ? 'text-green-600' : 'text-slate-500'}`}
            >
              HI
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link 
            href="/contact" 
            className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-green-600 text-white text-xs font-black uppercase tracking-widest rounded-full hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
          >
            {t('links.booking')}
          </Link>
          <button className="md:hidden text-slate-900 p-2">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}
