"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Testimonials() {
  const testimonials = [
    {
      name: "Ana Júlia",
      role: "Aprovada em Medicina - UFAL",
      text: "A didática dos professores é surreal. Consegui sair de 600 para 920 em matemática em apenas 6 meses de isolada.",
      initials: "AJ"
    },
    {
      name: "Pedro Santos",
      role: "Aprovado em Direito - USP",
      text: "O suporte na redação foi o diferencial. As correções são muito detalhadas e me fizeram entender exatamente onde eu errava.",
      initials: "PS"
    },
    {
      name: "Mariana Costa",
      role: "Engenharia Civil - UFRJ",
      text: "Plataforma organizada, direto ao ponto. Não perdi tempo com conteúdos que não caem. Foco total no que importa.",
      initials: "MC"
    }
  ];

  return (
    <section className="py-24 px-4 bg-transparent">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Quem faz, <span className="text-pink-500">Aprova</span>
          </h2>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-800">
                    <CardContent className="flex flex-col gap-4 p-6">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">"{testimonial.text}"</p>
                      <div className="flex items-center gap-3 mt-2">
                        <Avatar>
                          <AvatarFallback className="bg-pink-500/20 text-pink-500">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-white text-sm font-bold">{testimonial.name}</p>
                          <p className="text-gray-500 text-xs">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="border-gray-700 bg-black/50 backdrop-blur-md text-white hover:bg-gray-800" />
            <CarouselNext className="border-gray-700 bg-black/50 backdrop-blur-md text-white hover:bg-gray-800" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}