"use client";
import React from "react";

export const MagicCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`relative overflow-hidden rounded-xl p-[1px] group ${className}`}>
      {/* O feixe de luz giratório */}
      <div className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Conteúdo com fundo preto para cobrir o centro do feixe */}
      <div className="relative h-full bg-gray-950 rounded-xl border border-white/10">
        {children}
      </div>
    </div>
  );
};