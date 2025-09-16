import Navbar from "./components/nav/Navbar";
import Hero from "./components/hero/Hero";
import PerformanceStyles from "./components/performance/PerformanceStyles";
import PerformanceCard from "./components/performance/PerformanceCard";

function App() {
  return (
    <div className="bg-background text-white min-h-screen">
      <Navbar />
      <Hero />
      <PerformanceStyles />
      <PerformanceCard />
    </div>
  );
}

export default App;
