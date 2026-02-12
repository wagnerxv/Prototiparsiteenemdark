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
    description: 'Álgebra, geometria e estatística',
    gradient: 'from-blue-500 via-cyan-500 to-purple-500',
  },
  {
    name: 'Física',
    icon: Atom,
    description: 'Mecânica, termodinâmica e óptica',
    gradient: 'from-purple-500 via-pink-500 to-red-500',
  },
  {
    name: 'Química',
    icon: Beaker,
    description: 'Orgânica, inorgânica e físico-química',
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
  },
  {
    name: 'Biologia',
    icon: Sparkles,
    description: 'Ecologia, genética e citologia',
    gradient: 'from-lime-500 via-green-500 to-emerald-500',
  },
  {
    name: 'História',
    icon: Book,
    description: 'História do Brasil e geral',
    gradient: 'from-amber-500 via-orange-500 to-red-500',
  },
  {
    name: 'Geografia',
    icon: Globe,
    description: 'Geopolítica e geografia física',
    gradient: 'from-teal-500 via-cyan-500 to-blue-500',
  },
  {
    name: 'Português',
    icon: BookOpen,
    description: 'Gramática, literatura e interpretação',
    gradient: 'from-red-500 via-rose-500 to-pink-500',
  },
  {
    name: 'Redação',
    icon: PenTool,
    description: 'Técnicas e correção personalizada',
    gradient: 'from-orange-500 via-yellow-500 to-amber-500',
  },
  {
    name: 'Inglês/Espanhol',
    icon: Languages,
    description: 'Compreensão de textos',
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
  },
];

export function Subjects() {
  return (
    <section id="materias" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Escolha Suas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500">
              Matérias
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Monte seu plano de estudos personalizado. Estude apenas o que você precisa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => {
            const Icon = subject.icon;
            return (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-pink-500/50 transition-all cursor-pointer group relative overflow-hidden"
              >
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${subject.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`bg-gradient-to-br ${subject.gradient} rounded-xl p-3 group-hover:scale-110 transition-transform shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{subject.name}</h3>
                      <p className="text-gray-400 text-sm">{subject.description}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
                    <span className="text-sm text-gray-500">50+ videoaulas</span>
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${subject.gradient} text-sm font-semibold group-hover:underline`}>
                      Ver conteúdo →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 hover:shadow-2xl hover:shadow-pink-500/50 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105">
            Montar Meu Plano de Estudos
          </button>
        </motion.div>
      </div>
    </section>
  );
}
