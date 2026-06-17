'use client';

import FooterArena from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-gray-200 bg-white">
        <div className="fox-container py-16 md:py-20">
          <p className="fox-eyebrow">About us</p>
          <h1 className="fox-title">Od 2024 gradimo povjerenje u kupovini vozila</h1>
          <p className="fox-subtitle">
            Auto Centar FOX kombinuje iskustvo, kvalitet i transparentnost kako bi svaka kupovina automobila bila sigurna i jednostavna.
          </p>
        </div>
      </section>

      <section className="fox-section">
        <div className="fox-container grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold">Naša priča</h2>
            <p className="mt-5 leading-8 text-gray-700">
            Dobro došli u Auto Centar FOX, auto centar koji već godinama gradi povjerenje svojih kupaca kroz kvalitetnu ponudu vozila i profesionalan pristup svakom klijentu.
                        </p>
            <p className="mt-4 leading-8 text-gray-700">
            Smješteni u Bulozima, na magistralnom putu Sarajevo – Pale, naš cilj je da kupcima ponudimo pažljivo odabrana vozila provjerenog kvaliteta, uz transparentnu i sigurnu kupovinu. U našoj ponudi nalaze se polovni automobili iz uvoza različitih marki i kategorija, prilagođeni različitim potrebama i budžetima.
            </p>
            
            <div>
            <p className="mt-4 leading-8 text-gray-700">
            Pored prodaje vozila, nudimo i: 
            </p>
            <ul>
              <li>
              1. Uvoz polovnih automobila po narudžbi
              </li>
              <li>
              2. Komisionu prodaju vozila
              </li>
              <li>
              3. Mogućnost zamjene staro za novo vozilo
              </li>
              <li>
              4. Rezervaciju vozila
              </li>
              <li>
              5. Pomoć pri registraciji i kompletnoj administraciji
              </li>
            </ul>
            </div>
            <p className="mt-4 leading-8 text-gray-700">
            Naš najveći uspjeh predstavljaju zadovoljni kupci koji nam iznova ukazuju povjerenje. Zato svakom kupcu pristupamo individualno, pružajući stručne savjete i kompletnu podršku tokom cijelog procesa kupovine.
            </p>
            <p className="mt-4 leading-8 font-bold text-gray-700">
            Auto Centar FOX – Vaš pouzdan partner pri izboru automobila.
            </p>
          </div>
          <div className="fox-card overflow-hidden">
            <img
              src="/about-slika.png"
              alt="Auto Centar FOX"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="fox-section bg-white">
        <div className="fox-container">
          <div className="mb-12 text-center">
            <p className="fox-eyebrow">Why choose us</p>
            <h2 className="fox-title">Šta nas izdvaja</h2>
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
              <article key={item.title} className="fox-card p-7">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="fox-section">
        <div className="fox-container">
          <div className="mb-12 text-center">
            <p className="fox-eyebrow">Meet the Team</p>
            <h2 className="fox-title">Tim Auto Centar FOX</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Dijana Tomić", role: "Direktor prodaje" },
              { name: "Saša Kutlača", role: "Prodajni savjetnik" },
              { name: "Nemanja Lubura", role: "Prodajni savjetnik" },
            ].map((person) => (
              <article key={person.name} className="fox-card p-6 text-center">
                <div className="mx-auto h-20 w-20 rounded-full bg-gray-100" />
                <h3 className="mt-4 text-lg font-semibold">{person.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{person.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      <section className="fox-section bg-white">
        <div className="fox-container">
          <div className="rounded-3xl bg-neutral-950 p-10 text-white">
            <p className="fox-eyebrow text-red-300">Visit us</p>
            <h2 className="mt-3 text-3xl font-semibold">Spremni za novo vozilo?</h2>
            <p className="mt-4 text-sm text-gray-300">Posjetite naš salon ili kontaktirajte tim za personalizovanu ponudu.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/all-vehicles" className="fox-btn-primary">Pogledaj vozila</Link>
              <Link href="/contact" className="fox-btn-secondary border-white/20 bg-transparent text-white hover:bg-white/10">
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
