// 'use client';

// import FooterArena from "@/components/Footer";
// import axios from "axios";
// import Link from "next/link";
// import { useSearchParams } from "next/navigation";
// import { Suspense, useEffect, useMemo, useState } from "react";

// function VehiclesPageContent() {
//   const searchParams = useSearchParams();
//   const [vehicles, setVehicles] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [query, setQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortBy, setSortBy] = useState("relevant");
//   const [isInitialized, setIsInitialized] = useState(false);

//   useEffect(() => {
//     const qParam = searchParams.get("q");
//     if (qParam) {
//       setQuery(qParam);
//       setSearchTerm(qParam);
//     }
//     setIsInitialized(true);
//   }, [searchParams]);

//   useEffect(() => {
//     if (!isInitialized) return;
//     const fetchVehicles = async () => {
//       try {
//         const res = await axios.get("/api/proxy/api/search", {
//           params: {
//             attr: "",
//             attr_encoded: 1,
//             user_id: 3704444,
//             per_page: 24,
//             page: currentPage,
//             q: query,
//           },
//         });
//         setVehicles(res.data);
//       } catch (err) {
//         console.error("Greška prilikom dohvata vozila:", err);
//       }
//     };
//     fetchVehicles();
//   }, [currentPage, query, isInitialized]);

//   const parsedSortedVehicles = useMemo(() => {
//     const list = vehicles?.data ? [...vehicles.data] : [];
//     const parsePrice = (value) => Number((value || "").replace(/[^\d]/g, "")) || 0;

//     if (sortBy === "price_asc") {
//       list.sort((a, b) => parsePrice(a.display_price) - parsePrice(b.display_price));
//     } else if (sortBy === "price_desc") {
//       list.sort((a, b) => parsePrice(b.display_price) - parsePrice(a.display_price));
//     } else if (sortBy === "newest") {
//       list.sort((a, b) => (b.created_at || 0) - (a.created_at || 0));
//     }
//     return list;
//   }, [vehicles, sortBy]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     setCurrentPage(1);
//     setQuery(searchTerm.trim());
//   };

//   const totalPages = vehicles?.meta?.last_page || 1;

//   const pageNumbers = useMemo(() => {
//     const pages = [];
//     if (totalPages <= 7) {
//       for (let i = 1; i <= totalPages; i += 1) pages.push(i);
//       return pages;
//     }
//     if (currentPage <= 3) return [1, 2, 3, 4, "...", totalPages];
//     if (currentPage >= totalPages - 2) return [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
//     return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
//   }, [currentPage, totalPages]);

//   return (
//     <div>
//       <section className="border-b border-gray-200 bg-white">
//         <div className="fox-container py-16 md:py-20">
//           <p className="fox-eyebrow">Vozila</p>
//           <h1 className="fox-title">Naša Vozila</h1>
//           <p className="fox-subtitle">
//             {vehicles?.meta?.total
//               ? `${vehicles.meta.total} rezultata`
//               : "Pregledajte kompletnu ponudu Auto Centar FOX vozila."}
//           </p>

//           <form onSubmit={handleSearch} className="mt-8 grid gap-3 rounded-2xl md:grid-cols-[1fr_auto_auto] md:items-center">
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               placeholder="Pretraži vozila..."
//               className="w-full rounded-full border border-gray-200 bg-white px-4 py-3 text-sm outline-none"
//             />
//             <select
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//               className="rounded-full border border-gray-200 bg-white px-3 py-3 text-sm"
//             >
//               <option value="relevant">Most Relevant</option>
//               <option value="price_asc">Cijena: niža prema višoj</option>
//               <option value="price_desc">Cijena: viša prema nižoj</option>
//               <option value="newest">Najnoviji oglasi</option>
//             </select>
//             <button type="submit" className="fox-btn-primary w-full md:w-auto">Search</button>
//           </form>
//         </div>
//       </section>

//       <section className="fox-section">
//         <div className="fox-container">
//           {parsedSortedVehicles.length > 0 ? (
//             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//               {parsedSortedVehicles.map((vehicle) => (
//                 <Link
//                 key={vehicle.id}
//                 href={`/vehicles/${vehicle.id}`}
//                 className="group fox-card overflow-hidden"
//               >
//                 <div className="relative aspect-[16/11] overflow-hidden bg-gray-100">
//                   <img
//                     src={vehicle.image?.replace("/sm/", "/lg/")}
//                     alt={vehicle.title}
//                     className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
              
//                   {/* Badges */}
//                   <div className="absolute left-3 top-3 flex flex-wrap gap-2">
//                     <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
//                       {vehicle.state === "used" ? "Polovno" : "Novo"}
//                     </span>
              
//                     {vehicle.has_discount && (
//                       <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
//                         Sniženo
//                       </span>
//                     )}
//                   </div>
              
//                   {/* Bottom labels */}
//                   <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
//                     {vehicle.special_labels?.map((label, index) => (
//                       <span
//                         key={index}
//                         className="rounded-full capitalize bg-white/90 px-2 py-1 text-xs font-medium text-gray-800 backdrop-blur"
//                       >
//                         {label.value}
//                         {label.unit ? ` ${label.unit}` : ""}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
              
//                 <div className="p-5">
//                   <h3 className="line-clamp-2 text-lg font-semibold">
//                     {vehicle.title}
//                   </h3>
              
//                   <div className="mt-3 flex items-center justify-between">
//                     <div>
//                       {vehicle.has_discount ? (
//                         <>
//                           <p className="text-sm text-gray-500 line-through">
//                             {vehicle.discounted_price}
//                           </p>
              
//                           <p className="text-xl font-bold text-red-600">
//                             {vehicle.display_price}
//                           </p>
//                         </>
//                       ) : (
//                         <p className="text-xl font-semibold">
//                           {vehicle.display_price}
//                         </p>
//                       )}
//                     </div>
              
//                   </div>
//                 </div>
//               </Link>
//               ))}
//             </div>
//           ) : (
//             <div className="fox-card p-12 text-center">
//               <h2 className="text-2xl font-semibold">Nema rezultata za traženi pojam</h2>
//               <p className="mt-3 text-gray-600">Pokušajte drugačije ključne riječi ili resetujte pretragu.</p>
//             </div>
//           )}

//           {totalPages > 1 && (
//             <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
//               <button
//                 onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
//                 disabled={currentPage === 1}
//                 className="fox-btn-secondary disabled:opacity-50"
//               >
//                 Prev
//               </button>
//               {pageNumbers.map((page, idx) =>
//                 page === "..." ? (
//                   <span key={`ellipsis-${idx}`} className="px-2 text-gray-500">...</span>
//                 ) : (
//                   <button
//                     key={page}
//                     onClick={() => {
//                       setCurrentPage(page);
//                       window.scrollTo({ top: 0, behavior: "smooth" });
//                     }}
//                     className={currentPage === page ? "fox-btn-primary" : "fox-btn-secondary"}
//                   >
//                     {page}
//                   </button>
//                 )
//               )}
//               <button
//                 onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
//                 disabled={currentPage === totalPages}
//                 className="fox-btn-secondary disabled:opacity-50"
//               >
//                 Next
//               </button>
//             </div>
//           )}
//         </div>
//       </section>

//       <section className="fox-section bg-white">
//         <div className="fox-container">
//           <div className="rounded-3xl border border-gray-200 bg-neutral-950 p-10 text-white">
//             <p className="fox-eyebrow text-red-300">Need assistance?</p>
//             <h2 className="mt-3 text-3xl font-semibold">Naš tim može pomoći pri odabiru vozila.</h2>
//             <p className="mt-4 max-w-2xl text-sm text-gray-300">Kontaktirajte nas i recite šta tražite. Pripremićemo ponudu prema vašim kriterijima.</p>
//             <div className="mt-6 flex flex-wrap gap-3">
//               <Link href="/contact" className="fox-btn-primary">Kontaktiraj nas</Link>
//               <Link href="/" className="fox-btn-secondary border-white/20 bg-transparent text-white hover:bg-white/10">
//                 Nazad na početnu
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       <FooterArena />
//     </div>
//   );
// }

// export default function VehiclesPage() {
//   return (
//     <Suspense fallback={<div className="fox-container py-20 text-center text-gray-500">Učitavanje vozila...</div>}>
//       <VehiclesPageContent />
//     </Suspense>
//   );
// }
'use client';

import FooterArena from "@/components/Footer";
import axios from "axios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";
import { Heart, Filter, X, Grid3x3, List } from "lucide-react";

// ============ CUSTOM COMPONENTS ============

// Custom Range Slider
function CustomRangeSlider({ label, min, max, value, onChange }) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-900">{label}</label>
        <span className="text-sm font-semibold text-red-600">
          {value.toLocaleString()} {label.includes("Cijena") ? "KM" : ""}
        </span>
      </div>
      <div className="relative">
        {/* Background track */}
        <div className="absolute top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-gray-200" />
        {/* Filled track */}
        <div
          className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-gradient-to-r from-red-600 to-red-500 transition-all duration-100"
          style={{ width: `${percentage}%` }}
        />
        {/* Slider input */}
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="relative h-5 w-full appearance-none rounded-full bg-transparent outline-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-red-600 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:hover:scale-110 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-red-600 [&::-moz-range-thumb]:shadow-lg [&::-moz-range-thumb]:cursor-pointer"
        />
      </div>
    </div>
  );
}

// Custom Checkbox
function CustomCheckbox({ id, label, checked, onChange }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div
        className={`relative h-5 w-5 rounded-md border-2 transition-all duration-200 flex items-center justify-center ${
          checked
            ? "border-red-600 bg-red-600"
            : "border-gray-300 bg-white group-hover:border-red-400"
        }`}
      >
        {checked && (
          <svg
            className="h-3 w-3 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
      <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
        {label}
      </span>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="hidden"
      />
    </label>
  );
}

// Skeleton Loading
function SkeletonCard() {
  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden bg-white animate-pulse">
      <div className="aspect-[16/11] bg-gray-200" />
      <div className="p-5 space-y-4">
        <div className="h-6 bg-gray-200 rounded w-3/4" />
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-1/2" />
          <div className="h-6 bg-gray-200 rounded w-1/3" />
        </div>
      </div>
    </div>
  );
}

function SkeletonListCard() {
  return (
    <div className="flex gap-4 p-4 rounded-xl border border-gray-200 bg-white animate-pulse">
      <div className="h-36 w-48 flex-shrink-0 bg-gray-200 rounded-lg" />
      <div className="flex-1 space-y-4">
        <div className="h-6 bg-gray-200 rounded w-2/3" />
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-1/2" />
          <div className="h-4 bg-gray-200 rounded w-1/3" />
        </div>
        <div className="h-6 bg-gray-200 rounded w-1/4" />
      </div>
    </div>
  );
}

// ============ HELPER FUNCTIONS ============

// Ekstraktujem gorivo iz special_labels
function extractFuelType(specialLabels) {
  if (!specialLabels || !Array.isArray(specialLabels)) return "";
  const fuelLabel = specialLabels.find((label) => label.label === "Gorivo");
  return fuelLabel ? String(fuelLabel.value).toLowerCase() : "";
}

// Ekstraktujem godište iz special_labels
function extractYear(specialLabels) {
  if (!specialLabels || !Array.isArray(specialLabels)) return 0;
  const yearLabel = specialLabels.find((label) => label.label === "Godište");
  return yearLabel ? parseInt(String(yearLabel.value)) : 0;
}

// Ekstraktujem kilometražu iz special_labels
function extractMileage(specialLabels) {
  if (!specialLabels || !Array.isArray(specialLabels)) return "0";
  const mileageLabel = specialLabels.find(
    (label) => label.label === "Kilometraža"
  );
  return mileageLabel ? String(mileageLabel.value).replace(/\./g, "") : "0";
}

// Mapujem category_id na tip vozila
function getCategoryName(categoryId) {
  const categoryMap = {
    18: "Sedan",
    19: "SUV",
    20: "Hatchback",
    21: "Karavan",
    22: "Kupé",
    23: "Kombi",
    24: "Minivan",
  };
  return categoryMap[categoryId] || "Vozilo";
}

// ============ MAIN COMPONENT ============

function VehiclesPageContent() {
  const searchParams = useSearchParams();
  const [vehicles, setVehicles] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("relevant");
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [viewMode, setViewMode] = useState("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Advanced Filters
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 });
  const [yearRange, setYearRange] = useState({ min: 2000, max: new Date().getFullYear() });
  const [fuelType, setFuelType] = useState("");
  const [carType, setCarType] = useState("");

  // Load favorites from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("vehicle-favorites");
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  // Save favorites to localStorage
  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const updated = prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id];
      localStorage.setItem("vehicle-favorites", JSON.stringify(updated));
      return updated;
    });
  };

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
        setIsLoading(true);
        const res = await axios.get("/api/proxy/api/search", {
          params: {
            attr: "",
            attr_encoded: 1,
            user_id: 3704444,
            per_page: 24,
            page: currentPage,
            q: query,
          },
        });
        setVehicles(res.data);
      } catch (err) {
        console.error("Greška prilikom dohvata vozila:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchVehicles();
  }, [currentPage, query, isInitialized]);

  const parsePrice = (value) => Number((value || "").replace(/[^\d]/g, "")) || 0;

  const filteredAndSortedVehicles = useMemo(() => {
    let list = vehicles?.data ? [...vehicles.data] : [];

    // Apply filters
    list = list.filter((vehicle) => {
      const price = parsePrice(vehicle.display_price);
      const year = extractYear(vehicle.special_labels);
      const fuel = extractFuelType(vehicle.special_labels);
      const type = getCategoryName(vehicle.category_id);

      const matchesPrice = price >= priceRange.min && price <= priceRange.max;
      const matchesYear = year >= yearRange.min && year <= yearRange.max;
      const matchesFuel = !fuelType || fuel.includes(fuelType.toLowerCase());
      const matchesType = !carType || type.toLowerCase() === carType.toLowerCase();

      return matchesPrice && matchesYear && matchesFuel && matchesType;
    });

    // Apply sorting
    if (sortBy === "price_asc") {
      list.sort((a, b) => parsePrice(a.display_price) - parsePrice(b.display_price));
    } else if (sortBy === "price_desc") {
      list.sort((a, b) => parsePrice(b.display_price) - parsePrice(a.display_price));
    } else if (sortBy === "newest") {
      list.sort((a, b) => (b.date || 0) - (a.date || 0));
    } else if (sortBy === "discount") {
      list.sort((a, b) => {
        const discountA = a.has_discount ? parsePrice(a.discounted_price || "0") - parsePrice(a.display_price) : 0;
        const discountB = b.has_discount ? parsePrice(b.discounted_price || "0") - parsePrice(b.display_price) : 0;
        return discountB - discountA;
      });
    }

    return list;
  }, [vehicles, sortBy, priceRange, yearRange, fuelType, carType]);

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

  // Dinamički saberi sve dostupne fuel tipove iz vehicles
  const availableFuels = useMemo(() => {
    const fuels = new Set();
    vehicles?.data?.forEach((v) => {
      const fuel = extractFuelType(v.special_labels);
      if (fuel) {
        fuels.add(fuel.charAt(0).toUpperCase() + fuel.slice(1));
      }
    });
    return Array.from(fuels).sort();
  }, [vehicles]);

  // Dinamički saberi sve dostupne car types iz vehicles
  const availableCarTypes = useMemo(() => {
    const types = new Set();
    vehicles?.data?.forEach((v) => {
      const type = getCategoryName(v.category_id);
      if (type && type !== "Vozilo") {
        types.add(type);
      }
    });
    return Array.from(types).sort();
  }, [vehicles]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-3">Vozila</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Naša Vozila</h1>
          <p className="text-lg text-gray-600">
            {vehicles?.meta?.total
              ? `${vehicles.meta.total} rezultata`
              : "Pregledajte kompletnu ponudu Auto Centar FOX vozila."}
          </p>

          {/* Main Search */}
          <form onSubmit={handleSearch} className="mt-8 flex gap-3 flex-col sm:flex-row">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Pretraži vozila po marki, modelu..."
              className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Pretraži
            </button>
          </form>
        </div>
      </section>

      {/* Sticky Top Filter Bar */}
      <div className="sticky top-20 sm:z-30 md:z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm"
            >
              <Filter size={18} />
              Filteri
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium bg-white hover:border-red-600 transition-colors cursor-pointer"
            >
              <option value="relevant">Preporučeno</option>
              <option value="newest">Najnoviji oglasi</option>
              <option value="price_asc">Cijena: niža prema višoj</option>
              <option value="price_desc">Cijena: viša prema nižoj</option>
              <option value="discount">Najveći popust</option>
            </select>

            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center gap-1 ml-auto border border-gray-300 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded transition-colors ${
                  viewMode === "grid"
                    ? "bg-red-600 text-white"
                    : "text-gray-600 hover:text-red-600"
                }`}
                title="Grid view"
              >
                <Grid3x3 size={18} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded transition-colors ${
                  viewMode === "list"
                    ? "bg-red-600 text-white"
                    : "text-gray-600 hover:text-red-600"
                }`}
                title="List view"
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div
            className={`lg:block fixed lg:relative border-t border-gray-300 md:border-t-0 rounded-t-lg left-0 right-0 bottom-0 z-40 lg:bottom-auto lg:right-auto lg:top-auto bg-white lg:bg-transparent overflow-y-auto ${
              isFilterOpen ? "block" : "hidden"
            }`}
          >
            <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white">
              <h3 className="font-semibold text-gray-900">Filteri</h3>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-8">
              {/* Price Range */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-6 uppercase text-xs tracking-wide">
                  Cijena
                </h4>
                <div className="space-y-4">
                  <CustomRangeSlider
                    label="Minimalna"
                    min={0}
                    max={100000}
                    value={priceRange.min}
                    onChange={(val) => setPriceRange({ ...priceRange, min: Math.min(val, priceRange.max) })}
                  />
                  <CustomRangeSlider
                    label="Maksimalna"
                    min={0}
                    max={100000}
                    value={priceRange.max}
                    onChange={(val) => setPriceRange({ ...priceRange, max: Math.max(val, priceRange.min) })}
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-200" />

              {/* Year Range */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-6 uppercase text-xs tracking-wide">
                  Godište
                </h4>
                <div className="space-y-4">
                  <CustomRangeSlider
                    label="Od godine"
                    min={2000}
                    max={new Date().getFullYear()}
                    value={yearRange.min}
                    onChange={(val) => setYearRange({ ...yearRange, min: Math.min(val, yearRange.max) })}
                  />
                  <CustomRangeSlider
                    label="Do godine"
                    min={2000}
                    max={new Date().getFullYear()}
                    value={yearRange.max}
                    onChange={(val) => setYearRange({ ...yearRange, max: Math.max(val, yearRange.min) })}
                  />
                </div>
              </div>

              {/* Divider */}
              

              {/* Reset Button */}
              <button
                onClick={() => {
                  setPriceRange({ min: 0, max: 100000 });
                  setYearRange({ min: 2000, max: new Date().getFullYear() });
                  setFuelType("");
                  setCarType("");
                }}
                className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg font-medium transition-colors duration-200"
              >
                Resetuj filtere
              </button>
            </div>
          </div>

          {/* Vehicles Container */}
          <div className="lg:col-span-3">
            {isLoading ? (
              viewMode === "grid" ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <SkeletonCard key={i} />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <SkeletonListCard key={i} />
                  ))}
                </div>
              )
            ) : filteredAndSortedVehicles.length > 0 ? (
              <>
                {viewMode === "grid" ? (
                  // Grid View
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredAndSortedVehicles.map((vehicle) => (
                      <Link
                        key={vehicle.id}
                        href={`/vehicles/${vehicle.id}`}
                        className="group rounded-xl border border-gray-200 overflow-hidden bg-white hover:shadow-xl hover:border-red-300 transition-all duration-300"
                      >
                        {/* Image */}
                        <div className="relative aspect-[16/11] bg-gray-100 overflow-hidden">
                          <img
                            src={vehicle.image?.replace("/sm/", "/lg/")}
                            alt={vehicle.title}
                            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />

                          {/* Badges */}
                          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                            <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
                              {vehicle.state === "used" ? "Polovno" : "Novo"}
                            </span>
                            {vehicle.has_discount && (
                              <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
                                Sniženo
                              </span>
                            )}
                          </div>

                          {/* Favorite Button */}
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              toggleFavorite(vehicle.id);
                            }}
                            className="absolute right-3 top-3 p-2.5 rounded-full bg-white/90 backdrop-blur hover:bg-white transition-all duration-200 shadow-md hover:shadow-lg group/heart"
                          >
                            <Heart
                              size={20}
                              className={`transition-all duration-300 ${
                                favorites.includes(vehicle.id)
                                  ? "fill-red-500 text-red-500 scale-110"
                                  : "text-gray-600 group-hover/heart:text-red-500"
                              }`}
                            />
                          </button>

                          {/* Special Labels */}
                          <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                            {vehicle.special_labels?.map((label, index) => (
                              <span
                                key={index}
                                className="rounded-full capitalize bg-white/95 px-2.5 py-1 text-xs font-medium text-gray-800 backdrop-blur"
                              >
                                {label.value}
                                {label.unit ? ` ${label.unit}` : ""}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Info */}
                        <div className="p-5">
                          <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors">
                            {vehicle.title}
                          </h3>

                          {/* Price */}
                          <div className="mt-4 flex items-baseline gap-2">
                            {vehicle.has_discount ? (
                              <>
                                <p className="text-sm text-gray-400 line-through">
                                  {vehicle.discounted_price}
                                </p>
                                <p className="text-xl font-bold text-red-600">
                                  {vehicle.display_price}
                                </p>
                              </>
                            ) : (
                              <p className="text-xl font-bold text-gray-900">
                                {vehicle.display_price}
                              </p>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  // List View - Enhanced
                  <div className="space-y-4">
                    {filteredAndSortedVehicles.map((vehicle) => (
                      <Link
                        key={vehicle.id}
                        href={`/vehicles/${vehicle.id}`}
                        className="flex gap-4 p-4 rounded-xl border border-gray-200 bg-white hover:shadow-lg hover:border-red-300 transition-all duration-300 group"
                      >
                        {/* Image */}
                        <div className="relative h-36 w-48 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                          <img
                            src={vehicle.image?.replace("/sm/", "/lg/")}
                            alt={vehicle.title}
                            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          {vehicle.has_discount && (
                            <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                              Sniženo
                            </span>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors text-lg line-clamp-2">
                                  {vehicle.title}
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">
                                  {extractYear(vehicle.special_labels) || "N/A"} • {extractFuelType(vehicle.special_labels) || "Nepoznato"}
                                </p>
                              </div>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  toggleFavorite(vehicle.id);
                                }}
                                className="p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
                              >
                                <Heart
                                  size={22}
                                  className={`transition-all duration-300 ${
                                    favorites.includes(vehicle.id)
                                      ? "fill-red-500 text-red-500 scale-110"
                                      : "text-gray-400 hover:text-red-500"
                                  }`}
                                />
                              </button>
                            </div>

                            {/* Details */}
                            <div className="mt-3 text-sm flex flex-wrap gap-2">
                                <p className="font-medium text-gray-900">
                                  {extractYear(vehicle.special_labels) || "N/A"}
                                </p>
                                <p className="font-medium text-gray-900">
                                  {extractFuelType(vehicle.special_labels) || "Nepoznato"}
                                </p>

                                <p className="font-medium text-gray-900">
                                  {extractMileage(vehicle.special_labels)} km
                                </p>
                                
                                <p className="font-medium text-gray-900 capitalize">
                                  {extractFuelType(vehicle.special_labels) || "Nepoznato"}
                                </p>
                              </div>
                          </div>

                          {/* Price */}
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            {vehicle.has_discount ? (
                              <div className="flex items-center gap-3">
                                <p className="text-sm text-gray-400 line-through">
                                  {vehicle.discounted_price}
                                </p>
                                <p className="text-2xl font-bold text-red-600">
                                  {vehicle.display_price}
                                </p>
                              </div>
                            ) : (
                              <p className="text-2xl font-bold text-gray-900">
                                {vehicle.display_price}
                              </p>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
                    <button
                      onClick={() => {
                        setCurrentPage((p) => Math.max(1, p - 1));
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      disabled={currentPage === 1}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Nazad
                    </button>
                    {pageNumbers.map((page, idx) =>
                      page === "..." ? (
                        <span key={`ellipsis-${idx}`} className="px-2 text-gray-500">
                          ...
                        </span>
                      ) : (
                        <button
                          key={page}
                          onClick={() => {
                            setCurrentPage(page);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            currentPage === page
                              ? "bg-red-600 text-white"
                              : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {page}
                        </button>
                      )
                    )}
                    <button
                      onClick={() => {
                        setCurrentPage((p) => Math.min(totalPages, p + 1));
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Dalje
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="rounded-xl border border-gray-200 bg-white p-12 text-center">
                <h2 className="text-2xl font-semibold text-gray-900">Nema rezultata</h2>
                <p className="mt-3 text-gray-600">
                  Pokušajte drugačije filtere ili ključne riječi.
                </p>
                <button
                  onClick={() => {
                    setPriceRange({ min: 0, max: 100000 });
                    setYearRange({ min: 2000, max: new Date().getFullYear() });
                    setFuelType("");
                    setCarType("");
                  }}
                  className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
                >
                  Resetuj filtere
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="mt-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-900 to-gray-800 p-10 text-white">
            <p className="text-sm font-semibold text-red-400 uppercase tracking-wide mb-3">
              Trebate pomoć?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Naš tim može pomoći pri odabiru vozila
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl">
              Kontaktirajte nas i recite šta tražite. Pripremićemo ponudu prema vašim kriterijima.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Kontaktiraj nas
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 border border-gray-400 hover:border-white text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
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
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-20 text-center text-gray-500">Učitavanje vozila...</div>}>
      <VehiclesPageContent />
    </Suspense>
  );
}