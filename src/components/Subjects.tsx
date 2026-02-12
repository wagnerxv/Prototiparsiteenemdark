import { motion } from 'motion/react';
import {
  BookOpen,
  Calculator,
  Atom,
  Beaker,
  Globe,
  Book,
  Languages,
  Sparkles,
  PenTool,
} from 'lucide-react';

const subjects = [
  {
    name: 'Matemática',
    icon: Calculator,
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    name: 'Física',
    icon: Atom,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Química',
    icon: Beaker,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Biologia',
    icon: Sparkles,
    gradient: 'from-lime-500 to-green-500',
  },
  {
    name: 'História',
    icon: Book,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    name: 'Geografia',
    icon: Globe,
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'Português',
    icon: BookOpen,
    gradient: 'from-red-500 to-rose-500',
  },
  {
    name: 'Redação',
    icon: PenTool,
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    name: 'Inglês/Espanhol',
    icon: Languages,
    gradient: 'from-indigo-500 to-purple-500',
  },
];

export function Subjects() {
  return (
    <section id="materias" className="py-16 px-4 bg-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Escolha Suas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500">
              Matérias
            </span>
          </h2>
          <p className="text-gray-400">
            Monte seu plano personalizado
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {subjects.map((subject, index) => {
            const Icon = subject.icon;
            return (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-pink-500/50 transition-all cursor-pointer group relative overflow-hidden"
              >
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${subject.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10 text-center">
                  <div className={`bg-gradient-to-br ${subject.gradient} rounded-xl p-3 w-fit mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white text-sm">{subject.name}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <button className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 hover:shadow-2xl hover:shadow-pink-500/50 text-white px-8 py-3 rounded-full font-bold transition-all hover:scale-105">
            Montar Meu Plano
          </button>
        </motion.div>
      </div>
    </section>
  );
}
