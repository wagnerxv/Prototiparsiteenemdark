"use client";

import { useState } from "react";
import { ArrowLeft, Bot, Sparkles, Loader2, CheckCircle2, AlertTriangle, TrendingUp, UploadCloud, File as FileIcon, X } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function RedacaoIA() {
  const [text, setText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [inputType, setInputType] = useState<"text" | "file">("text");
  const [file, setFile] = useState<File | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleAnalyze = () => {
    if (inputType === "text" && text.length < 50) {
      toast.error("Texto muito curto", {
        description: "Escreva pelo menos um parágrafo para a IA poder analisar."
      });
      return;
    }

    if (inputType === "file" && !file) {
      toast.error("Nenhum arquivo selecionado", {
        description: "Envie um arquivo PDF ou imagem com a sua redação."
      });
      return;
    }

    setIsAnalyzing(true);
    
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
      toast.success("Análise concluída!", {
        description: "A sua redação foi avaliada segundo os critérios do ENEM."
      });
    }, 4500);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <nav className="border-b border-zinc-800 p-4 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/dashboard" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Voltar ao Dashboard
          </Link>
          <div className="flex items-center gap-2 bg-gradient-to-r from-pink-500/10 to-orange-500/10 border border-pink-500/20 px-3 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-xs font-bold text-pink-400">Motor IA v2.4</span>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <Bot className="w-6 h-6 text-emerald-500" /> Laboratório de Redação
            </h1>
            <p className="text-zinc-400 mt-2 text-sm">
              Cole o seu texto ou envie o arquivo da sua redação escaneada para correção instantânea.
            </p>
          </div>

          <div className="flex bg-zinc-900 rounded-lg p-1">
            <button
              onClick={() => setInputType("text")}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                inputType === "text" ? "bg-zinc-800 text-white shadow-sm" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Digitar Texto
            </button>
            <button
              onClick={() => setInputType("file")}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                inputType === "file" ? "bg-zinc-800 text-white shadow-sm" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Enviar Arquivo (PDF)
            </button>
          </div>

          {inputType === "text" ? (
            <div className="relative">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                disabled={isAnalyzing || showResults}
                placeholder="Tema: Os desafios da saúde pública no século XXI..."
                className="w-full h-[400px] bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-zinc-300 resize-none focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all disabled:opacity-50"
              />
              <div className="absolute bottom-4 right-4 text-xs text-zinc-500 font-medium">
                {text.length} caracteres
              </div>
            </div>
          ) : (
            <div className="h-[400px] bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col justify-center">
              {!file ? (
                <div 
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  className="h-full border-2 border-dashed border-zinc-700 hover:border-pink-500 bg-zinc-950/50 rounded-xl p-12 flex flex-col items-center justify-center text-center transition-colors cursor-pointer group relative"
                >
                  <input 
                    type="file" 
                    accept=".pdf,image/*"
                    onChange={handleFileSelect}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="w-16 h-16 bg-zinc-900 group-hover:bg-pink-500/10 rounded-full flex items-center justify-center mb-4 transition-colors">
                    <UploadCloud className="w-8 h-8 text-zinc-500 group-hover:text-pink-500 transition-colors" />
                  </div>
                  <h3 className="text-white font-medium mb-1">Clique ou arraste o seu PDF aqui</h3>
                  <p className="text-sm text-zinc-500">PDF, JPG ou PNG (Máx. 10MB)</p>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center">
                  <div className="w-20 h-20 bg-pink-500/10 rounded-2xl flex items-center justify-center mb-6 border border-pink-500/20">
                    <FileIcon className="w-10 h-10 text-pink-500" />
                  </div>
                  <h3 className="text-white font-medium text-lg mb-2">{file.name}</h3>
                  <p className="text-sm text-zinc-500 mb-8">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                  <button 
                    onClick={() => setFile(null)}
                    className="flex items-center gap-2 text-sm font-medium bg-zinc-950 border border-zinc-800 px-6 py-3 rounded-lg hover:bg-zinc-800 transition-colors text-white"
                  >
                    <X className="w-4 h-4" /> Remover Arquivo
                  </button>
                </div>
              )}
            </div>
          )}

          {!showResults && (
            <button
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="w-full relative group px-4 py-4 bg-white text-black rounded-xl font-bold text-sm overflow-hidden flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  A processar semântica e sintaxe...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Corrigir Redação com IA
                </>
              )}
            </button>
          )}

          {showResults && (
            <button
              onClick={() => {
                setShowResults(false);
                setText("");
                setFile(null);
              }}
              className="w-full py-4 border border-zinc-700 hover:bg-zinc-800 text-white rounded-xl font-bold text-sm transition-colors"
            >
              Analisar Nova Redação
            </button>
          )}
        </div>

        <div>
          {isAnalyzing && (
            <div className="h-full flex flex-col items-center justify-center p-12 bg-zinc-900/50 border border-zinc-800 rounded-xl border-dashed">
              <div className="relative w-20 h-20 mb-8">
                <div className="absolute inset-0 border-t-2 border-pink-500 rounded-full animate-spin"></div>
                <div className="absolute inset-2 border-r-2 border-orange-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                <div className="absolute inset-4 border-b-2 border-yellow-500 rounded-full animate-spin"></div>
                <Bot className="absolute inset-0 m-auto w-6 h-6 text-white" />
              </div>
              <div className="space-y-3 w-full max-w-xs">
                <div className="flex justify-between text-xs text-zinc-400 font-medium">
                  <span>A analisar Competência 1</span>
                  <span className="text-emerald-500">Concluído</span>
                </div>
                <div className="flex justify-between text-xs text-zinc-400 font-medium">
                  <span>A extrair texto do documento</span>
                  <span className="text-emerald-500">Concluído</span>
                </div>
                <div className="flex justify-between text-xs text-zinc-400 font-medium">
                  <span>A verificar coesão textual</span>
                  <span className="text-pink-500 animate-pulse">A processar...</span>
                </div>
              </div>
            </div>
          )}

          {showResults && (
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 h-fit animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-zinc-800">
                <div>
                  <h2 className="text-lg font-semibold text-white">Resultado Final</h2>
                  <p className="text-zinc-400 text-sm mt-1">Estimativa de nota no ENEM</p>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                    880
                  </span>
                  <span className="text-zinc-500 font-medium">/1000</span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">1. Domínio da Norma Padrão</span>
                    <span className="text-emerald-500 font-bold">160/200</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
                    <div className="h-full bg-emerald-500 w-[80%]" />
                  </div>
                  <p className="text-xs text-zinc-400 mt-2 flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Bom domínio, mas atenção a vírgulas antes de conjunções adversativas.</p>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">2. Compreensão do Tema</span>
                    <span className="text-emerald-500 font-bold">200/200</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
                    <div className="h-full bg-emerald-500 w-[100%]" />
                  </div>
                  <p className="text-xs text-zinc-400 mt-2 flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Excelente abordagem do tema proposto sem fuga do foco.</p>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">3. Organização de Ideias</span>
                    <span className="text-orange-500 font-bold">160/200</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
                    <div className="h-full bg-orange-500 w-[80%]" />
                  </div>
                  <p className="text-xs text-zinc-400 mt-2 flex gap-2"><AlertTriangle className="w-4 h-4 text-orange-500 shrink-0" /> Os argumentos são válidos, mas o segundo parágrafo carece de um repertório sociocultural mais forte.</p>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">4. Coesão e Coerência</span>
                    <span className="text-emerald-500 font-bold">200/200</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
                    <div className="h-full bg-emerald-500 w-[100%]" />
                  </div>
                  <p className="text-xs text-zinc-400 mt-2 flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Excelente uso de conectivos entre os parágrafos.</p>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">5. Proposta de Intervenção</span>
                    <span className="text-orange-500 font-bold">160/200</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
                    <div className="h-full bg-orange-500 w-[80%]" />
                  </div>
                  <p className="text-xs text-zinc-400 mt-2 flex gap-2"><AlertTriangle className="w-4 h-4 text-orange-500 shrink-0" /> A proposta é viável, mas faltou detalhar o modo/meio de execução da ação pelo agente.</p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-pink-500/10 to-orange-500/10 border border-pink-500/20 rounded-lg flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-pink-400">Plano de Ação Sugerido</h4>
                  <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                    Sugerimos que reveja a aula <Link href="/lesson/mat-01" className="text-white underline decoration-pink-500">"Estrutura da Proposta de Intervenção"</Link> antes de submeter um novo texto. Foque nos 5 elementos essenciais exigidos pelo MEC.
                  </p>
                </div>
              </div>
            </div>
          )}

          {!isAnalyzing && !showResults && (
            <div className="h-full flex flex-col items-center justify-center p-12 bg-zinc-900/30 border border-zinc-800/50 rounded-xl border-dashed text-center">
              <Bot className="w-12 h-12 text-zinc-700 mb-4" />
              <h3 className="text-lg font-medium text-zinc-400">Aguardando submissão</h3>
              <p className="text-sm text-zinc-500 mt-2 max-w-xs">
                A IA irá extrair o texto do seu PDF, analisar a gramática e avaliar a adequação ao modelo ENEM em poucos segundos.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}