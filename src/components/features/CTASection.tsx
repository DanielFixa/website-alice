"use client";

import { motion } from "framer-motion";

export function CTASection() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background with dark overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full bg-cover bg-center bg-fixed opacity-30"
                    style={{
                        backgroundImage: `url('/hero-bg.jpg')`,
                    }}
                />
                <div className="absolute inset-0 bg-[#121212]/80" />
            </div>

            {/* Decorative gold lines */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10 text-center max-w-3xl mx-auto px-4"
            >
                <h2 className="text-4xl md:text-5xl text-white mb-6 leading-tight">
                    Pronta para transformar <br />
                    <span className="italic text-[#D4AF37]">seu olhar?</span>
                </h2>
                <p className="text-gray-300 text-lg mb-10 font-light">
                    Agende sua avaliação e descubra o tratamento ideal para você.
                </p>
                <a
                    href="https://wa.me/5547999711211?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio."
                    target="_blank"
                    className="inline-block border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#121212] px-10 py-3 text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                >
                    Entrar em Contato
                </a>
            </motion.div>
        </section>
    );
}
