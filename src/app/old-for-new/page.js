'use client';
import FooterArena from '@/components/Footer';
import { RefreshCw, TrendingUp, FileCheck, Zap, DollarSign, Clock, CheckCircle, ArrowRight } from 'lucide-react';

export default function TradeInPage() {
    return (
        <div className="w-screen min-h-screen overflow-auto bg-white">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200')] bg-cover bg-center opacity-20"></div>
                <div className="relative z-10 text-center px-8 max-w-4xl">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full mb-6 shadow-2xl">
                        <RefreshCw className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-2xl">
                        Staro za Novo
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto">
                        Nadogradite svoje vozilo brzo, jednostavno i po fer cijeni
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="w-full px-8 py-20 bg-white">
                <div className="max-w-screen-xl mx-auto">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Kako funkcionira</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
                            Zamjenite svoje vozilo za novo
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mb-6"></div>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Imate stariji model i želite noviji? Arena Motors nudi program "Staro za Novo" - dođite sa vašim vozilom, naš stručni tim će uraditi profesionalnu procjenu i ponuditi vam realnu tržišnu cijenu. Doplatite razliku i vozite se u novom automobilu još danas!
                        </p>
                    </div>

                    {/* Example Card */}
                    <div className="max-w-5xl mx-auto mb-16">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Primjer zamjene</h3>
                            <p className="text-gray-600">Pogledajte kako funkcionira proces</p>
                        </div>

                        <div className="relative pb-8">
                            {/* Background decoration */}
                            <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-red-600/20 rounded-3xl"></div>

                            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-12">
                                {/* Your Vehicle */}
                                <div className="relative">
                                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-300">
                                        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-50 relative overflow-hidden">
                                            <img
                                                src="https://d4n0y8dshd77z.cloudfront.net/listings/70356207/lg/img-1756108217-e5154ec5f10d.jpg"
                                                alt="Tiguan 2020"
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg">
                                                <span className="text-white text-sm font-medium">Vaše vozilo</span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h4 className="text-2xl font-bold text-gray-900 mb-2">Tiguan 2020</h4>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-sm text-gray-500">Procjena:</span>
                                                <span className="text-xl font-bold text-gray-900">52.900 KM</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Payment Addition */}
                                <div className="flex flex-col justify-center items-center ">
                                    <div className="bg-white rounded-2xl shadow-xl border-2 border-red-100 p-8 w-full max-w-xs">
                                        <div className="text-center">
                                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full mb-4 shadow-lg">
                                                <span className="text-3xl font-bold text-white">+</span>
                                            </div>
                                            <p className="text-gray-600 text-sm mb-2 uppercase tracking-wider">Doplata</p>
                                            <p className="text-4xl font-extrabold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                                                7.000 KM
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                {/* New Vehicle */}
                                <div className="relative">
                                    <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                                        <div className="aspect-video relative overflow-hidden">
                                            <img
                                                src="https://d4n0y8dshd77z.cloudfront.net/listings/70894161/lg/img-1758046593-634c6278d7e9.jpg"
                                                alt="Tiguan 2022"
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-br from-red-600/40 to-red-900/40"></div>
                                            <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/30">
                                                <span className="text-white text-sm font-medium">Novo vozilo</span>
                                            </div>
                                        </div>
                                        <div className="p-6 bg-gradient-to-br from-red-500 to-red-600">
                                            <h4 className="text-2xl font-bold text-white mb-2">Tiguan 2022</h4>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-sm text-white/80">Ukupno:</span>
                                                <span className="text-xl font-bold text-white">59.900 KM</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Info */}
                            <div className="relative mt-8 text-center">
                                <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-6 py-3">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <span className="text-green-800 font-medium">Ušteda od 7.000 KM u odnosu na standardnu kupovinu</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Process Steps */}
                    <div className="mb-20">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                            Jednostavan proces u 4 koraka
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Step 1 */}
                            <div className="relative">
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full mb-6 shadow-lg">
                                        <span className="text-3xl font-bold text-white">1</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-3">Dođite sa vozilom</h4>
                                    <p className="text-gray-600">Posjetite naš salon sa vašim trenutnim vozilom</p>
                                </div>
                                <div className="hidden lg:block absolute top-10 right-0 transform translate-x-1/2">
                                    <ArrowRight className="w-6 h-6 text-red-400" />
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative">
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full mb-6 shadow-lg">
                                        <span className="text-3xl font-bold text-white">2</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-3">Procjena</h4>
                                    <p className="text-gray-600">Naš stručni tim vrši detaljnu procjenu vozila</p>
                                </div>
                                <div className="hidden lg:block absolute top-10 right-0 transform translate-x-1/2">
                                    <ArrowRight className="w-6 h-6 text-red-400" />
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative">
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full mb-6 shadow-lg">
                                        <span className="text-3xl font-bold text-white">3</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-3">Ponuda</h4>
                                    <p className="text-gray-600">Dobijate realnu tržišnu cijenu za vaše vozilo</p>
                                </div>
                                <div className="hidden lg:block absolute top-10 right-0 transform translate-x-1/2">
                                    <ArrowRight className="w-6 h-6 text-red-400" />
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full mb-6 shadow-lg">
                                    <span className="text-3xl font-bold text-white">4</span>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">Novo vozilo</h4>
                                <p className="text-gray-600">Doplatite razliku i vozite se u novom automobilu</p>
                            </div>
                        </div>
                    </div>

                    {/* Benefits */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 md:p-16">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                            Zašto izabrati Arena Motors za zamjenu?
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                                    <TrendingUp className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2 text-lg">Fer cijene</h4>
                                <p className="text-gray-600">Realne tržišne procjene bez skrivenih troškova</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                                    <Zap className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2 text-lg">Brza obrada</h4>
                                <p className="text-gray-600">Procjena i zamjena u najkraćem mogućem roku</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                                    <FileCheck className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2 text-lg">Bez papirologija</h4>
                                <p className="text-gray-600">Mi se brinemo o svim administrativnim postupcima</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                                    <DollarSign className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2 text-lg">Fleksibilno plaćanje</h4>
                                <p className="text-gray-600">Opcije finansiranja za doplatu prilagođene vama</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                                    <CheckCircle className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2 text-lg">Transparentnost</h4>
                                <p className="text-gray-600">Svaki korak procjene je jasan i dokumentovan</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                                    <Clock className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2 text-lg">Odmah u novom vozilu</h4>
                                <p className="text-gray-600">Bez čekanja - vozite se novim autom istog dana</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Accept */}
           

            {/* CTA Section */}
            <section className="w-full px-8 py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
                <div className="max-w-screen-xl mx-auto">
                    <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl overflow-hidden shadow-2xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                            <div className="p-12 lg:p-16">
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                    Spremni za nadogradnju?
                                </h2>
                                <p className="text-white/90 text-lg mb-8 leading-relaxed">
                                    Posjetite nas sa vašim vozilom i saznajte koliko možete dobiti za zamjenu. Naš stručni tim je tu da vam pomogne pronaći savršeno novo vozilo.
                                </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3 text-white">
                                        <CheckCircle className="w-6 h-6 flex-shrink-0" />
                                        <span>Besplatna procjena vozila</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-white">
                                        <CheckCircle className="w-6 h-6 flex-shrink-0" />
                                        <span>Realne tržišne cijene</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-white">
                                        <CheckCircle className="w-6 h-6 flex-shrink-0" />
                                        <span>Brza i jednostavna zamjena</span>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a href="/all-vehicles" className="inline-block px-8 py-4 bg-white text-red-600 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all text-center">
                                        Pregledaj vozila
                                    </a>
                                    <a href="/contact" className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-xl font-bold hover:bg-white/20 transition-all text-center">
                                        Zakažite procjenu
                                    </a>
                                </div>
                            </div>
                            <div className="h-full min-h-[300px] lg:min-h-[400px] relative">
                                <img
                                    src="https://d4n0y8dshd77z.cloudfront.net/listings/70625505/lg/img-1757096795-69e993153b79.jpg"
                                    alt="Car exchange"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-red-600/20"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="w-full px-8 py-20 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Često postavljana pitanja
                        </h3>
                        <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto"></div>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8">
                            <h4 className="font-bold text-gray-900 text-lg mb-3">Koliko traje procjena vozila?</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Procjena vozila obično traje 20-30 minuta. Naš stručni tim pažljivo pregledava vozilo i odmah vam daje fer ponudu.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8">
                            <h4 className="font-bold text-gray-900 text-lg mb-3">Da li moram kupiti vozilo kod vas?</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Ne morate, ali program "Staro za Novo" je optimizovan za klijente koji žele da zamijene svoje vozilo za jedno od naših vozila. To omogućava najbrži i najpovoljniji proces.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8">
                            <h4 className="font-bold text-gray-900 text-lg mb-3">Šta ako moje vozilo ima oštećenja?</h4>
                            <p className="text-gray-600 leading-relaxed">
                                I dalje možemo uraditi procjenu. Cijena će biti prilagođena stanju vozila, ali još uvijek možete koristiti program zamjene.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8">
                            <h4 className="font-bold text-gray-900 text-lg mb-3">Da li mogu finansirati doplatu?</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Da! Nudimo fleksibilne opcije finansiranja za doplatu, prilagođene vašem budžetu i potrebama.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <FooterArena />
        </div>
    );
}