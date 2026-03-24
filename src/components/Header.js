"use client";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Početna" },
    { href: "/all-vehicles", label: "Vozila" },
    // { href: "/journal", label: "Journal" },
    { href: "/about", label: "O nama" },
    { href: "/contact", label: "Kontakt" },
  ];

  const serviceItems = [
    { href: "/financing", label: "Finansiranje" },
    { href: "/old-for-new", label: "Staro za novo" },
    { href: "/guarantee", label: "Garancija" },
    { href: "/finished-vehicles", label: "Prodata vozila" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-gray-200 bg-white/95 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="arena-container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" className="h-11 w-11 rounded-full object-cover" alt="Arena Motors Logo" />
          <div>
            <p className={`text-lg font-semibold tracking-tight transition-colors ${isScrolled ? "text-gray-900" : "text-black"}`}>
              Arena Motors
            </p>
            <p className={`text-xs transition-colors ${isScrolled ? "text-gray-500" : "text-gray-500"}`}>Sarajevo</p>
          </div>
        </Link>

        <nav
          className={`relative hidden items-center gap-7 text-sm font-medium transition-colors md:flex ${
            isScrolled ? "text-gray-700" : "text-gray-700"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors ${isScrolled ? "hover:text-red-700" : "hover:text-red-700"}`}
            >
              {item.label}
            </Link>
          ))}
          <div className="group relative">
            <button className={`flex items-center gap-1 transition-colors ${isScrolled ? "hover:text-red-700" : "hover:text-white"}`}>
              Usluge <ChevronDown size={16} />
            </button>
            <div className="invisible absolute right-0 top-8 w-52 rounded-2xl border border-gray-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
              {serviceItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-red-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="hidden md:block">
          <Link href="/contact" className="arena-btn-primary">
            Posjetite nas
          </Link>
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`rounded-full p-2 md:hidden ${
            isScrolled ? "border border-gray-200 text-gray-900" : "border border-gray-200 text-gray-900"
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <nav className="arena-container py-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="mt-3 flex w-full items-center justify-between rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700"
            >
              Usluge <ChevronDown size={16} />
            </button>

            {isDropdownOpen && (
              <div className="mt-2 space-y-1">
                {serviceItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/contact" className="arena-btn-primary mt-4 w-full" onClick={() => setIsOpen(false)}>
              Book a Visit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
