import { MapPin, Instagram, Twitter, Youtube } from "lucide-react";

export default function AboutCard({ name, location, bio, specialties, socials, gradient }) {
  return (
    <div className="bg-background rounded-xl shadow-lg p-6 flex flex-col items-center text-center gap-4 hover:shadow-primary-blue/60 transition border border-gray-800 relative">
      {/* Avatar placeholder */}
      <div
        className={`w-20 h-20 flex items-center justify-center rounded-full text-white font-heading text-2xl ${gradient}`}
      >
        {name.charAt(0)}
      </div>

      <h3 className="text-xl font-heading text-white">{name}</h3>
      <p className="flex items-center gap-1 text-text-secondary text-sm">
        <MapPin size={14} /> {location}
      </p>

      <p className="text-text-secondary font-body">{bio}</p>

      {/* Specialties */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {specialties.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-xs rounded-full bg-gray-800 text-white"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Socials */}
      <div className="flex justify-center gap-4 mt-6">
        {socials.instagram && (
          <a href={socials.instagram} className="hover:text-primary-blue">
            <Instagram size={18} />
          </a>
        )}
        {socials.twitter && (
          <a href={socials.twitter} className="hover:text-primary-cyan">
            <Twitter size={18} />
          </a>
        )}
        {socials.youtube && (
          <a href={socials.youtube} className="hover:text-primary-blue">
            <Youtube size={18} />
          </a>
        )}
      </div>
    </div>
  );
}
