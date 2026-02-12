import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 px-4 overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-black to-orange-500/20" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-pink-500/30 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-500/30 to-yellow-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 font-semibold text-sm">
              Supere seus desafios acadêmicos
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Estude apenas as matérias que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500">
              você precisa
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Monte seu plano personalizado de matérias isoladas do ENEM. Flexível, completo e no seu ritmo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 hover:shadow-2xl hover:shadow-pink-500/50 text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 text-lg">
              Começar Agora
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-gray-700 hover:border-pink-500 text-white px-10 py-4 rounded-full font-semibold transition-all hover:bg-pink-500/10">
              Ver Matérias
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">2.3K+</p>
              <p className="text-gray-500 text-xs md:text-sm">Alunos</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">9</p>
              <p className="text-gray-500 text-xs md:text-sm">Matérias</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">100%</p>
              <p className="text-gray-500 text-xs md:text-sm">Online</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
