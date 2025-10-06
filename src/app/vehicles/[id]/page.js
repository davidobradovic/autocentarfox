'use client';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'next/navigation';
import { ChevronLeft, ChevronRight, X, Check, ChevronDown, ChevronUp } from 'lucide-react';
import axios from 'axios';
import dayjs from 'dayjs';
import Head from 'next/head';



export default function VehiclePage() {

    const params = useParams();
    const { id } = params;

    const [vehicle, setVehicle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [descExpanded, setDescExpanded] = useState(false);
    const [imgFade, setImgFade] = useState(false);
    const [pageFadeKey, setPageFadeKey] = useState(id);
    const descRef = useRef(null);

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        axios.get(`https://olx.ba/api/listings/${id}`)
            .then(res => {
                setVehicle(res.data);
                setLoading(false);
            })
            .catch(() => {
                setError('Greška pri dohvaćanju vozila.');
                setLoading(false);
            });
    }, [id]);

    useEffect(() => {
        setPageFadeKey(id); // reset fade-in on page change
    }, [id]);

    const getAttributesByGroup = (group) =>
        vehicle?.attributes?.filter(a => a.group_name === group) || [];

    const getAttributeValue = (name) =>
        vehicle?.attributes?.find(a => a.name === name)?.value;

    const isTrue = (val) => val === true || val === "true";

    const handleImageChange = (nextIdx) => {
        setImgFade(true);
        setTimeout(() => {
            setCurrentImage(nextIdx);
            setImgFade(false);
        }, 180);
    };

    useEffect(() => {
        if (!descRef.current) return;
        const el = descRef.current;
        if (descExpanded) {
            el.style.maxHeight = el.scrollHeight + "px";
        } else {
            el.style.maxHeight = "160px";
        }
    }, [descExpanded, vehicle]);

    if (loading) return <div className="max-w-6xl mx-auto py-6 px-4 bg-gray-50 animate-fadein"><div className="text-center py-20 text-gray-500">Učitavanje...</div></div>;
    if (error) return <div className="max-w-6xl mx-auto py-6 px-4 bg-gray-50 animate-fadein"><div className="text-center py-20 text-red-500">{error}</div></div>;
    if (!vehicle) return null;

    const specifications = getAttributesByGroup("Specifikacije");
    const equipment = getAttributesByGroup("Oprema");

    return (
        <div
            key={pageFadeKey}
            className="max-w-screen-xl mx-auto py-6 px-2 sm:px-4 bg-gray-50 animate-fadein"
        >

            <Head>
                <title>{vehicle.title}</title>
                <meta name="description" content={vehicle.additional?.description} />
                <meta name="keywords" content={`${vehicle.brand?.name}, ${vehicle.model?.name}, helmets`} />
                <meta property="og:title" content={vehicle.title} />
                <meta property="og:description" content={vehicle.additional?.description} />
                <meta property="og:image" content={vehicle.images?.[0]} />
            </Head>

            {/* Header */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-4 transition-all duration-500 animate-fadein">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                    <div className="flex-1 min-w-0">
                        <h1 className="text-xl sm:text-2xl font-bold mb-2 break-words transition-all duration-300">{vehicle.title}</h1>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                            <span>{vehicle.brand?.name}</span>
                            <span>›</span>
                            <span>{vehicle.model?.name}</span>
                        </div>
                    </div>
                    <div className="text-left sm:text-right flex flex-col items-start sm:items-end gap-2">
                        <div className="text-2xl sm:text-3xl font-bold text-black mb-1 transition-all duration-300">
                            {vehicle.display_price}
                        </div>
                        <button className="bg-red-600 text-white px-4 py-1 rounded text-sm w-full sm:w-auto transition-colors duration-300 hover:bg-red-700">
                            Dostupno odmah
                        </button>
                    </div>
                </div>
            </div>

            {/* Gallery */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4 transition-all duration-500 animate-fadein">
                <div className="relative">
                    <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                        <img
                            src={vehicle.images[currentImage]}
                            alt={vehicle.title}
                            className={`w-full h-full object-cover cursor-pointer transition-opacity duration-300 ${imgFade ? "opacity-0" : "opacity-100"}`}
                            onClick={() => setIsGalleryOpen(true)}
                            draggable={false}
                        />
                        <button
                            onClick={() => handleImageChange((currentImage - 1 + vehicle.images.length) % vehicle.images.length)}
                            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => handleImageChange((currentImage + 1) % vehicle.images.length)}
                            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
                        >
                            <ChevronRight size={24} />
                        </button>
                        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2">
                            {vehicle.images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleImageChange(idx)}
                                    className={`w-2 h-2 rounded-full transition-all duration-200 ${idx === currentImage ? 'bg-white scale-125' : 'bg-white/50'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 transition-all duration-500">
                {/* Left Column - Specs */}
                <div className="lg:col-span-2 space-y-4">
                    {/* Basic Info Cards */}
                    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 transition-all duration-500">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
                            {[
                                { icon: "🚗", label: "Proizvođač", value: vehicle.brand?.name },
                                { icon: "🏷️", label: "Model", value: vehicle.model?.name },
                                { icon: "⛽", label: "Gorivo", value: getAttributeValue("Gorivo") },
                                { icon: "🔧", label: "Broj vrata", value: getAttributeValue("Broj vrata") },
                                { icon: "📅", label: "Godište", value: getAttributeValue("Godište") },
                                { icon: "⚙️", label: "Transmisija", value: getAttributeValue("Transmisija") },
                                { icon: "👤", label: "Kilometraža", value: getAttributeValue("Kilometraža") ? `${getAttributeValue("Kilometraža").toLocaleString().replace(",",".")} km` : "" },
                                { icon: "📏", label: "Kubikaža", value: getAttributeValue("Kubikaža")?.toLocaleString(void 0, { minimumFractionDigits: 1 }) },
                                { icon: "⚡", label: "Snaga motora (KW)", value: getAttributeValue("Snaga motora (KW)") },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded transition-all duration-300">
                                    <div>
                                        <div className="text-xs text-gray-500">{item.label}</div>
                                        <div className="font-semibold break-words">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Specifikacije */}
                    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 transition-all duration-500">
                        <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Specifikacije</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 sm:gap-x-8 gap-y-2 sm:gap-y-3">
                            {specifications.map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between text-xs sm:text-sm transition-all duration-300">
                                    <span className="text-gray-600">{item.name}</span>
                                    <span className="font-semibold">
                                        {item.type === "string" && (item.value === "true" || item.value === "false")
                                            ? (isTrue(item.value) ? <Check size={16} className="text-green-600" /> : '—')
                                            : item.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Oprema */}
                    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 transition-all duration-500">
                        <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Oprema</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2 sm:gap-y-3">
                            {equipment.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm transition-all duration-300">
                                    {item.type === "string" && (item.value === "true" || item.value === "false") ? (
                                        <>
                                            {isTrue(item.value) && <Check size={16} className="text-green-600 flex-shrink-0" />}
                                            <span className="text-gray-700">{item.name}</span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="text-gray-600">{item.name}</span>
                                            <span className="font-semibold">{item.value}</span>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Description */}
                    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 transition-all duration-500">
                        <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Detaljni opis</h2>
                        <div
                            ref={descRef}
                            className={`prose max-w-none text-xs sm:text-sm transition-all duration-500 overflow-hidden relative`}
                            style={{
                                maxHeight: descExpanded ? (descRef.current?.scrollHeight || 9999) + "px" : "160px",
                                WebkitMaskImage: !descExpanded ? 'linear-gradient(180deg, #000 60%, transparent)' : undefined
                            }}
                            dangerouslySetInnerHTML={{ __html: vehicle.additional?.description }}
                        />
                        <button
                            className="mt-2 flex items-center gap-1 cursor-pointer w-full text-red-600 text-sm font-semibold transition-colors duration-300"
                            onClick={() => setDescExpanded((v) => !v)}
                        >
                            {descExpanded ? <>Prikaži manje <ChevronUp size={16} /></> : <>Prikaži više <ChevronDown size={16} /></>}
                        </button>
                    </div>
                </div>

                {/* Right Column - Seller */}
                <div className="space-y-4">
                    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 sticky top-4 transition-all duration-500">
                        <div className="text-center mb-4">
                            <div className="text-xs text-gray-500 mb-2">OLX SHOP</div>
                            <img
                                src={vehicle.user?.avatar}
                                alt={vehicle.user?.username}
                                className="w-16 h-16 rounded-full mx-auto mb-3 border-2 border-red-600 transition-all duration-300"
                            />
                            <h3 className="font-bold text-base sm:text-lg">{vehicle.user?.username}</h3>
                            <div className="text-xs sm:text-sm text-gray-600">{vehicle.cities[0]?.name}</div>
                            <div className="text-xs text-gray-500 mt-1">
                                Prosječno vrijeme odgovora {vehicle.user?.avg_response_time} minute
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-2 mb-4">
                            <a href='tel:+38766444644' className="w-full flex items-center justify-center bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300">
                                Pozovi
                            </a>
                            <a href='https://olx.ba/shops/ArenaMotors/aktivni' className="w-full flex items-center justify-center border-2 border-red-600 text-red-600 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-300">
                                OLX Shop
                            </a>
                        </div>

                        <div className="border-t pt-4">
                            <h4 className="font-semibold mb-2 text-xs sm:text-sm">Dodatne informacije</h4>
                            <div className="space-y-2 text-xs">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Datum objave:</span>
                                    <span className="font-semibold">{dayjs(new Date(vehicle.created_at * 1000)).format('DD.MM.YYYY')}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Status:</span>
                                    <span className="font-semibold text-green-600 capitalize">
                                        {vehicle.status}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Stanje:</span>
                                    <span className="font-semibold">
                                        {vehicle.state === "used" ? "Polovno" : "Novo"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fullscreen Gallery Modal */}
            {isGalleryOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center animate-fadein">
                    <button
                        onClick={() => setIsGalleryOpen(false)}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 transition-colors duration-200"
                    >
                        <X size={32} />
                    </button>
                    <button
                        onClick={() => handleImageChange((currentImage - 1 + vehicle.images.length) % vehicle.images.length)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 transition-colors duration-200"
                    >
                        <ChevronLeft size={48} />
                    </button>
                    <button
                        onClick={() => handleImageChange((currentImage + 1) % vehicle.images.length)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 transition-colors duration-200"
                    >
                        <ChevronRight size={48} />
                    </button>
                    <img
                        src={vehicle.images[currentImage]}
                        alt={vehicle.title}
                        className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${imgFade ? "opacity-0" : "opacity-100"}`}
                    />
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-lg">
                        {currentImage + 1} / {vehicle.images.length}
                    </div>
                </div>
            )}

            {/* Animations */}
            <style jsx global>{`
                .animate-fadein {
                    animation: fadein 0.5s;
                }
                @keyframes fadein {
                    from { opacity: 0; transform: translateY(16px);}
                    to { opacity: 1; transform: translateY(0);}
                }
            `}</style>
        </div>
    );
}