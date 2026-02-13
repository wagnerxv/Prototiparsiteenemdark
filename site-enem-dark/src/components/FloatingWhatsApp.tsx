"use client";

import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/5582999999999?text=Ol%C3%A1%2C+vim+pelo+site+e+quero+saber+mais+sobre+as+isoladas%21"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-green-500/50 transition-all flex items-center justify-center"
    >
      <MessageCircle className="w-8 h-8 fill-current" />
      <span className="absolute right-full mr-3 bg-white text-black px-3 py-1 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
        Fale conosco agora!
      </span>
    </motion.a>
  );
}