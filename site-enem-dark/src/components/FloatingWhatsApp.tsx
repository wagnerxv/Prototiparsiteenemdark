"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User as UserIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";

type Message = {
  id: string;
  text: string;
  sender: "bot" | "user";
  options?: string[];
};

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const initialBotMessages: Message[] = [
    {
      id: "1",
      text: "Olá! Sou a assistente de IA da up.educacao. Notei que você está navegando pela nossa plataforma.",
      sender: "bot",
    },
    {
      id: "2",
      text: "Como posso acelerar sua aprovação hoje?",
      sender: "bot",
      options: [
        "Quero assinar o Premium",
        "Como funcionam as aulas?",
        "Falar com suporte humano"
      ],
    }
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        setMessages([initialBotMessages[0]]);
        setTimeout(() => {
          setMessages(initialBotMessages);
          setIsTyping(false);
        }, 800);
      }, 600);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleOptionClick = (option: string) => {
    const userMsg: Message = { id: Date.now().toString(), text: option, sender: "user" };
    setMessages((prev) => prev.map(m => ({ ...m, options: [] })).concat(userMsg));
    setIsTyping(true);

    setTimeout(() => {
      let botResponse: Message;

      if (option === "Quero assinar o Premium") {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: "Excelente escolha! O plano Premium te dá acesso a todas as aulas, mais de 5.000 questões e correção de redação. Vou te redirecionar para a nossa página de checkout segura.",
          sender: "bot",
        };
        setTimeout(() => router.push("/checkout"), 3500);
      } else if (option === "Como funcionam as aulas?") {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: "Nossa metodologia integra teoria e prática. Você assiste à videoaula e, logo abaixo do player, já resolve questões focadas no ENEM para fixar o conteúdo. Quer testar a área do aluno?",
          sender: "bot",
          options: ["Sim, quero testar", "Voltar"],
        };
      } else if (option === "Sim, quero testar") {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: "Preparando seu acesso demonstrativo...",
          sender: "bot",
        };
        setTimeout(() => router.push("/lesson/mat-01"), 2000);
      } else if (option === "Falar com suporte humano") {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: "Entendido. Estou transferindo seu atendimento para a nossa equipe de especialistas. Em instantes um consultor falará com você.",
          sender: "bot",
        };
      } else {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: "Como posso te ajudar a garantir sua aprovação hoje?",
          sender: "bot",
          options: ["Quero assinar o Premium", "Como funcionam as aulas?", "Falar com suporte humano"],
        };
      }

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-[350px] bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{ height: '500px', maxHeight: '80vh' }}
          >
            <div className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">IA up.educacao</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white/80 text-xs">Online agora</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-950/50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className="flex items-end gap-2 max-w-[85%]">
                    {msg.sender === 'bot' && (
                      <div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 mb-1">
                        <Bot className="w-3.5 h-3.5 text-pink-500" />
                      </div>
                    )}
                    
                    <div className={`p-3 rounded-2xl text-sm ${
                      msg.sender === 'user' 
                        ? 'bg-zinc-800 text-white rounded-br-sm' 
                        : 'bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-bl-sm'
                    }`}>
                      {msg.text}
                    </div>

                    {msg.sender === 'user' && (
                      <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 mb-1">
                        <UserIcon className="w-3.5 h-3.5 text-zinc-400" />
                      </div>
                    )}
                  </div>

                  {msg.options && msg.options.length > 0 && (
                    <div className="mt-3 flex flex-col gap-2 w-[85%] ml-8">
                      {msg.options.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleOptionClick(opt)}
                          className="text-left text-sm bg-zinc-900/80 border border-pink-500/30 text-pink-400 py-2.5 px-4 rounded-xl hover:bg-pink-500/10 transition-colors"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-end gap-2 max-w-[85%]">
                  <div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 mb-1">
                    <Bot className="w-3.5 h-3.5 text-pink-500" />
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 py-4 px-4 rounded-2xl rounded-bl-sm flex gap-1">
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 bg-zinc-900 border-t border-zinc-800">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="A IA atende por botões nesta demo..." 
                  disabled
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-full pl-4 pr-12 py-3 text-sm text-zinc-400 cursor-not-allowed"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center opacity-50">
                  <Send className="w-4 h-4 text-zinc-500" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 rounded-full shadow-lg shadow-pink-500/20 flex items-center justify-center relative group"
      >
        <div className="absolute inset-0 rounded-full bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        {isOpen ? <X className="w-7 h-7 text-white relative z-10" /> : <MessageCircle className="w-7 h-7 text-white relative z-10" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-black"></span>
          </span>
        )}
      </motion.button>
    </div>
  );
}