import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-gray-950 to-gray-950" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-orange-500 fill-orange-500" />
                ))}
              </div>
              <span className="text-gray-400 text-sm">+10.000 alunos aprovados</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Domine as matérias do{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                ENEM
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Estude apenas as disciplinas que você precisa. Flexibilidade total com conteúdo de
              alta qualidade e professores especializados.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105">
                Começar Gratuitamente
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-gray-700 hover:border-orange-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Ver Matérias
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold text-orange-500">98%</p>
                <p className="text-gray-400 text-sm">Taxa de Aprovação</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-orange-500">500+</p>
                <p className="text-gray-400 text-sm">Videoaulas</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-orange-500">24/7</p>
                <p className="text-gray-400 text-sm">Suporte</p>
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
            <div className="relative rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmclMjBoYXBweXxlbnwxfHx8fDE3NzA4MTcxODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Estudante feliz"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="bg-orange-500 rounded-full p-3">
                  <Star className="w-6 h-6 text-white fill-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Nota Média</p>
                  <p className="text-orange-500 text-xl font-bold">850+</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
