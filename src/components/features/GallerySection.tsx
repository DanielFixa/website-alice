"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// Images
import img1 from "@/assets/fotos_galeria/413420727_299606155866156_817275050124797828_n.jpg";
import img2 from "@/assets/fotos_galeria/544090884_18324091570239954_4116133234013567190_n.jpg";
import img3 from "@/assets/fotos_galeria/545386785_18324091837239954_764013483081829876_n.jpg";
import img4 from "@/assets/fotos_galeria/545456632_18324092143239954_7392047988876353886_n.jpg";
import img5 from "@/assets/fotos_galeria/545514325_18324093391239954_4205655904055414300_n.jpg";
import img6 from "@/assets/fotos_galeria/547901662_18324093805239954_5721745062876604071_n.jpg";
import img7 from "@/assets/fotos_galeria/569928949_18332373022239954_7415753294475584212_n.jpg";
import img8 from "@/assets/fotos_galeria/572151409_18332372794239954_6639669383045071520_n.jpg";
import img9 from "@/assets/fotos_galeria/573044648_18332933446239954_3107038926476075858_n.jpg";
import img10 from "@/assets/fotos_galeria/586793474_18336307747239954_1505099265179959332_n.jpg";
import img11 from "@/assets/fotos_galeria/587006292_18336306781239954_5248883469803386805_n.jpg";
import img12 from "@/assets/fotos_galeria/587425033_18336309640239954_4007738828136130413_n.jpg";

const images = [
    img1, img2, img3, img4, img5, img6,
    img7, img8, img9, img10, img11, img12
];

export function GallerySection() {
    return (
        <section className="py-12 md:py-24 bg-[#121212] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-[#D4AF37] text-xs md:text-sm uppercase tracking-[0.3em] block mb-2">
                        Nosso Portfólio
                    </span>
                    <h2 className="text-3xl md:text-5xl text-white font-serif">
                        Galeria de <span className="italic text-[#D4AF37]">Resultados</span>
                    </h2>
                    <div className="w-16 md:w-24 h-px bg-[#D4AF37] mx-auto mt-6 md:mt-8" />
                </motion.div>
            </div>

            {/* Carousel Container */}
            <div className="relative w-full flex overflow-hidden">
                <div className="flex animate-infinite-scroll gap-3 md:gap-4 w-max">
                    {/* First set of images */}
                    {images.map((img, index) => (
                        <div
                            key={`gallery-1-${index}`}
                            className="relative w-[200px] h-[280px] md:w-[300px] md:h-[400px] rounded-lg overflow-hidden border border-[#D4AF37]/20 group"
                        >
                            <Image
                                src={img}
                                alt={`Galeria ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 200px, 300px"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                        </div>
                    ))}

                    {/* Duplicate set for infinite scroll */}
                    {images.map((img, index) => (
                        <div
                            key={`gallery-2-${index}`}
                            className="relative w-[200px] h-[280px] md:w-[300px] md:h-[400px] rounded-lg overflow-hidden border border-[#D4AF37]/20 group"
                        >
                            <Image
                                src={img}
                                alt={`Galeria ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 200px, 300px"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Gradient Overlays for smooth edges */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#121212] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#121212] to-transparent z-10 pointer-events-none" />
        </section>
    );
}
