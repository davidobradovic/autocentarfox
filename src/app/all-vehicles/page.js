'use client';

import CarCard from "@/components/CarCard";
import FooterArena from "@/components/Footer";
import SmallCarCard from "@/components/SmallCarCard";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function AllVehiclesContent() {
    const searchParams = useSearchParams();

    const [vehicles, setVehicles] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardType, setCardType] = useState('small');
    const [searchTerm, setSearchTerm] = useState('');
    const [query, setQuery] = useState('');
    const [isInitialized, setIsInitialized] = useState(false);

    const fetchVehicles = async (page = 1, q = '') => {
        try {
            const res = await axios.get(`/api/proxy/api/search`, {
                params: {
                    attr: '',
                    attr_encoded: 1,
                    user_id: 3300229,
                    per_page: 40,
                    page,
                    q,
                },
            });
            setVehicles(res.data);
        } catch (err) {
            console.error("Greška prilikom dohvata vozila:", err);
        }
    };
    useEffect(() => {
        const qParam = searchParams.get('q');
        if (qParam) {
            setQuery(qParam);
            setSearchTerm(qParam);
        }
        setIsInitialized(true);
    }, [searchParams]);

    useEffect(() => {
        if (isInitialized) {
            fetchVehicles(currentPage, query);
        }
    }, [currentPage, query, isInitialized]);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setCurrentPage(1);
        setQuery(searchTerm.trim());
    };

    const handlePageChange = (page) => {
        if (page !== currentPage && page > 0 && page <= vehicles?.meta?.last_page) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const generatePageNumbers = () => {
        const pages = [];
        const totalPages = vehicles?.meta?.last_page || 1;
        const current = currentPage;

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (current <= 3) {
                for (let i = 1; i <= 4; i++) pages.push(i);
                pages.push('...');
                pages.push(totalPages);
            } else if (current >= totalPages - 2) {
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
            } else {
                pages.push(1);
                pages.push('...');
                for (let i = current - 1; i <= current + 1; i++) pages.push(i);
                pages.push('...');
                pages.push(totalPages);
            }
        }
        return pages;
    };

    return (
        <div className="w-screen h-screen overflow-auto">
            {/* Hero Section with Search */}
            <section className="relative w-screen h-[70vh] flex items-end p-8 justify-center bg-[url('https://res.cloudinary.com/dxo3z5off/image/upload/w_1000/q_auto/f_auto/v1759824787/DSC04258_i5xdhq.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
                <div className="relative z-10 w-full max-w-5xl mb-12">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-2xl">
                            {query ? `Rezultati pretrage: "${query}"` : 'Sva vozila'}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 font-light">
                            {vehicles?.meta?.total ? `Pronađeno ${vehicles.meta.total} vozila` : 'Pregledajte našu kompletnu ponudu'}
                        </p>
                    </div>
                    <div className="quick-search p-8 rounded-2xl bg-white/10 text-white backdrop-blur-xl border border-white/20 shadow-2xl">
                        <h2 className="text-2xl mb-5 font-semibold">Pretraži vozila</h2>
                        <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSearchSubmit}>
                            <input
                                type="text"
                                placeholder="Unesite pojam za pretragu (marka, model, godina...)"
                                className="bg-white/10 text-white placeholder:text-gray-300 outline-none rounded-xl px-5 py-4 flex-1 border border-white/20 focus:border-red-400 transition"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="bg-gradient-to-tr from-red-500 to-red-600 text-white rounded-xl px-8 py-4 hover:shadow-2xl hover:scale-105 transition-all font-bold"
                            >
                                Pretraži
                            </button>
                        </form>
                        {query && (
                            <button
                                onClick={() => {
                                    setQuery('');
                                    setSearchTerm('');
                                    setCurrentPage(1);
                                }}
                                className="text-sm text-gray-300 hover:text-white mt-3 underline"
                            >
                                Obriši pretragu
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {/* Vehicles Section */}
            <section className="w-full px-4 py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="max-w-screen-2xl mx-auto">
                    {/* Header sa View Toggle */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                Vozila u ponudi
                            </h2>
                            <p className="text-gray-600">
                                {vehicles?.meta ? (
                                    <>
                                        Prikazano {((currentPage - 1) * 40) + 1} - {Math.min(currentPage * 40, vehicles.meta.total)} od {vehicles.meta.total} vozila
                                    </>
                                ) : (
                                    'Učitavanje...'
                                )}
                            </p>
                        </div>

                        {/* View Type Buttons */}
                        <div className="flex gap-3 bg-white rounded-xl p-2 shadow-md border border-gray-200">
                            <button
                                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${cardType === 'small'
                                        ? 'bg-gradient-to-tr from-red-500 to-red-600 text-white shadow-lg'
                                        : 'bg-transparent text-gray-600 hover:bg-gray-100'
                                    }`}
                                onClick={() => setCardType('small')}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                                <span className="hidden sm:inline">Grid</span>
                            </button>
                            <button
                                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${cardType === 'large'
                                        ? 'bg-gradient-to-tr from-red-500 to-red-600 text-white shadow-lg'
                                        : 'bg-transparent text-gray-600 hover:bg-gray-100'
                                    }`}
                                onClick={() => setCardType('large')}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                </svg>
                                <span className="hidden sm:inline">Lista</span>
                            </button>
                        </div>
                    </div>

                    {/* Vehicles Grid/List */}
                    {vehicles?.data?.length > 0 ? (
                        <div className={`grid ${cardType === 'small'
                                ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'
                                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6'
                            } mb-12`}>
                            {vehicles.data.map((vehicle, idx) => (
                                <div key={idx} className="w-full">
                                    {cardType === 'small' ? (
                                        <SmallCarCard vehicle={vehicle} />
                                    ) : (
                                        <CarCard vehicle={vehicle} />
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full mb-6">
                                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                {query ? 'Nema rezultata za pretragu' : 'Nema vozila za prikaz'}
                            </h3>
                            <p className="text-gray-600 mb-8">
                                {query ? 'Pokušajte sa drugačijim pojmom pretrage' : 'Trenutno nema dostupnih vozila'}
                            </p>
                            {query && (
                                <button
                                    onClick={() => {
                                        setQuery('');
                                        setSearchTerm('');
                                        setCurrentPage(1);
                                    }}
                                    className="inline-block px-8 py-3 bg-gradient-to-tr from-red-500 to-red-600 text-white rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
                                >
                                    Prikaži sva vozila
                                </button>
                            )}
                        </div>
                    )}

                    {/* Pagination */}
                    {vehicles?.meta && vehicles.meta.last_page > 1 && (
                        <div className="flex flex-col items-center gap-6">
                            <div className="flex justify-center items-center gap-2 flex-wrap">
                                {/* Previous Button */}
                                <button
                                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${currentPage === 1
                                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                            : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md border border-gray-200'
                                        }`}
                                    disabled={currentPage === 1}
                                    onClick={() => handlePageChange(currentPage - 1)}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                {/* Page Numbers */}
                                {generatePageNumbers().map((page, idx) => (
                                    page === '...' ? (
                                        <span key={`ellipsis-${idx}`} className="px-4 py-2 text-gray-500">
                                            ...
                                        </span>
                                    ) : (
                                        <button
                                            key={page}
                                            className={`px-4 py-2 rounded-lg font-semibold transition-all ${currentPage === page
                                                    ? 'bg-gradient-to-tr from-red-500 to-red-600 text-white shadow-lg scale-110'
                                                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md border border-gray-200'
                                                }`}
                                            onClick={() => handlePageChange(page)}
                                        >
                                            {page}
                                        </button>
                                    )
                                ))}

                                {/* Next Button */}
                                <button
                                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${currentPage === vehicles.meta.last_page
                                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                            : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md border border-gray-200'
                                        }`}
                                    disabled={currentPage === vehicles.meta.last_page}
                                    onClick={() => handlePageChange(currentPage + 1)}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Page Info */}
                            <p className="text-sm text-gray-600">
                                Stranica {currentPage} od {vehicles.meta.last_page}
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full px-8 py-20 bg-white">
                <div className="max-w-screen-xl mx-auto">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl overflow-hidden shadow-2xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                            <div className="p-12 lg:p-16">
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                    Niste pronašli ono što tražite?
                                </h2>
                                <p className="text-white/90 text-lg mb-8 leading-relaxed">
                                    Kontaktirajte nas direktno i naš tim će vam pomoći da pronađete savršeno vozilo za vaše potrebe.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a href="/contact" className="inline-block px-8 py-4 bg-white text-red-600 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all text-center">
                                        Kontaktiraj nas
                                    </a>
                                    <a href="/" className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-xl font-bold hover:bg-white/20 transition-all text-center">
                                        Nazad na početnu
                                    </a>
                                </div>
                            </div>
                            <div className="h-full min-h-[300px] lg:min-h-[400px] relative">
                                <img
                                    src="https://res.cloudinary.com/dxo3z5off/image/upload/w_1000/q_auto/f_auto/v1759824792/DSC04098_ehlxcn.jpg"
                                    alt="Contact us"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-red-600/20"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterArena />
        </div>
    );
}



export default function Home() {
    return (
        <Suspense fallback={
            <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="text-center">
                    <div className="inline-block w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-gray-600 font-medium">Učitavanje...</p>
                </div>
            </div>
        }>
            <AllVehiclesContent />
        </Suspense>
    );
}