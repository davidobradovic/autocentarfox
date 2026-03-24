'use client';

import FooterArena from "@/components/Footer";
import Link from "next/link";

const articles = [
  {
    slug: "mclaren-aston-martin-u-ponudi",
    title: "McLaren i Aston Martin stigli u ponudu",
    date: "26 okt 2025",
    excerpt: "Arena Motors proširuje premium segment novim modelima visokih performansi.",
    image: "https://res.cloudinary.com/dxo3z5off/image/upload/w_1000/q_auto/f_auto/v1759824800/DSC02438_mywvji.jpg",
  },
  {
    slug: "porsche-lineup-2025",
    title: "Porsche lineup za 2025: šta je novo",
    date: "20 okt 2025",
    excerpt: "Pregled ključnih noviteta i modela koji će obilježiti narednu sezonu.",
    image: "https://res.cloudinary.com/dxo3z5off/image/upload/w_1000/q_auto/f_auto/v1759824802/DSC02594_fqe4ka.jpg",
  },
  {
    slug: "savjeti-za-kupovinu-polovnog-vozila",
    title: "Kako izabrati polovno premium vozilo",
    date: "15 okt 2025",
    excerpt: "Kontrolna lista koju naš tim koristi pri procjeni svakog vozila.",
    image: "https://res.cloudinary.com/dxo3z5off/image/upload/w_1000/q_auto/f_auto/v1759824792/DSC04098_ehlxcn.jpg",
  },
];

export default function JournalPage() {
  return (
    <div>
      <section className="border-b border-gray-200 bg-white">
        <div className="arena-container py-16 md:py-20">
          <p className="arena-eyebrow">Journal</p>
          <h1 className="arena-title">Aktuelnosti iz svijeta automobila</h1>
          <p className="arena-subtitle">
            Novosti iz salona, tržišni trendovi i praktični savjeti za sigurnu kupovinu premium vozila.
          </p>
        </div>
      </section>

      <section className="arena-section">
        <div className="arena-container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.slug} className="group arena-card overflow-hidden">
              <div className="aspect-[16/11] overflow-hidden bg-gray-100">
                <img src={article.image} alt={article.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wide text-gray-500">{article.date}</p>
                <h2 className="mt-3 text-xl font-semibold">{article.title}</h2>
                <p className="mt-3 text-sm leading-7 text-gray-600">{article.excerpt}</p>
                <div className="mt-5">
                  <Link href="/contact" className="arena-btn-secondary">Read more</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FooterArena />
    </div>
  );
}
