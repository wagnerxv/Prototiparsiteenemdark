import { Users, DollarSign, TrendingUp, AlertCircle } from "lucide-react";

export default function AdminDashboard() {
  const metrics = [
    { title: "Receita Mensal", value: "R$ 42.500", change: "+12%", icon: DollarSign, color: "text-emerald-500" },
    { title: "Alunos Ativos", value: "854", change: "+5%", icon: Users, color: "text-blue-500" },
    { title: "Taxa de Conversão", value: "8.4%", change: "+1.2%", icon: TrendingUp, color: "text-pink-500" },
    { title: "Dúvidas Pendentes", value: "12", change: "-3", icon: AlertCircle, color: "text-orange-500" },
  ];

  const recentSales = [
    { id: "1", name: "Lucas Moura", plan: "Premium ENEM", date: "Hoje, 14:32", amount: "R$ 47,00", status: "Aprovado" },
    { id: "2", name: "Mariana Costa", plan: "Premium ENEM", date: "Hoje, 11:15", amount: "R$ 47,00", status: "Aprovado" },
    { id: "3", name: "Pedro Alves", plan: "Anual Medicina", date: "Ontem, 19:40", amount: "R$ 397,00", status: "Aprovado" },
    { id: "4", name: "Ana Beatriz", plan: "Premium ENEM", date: "Ontem, 15:22", amount: "R$ 47,00", status: "Pendente" },
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-50 p-8">
      <header className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Painel Gerencial</h1>
          <p className="text-zinc-400 mt-1">Visão geral do negócio e controle de matrículas.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg text-sm font-medium">
            Últimos 30 dias
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg bg-zinc-950 border border-zinc-800 ${metric.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-sm font-medium ${metric.change.startsWith('+') ? 'text-emerald-500' : 'text-zinc-400'}`}>
                  {metric.change}
                </span>
              </div>
              <h3 className="text-zinc-400 text-sm font-medium">{metric.title}</h3>
              <p className="text-2xl font-bold text-white mt-1">{metric.value}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-6">Últimas Vendas</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 text-sm">
                  <th className="pb-4 font-medium">Aluno</th>
                  <th className="pb-4 font-medium">Plano</th>
                  <th className="pb-4 font-medium">Data</th>
                  <th className="pb-4 font-medium">Valor</th>
                  <th className="pb-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {recentSales.map((sale) => (
                  <tr key={sale.id} className="border-b border-zinc-800/50">
                    <td className="py-4 font-medium text-white">{sale.name}</td>
                    <td className="py-4 text-zinc-300">{sale.plan}</td>
                    <td className="py-4 text-zinc-400">{sale.date}</td>
                    <td className="py-4 font-medium text-white">{sale.amount}</td>
                    <td className="py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        sale.status === 'Aprovado' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-orange-500/10 text-orange-400'
                      }`}>
                        {sale.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-6">Automação WhatsApp</h2>
          <div className="space-y-4">
            <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-950 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-white">Triagem de Dúvidas</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </div>
              <p className="text-xs text-zinc-400">Respondendo com IA baseada no FAQ.</p>
            </div>
            <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-950 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-white">Recuperação de Carrinho</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </div>
              <p className="text-xs text-zinc-400">Ativada 15 min após abandono no checkout.</p>
            </div>
            <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-950 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-white">Escalonamento Humano</span>
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              </div>
              <p className="text-xs text-zinc-400">12 atendimentos aguardando suporte real.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}