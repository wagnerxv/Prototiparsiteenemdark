import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-orange-500 to-yellow-500 rounded-full blur-lg opacity-50" />
              <div className="relative bg-gradient-to-br from-pink-500 via-orange-500 to-yellow-500 p-[2px] rounded-full">
                <div className="bg-black rounded-full p-2">
                  <Logo className="w-6 h-6" />
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-base text-white">up.educacao</h1>
              <p className="text-[10px] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
                Matérias Isoladas ENEM
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#materias" className="text-gray-300 hover:text-pink-500 transition-colors text-sm">
              Matérias
            </a>
            <button className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 hover:shadow-lg hover:shadow-pink-500/50 text-white px-6 py-2 rounded-full transition-all font-bold text-sm">
              Quero Começar
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
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-3">
            <a href="#materias" className="text-gray-300 text-sm">
              Matérias
            </a>
            <button className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 text-white px-6 py-2 rounded-full font-bold text-sm">
              Quero Começar
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
