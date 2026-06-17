'use client';

import FooterArena from "@/components/Footer";
import axios from "axios";
import Link from "next/link";
import { Suspense, useEffect, useMemo, useState } from "react";

function FinishedVehiclesContent() {
  const [vehicles, setVehicles] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const res = await axios.get(`/api/proxy/api/users/arenamotors/listings/finished?page=${currentPage}`);
        setVehicles(res.data);
      } catch (err) {
        console.error("Greška prilikom dohvata vozila:", err);
      }
    };
    fetchVehicles();
  }, [currentPage]);

  const totalPages = vehicles?.meta?.last_page || 1;

  const pages = useMemo(() => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage <= 3) return [1, 2, 3, 4, "...", totalPages];
    if (currentPage >= totalPages - 2) return [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
  }, [currentPage, totalPages]);

  return (
    <div>
      <section className="border-b border-gray-200 bg-white">
        <div className="fox-container py-16 md:py-20">
          <p className="fox-eyebrow">Archive</p>
          <h1 className="fox-title">Prodata vozila</h1>
          <p className="fox-subtitle">
            Pregled vozila koja su uspješno prodata kroz Auto Centar FOX.
          </p>
        </div>
      </section>

      <section className="fox-section">
        <div className="fox-container">
          {vehicles?.data?.length ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {vehicles.data.map((vehicle) => (
                <Link key={vehicle.id} href={`/vehicles/${vehicle.id}`} className="group fox-card overflow-hidden">
                  <div className="aspect-[16/11] overflow-hidden bg-gray-100">
                    <img src={vehicle.image?.replace("/sm/", "/lg/")} alt={vehicle.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="line-clamp-2 text-lg font-semibold">{vehicle.title}</h3>
                    <p className="mt-2 text-xl font-semibold">{vehicle.display_price}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="fox-card p-10 text-center text-gray-500">Nema prodatih vozila za prikaz.</div>
          )}

          {totalPages > 1 && (
            <div className="mt-12 flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="fox-btn-secondary disabled:opacity-50"
              >
                Prev
              </button>
              {pages.map((page, idx) =>
                page === "..." ? (
                  <span key={`ellipsis-${idx}`} className="px-2 text-gray-500">...</span>
                ) : (
                  <button
                    key={page}
                    onClick={() => {
                      setCurrentPage(page);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={currentPage === page ? "fox-btn-primary" : "fox-btn-secondary"}
                  >
                    {page}
                  </button>
                )
              )}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="fox-btn-secondary disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      <FooterArena />
    </div>
  );
}

export default function FinishedVehiclesPage() {
  return (
    <Suspense fallback={<div className="fox-container py-20 text-center text-gray-500">Učitavanje...</div>}>
      <FinishedVehiclesContent />
    </Suspense>
  );
}
