"use client";

import { ArrowLeft, Target, TrendingUp, AlertCircle, BookOpen, Calculator, Award } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Simulados() {
  const [activeTab, setActiveTab] = useState<"simulados" | "sisu">("sisu");

  const sisuData = {
    targetCourse: "Engenharia Elétrica",
    targetUniversity: "Universidade Federal (Ampla Concorrência)",
    cutoffScore: 765.40,
    currentScore: 742.10,
    progress: 96,
    scores: [
      { area: "Matemática", score: 820.5, weight: 3 },
      { area: "Natureza", score: 710.2, weight: 3 },
      { area: "Linguagens", score: 650.0, weight: 1 },
      { area: "Humanas", score: 680.4, weight: 1 },
      { area: "Redação", score: 880.0, weight: 2 },
    ]
  };

  const simuladosList = [
    { id: 1, name: "Simulado Nacional ENEM - Dia 1", date: "15/03/2026", status: "completed", score: 82 },
    { id: 2, name: "Simulado Nacional ENEM - Dia 2", date: "22/03/2026", status: "completed", score: 78 },
    { id: 3, name: "Mini-Simulado: Exatas", date: "Disponível", status: "pending", score: null },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 pb-20">
      <nav className="border-b border-zinc-800 p-4 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/dashboard" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Voltar ao Dashboard
          </Link>
          <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full">
            <Target className="w-4 h-4 text-blue-500" />
            <span className="text-xs font-bold text-blue-400">Inteligência de Dados TRI</span>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-6 mt-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              <Calculator className="w-8 h-8 text-blue-500" /> Centro de Aprovação
            </h1>
            <p className="text-zinc-400 mt-2 text-sm max-w-2xl">
              Compare seu desempenho atual com as notas de corte reais do SISU e realize novos simulados para calibrar sua estratégia.
            </p>
          </div>
          
          <div className="flex bg-zinc-900 border border-zinc-800 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("sisu")}
              className={`px-6 py-2.5 text-sm font-medium rounded-md transition-all ${
                activeTab === "sisu" ? "bg-zinc-800 text-white shadow-sm" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Simulador SISU
            </button>
            <button
              onClick={() => setActiveTab("simulados")}
              className={`px-6 py-2.5 text-sm font-medium rounded-md transition-all ${
                activeTab === "simulados" ? "bg-zinc-800 text-white shadow-sm" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Meus Simulados
            </button>
          </div>
        </div>

        {activeTab === "sisu" ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in duration-500">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
                
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div>
                    <h2 className="text-2xl font-bold text-white">{sisuData.targetCourse}</h2>
                    <p className="text-zinc-400 flex items-center gap-2 mt-1 text-sm">
                      <Award className="w-4 h-4 text-yellow-500" /> {sisuData.targetUniversity}
                    </p>
                  </div>
                  <button className="text-xs font-medium bg-zinc-950 border border-zinc-700 px-3 py-1.5 rounded-lg text-zinc-300 hover:bg-zinc-800 transition-colors">
                    Alterar Curso
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-8 relative z-10">
                  <div>
                    <p className="text-sm text-zinc-500 font-medium mb-1">Sua Média Ponderada Atual</p>
                    <div className="text-4xl font-bold text-white">{sisuData.currentScore.toFixed(2)}</div>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 font-medium mb-1">Nota de Corte Estimada</p>
                    <div className="text-4xl font-bold text-blue-500">{sisuData.cutoffScore.toFixed(2)}</div>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-zinc-400">Distância para a aprovação</span>
                    <span className="text-white font-medium">Faltam {(sisuData.cutoffScore - sisuData.currentScore).toFixed(2)} pontos</span>
                  </div>
                  <div className="h-3 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400 relative" 
                      style={{ width: `${sisuData.progress}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Composição da sua Nota (Pesos do Edital)</h3>
                <div className="space-y-4">
                  {sisuData.scores.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-32 text-sm text-zinc-400">{item.area}</div>
                      <div className="flex-1 h-2 bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
                        <div className="h-full bg-zinc-600" style={{ width: `${(item.score / 1000) * 100}%` }} />
                      </div>
                      <div className="w-16 text-right font-medium text-white text-sm">{item.score.toFixed(1)}</div>
                      <div className="w-16 text-right text-xs text-zinc-500">Peso {item.weight}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  <h3 className="font-semibold text-white">Plano Estratégico</h3>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                  Para atingir a nota de corte em Engenharia Elétrica, seu foco nesta semana deve ser aumentar sua nota em <strong className="text-blue-400">Natureza</strong> e <strong className="text-blue-400">Matemática</strong>, que possuem peso 3 na sua universidade alvo.
                </p>
                <Link href="/dashboard" className="w-full block text-center bg-blue-500 text-white font-bold py-3 rounded-xl hover:bg-blue-600 transition-colors text-sm">
                  Gerar Trilha de Estudos Focada
                </Link>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-5 h-5 text-orange-500" />
                  <h3 className="font-semibold text-white">Oportunidades</h3>
                </div>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li className="flex justify-between items-center p-2 hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer">
                    <span>Engenharia da Computação</span>
                    <span className="text-emerald-500 font-medium">Você passa!</span>
                  </li>
                  <li className="flex justify-between items-center p-2 hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer">
                    <span>Sistemas de Informação</span>
                    <span className="text-emerald-500 font-medium">Você passa!</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
            {simuladosList.map((simulado) => (
              <div key={simulado.id} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col h-full hover:border-zinc-700 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2 rounded-lg ${simulado.status === 'completed' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-blue-500/10 text-blue-500'}`}>
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium text-zinc-500 bg-zinc-950 px-2.5 py-1 rounded-full border border-zinc-800">
                    {simulado.date}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{simulado.name}</h3>
                
                <div className="mt-auto pt-6">
                  {simulado.status === 'completed' ? (
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-xs text-zinc-500 mb-1">Acertos Globais</p>
                        <p className="text-2xl font-bold text-white">{simulado.score}/90</p>
                      </div>
                      <button className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
                        Ver Gabarito
                      </button>
                    </div>
                  ) : (
                    <button className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-zinc-200 transition-colors text-sm">
                      Iniciar Simulado
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}