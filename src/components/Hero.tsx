import { motion } from 'motion/react';
import { ArrowRight, Star, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-black to-orange-500/20" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-pink-500/30 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-500/30 to-yellow-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 font-semibold">
                Ajude você a superar seus desafios acadêmicos
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Preparação{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500">
                adequada
              </span>
              {' '}e o ambiente{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500">
                certo
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Estude matérias isoladas do ENEM com flexibilidade total. 
              Monte seu plano personalizado e conquiste a aprovação.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 hover:shadow-2xl hover:shadow-pink-500/50 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all hover:scale-105">
                Começar Gratuitamente
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-700 hover:border-pink-500 text-white px-8 py-4 rounded-full font-semibold transition-all hover:bg-pink-500/10">
                Ver Matérias
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">2.3K</p>
                <p className="text-gray-400 text-sm">Seguidores</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">191</p>
                <p className="text-gray-400 text-sm">Posts</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">98%</p>
                <p className="text-gray-400 text-sm">Aprovação</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-orange-500 to-yellow-500 opacity-20 blur-2xl" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmclMjBoYXBweXxlbnwxfHx8fDE3NzA4MTcxODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Estudante feliz"
                className="w-full h-auto rounded-3xl relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-gray-900 border-2 border-pink-500/50 rounded-2xl p-4 shadow-2xl shadow-pink-500/20 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-pink-500 to-orange-500 rounded-full p-3">
                  <Star className="w-6 h-6 text-white fill-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Nota Média</p>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 text-xl font-bold">850+</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
