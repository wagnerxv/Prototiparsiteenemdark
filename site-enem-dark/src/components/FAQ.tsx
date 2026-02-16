"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";

export function FAQ() {
  const faqs = [
    {
      question: "As aulas são ao vivo ou gravadas?",
      answer: "Você tem acesso a ambos! Aulas ao vivo semanais para tirar dúvidas e um acervo completo de aulas gravadas em HD para assistir quando quiser."
    },
    {
      question: "Por quanto tempo tenho acesso?",
      answer: "O acesso é garantido até a data do ENEM 2026. Você pode rever as aulas quantas vezes precisar."
    },
    {
      question: "Tem correção de redação?",
      answer: "Sim! O plano de Redação e o Combo Completo incluem 4 correções mensais detalhadas pela nossa banca especializada."
    },
    {
      question: "Como funciona a garantia?",
      answer: "Risco zero. Você tem 7 dias para testar a plataforma. Se não gostar, devolvemos 100% do seu dinheiro sem perguntas."
    }
  ];

  return (
    <section className="py-24 px-4 bg-transparent border-t border-gray-800/50" id="faq">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Dúvidas Frequentes</h2>
          <p className="text-gray-400">Tudo o que você precisa saber antes de começar</p>
        </motion.div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-800 rounded-lg px-4 bg-gray-900/30 backdrop-blur-sm">
              <AccordionTrigger className="text-white hover:text-pink-500 hover:no-underline text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}