import { Instagram, Youtube, Facebook, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-orange-500 to-yellow-500 rounded-full blur-lg opacity-50" />
                <div className="relative bg-gradient-to-br from-pink-500 via-orange-500 to-yellow-500 p-[2px] rounded-full">
                  <div className="bg-gray-950 rounded-full p-2">
                    <Logo className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-white">up.educacao</h3>
                <p className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
                  Org. de Suporte Acadêmico
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Ajudamos você a superar seus desafios acadêmicos com a preparação adequada e o ambiente certo.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/up.educacao_/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 p-2 rounded-lg transition-all"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-gray-900 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 p-2 rounded-lg transition-all"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-gray-900 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 p-2 rounded-lg transition-all"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-gray-900 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 p-2 rounded-lg transition-all"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 text-sm transition-all">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#materias" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 text-sm transition-all">
                  Matérias
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 text-sm transition-all">
                  Planos e Preços
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 text-sm transition-all">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 text-sm transition-all">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 text-sm transition-all">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 text-sm transition-all">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 text-sm transition-all">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 text-sm transition-all">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 text-sm transition-all">
                  Reembolso
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-pink-500 flex-shrink-0 mt-0.5" />
                <span>Rua Cícero Torres, 286, Arapiraca 57313-170</span>
              </li>
              <li>
                <span className="block text-white font-semibold mb-1">Email:</span>
                contato@upeducacao.com.br
              </li>
              <li>
                <span className="block text-white font-semibold mb-1">WhatsApp:</span>
                (11) 99999-9999
              </li>
              <li>
                <span className="block text-white font-semibold mb-1">Horário:</span>
                Segunda a Sexta, 8h às 18h
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 UP Educação. Todos os direitos reservados.
          </p>
          <a 
            href="https://linktr.ee/upisoladas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 text-sm font-semibold hover:underline"
          >
            linktr.ee/upisoladas
          </a>
        </div>
      </div>
    </footer>
  );
}
