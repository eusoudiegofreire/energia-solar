const NEIGHBORHOODS = [
  "Centro",
  "Nova Brasília",
  "Jardim Presidencial",
  "Urupá",
  "Casa Preta",
  "JK",
  "Boa Vista",
  "Riachuelo",
  "Zona Sul",
];

export default function ServiceArea() {
  return (
    <section id="atuacao" className="relative z-10 bg-canopy py-24 text-paper md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 md:grid-cols-2 md:items-start">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
              Área de atuação
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight font-medium md:text-5xl">
              Atendemos Ji-Paraná e região
            </h2>
            <p className="mt-6 max-w-md text-paper/70">
              Nossa equipe técnica está baseada em Ji-Paraná e atende
              residências, comércios e propriedades rurais em toda a região —
              do orçamento à homologação final.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {NEIGHBORHOODS.map((n) => (
              <span
                key={n}
                className="rounded-full border border-paper/20 px-4 py-2 text-sm text-paper/85"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
