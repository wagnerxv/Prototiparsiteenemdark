import { BookOpen, Flame, Trophy, PlayCircle } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  const user = {
    name: "Wagner",
    plan: "Premium ENEM",
    streak: 12
  };

  const recentLessons = [
    {
      id: "mat-01",
      subject: "Matemática",
      title: "Geometria Analítica: Equação da Reta",
      duration: "45 min",
      progress: 30
    },
    {
      id: "mat-02",
      subject: "Matemática",
      title: "Função Afim - Parte 1/3",
      duration: "26 min",
      progress: 0
    }
  ];

  const performance = [
    { subject: "Matemática", score: 85 },
    { subject: "Natureza", score: 70 },
    { subject: "Humanas", score: 92 },
    { subject: "Linguagens", score: 78 },
    { subject: "Redação", score: 880 }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 p-8">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Olá, {user.name}</h1>
          <p className="text-zinc-400">Bem-vindo de volta ao seu preparatório.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/simulados" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full border border-blue-500/50 transition-colors">
            <Trophy className="w-5 h-5" />
            <span className="font-semibold text-sm">Simulador SISU</span>
          </Link>
          <div className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800">
            <Flame className="text-orange-500 w-5 h-5" />
            <span className="font-semibold">{user.streak} dias seguidos</span>
          </div>
          <div className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800">
            <Trophy className="text-yellow-500 w-5 h-5" />
            <span className="font-semibold">{user.plan}</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <section className="md:col-span-2 space-y-6">
          <div className="p-6 bg-gradient-to-r from-zinc-900 to-zinc-900/50 border border-zinc-800 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Correção Inteligente de Redação</h2>
                <p className="text-sm text-zinc-400 mt-1">Envie o seu texto e receba feedback detalhado da nossa IA em segundos.</p>
              </div>
            </div>
            <Link 
              href="/redacao"
              className="whitespace-nowrap bg-white text-black px-6 py-3 rounded-xl font-bold text-sm hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Testar Laboratório IA
            </Link>
          </div>

          <h2 className="text-xl font-semibold flex items-center gap-2 pt-4">
            <BookOpen className="w-5 h-5" /> Trilha de Aulas
          </h2>
          <div className="grid gap-4">
            {recentLessons.map((lesson) => (
              <div key={lesson.id} className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex items-center justify-between hover:border-zinc-700 transition-colors">
                <div>
                  <span className="text-xs font-medium text-emerald-500 mb-1 block">{lesson.subject}</span>
                  <h3 className="font-medium text-lg">{lesson.title}</h3>
                  <p className="text-sm text-zinc-400 mt-1">Duração: {lesson.duration}</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-32 hidden sm:block">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Progresso</span>
                      <span>{lesson.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-500" 
                        style={{ width: `${lesson.progress}%` }}
                      />
                    </div>
                  </div>
                  <Link href={`/lesson/${lesson.id}`} className="bg-white text-black p-3 rounded-full hover:bg-zinc-200 transition-colors shrink-0">
                    <PlayCircle className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl h-fit">
          <h2 className="text-xl font-semibold mb-6">Seu Desempenho Geral</h2>
          <div className="space-y-4">
            {performance.map((stat, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{stat.subject}</span>
                  <span className="font-bold">{stat.score}{stat.subject === "Redação" ? "" : "%"}</span>
                </div>
                <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500" 
                    style={{ width: stat.subject === "Redação" ? `${(stat.score / 1000) * 100}%` : `${stat.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}