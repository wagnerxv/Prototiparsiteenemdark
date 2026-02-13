"use client";

import { motion } from 'motion/react';
import { Clock, Target, Video, Award, CheckCircle, ArrowRight } from 'lucide-react';

const benefits = [
  { icon: Target, title: 'Estudo Personalizado', gradient: 'from-pink-500 to-rose-500' },
  { icon: Clock, title: 'Estude Quando Quiser', gradient: 'from-orange-500 to-amber-500' },
  { icon: Video, title: 'Videoaulas em HD', gradient: 'from-yellow-500 to-orange-500' },
  { icon: Award, title: 'Certificados', gradient: 'from-purple-500 to-pink-500' },
];

export function Benefits() {
  return (
    <section className="py-24 px-4 bg-gray-950 relative overflow-hidden">
      {/* Background effects suavizados */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]" />

      <div className="container mx-auto relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Por Que Escolher a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500">
              UP?
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 text-center hover:border-gray-700 hover:bg-gray-900/60 transition-all group"
              >
                <div className={`bg-gradient-to-br ${benefit.gradient} rounded-2xl p-4 w-fit mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-white text-lg">{benefit.title}</h3>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Brilho decorativo na borda superior */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comece{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500">
              Gratuitamente
            </span>
          </h3>
          <p className="text-gray-400 mb-8 text-lg">
            7 dias grátis para testar. Cancele quando quiser.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-10">
            {['Sem compromisso', 'Acesso completo', 'Suporte incluído'].map((item) => (
              <div key={item} className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-gray-300 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all mx-auto text-lg shadow-[0_0_30px_rgba(236,72,153,0.3)]"
          >
            Começar Teste Grátis
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}