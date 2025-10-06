"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <header className="bg-white shadow-sm w-full z-50">
            <div className="p-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img
                        src="/logo.png"
                        className="w-10 h-10 rounded-lg"
                        alt="Arena Motors Logo"
                    />
                    <h1 className="text-xl font-semibold">
                        <strong>Arena</strong> Motors
                    </h1>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium relative">
                    <a href="/" className="hover:text-red-500 transition">
                        Početna
                    </a>
                    <a href="/all-vehicles" className="hover:text-red-500 transition">
                        Aktivni Oglasi
                    </a>
                    <a href="/finished-vehicles" className="hover:text-red-500 transition">
                        Završeni Oglasi
                    </a>
                    <a href="/about" className="hover:text-red-500 transition">
                        O Nama
                    </a>
                    <a href="/contact" className="hover:text-red-500 transition">
                        Kontakt
                    </a>

                    {/* Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 hover:text-red-500 transition">
                            Ostalo <ChevronDown size={16} />
                        </button>
                        <div className="absolute z-[9999] right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <a
                                href="/financing"
                                className="block px-4 py-2 hover:bg-gray-100 transition"
                            >
                                Finansiranje
                            </a>
                            <a
                                href="/old-for-new"
                                className="block px-4 py-2 hover:bg-gray-100 transition"
                            >
                                Staro za novo
                            </a>
                            <a
                                href="/guarantee"
                                className="block px-4 py-2 hover:bg-gray-100 transition"
                            >
                                Garancija
                            </a>
                        </div>
                    </div>

                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
                    <nav className="flex flex-col px-4 py-3 space-y-2 text-sm font-medium">
                        <a
                            href="/"
                            className="hover:text-red-500 transition py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Početna
                        </a>
                        <a
                            href="/all-vehicles"
                            className="hover:text-red-500 transition py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Aktivni Oglasi
                        </a>
                        <a
                            href="/finished-vehicles"
                            className="hover:text-red-500 transition py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Završeni Oglasi
                        </a>
                        <a
                            href="/about"
                            className="hover:text-red-500 transition py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            O Nama
                        </a>
                        <a
                            href="/contact"
                            className="hover:text-red-500 transition py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Kontakt
                        </a>

                        {/* Mobile Submenu */}
                        <div>
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center justify-between w-full py-2 hover:text-red-500 transition"
                            >
                                Ostalo <ChevronDown size={16} />
                            </button>
                            {isDropdownOpen && (
                                <div className="pl-4 flex flex-col space-y-2">
                                    <a
                                        href="/financing"
                                        className="hover:text-red-500 transition py-1"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Finansiranje
                                    </a>
                                    <a
                                        href="/old-for-new"
                                        className="hover:text-red-500 transition py-1"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Staro za novo
                                    </a>
                                    <a
                                        href="/guarantee"
                                        className="hover:text-red-500 transition py-1"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Garancija
                                    </a>
                                </div>
                            )}
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
