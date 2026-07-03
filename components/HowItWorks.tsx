const STEPS = [
  {
    number: "01",
    title: "Simulação gratuita",
    description:
      "Você informa sua conta de luz e o endereço. Calculamos o sistema ideal para o seu consumo em minutos.",
  },
  {
    number: "02",
    title: "Projeto e proposta",
    description:
      "Nossa equipe técnica desenha o projeto sob medida e apresenta a proposta com prazos e valores fechados.",
  },
  {
    number: "03",
    title: "Instalação e homologação",
    description:
      "Instalamos os módulos e cuidamos de toda a burocracia junto à concessionária — você não precisa fazer nada.",
  },
  {
    number: "04",
    title: "Você economiza",
    description:
      "O sistema entra em operação e sua conta de luz cai já no primeiro ciclo. Acompanhe tudo pelo app.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative z-10 bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <p className="font-mono text-xs tracking-[0.2em] text-clay uppercase">
            Como funciona
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-medium text-forest md:text-5xl">
            Do simulador à energia acesa, sem complicação
          </h2>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.number} className="relative pr-4">
              <span className="font-display text-5xl font-light text-clay/30">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-xl font-medium text-forest">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-forest/65">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
