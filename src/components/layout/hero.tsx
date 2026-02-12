"use client";

import { motion } from "framer-motion";

export function Hero() {
    return (
        <section
            id="home"
            className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background with dark gradient overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full bg-cover bg-center opacity-40"
                    style={{
                        backgroundImage: `url('/hero-bg.jpg')`,
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/80 via-transparent to-[#121212]" />
            </div>

            {/* Subtle radial glow */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[120px]" />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: [1, 0.5, 1], y: 0 }}
                    transition={{
                        y: { delay: 0.2, duration: 0.6 },
                        opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="block text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-6"
                >
                    Alice Cadore Studio da Beleza
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 text-white leading-tight"
                >
                    Realce a sua <br />
                    <span className="italic font-normal text-gold-foil">
                        Elegância Única
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
                >
                    Especialista em realçar sua beleza natural. Maquiagem, Sobrancelhas e Penteados com o cuidado que você merece.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="flex flex-col md:flex-row gap-6 justify-center items-center"
                >
                    <a
                        href="https://wa.me/5547999711211?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio."
                        target="_blank"
                        className="group relative px-10 py-4 bg-[#D4AF37] text-[#121212] font-semibold text-sm uppercase tracking-[0.2em] rounded overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                    >
                        <span className="relative z-10">Agendar Horário</span>
                        <div className="absolute inset-0 h-full w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                    </a>
                    <button
                        onClick={() => {
                            const element = document.getElementById('services');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="text-white border-b border-[#D4AF37] pb-1.5 text-sm uppercase tracking-[0.2em] hover:text-[#D4AF37] transition-all duration-300 cursor-pointer relative z-20 bg-transparent"
                    >
                        Conheça Nossos Serviços
                    </button>
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#121212] to-transparent z-10 pointer-events-none" />
        </section>
    );
}
