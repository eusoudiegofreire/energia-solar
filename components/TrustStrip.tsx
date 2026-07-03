const ITEMS = [
  "Instalação certificada",
  "Homologação junto à concessionária",
  "Garantia de 25 anos nos módulos",
  "Monitoramento pelo app",
];

export default function TrustStrip() {
  return (
    <section className="relative z-10 border-y border-forest/10 bg-paper py-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 text-center">
        {ITEMS.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-clay" aria-hidden />
            <span className="font-mono text-xs tracking-wide text-forest/70 uppercase">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
