const ROWS = [
  { label: "Sem energia solar", value: 100, amount: "R$ 21.600", tone: "clay" as const },
  { label: "Com Fritts Solar", value: 8, amount: "R$ 1.728", tone: "gold" as const },
];

export default function SavingsComparison() {
  return (
    <section id="economia" className="bg-forest py-24 text-paper md:py-32">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
              Comparativo de economia
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight font-medium md:text-5xl">
              Em 3 anos, o sistema se paga sozinho
            </h2>
            <p className="mt-6 max-w-md text-paper/70">
              Com uma conta média de R$ 1.800/ano projetada em 12x, a economia
              acumulada em 25 anos pode passar de{" "}
              <span className="font-mono text-gold">R$ 490.000</span> — considerando
              apenas a correção da tarifa de energia nos últimos anos.
            </p>
          </div>

          <div className="rounded-3xl border border-paper/10 bg-forest-night/50 p-8">
            <p className="text-sm text-paper/60">Conta de luz — 12 meses</p>
            <div className="mt-6 space-y-6">
              {ROWS.map((row) => (
                <div key={row.label}>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm text-paper/80">{row.label}</span>
                    <span className="font-mono text-lg font-semibold text-paper">
                      {row.amount}
                    </span>
                  </div>
                  <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-paper/10">
                    <div
                      className={
                        "h-full rounded-full " +
                        (row.tone === "clay" ? "bg-clay" : "bg-gold")
                      }
                      style={{ width: `${row.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 border-t border-paper/10 pt-6 text-sm text-paper/60">
              Economia média de{" "}
              <span className="font-mono text-gold">92%</span> na conta de
              energia a partir do primeiro mês.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
