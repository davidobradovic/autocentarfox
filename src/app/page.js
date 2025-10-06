// 'use client';
// import axios from "axios";
// import Image from "next/image";
// import { useRouter } from "next/navigation"; // PROMJENA: next/navigation umjesto next/router
// import { useEffect, useState } from "react";

// export default function Home() {

//   const router = useRouter(); // sad možeš odkomentirati
//   const [vehicles, setVehicles] = useState([])
//   const [searchInput, setSearchInput] = useState('');

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchInput.trim()) {
//       router.push(`/all-vehicles?q=${encodeURIComponent(searchInput.trim())}`);
//     }
//   };

//   const fetchVehicles = async (query) => {
//     const res = await axios.get(`https://olx.ba/api/search?&attr=&attr_encoded=1&user_id=3300229&per_page=20`);
//     setVehicles(res.data);
//   }

//   useEffect(() => {
//     fetchVehicles()
//   }, [])

//   return (
//     <div className="w-screen h-screen overflow-auto">
//       <section className="main-section w-screen flex items-end p-8 justify-center bg-[url('https://res.cloudinary.com/dxo3z5off/image/upload/f_auto,q_auto/v1/topc/qqrf1w1g7lpjzispybry')] bg-cover bg-bottom">
//         <div className="quick-search p-6 rounded bg-white/20 text-white backdrop-blur-lg border border-gray-50/50 w-full max-w-4xl">
//           <h2 className="text-2xl mb-4 font-semibold">Brza Pretraga</h2>
//           <form className="flex gap-3" onSubmit={handleSearch}>
//             <input
//               type="text"
//               placeholder="Unesite pojam za pretragu"
//               className="bg-gray-100/10 text-white outline-none rounded px-3 py-2 flex-1"
//               value={searchInput}
//               onChange={(e) => setSearchInput(e.target.value)}
//             />
//             <button type="submit" className="bg-gradient-to-tr from-red-400 to-red-600 text-white rounded px-6 py-2 hover:brightness-125 transition">
//               Pretraži
//             </button>
//           </form>
//           <p className="text-xs italic mt-2 opacity-60">Unesite pojam za pretragu, kako bi jednostavno pronašli odgovarajuće vozilo</p>
//         </div>
//       </section>=
//       {/* Welcome Section */}
//       <section className="w-full px-8 py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
//         <div className="max-w-screen-lg mx-auto text-center">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
//             DOBRODOŠLI U ARENA MOTORS
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mb-8"></div>
//           <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
//             Sa stručnjacima koji su na raspolaganju za bilo koji dio iskustva u kupovini automobila ili posjedovanju vozila, Arena Motors nudi finansiranje, servis automobila i veliki izbor vozila za kupce luksuznih automobila u Sarajevu, BiH. Arena Motors je vrhunski prodavac automobila.
//           </p>
//         </div>
//       </section>

//       {/* Two Column Services Section */}
//       <section className="w-full px-8 py-16 bg-white">
//         <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

//           {/* U POTRAZI STE ZA VOZILOM */}
//           <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-2xl transition-all duration-500">
//             <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//             <div className="relative p-8 md:p-10">
//               <div className="w-16 h-16 bg-gradient-to-tr from-red-400 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
//                 U POTRAZI STE ZA VOZILOM?
//               </h3>
//               <p className="text-gray-600 leading-relaxed text-base md:text-lg">
//                 U potrazi ste za novim vozilom? Arena Motors je vaša destinacija izbora! Sa širokim spektrom kvalitetnih polovnih vozila, pružamo vam nezaboravno iskustvo kupovine, gdje sigurnost i zadovoljstvo kupaca dolaze na prvom mjestu. Otkrijte savršeno vozilo koje odražava vaš stil i potrebe kod nas. Dobrodošli u budućnost vožnje, dobrodošli u Arena Motors.
//               </p>
//               <a href="/all-vehicles" className="inline-flex items-center mt-6 text-red-600 font-semibold group-hover:gap-3 gap-2 transition-all">
//                 Pogledaj vozila
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* ŽELITE PRODATI VAŠE VOZILO */}
//           <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-2xl transition-all duration-500">
//             <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//             <div className="relative p-8 md:p-10">
//               <div className="w-16 h-16 bg-gradient-to-tr from-red-400 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
//                 ŽELITE PRODATI VAŠE VOZILO?
//               </h3>
//               <p className="text-gray-600 leading-relaxed text-base md:text-lg">
//                 Želite prodati svoje vozilo? Arena Motors je tu da vam pomogne ostvariti brzu i efikasnu prodaju. Sa našim stručnim timom, garantujemo transparentnost, poštenu procijenu vrijednosti i jednostavan proces prodaje. Bez obzira na marku ili model, nudimo fer cijene i brze transakcije. Povjerite nam svoje vozilo i doživite bezbrižan proces prodaje kod Arena Motors - gdje se vaše zadovoljstvo stavlja na prvo mjesto.
//               </p>
//               <a href="/contact" className="inline-flex items-center mt-6 text-red-600 font-semibold group-hover:gap-3 gap-2 transition-all">
//                 Kontaktirajte nas
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Vehicles Section */}
//       <section className="w-full px-8 py-16 bg-gradient-to-br from-gray-50 to-gray-100">
//         <div className="max-w-screen-xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold mb-4 text-gray-900">Vozila u ponudi</h2>
//             <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mb-4"></div>
//             <p className="text-gray-600 text-lg">Pregledajte našu odabranu kolekciju kvalitetnih vozila</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//             {vehicles?.data?.length > 0 ? vehicles.data.slice(0, 4).map(vehicle => (
//               <a href={`/vehicles/${vehicle.id}`} key={vehicle.id} className="group">
//                 <div className="aspect-video bg-gray-200 rounded-2xl relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
//                   <img src={vehicle.image.replace('/sm/', '/lg/')} alt={vehicle.title} className="object-cover w-full h-full absolute top-0 left-0 group-hover:scale-110 transition-transform duration-700" />
//                   <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 group-hover:from-black/50 group-hover:to-black/80 transition-all duration-500"></div>
//                   <div className="p-6 relative z-10 w-full h-full flex flex-col justify-between">
//                     <h1 className="text-xl sm:text-2xl text-white font-bold drop-shadow-lg">{vehicle.title}</h1>
//                     <div>
//                       <div className="price-container mb-3">
//                         <span className="text-2xl sm:text-3xl font-extrabold text-white bg-black/60 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20">{vehicle.display_price}</span>
//                       </div>
//                       <div>
//                         <span className="text-sm text-white bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20">{vehicle.state === 'used' ? 'Polovno' : 'Novo'}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             )) : (
//               <div className="col-span-full text-center text-gray-500 py-12">Nema vozila za prikaz.</div>
//             )}
//           </div>
//           <div className="text-center">
//             <a className="inline-block py-4 px-8 bg-gradient-to-tr from-red-400 to-red-600 rounded-xl text-white font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300" href="/all-vehicles">
//               Pogledaj sva vozila
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

'use client';
import FooterArena from "@/components/Footer";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {

  const router = useRouter();
  const [vehicles, setVehicles] = useState([])
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      router.push(`/all-vehicles?q=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  const fetchVehicles = async (query) => {
    const res = await axios.get(`https://olx.ba/api/search?&attr=&attr_encoded=1&user_id=3300229&per_page=20`);
    setVehicles(res.data);
  }

  useEffect(() => {
    fetchVehicles()
  }, [])

  return (
    <div className="w-screen h-screen overflow-auto">
      {/* Hero Section with Search */}
      <section className="relative w-screen h-[90vh] flex items-end p-8 justify-center bg-[url('https://res.cloudinary.com/dxo3z5off/image/upload/f_auto,q_auto/v1/topc/qqrf1w1g7lpjzispybry')] bg-cover bg-bottom">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        <div className="relative z-10 w-full max-w-5xl mb-12">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-2xl">
              Vaša vizija. Naše vozilo.
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light">Premium prodaja vozila u srcu Sarajeva</p>
          </div>
          <div className="quick-search p-8 rounded-2xl bg-white/10 text-white backdrop-blur-xl border border-white/20 shadow-2xl">
            <h2 className="text-2xl mb-5 font-semibold">Brza Pretraga</h2>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Unesite pojam za pretragu (marka, model, godina...)"
                className="bg-white/10 text-white placeholder:text-gray-300 outline-none rounded-xl px-5 py-4 flex-1 border border-white/20 focus:border-red-400 transition"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button type="submit" className="bg-gradient-to-tr from-red-500 to-red-600 text-white rounded-xl px-8 py-4 hover:shadow-2xl hover:scale-105 transition-all font-bold">
                Pretraži
              </button>
            </form>
            <p className="text-sm italic mt-3 opacity-70">Pronađite vozilo koje savršeno odgovara vašim potrebama</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full px-8 py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

            <div className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-2">1000+</div>
              <p className="text-gray-400 text-sm md:text-base">Zadovoljnih kupaca</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-2">500+</div>
              <p className="text-gray-400 text-sm md:text-base">Vozila godišnje</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-2">100%</div>
              <p className="text-gray-400 text-sm md:text-base">Transparentnost</p>
            </div>

          </div>
        </div>
      </section>

      {/* About Arena Motors */}
      <section className="w-full px-8 py-20 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">O nama</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 mt-2">
                Dobrodošli u Arena Motors
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 mb-6"></div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Arena Motors je više od prodajnog mjesta automobila - mi smo vaš partner u pronalaženju savršenog vozila.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Naš tim stručnjaka posvećen je pružanju vrhunske usluge, od trenutka kada uđete do trenutka kada vozite svoje novo vozilo. Nudimo transparentne procjene, fleksibilne opcije finansiranja i sveobuhvatnu podršku nakon kupovine.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Certificirana vozila</h4>
                    <p className="text-gray-600">Sva vozila prolaze detaljan tehnički pregled i certifikaciju</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Fleksibilno finansiranje</h4>
                    <p className="text-gray-600">Prilagođeni planovi plaćanja koji odgovaraju vašem budžetu</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Brza obrada</h4>
                    <p className="text-gray-600">Efikasan proces kupovine i prodaje bez stresa</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-red-100 to-red-50 rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1562911791-c7a97b729ec5?w=800" alt="Arena Motors showroom" className="w-full h-full object-cover" />
              </div>
              {/* <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <div className="text-5xl font-extrabold text-gray-900 mb-1">15+</div>
                <p className="text-gray-600 font-medium">Godina tradicije</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full px-8 py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Naše usluge</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 mt-2">Sve što vam treba na jednom mjestu</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 hover:shadow-2xl transition-all duration-500 p-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-red-400/10 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-tr from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Kupovina vozila</h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  Tražite idealno vozilo? Naš širok izbor premium polovnih automobila nudi nešto za svakoga. Od kompaktnih gradskih automobila do luksuznih limuzina, svako vozilo je pažljivo odabrano i pregledano.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Sertifikovani stručnjaci za pomoć</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Testna vožnja dostupna</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Garancija na sva vozila</span>
                  </li>
                </ul>
                <a href="/all-vehicles" className="inline-flex items-center text-red-600 font-bold group-hover:gap-3 gap-2 transition-all text-lg">
                  Pregledaj vozila
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 hover:shadow-2xl transition-all duration-500 p-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-red-400/10 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-tr from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Prodaja vozila</h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  Želite prodati svoje vozilo brzo i po fer cijeni? Mi kupujemo sva vozila! Naš tim pruža besplatnu procjenu i transparentan proces. Bez skrivenih troškova, bez čekanja.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Besplatna procjena vozila</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Plaćanje odmah u gotovini</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Preuzimanje svih administrativnih poslova</span>
                  </li>
                </ul>
                <a href="/contact" className="inline-flex items-center text-red-600 font-bold group-hover:gap-3 gap-2 transition-all text-lg">
                  Kontaktirajte nas
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section className="w-full px-8 py-20 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Aktuelna ponuda</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 mt-2">Istaknuta vozila</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Pogledajte našu pažljivo odabranu kolekciju premium vozila</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {vehicles?.data?.length > 0 ? vehicles.data.slice(0, 4).map(vehicle => (
              <div className="aspect-video bg-gray-200 rounded-2xl relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <img src={vehicle.image.replace('/sm/', '/lg/')} alt={vehicle.title} className="object-cover w-full h-full absolute top-0 left-0 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 group-hover:from-black/50 group-hover:to-black/80 transition-all duration-500"></div>
                <div className="p-6 relative z-10 w-full h-full flex flex-col justify-between">
                  <h1 className="text-xl sm:text-2xl text-white font-bold drop-shadow-lg">{vehicle.title}</h1>
                  <div className="w-full flex flex-col items-end gap-1">
                    <div className="price-container bg-black/60 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20">
                      <span className="text-xl sm:text-2xl font-extrabold text-white">{vehicle.display_price}</span>
                    </div>
                    <div className="bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20">
                      <span className="text-sm text-white ">{vehicle.state === 'used' ? 'Polovno' : 'Novo'}</span>
                    </div>
                  </div>
                </div>
              </div>
            )) : (
              <div className="col-span-full text-center text-gray-500 py-12">Nema vozila za prikaz.</div>
            )}
          </div>
          <div className="text-center">
            <a className="inline-block py-5 px-10 bg-gradient-to-tr from-red-500 to-red-600 rounded-2xl text-white font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg" href="/all-vehicles">
              Pogledaj sva vozila
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="w-full px-8 py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Iskustva kupaca</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white mt-2">Šta kažu naši kupci</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">"Profesionalan pristup od prvog dana. Arena Motors mi je pomogao pronaći savršeno vozilo po odličnoj cijeni. Topla preporuka!"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  AJ
                </div>
                <div>
                  <p className="font-bold text-white">Amir Jusić</p>
                  <p className="text-sm text-gray-400">Zenica</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">"Odličan izbor vozila i veoma ljubazno osoblje. Pomogli su mi da nađem automobil koji odgovara mom budžetu i potrebama. Preporučujem!"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  EM
                </div>
                <div>
                  <p className="font-bold text-white">Emina Mahmutović</p>
                  <p className="text-sm text-gray-400">Tuzla</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="w-full px-8 py-20 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              <div className="p-12 lg:p-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Spremni za novo vozilo?
                </h2>
                <p className="text-white/90 text-lg mb-8 leading-relaxed">
                  Kontaktirajte nas danas i započnite put ka vašem savršenom vozilu. Naš tim je tu da odgovori na sva vaša pitanja i pomogne vam u donošenju prave odluke.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/all-vehicles" className="inline-block px-8 py-4 bg-white text-red-600 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all text-center">
                    Pregledaj vozila
                  </a>
                  <a href="/contact" className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-xl font-bold hover:bg-white/20 transition-all text-center">
                    Kontaktiraj nas
                  </a>
                </div>
              </div>
              <div className="h-full min-h-[300px] lg:min-h-[400px] relative">
                <img
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800"
                  alt="Premium vehicles"
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
