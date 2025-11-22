import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import WhatsAppButton from "../components/common/WhatsAppButton";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <header>
        <Navbar />
      </header>

      <main className="flex-1">{children}</main>

      <footer>
        <Footer />
      </footer>
      <WhatsAppButton />
    </div>
  );
};

export default MainLayout;
