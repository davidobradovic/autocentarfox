// "use client";
// import { useEffect, useState } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import Link from "next/link";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 20);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const navItems = [
//     { href: "/", label: "Početna" },
//     { href: "/all-vehicles", label: "Vozila" },
//     // { href: "/journal", label: "Journal" },
//     { href: "/about", label: "O nama" },
//     { href: "/contact", label: "Kontakt" },
//   ];

//   const serviceItems = [
//     { href: "/financing", label: "Finansiranje" },
//     { href: "/old-for-new", label: "Staro za novo" },
//     { href: "/guarantee", label: "Garancija" },
//     { href: "/finished-vehicles", label: "Prodata vozila" },
//   ];

//   return (
//     <header
//       className={`sticky top-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? "border-b border-gray-200 bg-white/95 backdrop-blur"
//           : "border-b border-transparent bg-transparent"
//       }`}
//     >
//       <div className="fox-container flex h-20 items-center justify-between">
//         <Link href="/" className="flex items-center gap-3">
//           <img src="https://d4n0y8dshd77z.cloudfront.net/avatars/3704444/OLX.ba8750185717208038184-01849232170b.jpg" className="h-11 object-cover" alt="Auto Centar FOX Logo" />
//           <div>
//             <p className={`text-lg font-semibold tracking-tight transition-colors ${isScrolled ? "text-gray-900" : "text-black"}`}>
//               Auto Centar FOX
//             </p>
//             <p className={`text-xs transition-colors ${isScrolled ? "text-gray-500" : "text-gray-500"}`}>Sarajevo</p>
//           </div>
//         </Link>

//         <nav
//           className={`relative hidden items-center gap-7 text-sm font-medium transition-colors md:flex ${
//             isScrolled ? "text-gray-700" : "text-gray-700"
//           }`}
//         >
//           {navItems.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className={`transition-colors ${isScrolled ? "hover:text-red-700" : "hover:text-red-700"}`}
//             >
//               {item.label}
//             </Link>
//           ))}
//           <div className="group relative">
//             <button className={`flex items-center gap-1 transition-colors ${isScrolled ? "hover:text-red-700" : "hover:text-white"}`}>
//               Usluge <ChevronDown size={16} />
//             </button>
//             <div className="invisible absolute right-0 top-8 w-52 rounded-2xl border border-gray-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
//               {serviceItems.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className="block rounded-xl px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-red-700"
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </nav>

//         <div className="hidden md:block">
//           <Link href="/contact" className="fox-btn-primary">
//             Posjetite nas
//           </Link>
//         </div>

//         <button
//           onClick={() => setIsOpen((prev) => !prev)}
//           className={`rounded-full p-2 md:hidden ${
//             isScrolled ? "border border-gray-200 text-gray-900" : "border border-gray-200 text-gray-900"
//           }`}
//           aria-label="Toggle menu"
//         >
//           {isOpen ? <X size={18} /> : <Menu size={18} />}
//         </button>
//       </div>

//       {isOpen && (
//         <div className="border-t border-gray-100 bg-white md:hidden">
//           <nav className="fox-container py-4">
//             <div className="space-y-1">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className="block rounded-xl px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>

//             <button
//               onClick={() => setIsDropdownOpen((prev) => !prev)}
//               className="mt-3 flex w-full items-center justify-between rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700"
//             >
//               Usluge <ChevronDown size={16} />
//             </button>

//             {isDropdownOpen && (
//               <div className="mt-2 space-y-1">
//                 {serviceItems.map((item) => (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     className="block rounded-xl px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {item.label}
//                   </Link>
//                 ))}
//               </div>
//             )}

//             <Link href="/contact" className="fox-btn-primary mt-4 w-full" onClick={() => setIsOpen(false)}>
//               Book a Visit
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }

// "use client";
// import { useEffect, useState } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import Link from "next/link";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 20);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const navItems = [
//     { href: "/", label: "Početna" },
//     { href: "/all-vehicles", label: "Vozila" },
//     { href: "/about", label: "O nama" },
//     { href: "/contact", label: "Kontakt" },
//   ];

//   const serviceItems = [
//     { href: "/old-for-new", label: "Staro za novo" },
//     { href: "/finished-vehicles", label: "Prodata vozila" },
//   ];

//   return (
//     <header
//       className={`sticky top-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? "border-b border-gray-200 bg-white/98 shadow-sm backdrop-blur-sm"
//           : "border-b border-gray-100 bg-white/95 backdrop-blur-sm"
//       }`}
//     >
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-20 items-center justify-between">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-3 flex-shrink-0">
//             <img src="/logo.svg" className="h-11 object-cover" alt="Auto Centar FOX Logo" />
//             <div>
//               <p className="text-base font-bold text-gray-900 tracking-tight">
//                 Auto Centar FOX
//               </p>
//               <p className="text-xs text-gray-500 font-medium">I.Sarajevo</p>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 relative group"
//               >
//                 {item.label}
//                 <span className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
//               </Link>
//             ))}

//             {/* Services Dropdown */}
//             <div className="group relative">
//               <button className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200">
//                 Usluge
//                 <ChevronDown
//                   size={16}
//                   className="transition-transform duration-300 group-hover:rotate-180"
//                 />
//               </button>
//               <div className="absolute right-0 top-full mt-2 w-56 rounded-lg border border-gray-200 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//                 <div className="p-2">
//                   {serviceItems.map((item) => (
//                     <Link
//                       key={item.href}
//                       href={item.href}
//                       className="block rounded-md px-4 py-2.5 text-sm text-gray-700 font-medium hover:bg-red-50 hover:text-red-600 transition-colors duration-150"
//                     >
//                       {item.label}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </nav>

//           {/* CTA Button - Desktop */}
//           <div className="hidden md:block flex-shrink-0">
//             <Link
//               href="/contact"
//               className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md"
//             >
//               Posjetite nas
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen((prev) => !prev)}
//             className="rounded-lg p-2 md:hidden text-gray-700 hover:bg-gray-100 transition-colors duration-200"
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden border-t border-gray-200 bg-white">
//           <nav className="mx-auto max-w-7xl px-4 sm:px-6 py-4 space-y-1">
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-150"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.label}
//               </Link>
//             ))}

//             {/* Mobile Services Dropdown */}
//             <button
//               onClick={() => setIsDropdownOpen((prev) => !prev)}
//               className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all duration-150 mt-2"
//             >
//               Usluge
//               <ChevronDown
//                 size={16}
//                 className={`transition-transform duration-300 ${
//                   isDropdownOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             {isDropdownOpen && (
//               <div className="mt-2 space-y-1 bg-gray-50 rounded-lg p-2 ml-2">
//                 {serviceItems.map((item) => (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     className="block px-4 py-2.5 rounded-md text-sm text-gray-700 font-medium hover:bg-white hover:text-red-600 transition-colors duration-150"
//                     onClick={() => {
//                       setIsOpen(false);
//                       setIsDropdownOpen(false);
//                     }}
//                   >
//                     {item.label}
//                   </Link>
//                 ))}
//               </div>
//             )}

//             <Link
//               href="/contact"
//               className="block w-full mt-4 px-4 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium text-sm text-center transition-colors duration-200"
//               onClick={() => setIsOpen(false)}
//             >
//               Posjetite nas
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Phone, Clock, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Početna", isActive: true },
    { href: "/all-vehicles", label: "Ponuda" },
    { href: "/about", label: "O nama" },
    { href: "/contact", label: "Kontakt" },
  ];

  const serviceItems = [
    { href: "/old-for-new", label: "Staro za novo" },
    { href: "/finished-vehicles", label: "Prodata vozila" },
  ];

  return (
    <header className="bg-white">
      {/* Top Section - Contact Info */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            {/* Contact Info Grid */}
            <div className="flex-1 gap-12 hidden md:flex items-center">
              {/* Contact */}
              <div className="flex items-start gap-3">
                <Phone size={32} className="text-gray-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-bold text-gray-900 uppercase tracking-wide">Kontaktirajte nas</p>
                  <p className="text-xs text-gray-600 mt-1">Tel: +387 66 333 400</p>
                  <p className="text-xs text-gray-600">Viber: +387 66 333 400</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <Clock size={32} className="text-gray-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-bold text-gray-900 uppercase tracking-wide">Radno vrijeme</p>
                  <p className="text-xs text-gray-600 mt-1">Pon - Sub 09:00 - 17:00 sati</p>
                  <p className="text-xs text-gray-600">Ned - Ne radimo</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin size={32} className="text-gray-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-bold text-gray-900 uppercase tracking-wide">Adresa</p>
                  <p className="text-xs text-gray-600 mt-1">Bulozi bb, 71144</p>
                  <p className="text-xs text-gray-600">Istocno Sarajevo, BiH</p>
                </div>
              </div>
            </div>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 ml-8">
              <img src="/logo.svg" className="h-12 object-cover" alt="Auto Centar FOX Logo" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section - Navigation */}
      <div className="bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-0 flex-1">
              {navItems.map((item) => (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className={`px-6 py-4 text-xs font-bold uppercase tracking-wide whitespace-nowrap transition-colors duration-200 flex items-center gap-2 h-16 ${
                      item.isActive
                        ? "bg-red-600 text-white hover:bg-red-700"
                        : "text-white hover:bg-gray-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-white hover:bg-gray-900 transition-colors duration-200 flex items-center gap-2 h-16">
                  Usluge
                  <ChevronDown
                    size={14}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                </button>
                <div className="absolute left-0 top-full pt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-56 z-50">
                  <div className="bg-gray-900 border-t-2 border-red-600 overflow-hidden">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-xs text-white font-medium hover:bg-red-600 transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Social Icons - Desktop */}
            <div className="hidden md:flex items-center gap-6 ml-auto">
              <Link href="#" className="text-white hover:text-red-600 transition-colors duration-200">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="text-white hover:text-red-600 transition-colors duration-200">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="text-white hover:text-red-600 transition-colors duration-200">
                <Youtube size={18} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-red-600 transition-colors duration-200 ml-auto"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-800 bg-black">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-6 py-3 text-xs font-bold uppercase tracking-wide transition-colors duration-200 ${
                    item.isActive
                      ? "bg-red-600 text-white"
                      : "text-white hover:bg-gray-900"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Services Dropdown */}
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="w-full flex items-center justify-between px-6 py-3 text-xs font-bold uppercase tracking-wide text-white hover:bg-gray-900 transition-colors duration-200"
              >
                Usluge
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="bg-gray-900 border-l-4 border-red-600">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-8 py-2.5 text-xs text-white font-medium hover:bg-red-600 transition-colors duration-200"
                      onClick={() => {
                        setIsOpen(false);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </nav>

            {/* Mobile Social Icons */}
            <div className="flex items-center justify-center gap-6 py-4 border-t border-gray-800">
              <Link href="#" className="text-white hover:text-red-600 transition-colors duration-200">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="text-white hover:text-red-600 transition-colors duration-200">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="text-white hover:text-red-600 transition-colors duration-200">
                <Youtube size={18} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}