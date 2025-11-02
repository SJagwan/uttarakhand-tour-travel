import BookingForm from "../components/home/BookingForm";
import Destinations from "../components/home/Destinations";
import Hero from "../components/home/Hero";
import WhyChooseUs from "../components/home/WhyChooseUs";
import useLanguageSync from "../hooks/useLanguageSync";

export default function Home() {
  useLanguageSync();

  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <WhyChooseUs />
      <Destinations />
      <BookingForm />
    </main>
  );
}
