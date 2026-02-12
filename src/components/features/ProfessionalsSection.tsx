"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import team1 from "@/assets/nossas_profissionais_e_informaçoes/Captura de tela 2026-02-11 154337.png";
import team2 from "@/assets/nossas_profissionais_e_informaçoes/Captura de tela 2026-02-11 154359.png";
import team3 from "@/assets/nossas_profissionais_e_informaçoes/Captura de tela 2026-02-11 154413.png";

const professionals = [
    {
        image: team1,
        name: "Alice Cadore",
        role: "Make / sobrancelhas / egípcia",
    },
    {
        image: team2,
        name: "Ana Julia",
        role: "Escova / penteados",
    },
];

export function ProfessionalsSection() {
    return (
        <section className="py-24 bg-[#121212] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em]">
                        Nosso Time
                    </span>
                    <h2 className="text-4xl md:text-5xl mt-4 text-white">
                        Conheça Nossas <span className="italic text-[#D4AF37]">Especialistas</span>
                    </h2>
                    <div className="w-24 h-px bg-[#D4AF37] mx-auto mt-8" />
                </motion.div>

                <div className="flex flex-wrap justify-center gap-12">
                    {professionals.map((prof, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="text-center group"
                        >
                            <div className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden border-2 border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors duration-500">
                                <Image
                                    src={prof.image}
                                    alt={prof.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-xl text-white font-serif mb-2">{prof.name}</h3>
                            <p className="text-[#D4AF37] text-sm uppercase tracking-widest font-light">
                                {prof.role}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
