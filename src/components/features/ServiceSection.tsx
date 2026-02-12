"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Images
import imgBrows from "@/assets/serviços_valores/brows.png";
import imgMakeup from "@/assets/serviços_valores/makeup.png";
import imgHair from "@/assets/serviços_valores/foto_cabelo.png";
import imgHair2 from "@/assets/serviços_valores/cabelo2.png";
import imgHair3 from "@/assets/serviços_valores/cabelo3.png";
import imgKids from "@/assets/serviços_valores/foto_maquiagemKids.png";
import imgKids2 from "@/assets/serviços_valores/foto_maquiagemKids2.png";
import imgKids3 from "@/assets/serviços_valores/foto_maquiagemKids3.png";

interface ServiceDetail {
    label: string;
    price: string;
    note?: string;
}

interface Service {
    title: string;
    description: string;
    price: string;
    images: StaticImageData[];
    featured?: boolean;
    details?: ServiceDetail[];
    footerNote?: string;
}

const services: Service[] = [
    {
        title: "Sobrancelhas & Cílios",
        description: "Design personalizado, micropigmentação, lash lifting e brow lamination para realçar seu olhar.",
        price: "A partir de R$ 30",
        images: [imgBrows],
        details: [
            { label: "Design de sobrancelhas", price: "R$ 30,00", note: "Quando a sobrancelha está sem forma" },
            { label: "Design de sobrancelhas com henna", price: "R$ 35,00", note: "Quando a sobrancelha está sem forma" },
            { label: "Limpeza de sobrancelhas", price: "R$ 20,00" },
            { label: "Limpeza de sobrancelhas com buço egípcio", price: "R$ 26,00" },
            { label: "Limpeza de sobrancelhas com henna", price: "R$ 28,00" },
            { label: "Depilação buço egípcia", price: "R$ 10,00", note: "Técnica depilação com fio egípcio" },
            { label: "Depilação facial egípcia", price: "Consultar", note: "Técnica depilação com fio egípcio" },
        ]
    },
    {
        title: "Maquiagem Profissional",
        description: "Produções exclusivas para noivas, formandas e eventos sociais. Destaque sua beleza natural.",
        price: "A partir de R$ 84",
        images: [imgMakeup],
        featured: true,
        details: [
            { label: "Maquiagem social", price: "R$ 84,00", note: "Disponibilizo cílios postiços para escolha" },
            { label: "Maquiagem blindada (noiva/formanda)", price: "R$ 100,00", note: "Disponibilizo cílios postiços para escolha" },
            { label: "Teste de maquiagem (noiva/formanda)", price: "+ R$ 100,00" },
        ]
    },
    {
        title: "Cabelos & Penteados",
        description: "Escovas modeladas, penteados elaborados e tratamentos capilares para fios saudáveis e radiantes.",
        price: "A partir de R$ 30",
        images: [imgHair, imgHair2, imgHair3],
        details: [
            { label: "Escova - Cabelos curtos", price: "R$ 35,00", note: "Comprimento até os ombros" },
            { label: "Escova - Cabelos médios", price: "R$ 30,00", note: "Comprimento do ombros até altura do peito" },
            { label: "Escova - Cabelos longos", price: "R$ 40,00", note: "Comprimento da cintura para baixo" },
            { label: "Penteado", price: "R$ 64,00" },
        ],
        footerNote: "OBS.: Vir com os cabelos lavados, sem condicionador e/ou creme."
    },
    {
        title: "Maquiagem Kids",
        description: "Experiência mágica e delicada para as pequenas, com produtos seguros e muito encanto.",
        price: "Consultar Valores",
        images: [imgKids, imgKids2, imgKids3],
        details: [
            { label: "Pintura facial (maquiagem artística)", price: "R$ 30,00", note: "Maquiagem realizada com tinta facial" },
        ]
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};


const ServiceModal = ({ service, onClose }: { service: Service; onClose: () => void }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    if (!mounted) return null;

    return createPortal(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#1A1A1A] border border-[#D4AF37]/40 p-6 md:p-8 rounded-lg max-w-lg w-full relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                <h3 className="text-2xl text-[#D4AF37] font-serif mb-6 text-center">{service.title}</h3>

                <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                    {service.details?.map((detail, idx) => (
                        <div key={idx} className="flex flex-col border-b border-[#D4AF37]/10 pb-3 last:border-0 text-left">
                            <div className="flex justify-between items-baseline">
                                <span className="text-white font-medium">{detail.label}</span>
                                <span className="text-[#D4AF37] font-semibold whitespace-nowrap ml-4">{detail.price}</span>
                            </div>
                            {detail.note && (
                                <span className="text-gray-500 text-xs italic mt-1">{detail.note}</span>
                            )}
                        </div>
                    ))}
                    {service.footerNote && (
                        <div className="mt-4 pt-4 border-t border-[#D4AF37]/20">
                            <p className="text-red-400 text-xs font-semibold">{service.footerNote}</p>
                        </div>
                    )}
                </div>

                <div className="mt-8 text-center">
                    <a
                        href={`https://wa.me/5547999711211?text=${encodeURIComponent(`Olá, gostaria de agendar um horário para ${service.title}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#D4AF37] text-[#121212] px-8 py-3 rounded font-semibold hover:bg-white transition-colors uppercase tracking-wider text-sm"
                    >
                        Agendar Agora
                    </a>
                </div>
            </motion.div>
        </motion.div>,
        document.body
    );
};

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % service.images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + service.images.length) % service.images.length);
    };

    return (
        <>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                }}
                className="group relative bg-[#121212] rounded-lg overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] flex flex-col"
            >
                {/* Image Carousel */}
                <div className="relative h-64 w-full overflow-hidden bg-black/50">
                    {service.images.length > 1 ? (
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentImageIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={service.images[currentImageIndex]}
                                    alt={`${service.title} - Imagem ${currentImageIndex + 1}`}
                                    fill
                                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 25vw"
                                />
                            </motion.div>
                        </AnimatePresence>
                    ) : (
                        <div className="absolute inset-0">
                            <Image
                                src={service.images[0]}
                                alt={service.title}
                                fill
                                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 25vw"
                            />
                        </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent pointer-events-none" />

                    {/* Navigation Arrows */}
                    {service.images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/30 hover:bg-[#D4AF37] text-white hover:text-black transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm z-20"
                                aria-label="Imagem anterior"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/30 hover:bg-[#D4AF37] text-white hover:text-black transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm z-20"
                                aria-label="Próxima imagem"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>

                            {/* Dots Indicator */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                                {service.images.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? "bg-[#D4AF37] w-4" : "bg-white/50 w-1.5"
                                            }`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Content */}
                <div className="p-6 text-center relative z-10 flex-grow flex flex-col -mt-4 bg-gradient-to-t from-[#121212] via-[#121212] to-transparent pt-8">
                    <h3 className="text-xl text-white font-serif mb-3">
                        {service.title}
                    </h3>
                    <p className="text-gray-400 font-light text-sm leading-relaxed mb-4 flex-grow">
                        {service.description}
                    </p>
                    <div className="mt-auto">
                        <span className="block text-[#D4AF37] font-semibold text-base mb-4">
                            {service.price}
                        </span>
                        <div className="flex justify-center gap-3">
                            <a
                                href={`https://wa.me/5547999711211?text=${encodeURIComponent(`Olá, gostaria de agendar um horário para ${service.title}.`)}`}
                                target="_blank"
                                className="inline-block text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] border border-[#D4AF37] px-4 py-2 hover:bg-[#D4AF37] hover:text-[#121212] transition-colors rounded"
                            >
                                Agendar
                            </a>
                            {service.details && (
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="inline-block text-white text-[10px] uppercase tracking-[0.2em] border border-white/20 px-4 py-2 hover:bg-white hover:text-[#121212] transition-colors rounded"
                                >
                                    Detalhes
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && service.details && (
                    <ServiceModal service={service} onClose={() => setIsModalOpen(false)} />
                )}
            </AnimatePresence>
        </>
    );
};

export function ServiceSection() {
    return (
        <section
            id="services"
            className="py-24 bg-[#1A1A1A] relative overflow-hidden"
        >
            {/* Subtle gold dot pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-dot-pattern" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-[#D4AF37] text-sm uppercase tracking-[0.3em]">
                        Nossos Tratamentos
                    </span>
                    <h2 className="text-4xl md:text-5xl mt-4 text-white">
                        Menu de{" "}
                        <span className="italic text-[#D4AF37]">Serviços</span>
                    </h2>
                    <div className="w-24 h-px bg-[#D4AF37] mx-auto mt-8" />
                </motion.div>

                {/* Service Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} service={service} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
