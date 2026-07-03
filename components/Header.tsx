import Image from "next/image";

const NAV_LINKS = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#economia", label: "Economia" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#atuacao", label: "Área de atuação" },
];

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#topo" className="flex items-center gap-3">
          <Image
            src="/assets/logo.jpg"
            alt="Fritts Solar"
            width={36}
            height={36}
            className="rounded-full"
            priority
          />
          <span className="font-display text-lg font-semibold tracking-tight text-paper">
            Fritts Solar
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-paper/80 transition-colors duration-200 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#simulador"
          className="hidden shrink-0 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-forest-night transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] sm:inline-block"
        >
          Simular economia
        </a>
      </div>
    </header>
  );
}
