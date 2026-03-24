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
        const res = await axios.get("/api/proxy/api/search?attr=&attr_encoded=1&user_id=3300229&per_page=20");
        setVehicles(res.data?.data || []);
      } catch (err) {
        console.error("Greška prilikom dohvata vozila:", err);
      }
    };
    fetchVehicles();
  }, []);

  const featuredVehicles = vehicles.slice(0, 6);
  const partnerLogos = [
    { src: "https://companieslogo.com/img/orig/P911.DE-94013588.png?t=1744633652", alt: "Porsche" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg", alt: "BMW" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/500px-Mercedes-Logo.svg.png", alt: "Mercedes-Benz" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg", alt: "Audi" },
    { src: "https://i.logos-download.com/552/107-s1280-b2dde826595848951df5cacd7079e223.png/Lamborghini_Logo_2024-s1280.png", alt: "Lamborghini" },
  ];

  return (
    <div>
      <section className="relative overflow-hidden bg-neutral-950 text-white">
        <div className="absolute inset-0 bg-[url('https://d4n0y8dshd77z.cloudfront.net/listings/62511518/lg/img-1720436327-967ed8490c19.jpg')] bg-cover bg-center opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-white/55 to-[#f5f4f0]" />
        <div className="arena-container relative py-28 md:py-36">
          <p className="arena-eyebrow text-red-300">Arena Motors</p>
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
            <button type="submit" className="arena-btn-primary mt-3 w-full md:mt-0 md:w-auto">
              Pretraži vozila
            </button>
          </form>

          <div className="mt-10 arena-marquee">
            <div className="arena-marquee-track">
              {[...partnerLogos, ...partnerLogos].map((brand, idx) => (
                <div key={`${brand.alt}-${idx}`} className="arena-partner-item">
                  <div className="flex h-20 items-center justify-center rounded-2xl px-4">
                    <img src={brand.src} alt={brand.alt} className="arena-partner-logo" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="arena-section">
        <div className="arena-container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="arena-eyebrow">Izdvojena vozila</p>
              <h2 className="arena-title">Izdvojena vozila</h2>
              <p className="arena-subtitle">Kolekcija vozila iz trenutne ponude, direktno povezana s vašim API podacima.</p>
            </div>
            <Link href="/all-vehicles" className="arena-btn-secondary">Pogledaj sva vozila</Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredVehicles.map((vehicle) => (
              <Link key={vehicle.id} href={`/vehicles/${vehicle.id}`} className="group arena-card overflow-hidden">
                <div className="relative aspect-[16/11] overflow-hidden bg-gray-100">
                  <img
                    src={vehicle.image?.replace("/sm/", "/lg/")}
                    alt={vehicle.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
                    {vehicle.state === "used" ? "Polovno" : "Novo"}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="line-clamp-2 text-lg font-semibold">{vehicle.title}</h3>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-xl font-semibold">{vehicle.display_price}</p>
                    <span className="text-sm text-gray-500">Detalji</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="arena-section bg-white">
        <div className="arena-container">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Personal Financing", text: "Fleksibilni planovi finansiranja prema vašim potrebama." },
              { title: "Fair Trade-In Value", text: "Poštena i brza procjena vašeg trenutnog vozila." },
              { title: "Modern Leasing Options", text: "Leasing modeli koji prate vaš stil vožnje." },
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
        <div className="arena-container grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="arena-eyebrow">Since 2023</p>
            <h2 className="arena-title">Arena Motors redefiniše iskustvo kupovine automobila.</h2>
            <p className="arena-subtitle">
              Naš tim kombinuje stručnost, transparentnost i pažljivo odabranu ponudu vozila kako bismo isporučili vrhunsko iskustvo svakom klijentu.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/about" className="arena-btn-primary">O nama</Link>
              <Link href="/contact" className="arena-btn-secondary">Posjetite nas</Link>
            </div>
          </div>
          <div className="arena-card overflow-hidden">
            <img
              src="/arenainterior.webp"
              alt="Arena Motors showroom"
              className="h-full w-full object-cover aspect-square"
            />
          </div>
        </div>
      </section>

      <section className="arena-section bg-white">
        <div className="arena-container">
          <div className="mb-12 text-center">
            <p className="arena-eyebrow">Meet the Team</p>
            <h2 className="arena-title">Ljudi iza Arena Motors</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Dijana Tomić", role: "Direktor prodaje" },
              { name: "Saša Kutlača", role: "Prodajni savjetnik" },
              { name: "Nemanja Lubura", role: "Prodajni savjetnik" },
            ].map((member) => (
              <article key={member.name} className="arena-card p-6 text-center">
                <div className="mx-auto h-20 w-20 rounded-full bg-gray-100" />
                <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{member.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="arena-section">
        <div className="arena-container">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="arena-eyebrow">From Our Journal</p>
              <h2 className="arena-title">Najnovije iz svijeta premium automobila</h2>
            </div>
            <Link href="/journal" className="arena-btn-secondary">Read Articles</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { title: "McLaren i Aston Martin stigli u salon", date: "26 okt 2025" },
              { title: "Novi Porsche lineup za 2025 godinu", date: "20 okt 2025" },
            ].map((article) => (
              <article key={article.title} className="arena-card p-6">
                <p className="text-xs uppercase tracking-wide text-gray-500">{article.date}</p>
                <h3 className="mt-3 text-xl font-semibold">{article.title}</h3>
                <p className="mt-3 text-sm text-gray-600">Ekskluzivne vijesti, tržišni trendovi i savjeti našeg prodajnog tima.</p>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      <section className="arena-section bg-white">
        <div className="arena-container">
          <div className="grid gap-8 rounded-3xl bg-neutral-950 p-10 text-white lg:grid-cols-2 lg:items-center">
            <div>
              <p className="arena-eyebrow text-red-300">Trebate pomoć danas?</p>
              <h2 className="mt-3 text-3xl font-semibold">Pronađimo idealno vozilo za vaš budžet i stil.</h2>
              <p className="mt-4 text-sm leading-7 text-gray-300">
                Razgovarajte sa našim timom o dostupnim modelima, opcijama finansiranja i testnoj vožnji.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="arena-btn-primary">Kontaktiraj nas</Link>
                <Link href="/all-vehicles" className="arena-btn-secondary border-white/20 bg-transparent text-white hover:bg-white/10">
                  Pregledaj vozila
                </Link>
              </div>
            </div>
            <div className="arena-card overflow-hidden border-white/10">
              <img
                src="https://d4n0y8dshd77z.cloudfront.net/listings/70714043/lg/img-1757341847-fb7a7484ff48.jpg"
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
