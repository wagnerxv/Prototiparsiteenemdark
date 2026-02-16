"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Lock, Mail, ShieldAlert, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [role, setRole] = useState<"aluno" | "admin">("aluno");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === "aluno") {
      router.push("/dashboard");
    } else {
      router.push("/admin");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-pink-600/20 via-orange-500/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-md bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 p-8 rounded-2xl relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Acesso à Plataforma</h1>
          <p className="text-zinc-400 text-sm">Selecione seu perfil e entre na sua conta.</p>
        </div>

        <div className="flex bg-zinc-900 rounded-lg p-1 mb-8">
          <button
            type="button"
            onClick={() => setRole("aluno")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-md transition-all ${
              role === "aluno"
                ? "bg-zinc-800 text-white shadow-sm"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            Sou Aluno
          </button>
          <button
            type="button"
            onClick={() => setRole("admin")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-md transition-all ${
              role === "admin"
                ? "bg-zinc-800 text-white shadow-sm"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            Administrador
          </button>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1.5">E-mail</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600" />
              <input
                type="email"
                required
                defaultValue={role === "aluno" ? "aluno@up.educacao" : "admin@up.educacao"}
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-sm font-medium text-zinc-400">Senha</label>
              <Link href="#" className="text-xs text-pink-500 hover:text-pink-400">Esqueceu a senha?</Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600" />
              <input
                type="password"
                required
                defaultValue="123456"
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full relative group px-4 py-3 bg-white text-black rounded-lg font-bold text-sm overflow-hidden mt-4"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Entrar na Plataforma <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute inset-0 z-10 bg-white group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center gap-2">
              Entrar na Plataforma <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}