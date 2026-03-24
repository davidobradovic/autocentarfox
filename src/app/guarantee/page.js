'use client';

import FooterArena from "@/components/Footer";
import Link from "next/link";

export default function GuaranteePage() {
  return (
    <div>
      <section className="border-b border-gray-200 bg-white">
        <div className="arena-container py-16 md:py-20">
          <p className="arena-eyebrow">Guarantee</p>
          <h1 className="arena-title">Garancija kvaliteta</h1>
          <p className="arena-subtitle">Svako vozilo prolazi tehničku provjeru i dolazi sa jasno definisanim garancijskim uslovima.</p>
        </div>
      </section>

      <section className="arena-section">
        <div className="arena-container grid gap-6 md:grid-cols-3">
          {[
            { title: "Garancija na motor", text: "Pismena garancija na motor u trajanju do 6 mjeseci." },
            { title: "Garancija na mjenjač", text: "Pismena garancija na mjenjač u trajanju do 6 mjeseci." },
            { title: "Garancija kilometraže", text: "Dokumentovana i potvrđena kilometraža sa garancijom." },
          ].map((item) => (
            <article key={item.title} className="arena-card p-7">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="arena-section bg-white">
        <div className="arena-container rounded-3xl border border-gray-200 p-10">
          <h2 className="text-3xl font-semibold">Sigurna kupovina počinje ovdje</h2>
          <p className="mt-4 max-w-2xl text-sm text-gray-600">Kontaktirajte nas za detalje garancije na konkretno vozilo iz ponude.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/all-vehicles" className="arena-btn-primary">Pregledaj vozila</Link>
            <Link href="/contact" className="arena-btn-secondary">Kontakt</Link>
          </div>
        </div>
      </section>

      <FooterArena />
    </div>
  );
}
