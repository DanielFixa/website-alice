"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Gem, CreditCard } from "lucide-react";

const infoItems = [
    {
        icon: Clock,
        title: "Evento aos domingos",
        description: "Acrescenta ao valor do serviço",
        value: "+ R$ 20,00",
    },
    {
        icon: MapPin,
        title: "Atendimentos a domicílio",
        description: "A partir de 03 pessoas. O cálculo será feito com base no endereço e alimentação.",
        value: null,
    },
    {
        icon: Gem,
        title: "Aluguel de acessórios",
        description: "Consultar modelos e valores disponíveis.",
        value: "Sob Consulta",
    },
    {
        icon: CreditCard,
        title: "Forma de pagamento",
        description: "Dinheiro ou PIX",
        value: "Chave PIX: (47) 99971-1211",
    },
];

export function ImportantInfo() {
    return (
        <section className="py-20 bg-[#121212] relative border-t border-[#D4AF37]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h3 className="text-2xl md:text-3xl text-white font-serif">
                        Informações <span className="text-[#D4AF37] italic">Importantes</span>
                    </h3>
                    <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {infoItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#1A1A1A] p-6 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4AF37] transition-colors duration-300">
                                <item.icon className="w-6 h-6 text-[#D4AF37] group-hover:text-[#121212] transition-colors" />
                            </div>

                            <h4 className="text-lg text-white font-serif mb-2 text-center">{item.title}</h4>

                            <p className="text-gray-400 text-sm text-center mb-4 leading-relaxed">
                                {item.description}
                            </p>

                            {item.value && (
                                <div className="text-center">
                                    <span className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded text-sm font-semibold border border-[#D4AF37]/20">
                                        {item.value}
                                    </span>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
