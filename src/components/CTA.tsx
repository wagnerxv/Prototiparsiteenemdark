import { motion } from 'motion/react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CTA() {
  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-500/10 via-transparent to-orange-500/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-pink-500/30 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/30 to-yellow-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-orange-500 to-yellow-500 rounded-3xl blur-2xl opacity-20" />
            <div className="rounded-3xl overflow-hidden relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760348082270-3a46a3512850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwc3VjY2VzcyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3MDg5NzcyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sucesso na graduação"
                className="w-full h-auto rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Right - CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Comece Sua Jornada{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500">
                Gratuitamente
              </span>
            </h2>

            <p className="text-xl text-gray-400 mb-8">
              Experimente 7 dias grátis e veja como a UP pode transformar seus estudos para o ENEM.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Acesso completo a todas as matérias',
                'Material didático incluso',
                'Suporte pedagógico',
                'Cancele quando quiser',
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-gradient-to-br from-pink-500 to-orange-500 rounded-full p-1">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 hover:shadow-2xl hover:shadow-pink-500/50 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all hover:scale-105">
                Começar Teste Grátis
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-700 hover:border-pink-500 text-white px-8 py-4 rounded-full font-semibold transition-all hover:bg-pink-500/10">
                Falar com Suporte
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Sem compromisso. Cancele quando quiser.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
