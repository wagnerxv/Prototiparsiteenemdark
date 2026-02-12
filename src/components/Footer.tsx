import { ArrowUp, Instagram, Youtube, Facebook, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <ArrowUp className="w-8 h-8 text-orange-500" strokeWidth={3} />
                <div className="absolute inset-0 bg-orange-500/20 blur-xl" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">UP Educação</h3>
                <p className="text-xs text-orange-500">Isoladas ENEM</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Sua melhor escolha para estudar as matérias isoladas do ENEM com flexibilidade e
              qualidade.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-gray-800 hover:bg-orange-500 p-2 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-orange-500 p-2 rounded-lg transition-colors"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-orange-500 p-2 rounded-lg transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-orange-500 p-2 rounded-lg transition-colors"
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
                <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                  Matérias
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                  Planos e Preços
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
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
                <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                  Reembolso
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <span className="block text-white font-semibold">Email:</span>
                contato@upeducacao.com.br
              </li>
              <li>
                <span className="block text-white font-semibold">WhatsApp:</span>
                (11) 99999-9999
              </li>
              <li>
                <span className="block text-white font-semibold">Horário:</span>
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
          <p className="text-gray-500 text-sm">CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
}
