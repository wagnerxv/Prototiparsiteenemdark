import { motion } from 'motion/react';
import {
  Clock,
  Target,
  Video,
  Award,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Estudo Personalizado',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: Clock,
    title: 'Estude Quando Quiser',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    icon: Video,
    title: 'Videoaulas em HD',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Award,
    title: 'Certificados',
    gradient: 'from-purple-500 to-pink-500',
  },
];

export function Benefits() {
  return (
    <section className="py-16 px-4 bg-gray-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Por Que Escolher a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500">
              UP?
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center hover:border-pink-500/50 transition-all group"
              >
                <div className={`bg-gradient-to-br ${benefit.gradient} rounded-xl p-3 w-fit mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white text-sm">{benefit.title}</h3>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-gradient-to-br from-pink-500/10 via-orange-500/10 to-yellow-500/10 border border-pink-500/30 rounded-3xl p-8 md:p-10 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comece{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500">
              Gratuitamente
            </span>
          </h3>
          <p className="text-gray-400 mb-6">
            7 dias grátis para testar. Cancele quando quiser.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Sem compromisso</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Acesso completo</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Suporte incluído</span>
            </div>
          </div>

          <button className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 hover:shadow-2xl hover:shadow-pink-500/50 text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 mx-auto text-lg">
            Começar Teste Grátis
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
