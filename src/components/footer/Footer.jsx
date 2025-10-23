import { Instagram, Youtube, Music2, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background pt-8 pb-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center gap-6">

        {/* Logo & tagline */}
        <div>
          <h3 className="text-text-primary font-heading text-xl mb-1">
            LJUSA<span className="text-primary-indigo">x</span>TODOS
          </h3>
          <p className="text-text-secondary font-body text-xs">
            DJs<span className="text-primary-cyan"> • </span>Producers<span className="text-primary-cyan"> • </span>Performers
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-1/2 gap-4 md:gap-0">
          {/* LJUSA */}
          <div className="flex flex-col items-center gap-2">
            <h4 className="text-primary-blue font-heading text-sm">LJUSA</h4>
            <div className="flex items-center justify-center gap-4">
              <a href="https://www.instagram.com/jovanljusic_asdf/" target="/blank" className="text-text-secondary hover:text-primary-blue transition">
                <Instagram size={18} />
              </a>
              <a href="https://soundcloud.com/yhnsdmusic" target="/blank" className="text-text-secondary hover:text-primary-cyan transition">
                <Music2 size={18} />
              </a>
              <a href="https://www.youtube.com/@randomedmmixes2655" target="/blank" className="text-text-secondary hover:text-primary-indigo transition">
                <Youtube size={18} />
              </a>
              <a href="https://www.facebook.com/ljusaofficial/" target="/blank" className="text-text-secondary hover:text-primary-blue transition">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* TODOS */}
          <div className="flex flex-col items-center gap-2">
            <h4 className="text-primary-cyan font-heading text-sm">TODOS</h4>
            <div className="flex items-center justify-center gap-4">
              <a href="https://www.instagram.com/milostodos/" target="/blank" className="text-text-secondary hover:text-primary-blue transition">
                <Instagram size={18} />
              </a>
              <a href="https://soundcloud.com/todosofficial" target="/blank" className="text-text-secondary hover:text-primary-cyan transition">
                <Music2 size={18} />
              </a>
              <a href="https://www.youtube.com/@randomedmmixes2655" target="/blank" className="text-text-secondary hover:text-primary-indigo transition">
                <Youtube size={18} />
              </a>
              <a href="https://www.facebook.com/milostodos" target="/blank" className="text-text-secondary hover:text-primary-blue transition">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-primary-blue/40 w-full flex flex-col items-center gap-1">
          <p className="text-text-secondary text-[11px] font-body">
            © {new Date().getFullYear()} LJUSA x TODOS. All rights reserved.
          </p>
          <p className="text-text-secondary text-[11px] font-body">
            Built by{" "}
            <a
              href="https://jovanljusic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-cyan hover:underline"
            >
              Jovan Ljusic
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
