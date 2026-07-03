"use client";

const BENEFITS = [
  "Resposta em até 1 dia útil",
  "Projeto sem compromisso",
  "Financiamento facilitado",
  "Equipe local em Ji-Paraná",
];

export default function FinalCTA() {
  const energize = () => window.dispatchEvent(new Event("wire:energize"));

  return (
    <section id="formulario" className="relative z-10 bg-forest-night py-24 text-paper md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
              Fale com a Fritts Solar
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight font-medium md:text-5xl">
              Peça sua proposta e comece a economizar
            </h2>
            <p className="mt-6 max-w-md text-paper/70">
              Preencha seus dados abaixo. Um especialista entra em contato
              para confirmar sua simulação e agendar a visita técnica.
            </p>
            <ul className="mt-8 space-y-3">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm text-paper/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <form
            onFocus={energize}
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: substituir por endpoint de webhook real (Sistema de Tráfego + CRM)
            }}
            className="rounded-3xl border border-paper/10 bg-forest/40 p-8 backdrop-blur-md"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="text-xs text-paper/60">
                  Nome completo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Seu nome"
                  className="mt-2 w-full rounded-xl border border-paper/15 bg-forest-night/50 px-4 py-3 text-sm text-paper placeholder:text-paper/35 focus:border-gold focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className="text-xs text-paper/60">
                  WhatsApp
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  placeholder="(69) 90000-0000"
                  className="mt-2 w-full rounded-xl border border-paper/15 bg-forest-night/50 px-4 py-3 text-sm text-paper placeholder:text-paper/35 focus:border-gold focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="bill" className="text-xs text-paper/60">
                  Valor médio da conta de luz
                </label>
                <select
                  id="bill"
                  name="bill"
                  required
                  defaultValue=""
                  className="mt-2 w-full rounded-xl border border-paper/15 bg-forest-night/50 px-4 py-3 text-sm text-paper focus:border-gold focus:outline-none"
                >
                  <option value="" disabled>
                    Selecione uma faixa
                  </option>
                  <option value="ate-300">Até R$ 300</option>
                  <option value="300-700">R$ 300 a R$ 700</option>
                  <option value="700-1500">R$ 700 a R$ 1.500</option>
                  <option value="acima-1500">Acima de R$ 1.500</option>
                </select>
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-gold py-3.5 text-sm font-semibold text-forest-night transition-transform duration-200 hover:scale-[1.02] active:scale-[0.97]"
              >
                Quero minha proposta
              </button>
              <p className="text-center text-xs text-paper/40">
                Seus dados estão seguros e não serão compartilhados.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
