"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        quote:
            "O trabalho da Alice é impecável. Ela conseguiu entender exatamente o que eu queria: algo sutil, elegante e que valorizasse meu rosto sem parecer artificial. O ambiente é acolhedor e luxuoso.",
        name: "Mariana Souza",
        role: "Cliente",
    },
    {
        quote:
            "Minha sobrancelha ficou perfeita! A Alice tem um olhar artístico incrível e fez exatamente o que combinamos. Recomendo de olhos fechados.",
        name: "Fernanda Lima",
        role: "Cliente Design de Sobrancelhas",
    },
    {
        quote:
            "A maquiagem para meu casamento ficou impecável. Durou o dia inteiro e todas as fotos ficaram lindas. Obrigada, Alice!",
        name: "Carolina Santos",
        role: "Noiva - Maquiagem Blindada",
    },
];

export function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-24 bg-[#121212]">
            <div className="max-w-4xl mx-auto px-4 text-center">
                {/* Gold Quote Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <svg
                        className="w-16 h-16 text-[#D4AF37]/30 mx-auto mb-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p className="text-2xl md:text-3xl italic text-gray-200 leading-relaxed mb-10">
                        &ldquo;{testimonials[0].quote}&rdquo;
                    </p>

                    {/* Client Info */}
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border border-[#D4AF37] bg-[#D4AF37]/20 flex items-center justify-center">
                            <span className="text-[#D4AF37] font-bold text-2xl">
                                {testimonials[0].name.charAt(0)}
                            </span>
                        </div>
                        <div className="text-center">
                            <h4 className="text-[#D4AF37] font-bold text-sm uppercase tracking-wider mb-1">
                                {testimonials[0].name}
                            </h4>
                            <span className="text-xs text-gray-400 block mb-2">
                                {testimonials[0].role}
                            </span>
                            <div className="flex justify-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Dot Navigation */}
                <div className="flex justify-center space-x-2 mt-12">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            className={`w-2 h-2 rounded-full transition-colors ${i === 0
                                ? "bg-[#D4AF37]"
                                : "bg-[#D4AF37]/30 hover:bg-[#D4AF37]"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
