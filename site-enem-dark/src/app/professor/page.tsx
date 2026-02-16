"use client";

import { useState } from "react";
import { UploadCloud, FileVideo, CheckCircle2, Plus, Trash2, ArrowLeft, PlayCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function ProfessorDashboard() {
  const router = useRouter();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [file, setFile] = useState<File | null>(null);
  const [questions, setQuestions] = useState([{ text: "", options: ["", "", "", ""], correct: 0 }]);

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

  const addQuestion = () => {
    setQuestions([...questions, { text: "", options: ["", "", "", ""], correct: 0 }]);
  };

  const removeQuestion = (index: number) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast.error("Nenhum vídeo selecionado", {
        description: "Por favor, adicione o arquivo de vídeo da aula."
      });
      return;
    }

    setIsUploading(true);
    let progress = 0;
    
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 15) + 5;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        
        toast.success("Aula publicada com sucesso!", {
          description: "O vídeo foi processado e já está disponível para os alunos."
        });

        setTimeout(() => {
          router.push("/lesson/mat-01");
        }, 1500);
      }
      setUploadProgress(progress);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 pb-20">
      <nav className="border-b border-zinc-800 p-4 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/login" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Voltar
          </Link>
          <div className="text-sm font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1.5 rounded-full">
            Portal do Professor
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto p-6 mt-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-white">Nova Aula</h1>
          <p className="text-zinc-400 mt-2">Faça o upload do vídeo, defina os detalhes e cadastre as questões de fixação.</p>
        </div>

        <form onSubmit={handlePublish} className="space-y-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Informações Básicas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Título da Aula</label>
                <input 
                  type="text" 
                  required
                  defaultValue="Aula 1: Função Afim"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Disciplina</label>
                <select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors appearance-none">
                  <option>Matemática</option>
                  <option>Física</option>
                  <option>Química</option>
                  <option>Biologia</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Mídia da Aula</h2>
            
            {!file ? (
              <div 
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="border-2 border-dashed border-zinc-700 hover:border-emerald-500 bg-zinc-950/50 rounded-xl p-12 text-center transition-colors cursor-pointer group relative"
              >
                <input 
                  type="file" 
                  accept="video/*"
                  onChange={handleFileSelect}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="w-16 h-16 bg-zinc-900 group-hover:bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                  <UploadCloud className="w-8 h-8 text-zinc-500 group-hover:text-emerald-500 transition-colors" />
                </div>
                <h3 className="text-white font-medium mb-1">Clique ou arraste o seu vídeo aqui</h3>
                <p className="text-sm text-zinc-500">MP4, WebM ou OGG (Máx. 2GB)</p>
              </div>
            ) : (
              <div className="border border-emerald-500/30 bg-emerald-500/5 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <FileVideo className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">{file.name}</h4>
                    <span className="text-xs text-zinc-500">{(file.size / (1024 * 1024)).toFixed(2)} MB</span>
                  </div>
                </div>
                <button 
                  type="button"
                  onClick={() => setFile(null)}
                  className="p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400 hover:text-white"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            )}
            
            {isUploading && (
              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400 flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" /> Processando vídeo e gerando resoluções...
                  </span>
                  <span className="text-emerald-500 font-medium">{uploadProgress}%</span>
                </div>
                <div className="h-2 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
                  <div 
                    className="h-full bg-emerald-500 transition-all duration-300 ease-out" 
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-white">Questões de Fixação</h2>
              <button 
                type="button"
                onClick={addQuestion}
                className="flex items-center gap-2 text-sm font-medium bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors"
              >
                <Plus className="w-4 h-4" /> Adicionar Questão
              </button>
            </div>

            <div className="space-y-6">
              {questions.map((q, qIndex) => (
                <div key={qIndex} className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 relative">
                  {questions.length > 1 && (
                    <button 
                      type="button"
                      onClick={() => removeQuestion(qIndex)}
                      className="absolute top-4 right-4 text-zinc-500 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-zinc-400 mb-1 block">Enunciado da Questão {qIndex + 1}</label>
                      <textarea 
                        required
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none h-24"
                        placeholder="Ex: Determine o coeficiente angular..."
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400 block">Alternativas (Marque a correta)</label>
                      {q.options.map((_, oIndex) => (
                        <div key={oIndex} className="flex items-center gap-3">
                          <input 
                            type="radio" 
                            name={`correct-${qIndex}`} 
                            defaultChecked={oIndex === 0}
                            className="w-4 h-4 text-emerald-500 bg-zinc-900 border-zinc-700 focus:ring-emerald-500 focus:ring-offset-zinc-950"
                          />
                          <input 
                            type="text" 
                            required
                            placeholder={`Alternativa ${String.fromCharCode(65 + oIndex)}`}
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-emerald-500 transition-colors text-sm"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            type="submit"
            disabled={isUploading}
            className="w-full flex justify-center items-center gap-2 bg-emerald-500 text-black font-bold py-4 rounded-xl hover:bg-emerald-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
          >
            {isUploading ? "Processando..." : (
              <>
                <PlayCircle className="w-6 h-6" /> Publicar Aula na Plataforma
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

function Loader2({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}