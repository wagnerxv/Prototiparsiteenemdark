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
  },
  {
    icon: Clock,
    title: 'Flexibilidade Total',
    description: 'Estude no seu ritmo, onde e quando quiser',
  },
  {
    icon: Video,
    title: 'Videoaulas em HD',
    description: 'Conteúdo de alta qualidade com os melhores professores',
  },
  {
    icon: FileText,
    title: 'Material Completo',
    description: 'PDFs, resumos e exercícios para cada disciplina',
  },
  {
    icon: Users,
    title: 'Comunidade Ativa',
    description: 'Tire dúvidas e compartilhe conhecimento com outros alunos',
  },
  {
    icon: Award,
    title: 'Certificados',
    description: 'Receba certificados ao concluir cada matéria',
  },
  {
    icon: Smartphone,
    title: 'Acesso Multiplataforma',
    description: 'Estude pelo celular, tablet ou computador',
  },
  {
    icon: TrendingUp,
    title: 'Acompanhamento',
    description: 'Dashboard completo para monitorar seu progresso',
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Por Que Escolher a UP?
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
                className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-orange-500/50 transition-all"
              >
                <div className="bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg p-3 w-fit mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
