import { Link } from "@/i18n/routing";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer({ locale }: { locale: string }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-100 py-24 border-t border-slate-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        
        {/* BRAND */}
        <div className="space-y-6">
          <Link href="/" className="flex flex-col group">
            <span className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase italic group-hover:text-green-600 transition-colors leading-none">
              Uttarakhand <br />
              <span className="text-green-600 group-hover:text-white not-italic">Tour & Travels</span>
            </span>
          </Link>
          <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-xs">
            Your local expert for spiritual and adventure journeys across the divine land of Uttarakhand. Dedicated to comfort, safety, and authenticity.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-3 bg-slate-800 rounded-2xl hover:bg-green-600 transition-colors">
              <Instagram size={18} className="text-white" />
            </a>
            <a href="#" className="p-3 bg-slate-800 rounded-2xl hover:bg-green-600 transition-colors">
              <Facebook size={18} className="text-white" />
            </a>
            <a href="#" className="p-3 bg-slate-800 rounded-2xl hover:bg-green-600 transition-colors">
              <Youtube size={18} className="text-white" />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="space-y-8">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-green-600 italic">Quick Links</h3>
          <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-slate-400">
            <li><Link href="/tours" className="hover:text-white transition-colors">All Packages</Link></li>
            <li><Link href="/destinations" className="hover:text-white transition-colors">Destinations</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* TOP DESTINATIONS */}
        <div className="space-y-8">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-green-600 italic">Destinations</h3>
          <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-slate-400">
            <li><Link href="/destinations/kedarnath" className="hover:text-white transition-colors">Kedarnath</Link></li>
            <li><Link href="/destinations/badrinath" className="hover:text-white transition-colors">Badrinath</Link></li>
            <li><Link href="/destinations/mussoorie" className="hover:text-white transition-colors">Mussoorie</Link></li>
            <li><Link href="/destinations/nainital" className="hover:text-white transition-colors">Nainital</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="space-y-8">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-green-600 italic">Contact Info</h3>
          <ul className="space-y-6">
            <li className="flex gap-4 items-start">
              <MapPin size={20} className="text-green-600 shrink-0" />
              <p className="text-sm font-medium text-slate-400 leading-relaxed">Dehradun, Uttarakhand, India 248001</p>
            </li>
            <li className="flex gap-4 items-center">
              <Mail size={20} className="text-green-600 shrink-0" />
              <a href="mailto:jagwan1997@gmail.com" className="text-sm font-bold text-slate-400 hover:text-white transition-colors tracking-tight">jagwan1997@gmail.com</a>
            </li>
          </ul>
        </div>

      </div>
      
      <div className="container mx-auto px-4 mt-20 pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500" suppressHydrationWarning>
          © {currentYear} Uttarakhand Tour & Travels. All Rights Reserved.
        </p>
        <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest text-slate-500">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
