"use client";

import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function Hero() {
  const router = useRouter();

  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-transparent min-h-[90vh] flex flex-col items-center justify-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-white/10 via-transparent to-transparent blur-[100px] opacity-40 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-pink-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      
      <div className="container mx-auto relative z-10 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-pink-500" />
          <span className="text-sm font-medium text-gray-300">A Revolução do ENEM 2026</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
          Domine o ENEM <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">
            Sem Perder Tempo.
          </span>
        </h1>

        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          O primeiro ecossistema de estudo modular. Você escolhe as peças, nós garantimos a aprovação.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <motion.button 
            onClick={() => router.push('/checkout')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Começar Agora <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute inset-0 z-10 bg-white group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center gap-2">
              Começar Agora <ArrowRight className="w-5 h-5" />
            </span>
          </motion.button>
          
          <button className="text-gray-400 hover:text-white transition-colors underline decoration-gray-700 hover:decoration-white underline-offset-4">
            Ver grade curricular
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-[linear-gradient(to_bottom,transparent,black),linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_top,black,transparent)] opacity-20 transform perspective-[1000px] rotate-x-60" />
    </section>
  );
}