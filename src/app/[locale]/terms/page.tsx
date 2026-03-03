import { Metadata } from "next";
import { generateLocalBusinessSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Terms of Service | Jagwan Tour & Travels",
  description: "Terms of Service for Jagwan Tour & Travels",
  robots: { index: false, follow: true }
};

const LAST_UPDATED = "March 2026";

export default function TermsOfServicePage() {
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
            Terms of Service
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
            Welcome to <strong className="text-slate-900">Jagwan Tour & Travels</strong>. By booking a tour, vehicle, or interacting with our services, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-12 mb-6 uppercase tracking-tight italic">
              1. Booking & Payments
            </h2>
            <ul className="list-disc pl-6 md:pl-8 space-y-3 marker:text-green-500">
              <li>A booking is only confirmed once an advance payment (as communicated by our team) is received.</li>
              <li>The remaining balance must be paid prior to the commencement of the journey or as mutually agreed in writing.</li>
              <li>All quotes provided are based on current rates and availability. We reserve the right to amend prices if external costs (like fuel or taxes) increase significantly before confirmation.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-12 mb-6 uppercase tracking-tight italic">
              2. Cancellation & Refund Policy
            </h2>
            <p className="mb-4">We understand that plans can change. Our standard cancellation policy is as follows:</p>
            <ul className="list-disc pl-6 md:pl-8 space-y-3 marker:text-green-500">
              <li><strong className="text-slate-900">Before 30 days of travel:</strong> 100% Refund of the advance deposit.</li>
              <li><strong className="text-slate-900">15 - 30 days of travel:</strong> 50% Refund of the advance deposit.</li>
              <li><strong className="text-slate-900">Less than 15 days of travel:</strong> No Refund.</li>
            </ul>
            <p className="mt-4 text-sm md:text-base italic text-slate-500 bg-slate-50 p-4 rounded-xl border border-slate-100">
              Note: If hotels have specific, stricter cancellation policies for peak seasons (like Char Dham Yatra), those policies will supersede our standard terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-12 mb-6 uppercase tracking-tight italic">
              3. Itinerary Changes & Unforeseen Events (Natural Disasters)
            </h2>
            <p className="mb-4">
              Travel in hilly regions like Uttarakhand is highly subject to unpredictable weather conditions, road closures, landslides, and government regulations.
            </p>
            <ul className="list-disc pl-6 md:pl-8 space-y-3 marker:text-green-500">
              <li>We reserve the right to alter the itinerary for your safety in the event of roadblocks or bad weather.</li>
              <li><strong className="text-red-500 font-bold">Important:</strong> If the trip is delayed or extended due to natural disasters, landslides, roadblocks, or any other unforeseen circumstances, <strong>all additional expenses (including extra hotel nights, food, and transport delays) must be entirely handled and paid by the customer.</strong> Jagwan Tour & Travels will not be responsible for bearing these extra costs.</li>
              <li>No refunds will be provided for missed sightseeing, skipped destinations, or shortened trips due to such acts of nature.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-12 mb-6 uppercase tracking-tight italic">
              4. Luggage and Belongings
            </h2>
            <p className="mb-4">
              Customers are responsible for their own luggage and personal belongings. Jagwan Tour & Travels is not liable for any loss, theft, or damage to personal items during the trip.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-12 mb-6 uppercase tracking-tight italic">
              5. Health and Fitness
            </h2>
            <p className="mb-4">
              High-altitude journeys (such as Kedarnath and Badrinath) require a certain level of physical fitness. It is the responsibility of the traveler to ensure they are medically fit for the journey. We strongly recommend consulting a doctor before traveling to high altitudes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-12 mb-6 uppercase tracking-tight italic">
              6. Contact Us
            </h2>
            <p className="mb-4">
              For any queries regarding these terms, please contact:
            </p>
            <ul className="space-y-3">
              <li><strong className="text-slate-900">Email:</strong> <a href="mailto:jagwan1997@gmail.com" className="text-green-600 hover:text-green-700 transition-colors">jagwan1997@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
