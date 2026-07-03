import Image from "next/image";
import { site } from "@/lib/site";

const LINKS = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#economia", label: "Economia" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#atuacao", label: "Área de atuação" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 bg-forest-night py-14 text-paper/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-start md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/logo.jpg"
            alt="Fritts Solar"
            width={32}
            height={32}
            className="rounded-full"
          />
          <div>
            <p className="font-display text-base font-medium text-paper">
              Fritts Solar
            </p>
            <p className="text-xs text-paper/50">
              {site.addressLocality} · {site.addressRegion}
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-gold">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="text-sm">
          <p>{site.phone}</p>
          <p>{site.email}</p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-paper/10 px-6 pt-6 text-xs text-paper/40">
        © {new Date().getFullYear()} Fritts Solar. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
