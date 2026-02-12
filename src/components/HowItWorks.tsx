import { motion } from 'motion/react';
import { UserPlus, ListChecks, Play, TrophyIcon } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: '1. Cadastre-se',
    description: 'Crie sua conta gratuitamente em menos de 2 minutos',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: ListChecks,
    title: '2. Escolha Suas Matérias',
    description: 'Monte seu plano personalizado com as disciplinas que você precisa',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    icon: Play,
    title: '3. Comece a Estudar',
    description: 'Acesse todo o conteúdo e estude no seu ritmo',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: TrophyIcon,
    title: '4. Conquiste a Aprovação',
    description: 'Acompanhe seu progresso e alcance seus objetivos',
    gradient: 'from-pink-500 via-orange-500 to-yellow-500',
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500">
              Como Funciona
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Simples, rápido e eficiente. Comece sua jornada em 4 passos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines (desktop) */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5">
            <div className="h-full bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-full blur-xl opacity-50`} />
                  <div className="bg-gray-900 border-4 border-black rounded-full p-4 relative z-10">
                    <div className={`bg-gradient-to-br ${step.gradient} rounded-full p-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-8">
                      <div className={`h-full bg-gradient-to-b ${step.gradient} opacity-50`} />
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
