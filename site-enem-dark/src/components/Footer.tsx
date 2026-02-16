import { Instagram, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-transparent border-t border-gray-800/50 py-8 px-4 relative z-10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-orange-500 to-yellow-500 rounded-full blur-lg opacity-50" />
                <div className="relative bg-gradient-to-br from-pink-500 via-orange-500 to-yellow-500 p-[2px] rounded-full">
                  <div className="bg-black/80 rounded-full p-2">
                    <Logo className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">up.educacao</h3>
                <p className="text-[10px] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
                  Org. de Suporte Acadêmico
                </p>
              </div>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              Matérias isoladas do ENEM com flexibilidade total.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-3 text-sm">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#materias" className="text-gray-500 hover:text-pink-500 text-xs transition-all">
                  Matérias
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-pink-500 text-xs transition-all">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-pink-500 text-xs transition-all">
                  Contato
                </a>
              </li>
              <li>
                <a 
                  href="https://linktr.ee/upisoladas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 text-xs font-semibold"
                >
                  linktr.ee/upisoladas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-3 text-sm">Contato</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li className="flex items-start gap-2">
                <MapPin className="w-3 h-3 text-pink-500 flex-shrink-0 mt-0.5" />
                <span>Rua Cícero Torres, 286, Arapiraca</span>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/up.educacao_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-pink-500 transition-colors"
                >
                  <Instagram className="w-3 h-3" />
                  @up.educacao_
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-800/50 text-center">
          <p className="text-gray-600 text-xs">
            © 2026 UP Educação. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}