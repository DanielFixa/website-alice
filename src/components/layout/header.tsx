"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Header() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed w-full z-50 bg-[#121212]/90 backdrop-blur-md border-b border-[#D4AF37]/20"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <span className="text-2xl font-bold tracking-[0.2em] uppercase text-[#D4AF37]">
                            Alice Cadore
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <a
                            href="#home"
                            className="text-sm uppercase tracking-[0.2em] text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="text-sm uppercase tracking-[0.2em] text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
                        >
                            Sobre
                        </a>
                        <a
                            href="#services"
                            className="text-sm uppercase tracking-[0.2em] text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
                        >
                            Serviços
                        </a>
                        <a
                            href="#testimonials"
                            className="text-sm uppercase tracking-[0.2em] text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
                        >
                            Depoimentos
                        </a>
                        <a
                            href="https://wa.me/5547999711211?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio."
                            target="_blank"
                            className="px-6 py-2 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#121212] transition-all duration-300 rounded text-xs uppercase tracking-[0.2em] font-semibold"
                        >
                            Agendar
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button className="text-[#D4AF37] hover:text-white focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
