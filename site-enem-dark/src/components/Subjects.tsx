"use client";

import { motion } from 'motion/react';
import { 
  Calculator, Atom, Beaker, Sparkles, Book, Globe, 
  BookOpen, PenTool, Languages, ArrowUpRight 
} from 'lucide-react';
import { cn } from "@/components/ui/utils";
import { MagicCard } from "@/components/ui/magic-card";

const subjects = [
  { name: 'Matemática', icon: Calculator, gradient: 'from-blue-600 to-indigo-600', size: 'md:col-span-2', subtitle: 'A base da sua nota' },
  { name: 'Redação', icon: PenTool, gradient: 'from-pink-600 to-rose-600', size: 'md:col-span-1', subtitle: 'Garantia de 900+' },
  { name: 'Física', icon: Atom, gradient: 'from-purple-600 to-violet-600', size: 'md:col-span-1', subtitle: 'Cinemática a Elétrica' },
  { name: 'Química', icon: Beaker, gradient: 'from-emerald-600 to-teal-600', size: 'md:col-span-2', subtitle: 'Orgânica sem decoreba' },
  
  { name: 'Biologia', icon: Sparkles, gradient: 'from-lime-600 to-green-600', size: '' },
  { name: 'História', icon: Book, gradient: 'from-orange-600 to-red-600', size: '' },
  { name: 'Geografia', icon: Globe, gradient: 'from-cyan-600 to-sky-600', size: '' },
  { name: 'Português', icon: BookOpen, gradient: 'from-red-600 to-rose-600', size: '' },
  { name: 'Línguas', icon: Languages, gradient: 'from-indigo-600 to-purple-600', size: '' },
];

export function Subjects() {
  return (
    <section id="materias" className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            O Ecossistema da <span className="text-pink-500">Sua Aprovação</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Não é só uma lista de matérias. É uma estratégia completa dividida por áreas de competência.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {subjects.map((subject, index) => {
            const Icon = subject.icon;
            return (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                // A classe de tamanho (col-span) deve ficar no container motion.div
                className={cn(subject.size || "md:col-span-1")}
              >
                {/* O MagicCard fica aqui dentro, como o "cartão" visual */}
                <MagicCard className="h-full">
                  <div className="p-6 h-full flex flex-col justify-between relative z-10">
                    <div className="flex justify-between items-start">
                      <div className={cn("p-3 rounded-2xl bg-white/5", subject.gradient)}> 
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" />
                    </div>

                    <div className="mt-4">
                      <h3 className="text-xl font-bold text-white mb-1">{subject.name}</h3>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                        {subject.subtitle || "Módulo Essencial"}
                      </p>
                    </div>
                  </div>
                </MagicCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}