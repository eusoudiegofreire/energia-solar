const TESTIMONIALS = [
  {
    quote:
      "Minha conta de luz era o vilão do orçamento. Depois da instalação, caiu de R$ 780 para menos de R$ 90. A equipe cuidou de tudo, inclusive da papelada com a concessionária.",
    name: "Marta Ferreira",
    role: "Jardim Presidencial, Ji-Paraná",
  },
  {
    quote:
      "Fechei achando que ia demorar meses. Em três semanas o sistema já estava gerando energia. Hoje recomendo pra todo vizinho que reclama da conta.",
    name: "Deivid Almeida",
    role: "Nova Brasília, Ji-Paraná",
  },
  {
    quote:
      "Tenho comércio e a economia foi sentida já na primeira fatura. O acompanhamento pelo app me deixa tranquilo sobre o retorno do investimento.",
    name: "Rosana Klein",
    role: "Centro, Ji-Paraná",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative z-10 bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs tracking-[0.2em] text-clay uppercase">
          Depoimentos
        </p>
        <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight font-medium text-forest md:text-5xl">
          Quem já captou o próprio sol
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-3xl border border-forest/10 bg-white/60 p-7 shadow-[0_20px_60px_-35px_rgba(27,51,39,0.4)]"
            >
              <blockquote className="font-display text-lg leading-relaxed text-forest italic">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8">
                <p className="text-sm font-semibold text-forest">{t.name}</p>
                <p className="text-xs text-forest/55">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
