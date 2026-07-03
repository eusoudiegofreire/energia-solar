"use client";

import { useId, useState } from "react";

const ECONOMY_RATE = 0.92;

function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
}

export default function SavingsArc() {
  const [bill, setBill] = useState(600);
  const monthlySavings = bill * ECONOMY_RATE;
  const yearlySavings = monthlySavings * 12;

  const r = 84;
  const cx = 100;
  const cy = 100;
  const arcLength = Math.PI * r;
  const filled = arcLength * ECONOMY_RATE;
  const gaugeId = useId();

  return (
    <div
      id="simulador"
      className="w-full max-w-md rounded-3xl border border-paper/15 bg-forest-night/40 p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur-md md:p-8"
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold/80">
        Simulador de economia
      </p>

      <div className="relative mx-auto mt-4 w-full max-w-[280px]">
        <svg viewBox="0 0 200 110" className="w-full overflow-visible">
          <defs>
            <linearGradient id={gaugeId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C1502F" />
              <stop offset="100%" stopColor="#F4A93C" />
            </linearGradient>
          </defs>
          <path
            d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
            fill="none"
            stroke="#2F5943"
            strokeOpacity={0.4}
            strokeWidth={14}
            strokeLinecap="round"
          />
          <path
            d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
            fill="none"
            stroke={`url(#${gaugeId})`}
            strokeWidth={14}
            strokeLinecap="round"
            strokeDasharray={arcLength}
            strokeDashoffset={arcLength - filled}
            style={{
              transition: "stroke-dashoffset 600ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        </svg>
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center">
          <span className="font-mono text-4xl font-semibold text-paper">
            {Math.round(ECONOMY_RATE * 100)}%
          </span>
          <span className="text-xs text-paper/60">de economia média</span>
        </div>
      </div>

      <label className="mt-6 block text-sm text-paper/70" htmlFor="bill-range">
        Sua conta de luz hoje:{" "}
        <span className="font-mono text-gold">{formatBRL(bill)}</span>
      </label>
      <input
        id="bill-range"
        type="range"
        min={150}
        max={3000}
        step={50}
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
        className="range-gold mt-3 w-full"
      />

      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-paper/10 pt-5">
        <div>
          <p className="text-xs text-paper/60">Economia por mês</p>
          <p className="font-mono text-xl font-semibold text-paper">
            {formatBRL(monthlySavings)}
          </p>
        </div>
        <div>
          <p className="text-xs text-paper/60">Economia por ano</p>
          <p className="font-mono text-xl font-semibold text-paper">
            {formatBRL(yearlySavings)}
          </p>
        </div>
      </div>

      <a
        href="#formulario"
        className="mt-6 block rounded-full bg-gold py-3 text-center text-sm font-semibold text-forest-night transition-transform duration-200 hover:scale-[1.02] active:scale-[0.97]"
      >
        Quero economizar assim
      </a>
    </div>
  );
}
