import Navbar from "./components/nav/Navbar";
import Hero from "./components/hero/Hero";
import PerformanceStyles from "./components/performance/PerformanceStyles";
import PerformanceCard from "./components/performance/PerformanceCard";
import CTA from "./components/cta/CTA";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="bg-background text-white min-h-screen">
      <Navbar />
      <Hero />
      <PerformanceStyles />
      <PerformanceCard />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
