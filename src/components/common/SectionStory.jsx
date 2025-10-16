export default function SectionStory({ title, paragraphs = [] }) {
  return (
    <section className="py-10 text-center bg-background2">
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
        {title}
      </h2>
      <div className="max-w-3xl mx-auto text-text-secondary font-body mb-12">
        {paragraphs.map((p, i) => (
          <p key={i} className="mb-4">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
