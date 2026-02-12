import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Silva',
    course: 'Medicina - USP',
    text: 'A UP Isoladas foi essencial na minha aprovação. Consegui focar apenas nas matérias que tinha dificuldade e melhorei minha nota em 150 pontos!',
    rating: 5,
    avatar: 'MS',
  },
  {
    name: 'João Pedro',
    course: 'Engenharia - UFRJ',
    text: 'Os professores são excelentes e o material é muito completo. A flexibilidade de estudar no meu ritmo fez toda a diferença.',
    rating: 5,
    avatar: 'JP',
  },
  {
    name: 'Ana Carolina',
    course: 'Direito - UFMG',
    text: 'Melhor investimento que fiz! As videoaulas são objetivas e os exercícios me prepararam muito bem para a prova.',
    rating: 5,
    avatar: 'AC',
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 px-4 bg-gray-950">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            O Que Nossos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500">
              Alunos Dizem
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Histórias reais de quem conquistou a aprovação com a UP
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 relative hover:border-pink-500/50 transition-all group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-orange-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              <Quote className="w-10 h-10 text-transparent bg-clip-text fill-pink-500/20 absolute top-4 right-4" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-pink-500 via-orange-500 to-yellow-500 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.course}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed">{testimonial.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
