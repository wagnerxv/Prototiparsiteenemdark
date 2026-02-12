import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { Logo } from './Logo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-orange-500 to-yellow-500 rounded-full blur-lg opacity-50" />
              <div className="relative bg-gradient-to-br from-pink-500 via-orange-500 to-yellow-500 p-[2px] rounded-full">
                <div className="bg-black rounded-full p-2">
                  <Logo className="w-7 h-7" />
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-lg text-white">up.educacao</h1>
              <p className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500">
                Org. de Suporte Acadêmico
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#materias" className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 transition-all">
              Matérias
            </a>
            <a href="#beneficios" className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 transition-all">
              Benefícios
            </a>
            <a href="#como-funciona" className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 transition-all">
              Como Funciona
            </a>
            <a href="#depoimentos" className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 transition-all">
              Depoimentos
            </a>
            <button className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 hover:shadow-lg hover:shadow-pink-500/50 text-white px-6 py-2 rounded-full transition-all font-semibold">
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
            <a href="#materias" className="text-gray-300 hover:text-pink-500 transition-colors">
              Matérias
            </a>
            <a href="#beneficios" className="text-gray-300 hover:text-pink-500 transition-colors">
              Benefícios
            </a>
            <a href="#como-funciona" className="text-gray-300 hover:text-pink-500 transition-colors">
              Como Funciona
            </a>
            <a href="#depoimentos" className="text-gray-300 hover:text-pink-500 transition-colors">
              Depoimentos
            </a>
            <button className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 text-white px-6 py-2 rounded-full transition-colors font-semibold">
              Começar Agora
            </button>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
