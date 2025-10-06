'use client';
import FooterArena from "@/components/Footer";

export default function About() {
    return (
        <div className="w-screen h-screen overflow-auto">
            {/* Hero Section */}
            <section className="relative w-screen h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
                <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrJQ28tAsPR_PXbQWxd8ZeEPMaqJtYdacbYdAuR2nvSPLTiGPfQ-41KNI5p4aFdhOnqjmDoNgP2TD3aVtU5z1k28WV3gAi5h0VstMQA-izm2Xrhi-OpY-AgmWfhz_jS00CBu20=s1360-w1360-h1020-rw')] bg-cover bg-center opacity-20"></div>
                <div className="relative z-10 text-center px-8">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl">
                        O nama
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mb-6"></div>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                        Vaš pouzdani partner u svijetu premium vozila
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="w-full px-8 py-20 bg-white">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Naša priča</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 mt-2">
                                Arena Motors - Tradicija i kvalitet
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 mb-6"></div>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Arena Motors je osnovan s jasnom vizijom - pružiti kupcima vrhunsko iskustvo kupovine vozila uz punu transparentnost i profesionalnost. Kroz godine rada, izgradili smo reputaciju kao jedan od najuglednijih prodavaca premium vozila u Bosni i Hercegovini.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Naš tim čine stručnjaci s dugogodišnjim iskustvom u automobilskoj industriji, posvećeni pružanju individualnog pristupa svakom kupcu. Vjerujemo da kupovina automobila treba biti uzbudljivo i pozitivno iskustvo, bez stresa i nejasnoća.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                U Arena Motors, svako vozilo prolazi rigoroznu kontrolu kvaliteta i dobiva detaljnu istoriju. Naša misija je da vam omogućimo sigurnu kupovinu vozila koje će vam pružiti pouzdanost i zadovoljstvo tokom godina vožnje.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-gradient-to-br from-red-100 to-red-50 rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrJQ28tAsPR_PXbQWxd8ZeEPMaqJtYdacbYdAuR2nvSPLTiGPfQ-41KNI5p4aFdhOnqjmDoNgP2TD3aVtU5z1k28WV3gAi5h0VstMQA-izm2Xrhi-OpY-AgmWfhz_jS00CBu20=s1360-w1360-h1020-rw"
                                    alt="Arena Motors showroom"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="w-full px-8 py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="max-w-screen-xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Naše vrijednosti</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 mt-2">Šta nas čini posebnima</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-tr from-red-400 to-red-600 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">Transparentnost</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Potpuna otvorenost u svakom koraku procesa. Sve informacije o vozilima su dostupne, bez skrivenih troškova ili iznenađenja.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-tr from-red-400 to-red-600 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">Kvalitet</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Svako vozilo prolazi detaljan pregled i certificiranje. Nudimo samo provjerena vozila najvišeg kvaliteta.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-tr from-red-400 to-red-600 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">Posvećenost</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Vaše zadovoljstvo je naš prioritet. Pružamo podršku i savjete prije, tokom i nakon kupovine.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="w-full px-8 py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
                <div className="max-w-screen-xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Arena Motors u brojkama</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-2">1000+</div>
                            <p className="text-gray-400 text-base md:text-lg">Zadovoljnih kupaca</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-2">500+</div>
                            <p className="text-gray-400 text-base md:text-lg">Vozila godišnje</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-2">100%</div>
                            <p className="text-gray-400 text-base md:text-lg">Transparentnost</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="w-full px-8 py-20 bg-white">
                <div className="max-w-screen-xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Naš tim</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 mt-2">Upoznajte stručnjake</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mb-4"></div>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Naš tim sastoji se od iskusnih profesionalaca posvećenih pružanju najbolje usluge
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Dijana - Direktor */}
                        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-2xl transition-all duration-300">
                            <div className="aspect-square bg-gradient-to-br from-red-100 to-red-50 overflow-hidden">
                                {/* Ovdje ide slika ako želiš */}
                            </div>
                            <div className="p-6 flex flex-col justify-between h-full">
                                <div className="w-full">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Dijana Tomić</h3>
                                    <p className="text-red-600 font-semibold mb-3">Direktor prodaje</p>
                                    <p className="text-gray-600">Stručnjak sa 10+ godina iskustva u automobilskoj industriji</p>
                                </div>
                            </div>
                        </div>

                        {/* Saša - Prodajni radnik */}
                        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-2xl transition-all duration-300">
                            <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 overflow-hidden">
                                {/* Slika */}
                            </div>
                            <div className="p-6 flex flex-col justify-between h-full">
                                <div className="w-full">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Saša Kutlača</h3>
                                    <p className="text-red-600 font-semibold mb-3">Prodajni radnik</p>
                                    <p className="text-gray-600">Posvećen pružanju personalnog iskustva svakom kupcu</p>
                                </div>
                            </div>
                        </div>

                        {/* Nemanja - Prodajni radnik */}
                        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-2xl transition-all duration-300">
                            <div className="aspect-square bg-gradient-to-br from-green-100 to-green-50 overflow-hidden">
                                {/* Slika */}
                            </div>
                            <div className="p-6 flex flex-col justify-between h-full">
                                <div className="w-full">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Nemanja Lubura</h3>
                                    <p className="text-red-600 font-semibold mb-3">Prodajni radnik</p>
                                    <p className="text-gray-600">Posvećen pružanju personalnog iskustva svakom kupcu</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full px-8 py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="max-w-screen-xl mx-auto">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl overflow-hidden shadow-2xl p-12 lg:p-16 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Postanite dio naše priče
                        </h2>
                        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                            Posjetite nas i uvjerite se zašto su stotine kupaca odabrali Arena Motors za svoje novo vozilo
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/all-vehicles" className="inline-block px-8 py-4 bg-white text-red-600 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all">
                                Pregledaj vozila
                            </a>
                            <a href="/contact" className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-xl font-bold hover:bg-white/20 transition-all">
                                Kontaktiraj nas
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <FooterArena />
        </div>
    );
}