'use client';

import FooterArena from "@/components/Footer";
import Link from "next/link";

export default function TradeInPage() {
  return (
    <div>
      <section className="border-b border-gray-200 bg-white">
        <div className="arena-container py-16 md:py-20">
          <p className="arena-eyebrow">Trade-In</p>
          <h1 className="arena-title">Staro za novo</h1>
          <p className="arena-subtitle">Donesite svoje vozilo, dobijte fer procjenu i pređite na noviji model kroz brz i transparentan proces.</p>
        </div>
      </section>

      <section className="arena-section">
        <div className="arena-container grid gap-6 md:grid-cols-3">
          <article className="arena-card p-6">
            <h2 className="text-xl font-semibold">1. Procjena vozila</h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">Naš tim radi tehnički i tržišni pregled kako bismo dali realnu vrijednost vašeg vozila.</p>
          </article>
          <article className="arena-card p-6">
            <h2 className="text-xl font-semibold">2. Ponuda doplate</h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">Na osnovu izabranog vozila definišemo jasnu doplatu bez skrivenih troškova.</p>
          </article>
          <article className="arena-card p-6">
            <h2 className="text-xl font-semibold">3. Preuzimanje novog auta</h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">Rješavamo administraciju i omogućavamo brz prelazak na novo vozilo.</p>
          </article>
        </div>
      </section>

      <section className="arena-section bg-white">
        <div className="arena-container rounded-3xl border border-gray-200 p-10">
          <h2 className="text-3xl font-semibold">Spremni za zamjenu vozila?</h2>
          <p className="mt-4 max-w-2xl text-sm text-gray-600">Pošaljite osnovne podatke i naš tim će pripremiti okvirnu procjenu prije dolaska u salon.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="arena-btn-primary">Zakaži procjenu</Link>
            <Link href="/all-vehicles" className="arena-btn-secondary">Pogledaj dostupna vozila</Link>
          </div>
        </div>
      </section>

      <FooterArena />
    </div>
  );
}
