import { useState } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <ArrowUp className="w-8 h-8 text-orange-500" strokeWidth={3} />
              <div className="absolute inset-0 bg-orange-500/20 blur-xl" />
            </div>
            <div>
              <h1 className="font-bold text-xl text-white">UP Educação</h1>
              <p className="text-xs text-orange-500">Isoladas ENEM</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#materias" className="text-gray-300 hover:text-orange-500 transition-colors">
              Matérias
            </a>
            <a href="#beneficios" className="text-gray-300 hover:text-orange-500 transition-colors">
              Benefícios
            </a>
            <a href="#como-funciona" className="text-gray-300 hover:text-orange-500 transition-colors">
              Como Funciona
            </a>
            <a href="#depoimentos" className="text-gray-300 hover:text-orange-500 transition-colors">
              Depoimentos
            </a>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors">
              Começar Agora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 flex flex-col gap-4"
          >
            <a href="#materias" className="text-gray-300 hover:text-orange-500 transition-colors">
              Matérias
            </a>
            <a href="#beneficios" className="text-gray-300 hover:text-orange-500 transition-colors">
              Benefícios
            </a>
            <a href="#como-funciona" className="text-gray-300 hover:text-orange-500 transition-colors">
              Como Funciona
            </a>
            <a href="#depoimentos" className="text-gray-300 hover:text-orange-500 transition-colors">
              Depoimentos
            </a>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors">
              Começar Agora
            </button>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
