export default function SectionHeader({ title, subtitle }) {
  return (
    <section className="text-center pb-16 pt-24 bg-background2">
      <h2 className="text-3xl md:text-6xl font-heading font-bold py-6 bg-gradient-primary bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-xl font-body max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </section>
  );
}
