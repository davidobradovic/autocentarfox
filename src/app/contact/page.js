'use client';
import FooterArena from "@/components/Footer";
import { Facebook, Instagram } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'general',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ovdje bi se slali podaci na backend
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: 'general',
                message: ''
            });
        }, 3000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="w-screen h-screen overflow-auto">
            {/* Hero Section */}
            <section className="relative w-screen h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
                <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dxo3z5off/image/upload/w_1000/q_auto/f_auto/v1759825449/DJI_0222_dlsgg8.webp')] bg-cover bg-center opacity-20"></div>
                <div className="relative z-10 text-center px-8">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl">
                        Kontaktirajte nas
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mb-6"></div>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                        Ovdje smo da odgovorimo na sva vaša pitanja
                    </p>
                </div>
            </section>

            {/* Contact Info & Form Section */}
            <section className="w-full px-8 py-20 bg-white">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-1 gap-12">
                        {/* Contact Info - Left Side (2 columns) */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Stupite u kontakt</span>
                                <h2 className="text-4xl font-bold mb-6 text-gray-900 mt-2">
                                    Kontakt informacije
                                </h2>
                                <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 mb-6"></div>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Naš tim je dostupan da odgovori na vaša pitanja i pomogne vam u pronalaženju savršenog vozila.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg mb-1">Adresa</h3>
                                        <p className="text-gray-600">Ive Andrića 6</p>
                                        <p className="text-gray-600">71123 I.Sarajevo, BiH</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="font-bold text-gray-900 text-lg mb-1">Telefon</h3>
                                        <a href="tel:+38766444016" className="text-blue-600">Saša 066/444-016</a>
                                        <a href="tel:+38766444644" className="text-blue-600">Dijana 066/444-644</a>
                                        <a href="tel:+38761320320" className="text-blue-600">Nemanja 061/320-320</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg mb-1">Email</h3>
                                        <p className="text-gray-600">info@arenamotors.ba</p>
                                        <p className="text-gray-600">prodaja@arenamotors.ba</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg mb-1">Radno vrijeme</h3>
                                        <p className="text-gray-600">Pon - Sub: 09:00 - 18:00</p>
                                        <p className="text-gray-600">Nedjelja: Zatvoreno</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="pt-8 border-t border-gray-200">
                                <h3 className="font-bold text-gray-900 text-lg mb-4">Pratite nas</h3>
                                <div className="flex gap-4">
                                    <a href="https://www.instagram.com/arena_motors_sarajevo/?hl=en" className="w-12 h-12 bg-gray-100 hover:bg-red-600 hover:text-white rounded-xl flex items-center justify-center transition-all group">
                                        <Instagram />
                                    </a>
                                    <a href="https://www.facebook.com/arenasarajevo/" className="w-12 h-12 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-xl flex items-center justify-center transition-all group">
                                        <Facebook />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form - Right Side (3 columns) */}
                        {/* <div className="lg:col-span-3">
                            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-8 lg:p-10 shadow-xl">
                                <h3 className="text-3xl font-bold text-gray-900 mb-6">Pošaljite nam poruku</h3>

                                {submitted ? (
                                    <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h4 className="text-2xl font-bold text-gray-900 mb-2">Hvala vam!</h4>
                                        <p className="text-gray-600">Vaša poruka je uspješno poslata. Kontaktirat ćemo vas uskoro.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Ime i prezime *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-red-500 transition"
                                                    placeholder="Vaše ime i prezime"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Email adresa *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-red-500 transition"
                                                    placeholder="vas@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Broj telefona
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-red-500 transition"
                                                    placeholder="+387 6x xxx xxx"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Predmet upita *
                                                </label>
                                                <select
                                                    id="subject"
                                                    name="subject"
                                                    required
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-red-500 transition"
                                                >
                                                    <option value="general">Opći upit</option>
                                                    <option value="buying">Kupovina vozila</option>
                                                    <option value="selling">Prodaja vozila</option>
                                                    <option value="financing">Finansiranje</option>
                                                    <option value="service">Servis</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Vaša poruka *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="6"
                                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-red-500 transition resize-none"
                                                placeholder="Napišite vašu poruku ovdje..."
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full py-4 bg-gradient-to-tr from-red-500 to-red-600 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                                        >
                                            Pošalji poruku
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="w-full px-8 py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="max-w-screen-xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Lokacija</span>
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 mt-2">Posjetite nas</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mb-4"></div>
                        <p className="text-gray-600 text-lg">Pronađite nas u centru Sarajeva</p>
                    </div>

                    <div className="rounded-3xl overflow-hidden shadow-2xl h-96 bg-gray-300">
                        {/* Ovdje bi išla Google Maps integracija */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.157636597384!2d18.362079076708138!3d43.827942541110595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c97a09528729%3A0xbd6471b0f460dfd2!2sArena%20Motors%20-%20Auto%20salon%20Sarajevo!5e1!3m2!1sen!2sba!4v1759753805447!5m2!1sen!2sba" style={{ borderRadius: 20, width: '100%', height: 400 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="w-full px-8 py-20 bg-white">
                <div className="max-w-screen-xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Često postavljana pitanja</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 mt-2">Imate pitanja?</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mb-4"></div>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">Ovdje su odgovori na najčešća pitanja naših kupaca</p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-4">
                        <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Kako mogu zakazati testnu vožnju?</h3>
                            <p className="text-gray-600 leading-relaxed">Testnu vožnju možete zakazati telefonom, emailom ili direktno putem kontakt forme na ovoj stranici. Naš tim će vas kontaktirati u najkraćem roku kako bi se dogovorio pogodan termin.</p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Da li prihvatate zamjenu vozila?</h3>
                            <p className="text-gray-600 leading-relaxed">Da, prihvatamo vozila u zamjenu. Naš stručni tim će izvršiti besplatnu procjenu vašeg vozila i ponuditi fer cijenu za otkup ili zamjenu.</p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Koja dokumentacija je potrebna za kupovinu?</h3>
                            <p className="text-gray-600 leading-relaxed">Za kupovinu vozila potrebna je lična karta ili pasoš. Naš tim će vas provesti kroz cijeli proces i pomoći sa svim potrebnim dokumentima i registracijom.</p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Da li nudite garanciju na vozila?</h3>
                            <p className="text-gray-600 leading-relaxed">Da, sva naša vozila dolaze sa garancijom. Trajanje i obim garancije zavisi od modela i starosti vozila. Detaljne informacije možete dobiti od našeg osoblja.</p>
                        </div>
                    </div>
                </div>
            </section>

            <FooterArena />
        </div>
    );
}