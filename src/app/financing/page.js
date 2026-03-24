'use client';

import FooterArena from "@/components/Footer";
import Link from "next/link";

export default function FinancingPage() {
  return (
    <div>
      <section className="border-b border-gray-200 bg-white">
        <div className="arena-container py-16 md:py-20">
          <p className="arena-eyebrow">Financing</p>
          <h1 className="arena-title">Fleksibilne opcije finansiranja</h1>
          <p className="arena-subtitle">U saradnji sa provjerenim partnerima nudimo modele finansiranja prilagođene vašem budžetu.</p>
        </div>
      </section>

      <section className="arena-section">
        <div className="arena-container grid gap-6 md:grid-cols-3">
          {[
            { name: "Porsche Leasing", image: "https://www.porscheleasing.bg/imager/filesbulgaria/781259/PL_2023-06-21-085504_rvjq_895365e7bb7a51c39e1d249889138d6f.JPG" },
            { name: "Sparkasse Leasing", image: "https://cdn0.erstegroup.com/content/dam/at/ebv/www_s-leasing_at/logos/AT-sLeasing_Special_screen_logo_quadratisch_RGB.png" },
            { name: "Raiffeisen", image: "https://play-lh.googleusercontent.com/UcF6ild_J2_wcypgJRH47wLAHkGjZNfp7IlEzvrLmfWbfNFDsdfFpx6USRZ8ZgEkFQ=w3840-h2160-rw" },
          ].map((partner) => (
            <article key={partner.name} className="arena-card overflow-hidden">
              <div className="aspect-video bg-gray-100">
                <img src={partner.image} alt={partner.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <h2 className="text-lg font-semibold">{partner.name}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="arena-section bg-white">
        <div className="arena-container rounded-3xl bg-neutral-950 p-10 text-white">
          <h2 className="text-3xl font-semibold">Želite personalizovanu ponudu finansiranja?</h2>
          <p className="mt-4 max-w-2xl text-sm text-gray-300">Kontaktirajte nas i pripremićemo opcije kredita ili leasinga prema vozilu koje odaberete.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="arena-btn-primary">Kontaktiraj nas</Link>
            <Link href="/all-vehicles" className="arena-btn-secondary border-white/20 bg-transparent text-white hover:bg-white/10">
              Pregledaj vozila
            </Link>
          </div>
        </div>
      </section>

      <FooterArena />
    </div>
  );
}
