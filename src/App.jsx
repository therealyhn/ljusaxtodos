import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import Gallery from "./pages/Gallery";
// import OurWork from "./pages/OurWork";
// import Booking from "./pages/Booking";

function App() {
  return (
    <div className="bg-background text-white min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/gallery" element={<Gallery />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/booking" element={<Booking />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
