import { useState } from "react";

export default function Navbar() {
    const [active, setActive] = useState("Home");

    const links = ["Home", "About", "Gallery", "Our Work", "Booking"];

    return (
        <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <h1 className="text-white font-bold text-lg">LJUSA<span className="text-primary-blue">x</span>TODOS</h1>
                </div>

                {/* Links */}
                <ul className="hidden md:flex space-x-8">
                    {links.map((link) => (
                        <li key={link}>
                            <button
                                onClick={() => setActive(link)}
                                className={`text-sm font-medium transition ${active === link
                                        ? "text-white border-b-2 border-primary-blue pb-1"
                                        : "text-text-secondary hover:text-white"
                                    }`}
                            >
                                {link}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
