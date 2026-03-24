'use client';

import FooterArena from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-gray-200 bg-white">
        <div className="arena-container py-16 md:py-20">
          <p className="arena-eyebrow">About us</p>
          <h1 className="arena-title">Od 2004 gradimo povjerenje u kupovini vozila</h1>
          <p className="arena-subtitle">
            Arena Motors kombinuje iskustvo, kvalitet i transparentnost kako bi svaka kupovina automobila bila sigurna i jednostavna.
          </p>
        </div>
      </section>

      <section className="arena-section">
        <div className="arena-container grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold">Naša priča</h2>
            <p className="mt-5 leading-8 text-gray-700">
              Arena Motors je nastao sa idejom da kupcima premium vozila pruži jasan i profesionalan proces - bez skrivenih informacija. Svako vozilo prolazi tehničku provjeru, a naš tim je fokusiran na dugoročno povjerenje.
            </p>
            <p className="mt-4 leading-8 text-gray-700">
              Kroz godine rada razvili smo mrežu partnera za finansiranje, servis i podršku, kako biste na jednom mjestu imali sve što je potrebno za sigurnu kupovinu.
            </p>
          </div>
          <div className="arena-card overflow-hidden">
            <img
              src="https://res.cloudinary.com/dxo3z5off/image/upload/w_1200/q_auto/f_auto/v1759825449/DJI_0230_tqytfc.webp"
              alt="Arena Motors"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="arena-section bg-white">
        <div className="arena-container">
          <div className="mb-12 text-center">
            <p className="arena-eyebrow">Why choose us</p>
            <h2 className="arena-title">Šta nas izdvaja</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Transparentnost",
                text: "Potpune informacije o vozilu, istoriji i uslovima kupovine.",
              },
              {
                title: "Kvalitet",
                text: "Detaljno pregledana i provjerena vozila prije objave.",
              },
              {
                title: "Podrška",
                text: "Savjetovanje prije kupovine i asistencija nakon preuzimanja.",
              },
            ].map((item) => (
              <article key={item.title} className="arena-card p-7">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="arena-section">
        <div className="arena-container">
          <div className="mb-12 text-center">
            <p className="arena-eyebrow">Meet the Team</p>
            <h2 className="arena-title">Tim Arena Motors</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Dijana Tomić", role: "Direktor prodaje" },
              { name: "Saša Kutlača", role: "Prodajni savjetnik" },
              { name: "Nemanja Lubura", role: "Prodajni savjetnik" },
            ].map((person) => (
              <article key={person.name} className="arena-card p-6 text-center">
                <div className="mx-auto h-20 w-20 rounded-full bg-gray-100" />
                <h3 className="mt-4 text-lg font-semibold">{person.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{person.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="arena-section bg-white">
        <div className="arena-container">
          <div className="rounded-3xl bg-neutral-950 p-10 text-white">
            <p className="arena-eyebrow text-red-300">Visit us</p>
            <h2 className="mt-3 text-3xl font-semibold">Spremni za novo vozilo?</h2>
            <p className="mt-4 text-sm text-gray-300">Posjetite naš salon ili kontaktirajte tim za personalizovanu ponudu.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/all-vehicles" className="arena-btn-primary">Pogledaj vozila</Link>
              <Link href="/contact" className="arena-btn-secondary border-white/20 bg-transparent text-white hover:bg-white/10">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterArena />
    </div>
  );
}
