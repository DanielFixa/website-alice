"use client";

import { motion } from "framer-motion";
import photo from "@/assets/foto_principal/alice.png";
import Image from "next/image";

export function AboutSection() {
    return (
        <section
            id="about"
            className="py-24 px-4 bg-[#121212] relative"
        >
            <div className="max-w-6xl mx-auto">
                {/* Box Container with Gold Border */}
                <div className="relative border border-[#D4AF37]/40 p-8 md:p-16 rounded-lg bg-[#1A1A1A] shadow-2xl">
                    {/* Decorative Gold Corners */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#D4AF37] -mt-2 -ml-2 rounded-tl-lg" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#D4AF37] -mb-2 -mr-2 rounded-br-lg" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative group"
                        >
                            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-[#2A2A2A] relative">
                                <Image
                                    src={photo}
                                    alt="Alice Cadore - Foto Profissional"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>

                            {/* Floating Experience Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 200 }}
                                className="absolute -bottom-6 -right-6 bg-[#D4AF37] text-[#121212] p-6 shadow-xl rounded-lg hidden md:block"
                            >
                                <p className="text-3xl font-bold">5+</p>
                                <p className="text-xs uppercase tracking-[0.2em] font-semibold">Anos de Experiência</p>
                            </motion.div>
                        </motion.div>

                        {/* Text Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="text-left"
                        >
                            <h2 className="text-[#D4AF37] text-sm uppercase tracking-[0.2em] mb-4">
                                Sobre Mim
                            </h2>
                            <h3 className="text-4xl md:text-5xl text-white mb-8 leading-tight">
                                A Arte da Beleza <br />
                                <span className="italic text-[#D4AF37]">Natural</span>
                            </h3>
                            <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed">
                                <p>
                                    Olá, sou Alice Cadore. Minha jornada na beleza começou com uma
                                    simples convicção: cada rosto possui uma harmonia única
                                    esperando para ser realçada, não transformada.
                                </p>
                                <p>
                                    Com certificações internacionais e uma paixão pela estética
                                    clássica, dedico meu trabalho a oferecer tratamentos que
                                    respeitam sua individualidade. Meu estúdio é um refúgio onde
                                    técnica precisa encontra o conforto absoluto.
                                </p>
                            </div>

                            {/* Decorative line */}
                            <div className="mt-10 flex items-center space-x-4">
                                <div className="h-px w-20 bg-[#D4AF37]/50" />
                                <span className="text-[#D4AF37] text-sm italic tracking-wider">Alice Cadore</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
