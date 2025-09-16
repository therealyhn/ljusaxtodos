import { Instagram, Youtube, Music2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background pt-12 pb-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-10">
        {/* Logo & tagline */}
        <div>
          <h3 className="text-white font-heading text-2xl mb-2">LJUSA x TODOS</h3>
          <p className="text-text-secondary font-body text-sm">
            DJs • Producers • Performers
          </p>
        </div>

        {/* Socials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full md:w-2/3">
          {/* Ljusa */}
          <div>
            <h4 className="text-white font-heading mb-4">Ljusa</h4>
            <ul className="space-y-3 text-text-secondary font-body">
              <li>
                <a href="#" className="flex items-center justify-center gap-2 hover:text-primary-blue">
                  <Instagram size={16} /> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center gap-2 hover:text-primary-cyan">
                  <Music2 size={16} /> SoundCloud
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center gap-2 hover:text-primary-blue">
                  <Youtube size={16} /> YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Todos */}
          <div>
            <h4 className="text-white font-heading mb-4">Todos</h4>
            <ul className="space-y-3 text-text-secondary font-body">
              <li>
                <a href="#" className="flex items-center justify-center gap-2 hover:text-primary-blue">
                  <Instagram size={16} /> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center gap-2 hover:text-primary-cyan">
                  <Music2 size={16} /> SoundCloud
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center gap-2 hover:text-primary-blue">
                  <Youtube size={16} /> YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-700 w-full">
          <p className="text-text-secondary text-xs font-body mt-4">
            © {new Date().getFullYear()} LJUSA x TODOS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
