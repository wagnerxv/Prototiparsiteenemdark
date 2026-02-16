"use client";

import { ArrowLeft, CheckCircle2, Download, FileText, PlayCircle, Trophy } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter, useParams } from "next/navigation";

const lessonsDatabase: Record<string, any> = {
  "mat-01": {
    id: "mat-01",
    title: "Geometria Analítica: Equação da Reta",
    subject: "Matemática",
    videoUrl: "https://www.youtube.com/embed/j0dU93bKML8", 
    questions: [
      {
        id: "q1",
        text: "Determine o coeficiente angular da reta que passa pelos pontos A(2, 3) e B(4, 7).",
        options: [
          { id: "a", text: "1" },
          { id: "b", text: "2" },
          { id: "c", text: "3" },
          { id: "d", text: "4" }
        ],
        correctOption: "b",
        explanation: "A fórmula do coeficiente angular é m = (y2 - y1) / (x2 - x1). Aplicando os pontos, temos (7 - 3) / (4 - 2) = 4 / 2 = 2."
      }
    ]
  },
  "mat-02": {
    id: "mat-02",
    title: "Aula 1: Função Afim",
    subject: "Matemática",
    videoUrl: "https://www.youtube.com/embed/P5hXzQb_LLw?list=PL0cWxeWFDSFvyKKtuDCqDJzmbw6YDfZ0p",
    questions: [
      {
        id: "q1",
        text: "De acordo com a aula, dada a função f(x) = 5x - 3, qual é o valor do coeficiente angular (a) e do coeficiente linear (b)?",
        options: [
          { id: "a", text: "a = 5, b = 3" },
          { id: "b", text: "a = -3, b = 5" },
          { id: "c", text: "a = 5, b = -3" },
          { id: "d", text: "a = 3, b = -5" }
        ],
        correctOption: "c",
        explanation: "O coeficiente angular (a) acompanha o x, e o coeficiente linear (b) é o termo independente. Logo, a = 5 e b = -3."
      }
    ]
  }
};

export default function LessonView() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const router = useRouter();
  const params = useParams();

  const lessonId = typeof params?.id === "string" ? params.id : "mat-01";
  const lessonData = lessonsDatabase[lessonId] || lessonsDatabase["mat-01"];

  const handleAnswer = (optionId: string) => {
    if (showResult) return;
    setSelectedOption(optionId);
  };

  const submitAnswer = () => {
    if (selectedOption) {
      setShowResult(true);
      
      if (selectedOption === lessonData.questions[0].correctOption) {
        toast.success("Resposta Correta! +50 Pontos", {
          description: "Seu progresso na disciplina de Matemática foi atualizado.",
          icon: <Trophy className="text-yellow-500" />
        });
      }
    }
  };

  const handleCompleteLesson = () => {
    toast("Aula concluída com sucesso!", {
      description: "Redirecionando para o dashboard...",
    });
    setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
  };

  const handleDownload = () => {
    toast.success("Download iniciado", {
      description: "O material complementar da aula foi baixado."
    });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 pb-20">
      <nav className="border-b border-zinc-800 p-4 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/dashboard" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Voltar ao Dashboard
          </Link>
          <div className="flex gap-2">
            <span className="bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full text-xs font-medium text-zinc-300">
              Matemática
            </span>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <span className="text-emerald-500 font-bold text-xs uppercase tracking-wider">{lessonData.subject}</span>
            <h1 className="text-3xl font-bold mt-2 tracking-tight">{lessonData.title}</h1>
          </div>
          
          <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
            <iframe 
              width="100%" 
              height="100%" 
              src={lessonData.videoUrl} 
              title="Video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div 
              onClick={handleDownload}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-zinc-800 hover:border-zinc-700 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-pink-500/10 rounded-lg text-pink-500 group-hover:bg-pink-500/20 transition-colors">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-sm text-white">Mapa Mental</h3>
                  <p className="text-xs text-zinc-400">PDF • 2.4 MB</p>
                </div>
              </div>
              <Download className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            </div>

            <div 
              onClick={handleDownload}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-zinc-800 hover:border-zinc-700 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500 group-hover:bg-blue-500/20 transition-colors">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-sm text-white">Lista de Exercícios</h3>
                  <p className="text-xs text-zinc-400">PDF • 15 Questões</p>
                </div>
              </div>
              <Download className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 h-fit sticky top-24 shadow-xl">
            <h2 className="text-lg font-semibold mb-6 flex items-center gap-2 text-white">
              Questão de Fixação
            </h2>
            
            <div className="space-y-6">
              <p className="text-zinc-300 leading-relaxed text-sm">
                {lessonData.questions[0].text}
              </p>

              <div className="space-y-3">
                {lessonData.questions[0].options.map((option: any) => {
                  const isSelected = selectedOption === option.id;
                  const isCorrect = option.id === lessonData.questions[0].correctOption;
                  
                  let buttonClass = "w-full text-left p-4 rounded-xl border transition-all text-sm ";
                  
                  if (!showResult) {
                    buttonClass += isSelected 
                      ? "border-emerald-500 bg-emerald-500/10 text-white" 
                      : "border-zinc-800 hover:border-zinc-600 bg-zinc-950/50 text-zinc-300";
                  } else {
                    if (isCorrect) {
                      buttonClass += "border-emerald-500 bg-emerald-500/20 text-emerald-400 font-medium";
                    } else if (isSelected && !isCorrect) {
                      buttonClass += "border-red-500 bg-red-500/20 text-red-400";
                    } else {
                      buttonClass += "border-zinc-800 bg-zinc-950/50 opacity-40 text-zinc-500";
                    }
                  }

                  return (
                    <button
                      key={option.id}
                      onClick={() => handleAnswer(option.id)}
                      disabled={showResult}
                      className={buttonClass}
                    >
                      <span className="font-mono text-xs uppercase mr-3 opacity-60">{option.id})</span>
                      {option.text}
                    </button>
                  );
                })}
              </div>

              {!showResult ? (
                <button 
                  onClick={submitAnswer}
                  disabled={!selectedOption}
                  className="w-full bg-white text-black font-bold py-3.5 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-200 transition-colors shadow-lg"
                >
                  Confirmar Resposta
                </button>
              ) : (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
                  <div className={`p-4 rounded-xl flex items-start gap-3 border ${selectedOption === lessonData.questions[0].correctOption ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-red-500/10 border-red-500/20 text-red-400'}`}>
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block mb-1">
                        {selectedOption === lessonData.questions[0].correctOption ? 'Exato! Você dominou o conceito.' : 'Incorreto. Vamos revisar.'}
                      </span>
                      <p className="text-xs opacity-80 leading-relaxed">
                        {lessonData.questions[0].explanation}
                      </p>
                    </div>
                  </div>

                  {selectedOption === lessonData.questions[0].correctOption && (
                    <button 
                      onClick={handleCompleteLesson}
                      className="w-full bg-emerald-500 text-black font-bold py-3.5 rounded-xl hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2"
                    >
                      <PlayCircle className="w-5 h-5" />
                      Concluir Aula
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}