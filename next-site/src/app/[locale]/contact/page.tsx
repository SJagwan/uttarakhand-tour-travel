import BookingWidget from "@/components/sections/BookingWidget";
import { Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic">
              Get in <span className="text-green-600">Touch</span>
            </h1>
            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-12 max-w-lg">
              Have questions about our tour packages or need a custom itinerary? 
              Our experts are ready to help you plan the perfect journey.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Email Us</p>
                  <a href="mailto:jagwan1997@gmail.com" className="text-xl font-black text-slate-900">jagwan1997@gmail.com</a>
                </div>
              </div>

              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Visit Us</p>
                  <p className="text-xl font-black text-slate-900 leading-tight">Dehradun, Uttarakhand, India</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <BookingWidget tourId="general-enquiry" tourTitle="General Enquiry" basePrice={0} />
          </div>
        </div>
      </div>
    </div>
  );
}
