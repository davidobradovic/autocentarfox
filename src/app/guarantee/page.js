'use client';
import FooterArena from '@/components/Footer';
import { Shield, CheckCircle, FileText, Award, Clock, Users } from 'lucide-react';

export default function WarrantyPage() {
    return (
        <div className="w-screen min-h-screen overflow-auto bg-white">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200')] bg-cover bg-center opacity-20"></div>
                <div className="relative z-10 text-center px-8 max-w-4xl">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full mb-6 shadow-2xl">
                        <Shield className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-2xl">
                        Garancija Kvaliteta
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto">
                        Vaše povjerenje je naša odgovornost. Garantujemo kvalitet svakog vozila.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="w-full px-8 py-20 bg-white">
                <div className="max-w-screen-xl mx-auto">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Naša obaveza prema vama</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
                            Zadovoljstvo na prvom mjestu
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mb-6"></div>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Zadovoljstvo naših klijenata nam je na prvom mjestu. Kako bismo to ostvarili, nabavljamo vozila provjerene kvalitete i poznatog porijekla. Naša vozila se prodaju sa garancijama tako da uz svaki kupljeni automobil dobijate sigurnost i mir.
                        </p>
                    </div>

                    {/* Three Guarantee Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {/* Guarantee 1 */}
                        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white border-2 border-red-100 hover:border-red-300 hover:shadow-2xl transition-all duration-500 p-8">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                            <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                                    <FileText className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Kilometraža</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Pismena garancija na broj pređenih kilometara u trajanju od 6 mjeseci - vaša sigurnost je zagarantovana
                                </p>
                            </div>
                        </div>

                        {/* Guarantee 2 */}
                        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white border-2 border-red-100 hover:border-red-300 hover:shadow-2xl transition-all duration-500 p-8">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                            <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                                    <Shield className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Motor</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Pismena garancija na motor u trajanju od 6 mjeseci - vaša sigurnost je zagarantovana
                                </p>
                            </div>
                        </div>

                        {/* Guarantee 3 */}
                        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white border-2 border-red-100 hover:border-red-300 hover:shadow-2xl transition-all duration-500 p-8">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                            <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                                    <Award className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mjenjač</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Pismena garancija na mjenjač u trajanju od 6 mjeseci - vaša sigurnost je zagarantovana
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Additional Benefits */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 md:p-16">
                        <div className="max-w-4xl mx-auto">
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                                Dodatne prednosti naše garancije
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-6 h-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Detaljni tehnički pregled</h4>
                                        <p className="text-gray-600">Svako vozilo prolazi sveobuhvatan tehnički pregled prije prodaje</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-6 h-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Provjereno porijeklo</h4>
                                        <p className="text-gray-600">Dokumentovana istorija vozila sa potvrđenim podacima</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-6 h-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Transparentnost</h4>
                                        <p className="text-gray-600">Svi detalji o vozilu dostupni prije kupovine</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-6 h-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2 text-lg">Podrška nakon kupovine</h4>
                                        <p className="text-gray-600">Naš tim je uvijek dostupan za sve vaše potrebe</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="w-full px-8 py-20 bg-white">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full mb-4">
                                <Clock className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-5xl font-extrabold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-2">6</div>
                            <p className="text-gray-600 font-medium">Mjeseci garancije na motor i mjenjač</p>
                        </div>
                        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full mb-4">
                                <Shield className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-5xl font-extrabold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-2">100%</div>
                            <p className="text-gray-600 font-medium">Provjerena vozila sa dokumentacijom</p>
                        </div>
                        <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full mb-4">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-5xl font-extrabold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-2">1000+</div>
                            <p className="text-gray-600 font-medium">Zadovoljnih kupaca</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full px-8 py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
                <div className="max-w-screen-xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Sigurna kupovina počinje ovdje
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Pregledajte naša vozila ili nas kontaktirajte za više informacija o garanciji
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/all-vehicles" className="inline-block px-8 py-4 bg-gradient-to-tr from-red-500 to-red-600 text-white rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all">
                            Pregledaj vozila
                        </a>
                        <a href="/contact" className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-xl font-bold hover:bg-white/20 transition-all">
                            Kontaktiraj nas
                        </a>
                    </div>
                </div>
            </section>

            <FooterArena />
        </div>
    );
}