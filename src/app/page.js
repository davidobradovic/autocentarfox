'use client';

import FooterArena from "@/components/Footer";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [vehicles, setVehicles] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchInput.trim()) return;
    router.push(`/all-vehicles?q=${encodeURIComponent(searchInput.trim())}`);
  };

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const res = await axios.get("/api/proxy/api/search?attr=&attr_encoded=1&user_id=3704444&per_page=20");
        setVehicles(res.data?.data || []);
      } catch (err) {
        console.error("Greška prilikom dohvata vozila:", err);
      }
    };
    fetchVehicles();
  }, []);

  const featuredVehicles = vehicles.slice(0, 9);
  const partnerLogos = [
    { src: "https://logos-world.net/wp-content/uploads/2021/06/Skoda-logo.png", alt: "Skoda" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg", alt: "BMW" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Ford-Motor-Company-Logo.png", alt: "Ford" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg", alt: "Audi" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Renault_2021_Text.svg", alt: "Renault" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/KIA_logo3.svg/1280px-KIA_logo3.svg.png", alt: "Kia" },
  ];

  return (
    <div>
      <section className="relative overflow-hidden bg-neutral-950 text-white">
        <div className="absolute inset-0 bg-[url('/about-slika.png')] bg-cover bg-center opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-white/55 to-[#f5f4f0]" />
        <div className="fox-container relative py-28 md:py-36">
          <p className="fox-eyebrow text-red-300">Auto Centar FOX</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Vaš pouzdani auto salon za premium vozila u Istočnom Sarajevu
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-200 md:text-lg">
            Otkrijte provjerena vozila, transparentnu kupovinu i profesionalnu podršku kroz cijeli proces.
          </p>

          <form onSubmit={handleSearch} className="mt-10 backdrop-blur md:flex md:items-center md:gap-3">
            <label htmlFor="global-search" className="sr-only">Pretraga vozila</label>
            <input
              id="global-search"
              type="text"
              placeholder="Pretraži marku, model ili godište"
              className="w-full rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-300 md:flex-1"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit" className="fox-btn-primary mt-3 w-full md:mt-0 md:w-auto">
              Pretraži vozila
            </button>
          </form>

          <div className="mt-10 fox-marquee">
            <div className="fox-marquee-track">
              {[...partnerLogos, ...partnerLogos].map((brand, idx) => (
                <div key={`${brand.alt}-${idx}`} className="fox-partner-item">
                  <div className="flex h-20 items-center justify-center rounded-2xl px-4">
                    <img src={brand.src} alt={brand.alt} className="fox-partner-logo" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="fox-section">
        <div className="fox-container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="fox-eyebrow">Izdvojena vozila</p>
              <h2 className="fox-title">Izdvojena vozila</h2>
              <p className="fox-subtitle">Kolekcija vozila iz trenutne ponude, direktno povezana s vašim API podacima.</p>
            </div>
            <Link href="/all-vehicles" className="fox-btn-secondary">Pogledaj sva vozila</Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredVehicles.map((vehicle) => (
              <Link
              key={vehicle.id}
              href={`/vehicles/${vehicle.id}`}
              className="group fox-card overflow-hidden"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-gray-100">
                <img
                  src={vehicle.image?.replace("/sm/", "/lg/")}
                  alt={vehicle.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            
                {/* Badges */}
                <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
                    {vehicle.state === "used" ? "Polovno" : "Novo"}
                  </span>
            
                  {vehicle.has_discount && (
                    <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
                      Sniženo
                    </span>
                  )}
                </div>
            
                {/* Bottom labels */}
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                  {vehicle.special_labels?.map((label, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-800 backdrop-blur"
                    >
                      {label.value}
                      {label.unit ? ` ${label.unit}` : ""}
                    </span>
                  ))}
                </div>
              </div>
            
              <div className="p-5">
                <h3 className="line-clamp-2 text-lg font-semibold">
                  {vehicle.title}
                </h3>
            
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    {vehicle.has_discount ? (
                      <>
                        <p className="text-sm text-gray-500 line-through">
                          {vehicle.discounted_price}
                        </p>
            
                        <p className="text-xl font-bold text-red-600">
                          {vehicle.display_price}
                        </p>
                      </>
                    ) : (
                      <p className="text-xl font-semibold">
                        {vehicle.display_price}
                      </p>
                    )}
                  </div>
            
                </div>
              </div>
            </Link>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="fox-section bg-white">
        <div className="fox-container">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Personal Financing", text: "Fleksibilni planovi finansiranja prema vašim potrebama." },
              { title: "Fair Trade-In Value", text: "Poštena i brza procjena vašeg trenutnog vozila." },
              { title: "Modern Leasing Options", text: "Leasing modeli koji prate vaš stil vožnje." },
            ].map((item) => (
              <article key={item.title} className="fox-card p-7">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      <section className="fox-section">
        <div className="fox-container grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="fox-eyebrow">Since 2023</p>
            <h2 className="fox-title">Auto Centar FOX - Pronađite vozilo koje odgovara vašim potrebama</h2>
            <p className="fox-subtitle">

Auto Centar FOX je mjesto gdje kvalitet, povjerenje i profesionalna usluga dolaze na prvo mjesto. Nudimo pažljivo odabrana polovna vozila iz uvoza, uz mogućnost zamjene, rezervacije i stručne pomoći pri odabiru automobila. Posjetite nas u Bulozima i pronađite vozilo koje će ispuniti vaša očekivanja.
<br/>
<strong>Vaš najbolji izbor za sigurno i bezbrižno automobilističko iskustvo.</strong>

            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/about" className="fox-btn-primary">O nama</Link>
              <Link href="/contact" className="fox-btn-secondary">Posjetite nas</Link>
            </div>
          </div>
          <div className="fox-card overflow-hidden">
            <img
              src="/rr-acfox.png"
              alt="Auto Centar FOX showroom"
              className="h-full w-full object-cover aspect-[16:9]"
            />
          </div>
        </div>
      </section>

     

      {/* <section className="fox-section">
        <div className="fox-container">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="fox-eyebrow">From Our Journal</p>
              <h2 className="fox-title">Najnovije iz svijeta premium automobila</h2>
            </div>
            <Link href="/journal" className="fox-btn-secondary">Read Articles</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { title: "McLaren i Aston Martin stigli u salon", date: "26 okt 2025" },
              { title: "Novi Porsche lineup za 2025 godinu", date: "20 okt 2025" },
            ].map((article) => (
              <article key={article.title} className="fox-card p-6">
                <p className="text-xs uppercase tracking-wide text-gray-500">{article.date}</p>
                <h3 className="mt-3 text-xl font-semibold">{article.title}</h3>
                <p className="mt-3 text-sm text-gray-600">Ekskluzivne vijesti, tržišni trendovi i savjeti našeg prodajnog tima.</p>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      <section className="fox-section bg-white">
        <div className="fox-container">
          <div className="grid gap-8 rounded-3xl bg-neutral-950 p-10 text-white lg:grid-cols-2 lg:items-center">
            <div>
              <p className="fox-eyebrow text-red-300">Trebate pomoć danas?</p>
              <h2 className="mt-3 text-3xl font-semibold">Pronađimo idealno vozilo za vaš budžet i stil.</h2>
              <p className="mt-4 text-sm leading-7 text-gray-300">
                Razgovarajte sa našim timom o dostupnim modelima, opcijama finansiranja i testnoj vožnji.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="fox-btn-primary">Kontaktiraj nas</Link>
                <Link href="/all-vehicles" className="fox-btn-secondary border-white/20 bg-transparent text-white hover:bg-white/10">
                  Pregledaj vozila
                </Link>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden border-white/10">
              <img
                src="https://d4n0y8dshd77z.cloudfront.net/listings/71236126/lg/img-1759299791-9de5279fd1fd.jpg"
                alt="Premium vehicle"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <FooterArena />
    </div>
  );
}
