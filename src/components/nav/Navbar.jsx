import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Our Work", path: "/our-work" },
    { name: "Booking", path: "/booking" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-white font-bold text-lg">
            <span className="text-white">LJUSA</span>
            <span className="text-primary-cyan">x</span>
            <span className="text-white">TODOS</span>
          </h1>
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-8">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={() => setActive(link.path)}
                className={`text-md uppercase font-medium transition ${
                  active === link.path
                    ? "text-white border-b-2 border-primary-cyan pb-1"
                    : "text-text-secondary hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
