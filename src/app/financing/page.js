'use client';
import FooterArena from "@/components/Footer";
import { useState } from "react";

export default function Financing() {
    const [loanAmount, setLoanAmount] = useState(20000);
    const [loanTerm, setLoanTerm] = useState(60);
    const [interestRate] = useState(5.9);

    const calculateMonthlyPayment = () => {
        const monthlyRate = interestRate / 100 / 12;
        const payment =
            (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) /
            (Math.pow(1 + monthlyRate, loanTerm) - 1);
        return payment.toFixed(2);
    };

    const totalPayment = (calculateMonthlyPayment() * loanTerm).toFixed(2);
    const totalInterest = (totalPayment - loanAmount).toFixed(2);

    return (
        <div className="w-screen h-screen overflow-auto">
            {/* Hero Section */}
            <section className="relative w-screen h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
                <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1661319063327-ccb1da3003a4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-20"></div>
                <div className="relative z-10 text-center px-8">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl">
                        Finansiranje
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mb-6"></div>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                        Uz Arena Motors i naše partnere do povoljnog načina kupovine vašeg automobila
                    </p>
                </div>
            </section>

            {/* Informacije o finansiranju */}
            <section className="w-full px-8 py-20 bg-white">
                <div className="max-w-screen-xl mx-auto text-center">
                    <div className="text-center mb-10">
                        <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Leasing Partneri</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 mt-2 uppercase">
                            Izaberite svog Leasing Partnera
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mb-4"></div>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Izaberite nekog od naših leasing partnera.
                        </p>
                    </div>
                    <p className="text-gray-700 text-base max-w-screen-md mx-auto leading-relaxed">
                        Kako bismo vam omogućili da ostvarite svoje želje i na najpovoljniji način dođete do svog polovnog ljubimca, pored bezgotovinskog plaćanja, imate mogućnost odabira sledećih opcija finansiranja kupovine: kredit za polovne automobile i finansiranje kupovine naših vozila putem finansijskog leasinga u saradnji sa našim partnerima Raiffeisen, Porsche i Sparkasse leasinga uz najbolje moguće kamate.
                    </p>

                    <div className="grid grid-cols-2 gap-6 mt-4">
                        <a href="" className="rounded-xl aspect-square md:aspect-video shadow-xl bg-[url('https://www.porscheleasing.bg/imager/filesbulgaria/781259/PL_2023-06-21-085504_rvjq_895365e7bb7a51c39e1d249889138d6f.JPG')] bg-cover bg-center"></a>
                        <a href="" className="rounded-xl aspect-square md:aspect-video shadow-xl bg-[url('https://cdn0.erstegroup.com/content/dam/at/ebv/www_s-leasing_at/logos/AT-sLeasing_Special_screen_logo_quadratisch_RGB.png')] bg-cover bg-center"></a>
                        <a href="" className="rounded-xl col-span-2 shadow-xl h-30 md:h-60 bg-[url('https://play-lh.googleusercontent.com/UcF6ild_J2_wcypgJRH47wLAHkGjZNfp7IlEzvrLmfWbfNFDsdfFpx6USRZ8ZgEkFQ=w3840-h2160-rw')] bg-cover bg-center"></a>
                    </div>
                </div>
            </section>

            {/* Calculator Section */}


            <FooterArena />
        </div>
    );
}


// <section className="w-full px-8 py-20 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
//     <div className="max-w-screen-xl mx-auto">
//         <div className="text-center mb-16">
//             <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Kalkulator kredita</span>
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 mt-2">
//                 Izračunajte svoju mjesečnu ratu
//             </h2>
//             <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mb-4"></div>
//             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//                 Koristite naš kalkulator da procijenite mjesečnu ratu kredita za vaše vozilo.
//             </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//             {/* Inputs */}
//             <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-8">Parametri kredita</h3>
//                 <div className="space-y-8">
//                     {/* Loan amount */}
//                     <div>
//                         <div className="flex justify-between mb-3">
//                             <label className="text-sm font-semibold text-gray-700">Iznos kredita</label>
//                             <span className="text-2xl font-bold text-red-600">
//                                 {loanAmount.toLocaleString()} KM
//                             </span>
//                         </div>
//                         <input
//                             type="range"
//                             min="5000"
//                             max="100000"
//                             step="1000"
//                             value={loanAmount}
//                             onChange={(e) => setLoanAmount(Number(e.target.value))}
//                             className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer"
//                         />
//                     </div>

//                     {/* Loan term */}
//                     <div>
//                         <div className="flex justify-between mb-3">
//                             <label className="text-sm font-semibold text-gray-700">Period otplate</label>
//                             <span className="text-2xl font-bold text-red-600">{loanTerm} mjeseci</span>
//                         </div>
//                         <input
//                             type="range"
//                             min="12"
//                             max="84"
//                             step="12"
//                             value={loanTerm}
//                             onChange={(e) => setLoanTerm(Number(e.target.value))}
//                             className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer"
//                         />
//                     </div>

//                     <div className="pt-6 border-t border-gray-200">
//                         <div className="flex justify-between">
//                             <span className="text-sm font-semibold text-gray-700">Kamatna stopa</span>
//                             <span className="text-xl font-bold text-gray-900">{interestRate}%</span>
//                         </div>
//                         <p className="text-xs text-gray-500 mt-2">
//                             *Informativna kamatna stopa. Konačna stopa zavisi od partnera i kreditne sposobnosti.
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Results */}
//             <div className="space-y-6">
//                 <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl p-8 text-white shadow-2xl">
//                     <h3 className="text-xl font-semibold mb-2 text-white/80">Vaša mjesečna rata</h3>
//                     <div className="text-5xl md:text-6xl font-extrabold mb-6">
//                         {calculateMonthlyPayment()} KM
//                     </div>
//                     <div className="space-y-3 pt-6 border-t border-white/20">
//                         <div className="flex justify-between text-lg">
//                             <span className="text-white/80">Ukupno za plaćanje:</span>
//                             <span className="font-bold">{Number(totalPayment).toLocaleString()} KM</span>
//                         </div>
//                         <div className="flex justify-between text-lg">
//                             <span className="text-white/80">Ukupna kamata:</span>
//                             <span className="font-bold">{Number(totalInterest).toLocaleString()} KM</span>
//                         </div>
//                     </div>
//                 </div>

//                 <a
//                     href="/contact"
//                     className="block w-full py-4 px-6 bg-gradient-to-tr from-red-500 to-red-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center text-lg"
//                 >
//                     Aplicirajte sada
//                 </a>
//             </div>
//         </div>
//     </div>
// </section>