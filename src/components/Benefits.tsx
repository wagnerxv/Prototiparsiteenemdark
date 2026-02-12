import { motion } from 'motion/react';
import {
  Clock,
  Target,
  Video,
  FileText,
  Users,
  Award,
  Smartphone,
  TrendingUp,
} from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Estudo Personalizado',
    description: 'Foque apenas nas matérias que você realmente precisa melhorar',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: Clock,
    title: 'Flexibilidade Total',
    description: 'Estude no seu ritmo, onde e quando quiser',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    icon: Video,
    title: 'Videoaulas em HD',
    description: 'Conteúdo de alta qualidade com os melhores professores',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: FileText,
    title: 'Material Completo',
    description: 'PDFs, resumos e exercícios para cada disciplina',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Comunidade Ativa',
    description: 'Tire dúvidas e compartilhe conhecimento com outros alunos',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Award,
    title: 'Certificados',
    description: 'Receba certificados ao concluir cada matéria',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Smartphone,
    title: 'Acesso Multiplataforma',
    description: 'Estude pelo celular, tablet ou computador',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: TrendingUp,
    title: 'Acompanhamento',
    description: 'Dashboard completo para monitorar seu progresso',
    gradient: 'from-pink-500 via-orange-500 to-yellow-500',
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 px-4 bg-gray-950">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Por Que Escolher a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500">
              UP?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tudo o que você precisa para alcançar a aprovação no ENEM
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-pink-500/50 transition-all relative overflow-hidden group"
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`bg-gradient-to-br ${benefit.gradient} rounded-xl p-3 w-fit mb-4 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
