import AboutCard from "./AboutCard";

export default function AboutCards() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <AboutCard
          name="Ljusa"
          location="Based in Smederevo"
          bio="With a background in electronic music production and a keen ear for progressive house, Ljusa brings melodic depth and emotional resonance to every performance. Known for seamless transitions and crowd-reading abilities that create unforgettable moments on the dance floor."
          specialties={["Progressive House", "Melodic Techno", "Deep House", "Ambient"]}
          socials={{
            instagram: "https://www.instagram.com/jovanljusic_asdf/",
            soundcloud: "https://soundcloud.com/yhnsdmusic",
            youtube: "https://www.youtube.com/@randomedmmixes2655",
            facebook: "https://www.facebook.com/ljusaofficial/",
          }}
          gradient="bg-gradient-to-r from-primary-blue to-primary-cyan"
        />

        <AboutCard
          name="Todos"
          location="Based in Smederevo"
          bio="A master of high-energy sets and underground sounds, Todos specializes in creating raw, powerful experiences that move crowds. With expertise in mixing and an intuitive understanding of rhythm, every performance is a journey through the darker, more intense side of electronic music."
          specialties={["Techno", "Industrial", "Hard Techno", "Acid House"]}
          socials={{
            instagram: "https://www.instagram.com/milostodos/",
            soundcloud: "https://soundcloud.com/todosofficial",
            youtube: "https://www.youtube.com/@RelaxAndDeep",
            facebook: "https://www.facebook.com/milostodos/",
          }}
          gradient="bg-gradient-to-r from-primary-cyan to-purple-600"
        />
      </div>
    </section>
  );
}
