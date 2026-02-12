"use client";

import { motion } from "framer-motion";
import { MessageCircle, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingSocials() {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
            {/* Instagram Button */}
            <motion.a
                href="https://www.instagram.com/alicecadore_studiodabeleza/" // Replace with actual link
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Button
                    size="icon"
                    className="h-14 w-14 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-lg hover:shadow-xl transition-shadow border-none"
                >
                    <Instagram className="h-7 w-7" />
                    <span className="sr-only">Instagram</span>
                </Button>
            </motion.a>

            {/* Facebook Button */}
            <motion.a
                href="https://www.facebook.com/alicecadorestudiodabeleza/" // Replace with actual link
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.1, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Button
                    size="icon"
                    className="h-14 w-14 rounded-full bg-[#1877F2] text-white shadow-lg hover:shadow-xl transition-shadow border-none"
                >
                    <Facebook className="h-7 w-7" />
                    <span className="sr-only">Facebook</span>
                </Button>
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
                href="https://wa.me/5547999711211?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio." // Replace with actual number
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Button
                    size="icon"
                    className="h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:bg-[#20bd5a] transition-shadow border-none"
                >
                    <MessageCircle className="h-7 w-7" />
                    <span className="sr-only">WhatsApp</span>
                </Button>
            </motion.a>
        </div>
    );
}
