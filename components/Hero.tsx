"use client";

import { useRef } from "react";
import Image from "next/image";
import Header from "./Header";
import SavingsArc from "./SavingsArc";
import { useScrollVar } from "@/lib/useScrollVar";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useScrollVar(heroRef, heroRef, endRef, "--p");

  return (
    <section
      id="topo"
      ref={heroRef}
      className="relative isolate min-h-[100dvh] overflow-hidden bg-forest-night md:min-h-screen"
      style={{ "--p": 0 } as React.CSSProperties}
    >
      <div ref={endRef} aria-hidden className="absolute bottom-0 h-px w-full" />

      <div className="hero-sky-night absolute inset-0" aria-hidden />
      <div className="hero-sky-day absolute inset-0" aria-hidden />

      <div className="hero-sun-glow" aria-hidden />

      <div className="hero-panel" aria-hidden>
        <Image
          src="/assets/sun-panel.png"
          alt=""
          fill
          sizes="(max-width: 767px) 92vw, 640px"
          className="object-contain object-bottom"
          priority
        />
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-forest-night via-forest-night/75 to-transparent"
        aria-hidden
      />

      <Header />

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-end gap-10 px-6 pb-16 pt-32 md:min-h-screen md:flex-row md:items-center md:justify-between md:gap-8 md:pb-24">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
            Ji-Paraná · RO
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.05] font-medium text-paper md:text-6xl">
            O sol já paga sua conta de luz.{" "}
            <em className="font-normal text-gold not-italic italic">
              Só falta captar.
            </em>
          </h1>
          <p className="mt-6 max-w-md text-lg text-paper/75">
            Projeto, instalação e homologação de energia solar residencial e
            comercial em Ji-Paraná — reduza sua conta em até 95% com um
            sistema feito sob medida para sua casa.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#simulador"
              className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-forest-night transition-transform duration-200 hover:scale-[1.03] active:scale-95"
            >
              Simular minha economia
            </a>
            <a
              href="#como-funciona"
              className="rounded-full border border-paper/30 px-7 py-3.5 text-sm font-semibold text-paper transition-colors duration-200 hover:border-gold hover:text-gold"
            >
              Como funciona
            </a>
          </div>
        </div>

        <SavingsArc />
      </div>
    </section>
  );
}
