import { MapPin, Instagram, Facebook, Youtube, Music2 } from "lucide-react";

export default function AboutCard({ name, location, bio, specialties, socials, gradient }) {
  return (
    <div className="bg-background2 rounded-xl shadow-lg p-6 flex flex-col items-center text-center gap-4 
    hover:shadow-primary-blue/60 transition border border-gray-800 relative hover:translate-y-[-10px] duration-500">
      {/* Avatar placeholder */}
      <div
        className={`w-[150px] h-[150px] flex items-center justify-center rounded-full text-black font-bold text-4xl ${gradient}`}
      >
        {name.charAt(0)}
      </div>

      <h3 className="text-4xl font-heading text-white">{name}</h3>
      <p className="flex items-center gap-1 text-text-secondary text-md">
        <MapPin size={18} /> {location}
      </p>

      <p className="text-text-secondary font-body text-left">{bio}</p>

      {/* Specialties */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {specialties.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-2 text-sm rounded-full bg-primary-indigo text-white"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Socials */}
      <div className="flex justify-center gap-4 mt-6">
        {socials.instagram && (
          <a href={socials.instagram} target="/blank" className="hover:text-primary-blue duration-300">
            <Instagram size={24} />
          </a>
        )}
        {socials.facebook && (
          <a href={socials.facebook} target="/blank" className="hover:text-primary-cyan duration-300">
            <Facebook size={24} />
          </a>
        )}
        {socials.youtube && (
          <a href={socials.youtube} target="/blank" className="hover:text-primary-indigo duration-300">
            <Youtube size={24} />
          </a>
        )}
        {socials.soundcloud && (
          <a href={socials.soundcloud} target="/blank" className="hover:text-primary-cyan duration-300">
            <Music2 size={24} />
          </a>
        )}
      </div>
    </div>
  );
}

