import Button from "@/components/Button";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function Hero({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
}: HeroProps) {
  return (
    <section className="bg-indigo-700 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:py-24">
        <h1 className="text-3xl font-bold sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-indigo-100">{subtitle}</p>
        <div className="mt-8">
          <Button href={ctaHref} variant="light">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}