'use client';

import FooterArena from "@/components/Footer";
import dayjs from "dayjs";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Check, X } from "lucide-react";

export default function VehiclePage() {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [mediaMode, setMediaMode] = useState("images");

  useEffect(() => {
    if (!id) return;
    const fetchVehicle = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/proxy/api/listings/${id}`);
        const data = await res.json();
        setVehicle(data);
      } catch {
        setError("Greška pri dohvaćanju vozila.");
      } finally {
        setLoading(false);
      }
    };
    fetchVehicle();
  }, [id]);

  useEffect(() => {
    const fetchRelated = async () => {
      try {
        const res = await fetch("/api/proxy/api/search?attr=&attr_encoded=1&user_id=3300229&per_page=4");
        const data = await res.json();
        setRelated((data?.data || []).filter((item) => String(item.id) !== String(id)).slice(0, 3));
      } catch {
        setRelated([]);
      }
    };
    fetchRelated();
  }, [id]);

  const attributes = useMemo(() => vehicle?.attributes || [], [vehicle]);

  const toText = (value) => (value ?? "").toString().trim().toLowerCase();
  const isTruthy = (value) => ["true", "da", "yes", "1"].includes(toText(value));
  const isFalsy = (value) => ["false", "ne", "no", "0"].includes(toText(value));

  const getAttribute = (...keys) => {
    const normalizedKeys = keys.map((key) => key.toLowerCase());
    return attributes.find((attr) => {
      const code = (attr.attr_code || "").toLowerCase();
      const name = (attr.name || "").toLowerCase();
      return normalizedKeys.includes(code) || normalizedKeys.includes(name);
    });
  };

  const formatValue = (item) => {
    if (!item) return "N/A";
    if (isTruthy(item.value)) return "Da";
    if (isFalsy(item.value)) return "Ne";
    if (typeof item.value === "number") return item.value.toLocaleString("bs-BA");
    return item.value || "N/A";
  };

  const keySpecs = useMemo(
    () => [
      { label: "Kilometraža", value: getAttribute("kilometra-a", "kilometraža") ? `${formatValue(getAttribute("kilometra-a", "kilometraža"))} km` : "N/A" },
      { label: "Godište", value: getAttribute("godiste", "godište") },
      { label: "Stanje", value: vehicle?.state === "used" ? "Polovno" : "Novo" },
      { label: "Transmisija", value: formatValue(getAttribute("transmisija", "transmisija")) },
      { label: "Gorivo", value: formatValue(getAttribute("gorivo", "gorivo")) },
      { label: "Snaga", value: getAttribute("kilovata-kw", "snaga motora (kw)") ? `${formatValue(getAttribute("kilovata-kw", "snaga motora (kw)"))} kW` : "N/A" },
      { label: "Pogon", value: formatValue(getAttribute("pogon", "pogon")) },
      { label: "Sjedišta", value: formatValue(getAttribute("sjedecih-mjesta", "sjedećih mjesta")) },
    ],
    [vehicle, attributes]
  );

  const specifications = useMemo(
    () =>
      attributes
        .filter((item) => item.group_name === "Specifikacije")
        .sort((a, b) => (a.order || 0) - (b.order || 0)),
    [attributes]
  );

  const equipment = useMemo(
    () =>
      attributes
        .filter((item) => item.group_name === "Oprema")
        .sort((a, b) => (a.order || 0) - (b.order || 0)),
    [attributes]
  );

  const images = vehicle?.images || [];
  const totalImages = images.length;
  const visibleDotIndexes = useMemo(() => {
    if (totalImages <= 5) {
      return Array.from({ length: totalImages }, (_, idx) => idx);
    }
    const start = Math.max(0, Math.min(currentImage - 2, totalImages - 5));
    return Array.from({ length: 5 }, (_, idx) => start + idx);
  }, [currentImage, totalImages]);
  const rawVideoUrl =
    vehicle?.video_url ||
    vehicle?.video ||
    vehicle?.additional?.video_url ||
    vehicle?.additional?.video ||
    getAttribute("video", "video url", "youtube", "youtube link")?.value ||
    "";
  const hasVideo = Boolean(rawVideoUrl);

  const getVideoEmbedUrl = (url) => {
    if (!url) return "";
    if (url.includes("youtube.com/watch?v=")) {
      const id = new URL(url).searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : url;
    }
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1]?.split("?")[0];
      return id ? `https://www.youtube.com/embed/${id}` : url;
    }
    return url;
  };
  const videoEmbedUrl = getVideoEmbedUrl(rawVideoUrl);
  const isDirectVideo = /\.(mp4|webm|ogg)$/i.test(videoEmbedUrl);

  const goToPrevImage = () => {
    if (!totalImages) return;
    setMediaMode("images");
    setCurrentImage((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const goToNextImage = () => {
    if (!totalImages) return;
    setMediaMode("images");
    setCurrentImage((prev) => (prev + 1) % totalImages);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(deltaX) > 40) {
      if (deltaX > 0) {
        goToPrevImage();
      } else {
        goToNextImage();
      }
    }
    setTouchStartX(null);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const tag = document.activeElement?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea" || tag === "select") return;
      if (event.key === "ArrowLeft") {
        goToPrevImage();
      }
      if (event.key === "ArrowRight") {
        goToNextImage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [totalImages]);

  if (loading) {
    return <div className="arena-container py-20 text-center text-gray-500">Učitavanje vozila...</div>;
  }
  if (error || !vehicle) {
    return <div className="arena-container py-20 text-center text-red-600">{error || "Vozilo nije pronađeno."}</div>;
  }

  return (
    <div>
      <motion.section
        className="border-b border-gray-200 bg-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <div className="arena-container py-12">
          
          <div className="mt-4 flex flex-col items-center gap-6">
            <div>
              <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl text-center">{vehicle.title}</h1>
              {/* <p className="mt-4 max-w-2xl text-gray-600">
                {vehicle.additional?.description?.replace(/<[^>]*>/g, "").slice(0, 170) || "Provjereno vozilo sa kompletnom dokumentacijom i transparentnim uslovima kupovine."}
              </p> */}
            </div>
            <div className="border-none p-6 flex flex-col items-center">
              <p className="text-sm text-gray-500">Cijena</p>
              <p className=" text-4xl font-semibold">{vehicle.display_price}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="tel:+38766444644" className="arena-btn-primary">Pozovite nas</a>
                <Link href="/contact" className="arena-btn-secondary">Zakaži posjetu</Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="arena-section"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="arena-container grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="overflow-hidden">
            <div
              className="relative aspect-[16/10]"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence mode="wait">
                {mediaMode === "video" && hasVideo ? (
                  <motion.div
                    key="media-video"
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -18 }}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                    className="h-full w-full"
                  >
                    {isDirectVideo ? (
                      <video controls className="h-full w-full object-cover">
                        <source src={videoEmbedUrl} />
                      </video>
                    ) : (
                      <iframe
                        src={videoEmbedUrl}
                        title={`${vehicle.title} video`}
                        className="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )}
                  </motion.div>
                ) : (
                  <motion.img
                    key={`media-image-${currentImage}`}
                    src={images[currentImage] || vehicle.image}
                    alt={vehicle.title}
                    className="h-full w-full cursor-pointer object-cover rounded-xl"
                    onClick={() => setIsGalleryOpen(true)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                  />
                )}
              </AnimatePresence>
              {totalImages > 1 && (
                <>
                  <button
                    onClick={goToPrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={goToNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>
            {totalImages > 1 && (
              <div className="flex items-center justify-center gap-4 p-4">
                <div className="flex items-center gap-2 bg-black/25 rounded-full p-2">
                  {visibleDotIndexes.map((idx) => (
                    <button
                      key={`dot-${idx}`}
                      onClick={() => {
                        setMediaMode("images");
                        setCurrentImage(idx);
                      }}
                      className={`h-2.5 w-2.5 rounded-full transition-all ${idx === currentImage ? "w-6 bg-red-700" : "bg-gray-300 hover:bg-gray-400"}`}
                      aria-label={`Prikaži sliku ${idx + 1}`}
                    />
                  ))}
                  {hasVideo && (
                    <button
                      onClick={() => setMediaMode("video")}
                      className={`ml-2 rounded-full px-3 py-1 text-xs font-semibold transition ${
                        mediaMode === "video" ? "bg-red-700 text-white" : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      Video
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          <aside className="arena-card p-6">
            <h3 className="text-lg font-semibold">Specifikacije</h3>
            <div className="mt-4 max-h-[520px] space-y-2 overflow-auto pr-1 text-sm">
              {specifications.map((item) => (
                <div key={`${item.id}-${item.attr_code}`} className="flex items-start justify-between gap-3 border-b border-gray-100 pb-2">
                  <span className="text-gray-600">{item.name}</span>
                  <span className="font-medium text-gray-900">{formatValue(item)}</span>
                </div>
              ))}
            </div>
            
          </aside>
        </div>
      </motion.section>

      <section className="arena-section bg-white">
        <div className="arena-container grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold">Detaljni opis</h2>
            <div
              className={`mt-5 leading-8 text-gray-700 transition-all duration-300 ${isDescriptionExpanded ? "max-h-none" : "max-h-[420px] overflow-hidden"}`}
              dangerouslySetInnerHTML={{ __html: vehicle.additional?.description || "<p>Nema dodatnog opisa.</p>" }}
            />
            <button
              type="button"
              onClick={() => setIsDescriptionExpanded((prev) => !prev)}
              className="mt-4 text-sm font-semibold text-red-700 hover:text-red-800"
            >
              {isDescriptionExpanded ? "Prikaži manje" : "Prikaži više"}
            </button>
          </div>

          

          <div className="arena-card self-start p-6 lg:sticky lg:top-24">
            <h3 className="text-lg font-semibold">Oprema</h3>
            <div className="mt-4 max-h-[65vh] space-y-2 overflow-auto pr-1 text-sm">
              {equipment.map((item) => (
                <div key={`${item.id}-${item.attr_code}`} className="flex items-start gap-2">
                  {isTruthy(item.value) ? (
                    <Check size={16} className="mt-0.5 text-green-600" />
                  ) : isFalsy(item.value) ? (
                    <X size={16} className="mt-0.5 text-gray-400" />
                  ) : (
                    <span className="mt-0.5 h-4 w-4 rounded-full bg-gray-200" />
                  )}
                  <div className="flex-1">
                    <p className="text-gray-700">{item.name}</p>
                    {!isTruthy(item.value) && !isFalsy(item.value) && (
                      <p className="text-xs text-gray-500">{formatValue(item)}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="arena-section">
        <div className="arena-container">
          <div className="mb-10">
            <p className="arena-eyebrow">Možda vam se svidja</p>
            <h2 className="arena-title">Povezana vozila</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.id} href={`/vehicles/${item.id}`} className="group arena-card overflow-hidden">
                <div className="aspect-[16/11] overflow-hidden bg-gray-100">
                  <img src={item.image?.replace("/sm/", "/lg/")} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="line-clamp-2 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-xl font-semibold">{item.display_price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <button className="absolute right-6 top-6 text-white" onClick={() => setIsGalleryOpen(false)}>
            <X size={30} />
          </button>
          {totalImages > 1 && (
            <>
              <button
                onClick={goToPrevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={goToNextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
          <img src={images[currentImage] || vehicle.image} alt={vehicle.title} className="max-h-[90vh] max-w-[92vw] object-contain" />
          {totalImages > 1 && (
            <p className="absolute bottom-8 text-sm font-medium text-white">
              {currentImage + 1} / {totalImages}
            </p>
          )}
        </div>
      )}

      <FooterArena />
    </div>
  );
}
