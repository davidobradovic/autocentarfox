'use client';

import FooterArena from "@/components/Footer";
import axios from "axios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";

function VehiclesPageContent() {
  const searchParams = useSearchParams();
  const [vehicles, setVehicles] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("relevant");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const qParam = searchParams.get("q");
    if (qParam) {
      setQuery(qParam);
      setSearchTerm(qParam);
    }
    setIsInitialized(true);
  }, [searchParams]);

  useEffect(() => {
    if (!isInitialized) return;
    const fetchVehicles = async () => {
      try {
        const res = await axios.get("/api/proxy/api/search", {
          params: {
            attr: "",
            attr_encoded: 1,
            user_id: 3300229,
            per_page: 24,
            page: currentPage,
            q: query,
          },
        });
        setVehicles(res.data);
      } catch (err) {
        console.error("Greška prilikom dohvata vozila:", err);
      }
    };
    fetchVehicles();
  }, [currentPage, query, isInitialized]);

  const parsedSortedVehicles = useMemo(() => {
    const list = vehicles?.data ? [...vehicles.data] : [];
    const parsePrice = (value) => Number((value || "").replace(/[^\d]/g, "")) || 0;

    if (sortBy === "price_asc") {
      list.sort((a, b) => parsePrice(a.display_price) - parsePrice(b.display_price));
    } else if (sortBy === "price_desc") {
      list.sort((a, b) => parsePrice(b.display_price) - parsePrice(a.display_price));
    } else if (sortBy === "newest") {
      list.sort((a, b) => (b.created_at || 0) - (a.created_at || 0));
    }
    return list;
  }, [vehicles, sortBy]);

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    setQuery(searchTerm.trim());
  };

  const totalPages = vehicles?.meta?.last_page || 1;

  const pageNumbers = useMemo(() => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i += 1) pages.push(i);
      return pages;
    }
    if (currentPage <= 3) return [1, 2, 3, 4, "...", totalPages];
    if (currentPage >= totalPages - 2) return [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
  }, [currentPage, totalPages]);

  return (
    <div>
      <section className="border-b border-gray-200 bg-white">
        <div className="arena-container py-16 md:py-20">
          <p className="arena-eyebrow">Vozila</p>
          <h1 className="arena-title">Naša Vozila</h1>
          <p className="arena-subtitle">
            {vehicles?.meta?.total
              ? `${vehicles.meta.total} rezultata`
              : "Pregledajte kompletnu ponudu Arena Motors vozila."}
          </p>

          <form onSubmit={handleSearch} className="mt-8 grid gap-3 rounded-2xl md:grid-cols-[1fr_auto_auto] md:items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Pretraži vozila..."
              className="w-full rounded-full border border-gray-200 bg-white px-4 py-3 text-sm outline-none"
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-full border border-gray-200 bg-white px-3 py-3 text-sm"
            >
              <option value="relevant">Most Relevant</option>
              <option value="price_asc">Cijena: niža prema višoj</option>
              <option value="price_desc">Cijena: viša prema nižoj</option>
              <option value="newest">Najnoviji oglasi</option>
            </select>
            <button type="submit" className="arena-btn-primary w-full md:w-auto">Search</button>
          </form>
        </div>
      </section>

      <section className="arena-section">
        <div className="arena-container">
          {parsedSortedVehicles.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {parsedSortedVehicles.map((vehicle) => (
                <Link key={vehicle.id} href={`/vehicles/${vehicle.id}`} className="group arena-card overflow-hidden">
                  <div className="relative aspect-[16/11] bg-gray-100">
                    <img
                      src={vehicle.image?.replace("/sm/", "/lg/")}
                      alt={vehicle.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-black/65 px-3 py-1 text-xs text-white">
                      {vehicle.state === "used" ? "Polovno" : "Novo"}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="line-clamp-2 text-lg font-semibold">{vehicle.title}</h3>
                    <p className="mt-3 text-xl font-semibold">{vehicle.display_price}</p>
                    <p className="mt-1 text-sm text-gray-500">{vehicle.category?.name || "Vehicle"}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="arena-card p-12 text-center">
              <h2 className="text-2xl font-semibold">Nema rezultata za traženi pojam</h2>
              <p className="mt-3 text-gray-600">Pokušajte drugačije ključne riječi ili resetujte pretragu.</p>
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="arena-btn-secondary disabled:opacity-50"
              >
                Prev
              </button>
              {pageNumbers.map((page, idx) =>
                page === "..." ? (
                  <span key={`ellipsis-${idx}`} className="px-2 text-gray-500">...</span>
                ) : (
                  <button
                    key={page}
                    onClick={() => {
                      setCurrentPage(page);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={currentPage === page ? "arena-btn-primary" : "arena-btn-secondary"}
                  >
                    {page}
                  </button>
                )
              )}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="arena-btn-secondary disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="arena-section bg-white">
        <div className="arena-container">
          <div className="rounded-3xl border border-gray-200 bg-neutral-950 p-10 text-white">
            <p className="arena-eyebrow text-red-300">Need assistance?</p>
            <h2 className="mt-3 text-3xl font-semibold">Naš tim može pomoći pri odabiru vozila.</h2>
            <p className="mt-4 max-w-2xl text-sm text-gray-300">Kontaktirajte nas i recite šta tražite. Pripremićemo ponudu prema vašim kriterijima.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="arena-btn-primary">Kontaktiraj nas</Link>
              <Link href="/" className="arena-btn-secondary border-white/20 bg-transparent text-white hover:bg-white/10">
                Nazad na početnu
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterArena />
    </div>
  );
}

export default function VehiclesPage() {
  return (
    <Suspense fallback={<div className="arena-container py-20 text-center text-gray-500">Učitavanje vozila...</div>}>
      <VehiclesPageContent />
    </Suspense>
  );
}
