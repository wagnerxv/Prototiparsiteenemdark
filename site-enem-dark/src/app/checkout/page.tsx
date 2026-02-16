"use client";

import { CheckCircle2, CreditCard, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Checkout() {
  const router = useRouter();

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast.success("Pagamento aprovado com sucesso!", {
      description: "Seu acesso ao plano Premium ENEM foi liberado. Redirecionando...",
      duration: 2000,
    });

    setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Finalize sua matrícula</h1>
            <p className="text-zinc-400 mt-2">Você está a um passo de garantir sua aprovação.</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Plano Premium ENEM</h2>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-3xl font-bold">R$ 47</span>
              <span className="text-zinc-400">/mês</span>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                <span className="text-sm">Acesso a todas as videoaulas</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                <span className="text-sm">Banco com mais de 5.000 questões</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                <span className="text-sm">Correção de redação com IA</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                <span className="text-sm">Suporte via WhatsApp</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 h-fit">
          <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            Dados de Pagamento
          </h2>
          
          <form onSubmit={handlePayment} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1">Nome Completo</label>
              <input 
                type="text" 
                required
                defaultValue="João Silva"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-pink-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1">E-mail</label>
              <input 
                type="email" 
                required
                defaultValue="joao.silva@email.com"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-pink-500 transition-colors"
              />
            </div>
            <div className="pt-4">
              <button 
                type="submit"
                className="w-full flex justify-center items-center bg-white text-black font-bold py-3 rounded-lg hover:bg-zinc-200 transition-colors"
              >
                Concluir Pagamento
              </button>
            </div>
          </form>

          <div className="mt-6 flex items-center justify-center gap-2 text-zinc-500 text-xs">
            <ShieldCheck className="w-4 h-4" />
            <span>Pagamento 100% seguro e criptografado.</span>
          </div>
        </div>

      </div>
    </div>
  );
}