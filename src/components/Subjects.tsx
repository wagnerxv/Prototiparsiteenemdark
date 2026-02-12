import { motion } from 'motion/react';
import {
  BookOpen,
  Calculator,
  Atom,
  Beaker,
  Globe,
  Book,
  Languages,
  Lightbulb,
  PenTool,
} from 'lucide-react';

const subjects = [
  {
    name: 'Matemática',
    icon: Calculator,
    description: 'Álgebra, geometria e estatística',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Física',
    icon: Atom,
    description: 'Mecânica, termodinâmica e óptica',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Química',
    icon: Beaker,
    description: 'Orgânica, inorgânica e físico-química',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Biologia',
    icon: Lightbulb,
    description: 'Ecologia, genética e citologia',
    color: 'from-lime-500 to-green-500',
  },
  {
    name: 'História',
    icon: Book,
    description: 'História do Brasil e geral',
    color: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Geografia',
    icon: Globe,
    description: 'Geopolítica e geografia física',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    name: 'Português',
    icon: BookOpen,
    description: 'Gramática, literatura e interpretação',
    color: 'from-red-500 to-rose-500',
  },
  {
    name: 'Redação',
    icon: PenTool,
    description: 'Técnicas e correção personalizada',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    name: 'Inglês/Espanhol',
    icon: Languages,
    description: 'Compreensão de textos',
    color: 'from-indigo-500 to-purple-500',
  },
];

export function Subjects() {
  return (
    <section id="materias" className="py-20 px-4 bg-gray-950">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Escolha Suas Matérias
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
                whileHover={{ scale: 1.03 }}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-orange-500/50 transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`bg-gradient-to-br ${subject.color} rounded-lg p-3 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{subject.name}</h3>
                    <p className="text-gray-400 text-sm">{subject.description}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-800 flex items-center justify-between">
                  <span className="text-sm text-gray-500">50+ videoaulas</span>
                  <span className="text-orange-500 text-sm font-semibold group-hover:underline">
                    Ver conteúdo →
                  </span>
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
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105">
            Montar Meu Plano de Estudos
          </button>
        </motion.div>
      </div>
    </section>
  );
}
