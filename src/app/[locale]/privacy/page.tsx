import { Metadata } from "next";
import { generateLocalBusinessSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Privacy Policy | Jagwan Tour & Travels",
  description: "Privacy Policy for Jagwan Tour & Travels",
  robots: { index: false, follow: true }
};

const LAST_UPDATED = "March 2026";

export default function PrivacyPolicyPage() {
  const schema = generateLocalBusinessSchema();

  return (
    <article className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Header */}
      <header className="bg-slate-900 py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase italic">
            Privacy Policy
          </h1>
          <p className="text-slate-400 font-medium tracking-widest uppercase text-xs">
            Last Updated: {LAST_UPDATED}
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <div className="text-slate-600 text-lg md:text-xl leading-relaxed space-y-8">
          <p>
            At <strong className="text-slate-900">Jagwan Tour & Travels</strong>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us when using our website or booking our services.
          </p>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-12 mb-6 uppercase tracking-tight italic">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 md:pl-8 space-y-3 marker:text-green-500">
              <li>Fill out our booking inquiry forms (Name, Phone Number, Email, Travel Dates).</li>
              <li>Contact us via WhatsApp, email, or phone.</li>
              <li>Provide feedback or reviews regarding our services.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-12 mb-6 uppercase tracking-tight italic">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">
              The information we collect is used exclusively to:
            </p>
            <ul className="list-disc pl-6 md:pl-8 space-y-3 marker:text-green-500">
              <li>Process your booking requests and provide travel quotes.</li>
              <li>Communicate with you regarding your itinerary, driver details, and trip updates.</li>
              <li>Improve our services, website user experience, and customer support.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-12 mb-6 uppercase tracking-tight italic">
              3. Data Sharing and Security
            </h2>
            <p className="mb-4">
              We <strong className="text-slate-900">do not sell, rent, or trade</strong> your personal information to third parties. We may share necessary details (such as your name and phone number) only with our verified hotel partners or drivers strictly for the purpose of fulfilling your booked travel services.
            </p>
            <p>
              We implement standard security measures to protect your data from unauthorized access or disclosure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-12 mb-6 uppercase tracking-tight italic">
              4. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites (e.g., social media platforms or payment gateways). We are not responsible for the privacy practices or content of these external sites.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-12 mb-6 uppercase tracking-tight italic">
              5. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions or concerns about this Privacy Policy, please contact us:
            </p>
            <ul className="space-y-3">
              <li><strong className="text-slate-900">Email:</strong> <a href="mailto:jagwan1997@gmail.com" className="text-green-600 hover:text-green-700 transition-colors">jagwan1997@gmail.com</a></li>
              <li><strong className="text-slate-900">Address:</strong> Dehradun, Uttarakhand, India</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
