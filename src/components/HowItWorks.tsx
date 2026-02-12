import { motion } from 'motion/react';
import { UserPlus, ListChecks, Play, TrophyIcon } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: '1. Cadastre-se',
    description: 'Crie sua conta gratuitamente em menos de 2 minutos',
  },
  {
    icon: ListChecks,
    title: '2. Escolha Suas Matérias',
    description: 'Monte seu plano personalizado com as disciplinas que você precisa',
  },
  {
    icon: Play,
    title: '3. Comece a Estudar',
    description: 'Acesse todo o conteúdo e estude no seu ritmo',
  },
  {
    icon: TrophyIcon,
    title: '4. Conquiste a Aprovação',
    description: 'Acompanhe seu progresso e alcance seus objetivos',
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 px-4 bg-gray-950">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Como Funciona</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Simples, rápido e eficiente. Comece sua jornada em 4 passos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

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
                  <div className="bg-gray-900 border-4 border-gray-950 rounded-full p-6 relative z-10">
                    <div className="bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full p-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-orange-500 to-transparent" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
