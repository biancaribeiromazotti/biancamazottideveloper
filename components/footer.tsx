import Link from 'next/link';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" className="bg-brand-bg border-t border-brand-border pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Coluna 1: Marca e Bio Curta */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold tracking-tighter text-brand-text">
              BIANCA<span className="text-brand-blue">MAZOTTI</span>
            </Link>
            <p className="text-brand-muted text-sm leading-relaxed max-w-xs">
              Engenheira de Produção e Desenvolvedora Full-Stack focada em criar soluções digitais eficientes e escaláveis. {/* [cite: 2, 6] */}
            </p>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div>
            <h4 className="text-brand-text font-bold mb-6">Navegação</h4>
            <ul className="space-y-4 text-sm text-brand-muted">
              <li><Link href="/" className="hover:text-brand-blue transition">Início</Link></li>
              <li><Link href="#trajetoria" className="hover:text-brand-blue transition">Trajetória</Link></li>
              <li><Link href="#portfolio" className="hover:text-brand-blue transition">Projetos</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Contato Direto */}
          <div>
            <h4 className="text-brand-text font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-brand-muted">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-blue" />
                <a target="_blank" href="mailto:biancamazottideveloper@gmail.com" className="hover:text-brand-text transition">
                  biancamazottideveloper@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-blue" />
                <a target="_blank" href="https://wa.me/5542999472922" className="hover:text-brand-text transition">
                  (42) 99947-2922
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-brand-blue" />
                <span>Curitiba, PR</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra Inferior: Redes e Copyright */}
        <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-brand-muted text-xs">
            © {new Date().getFullYear()} Bianca Ribeiro Mazotti. Todos os direitos reservados. {/* [cite: 1] */}
          </p>
          
          <div className="flex items-center gap-6">
            <a href="https://github.com/biancaribeiromazotti" target="_blank" className="text-brand-muted hover:text-brand-text transition">
              <Github size={20} /> {/*  */}
            </a>
            <a href="https://www.linkedin.com/in/biancaribeiromazotti/" target="_blank" className="text-brand-muted hover:text-brand-text transition">
              <Linkedin size={20} /> {/*  */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}