import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Media from "./pages/Gallery";
import Mashups from "./pages/Mashups";
import Booking from "./pages/Booking";

function App() {
  return (
    <div className="bg-background text-white min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/media" element={<Media />} />
          <Route path="/mashups" element={<Mashups />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
