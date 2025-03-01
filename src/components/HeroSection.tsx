interface HeroSectionProps {
    title: string;
    subtitle: string;
  }
  
  export default function HeroSection({ title, subtitle }: HeroSectionProps) {
    return (
      <section className="p-6 bg-blue-500 text-white">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-lg">{subtitle}</p>
      </section>
    );
  }
  