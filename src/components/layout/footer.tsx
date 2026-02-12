"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const footerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
};

const columnVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const },
    },
};

export function Footer() {
    return (
        <footer
            id="contact"
            className="bg-[#101010] border-t border-[#D4AF37]/20 pt-20 pb-10"
        >
            <motion.div
                variants={footerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
                    {/* Brand Column */}
                    <motion.div
                        variants={columnVariants}
                        className="flex flex-col items-center md:items-start"
                    >
                        <h3 className="text-2xl text-gold-foil mb-6">Alice Cadore</h3>
                        <p className="text-gray-500 font-light text-sm leading-relaxed max-w-xs">
                            Elevando a autoestima através de técnicas exclusivas de beleza e
                            bem-estar. Seu momento de cuidado pessoal começa aqui.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <Link
                                href="https://www.instagram.com/alicecadore_studiodabeleza/"
                                target="_blank"
                                className="text-[#D4AF37] hover:text-white transition-colors"
                            >
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </Link>
                            <Link
                                href="https://www.facebook.com/alicecadorestudiodabeleza/"
                                target="_blank"
                                className="text-[#D4AF37] hover:text-white transition-colors"
                            >
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </Link>
                            <Link
                                href="https://wa.me/5547999711211?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio."
                                target="_blank"
                                className="text-[#D4AF37] hover:text-white transition-colors"
                            >
                                <span className="sr-only">WhatsApp</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        variants={columnVariants}
                        className="flex flex-col items-center md:items-start"
                    >
                        <h4 className="text-white uppercase tracking-[0.2em] text-sm mb-6 border-b border-[#D4AF37]/30 pb-2">
                            Navegação
                        </h4>
                        <ul className="space-y-3 text-sm font-light">
                            <li>
                                <a href="#home" className="text-gray-500 hover:text-[#D4AF37] transition-colors">
                                    Início
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-gray-500 hover:text-[#D4AF37] transition-colors">
                                    Sobre Alice
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="text-gray-500 hover:text-[#D4AF37] transition-colors">
                                    Nossos Serviços
                                </a>
                            </li>
                            <li>
                                <a href="#testimonials" className="text-gray-500 hover:text-[#D4AF37] transition-colors">
                                    Depoimentos
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-500 hover:text-[#D4AF37] transition-colors">
                                    Agendamento
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        variants={columnVariants}
                        className="flex flex-col items-center md:items-start"
                    >
                        <h4 className="text-white uppercase tracking-[0.2em] text-sm mb-6 border-b border-[#D4AF37]/30 pb-2">
                            Contato
                        </h4>
                        <ul className="space-y-4 text-sm font-light text-gray-500">
                            <li className="flex items-center space-x-3">
                                <svg className="w-4 h-4 text-[#D4AF37] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>
                                    <a
                                        href="https://maps.google.com/?q=Rua+Martin+Debatin,+10,+%C3%81guas+Claras,+Brusque+-+SC"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-[#D4AF37] transition-colors"
                                    >
                                        Rua Martin Debatin, 10<br />Águas Claras, Brusque - SC
                                    </a>
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="w-4 h-4 text-[#D4AF37] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>
                                    <a
                                        href="tel:5547999711211"
                                        className="hover:text-[#D4AF37] transition-colors"
                                    >
                                        (47) 99971-1211
                                    </a>
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="w-4 h-4 text-[#D4AF37] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Seg - Sex: 09:00 - 19:00</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Location / Map */}
                    <motion.div
                        variants={columnVariants}
                        className="flex flex-col items-center md:items-start"
                    >
                        <h4 className="text-white uppercase tracking-[0.2em] text-sm mb-6 border-b border-[#D4AF37]/30 pb-2">
                            Localização
                        </h4>
                        <div className="w-full h-48 rounded-lg overflow-hidden border border-[#D4AF37]/20">
                            <iframe
                                src="https://maps.google.com/maps?q=Rua+Martin+Debatin,+10,+%C3%81guas+Claras,+Brusque+-+SC&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex={0}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-16 pt-8 text-center">
                    <p className="text-gray-600 text-xs uppercase tracking-[0.2em]">
                        © 2025 Alice Cadore Studio da Beleza. Todos os direitos reservados.
                    </p>
                </div>
            </motion.div>
        </footer>
    );
}
