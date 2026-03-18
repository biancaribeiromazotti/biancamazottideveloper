"use client";

import { useState } from 'react';
import Link from 'next/link';
import { MessageCircle, User, Code, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <Link href="/" className="text-xl font-bold tracking-tighter text-brand-text uppercase">
          Bianca<span className="text-brand-blue">Mazotti</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-muted">
          <Link href="#trajetoria" className="hover:text-brand-text transition-colors flex items-center gap-2">
            <User size={16} className="text-brand-blue" />
            Trajetória
          </Link>
          <Link href="#portfolio" className="hover:text-brand-text transition-colors flex items-center gap-2">
            <Code size={16} className="text-brand-blue" />
            Projetos
          </Link>
          <Link href="#contato" className="hover:text-brand-text transition-colors">
            Contato
          </Link>
          
          <div className="w-px h-4 bg-brand-border"></div>
          
          <Link 
            href="https://wa.me/5542999472922" 
            target="_blank"
            className="bg-brand-blue hover:bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 transition-all shadow-lg shadow-blue-500/10"
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </Link>
        </div>

        <button 
          className="md:hidden text-brand-text focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-brand-bg border-b border-brand-border px-6 py-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4">
          <Link href="#trajetoria" onClick={() => setIsOpen(false)} className="text-lg text-brand-muted">Trajetória</Link>
          <Link href="#portfolio" onClick={() => setIsOpen(false)} className="text-lg text-brand-muted">Projetos</Link>
          <Link href="#contato" onClick={() => setIsOpen(false)} className="text-lg text-brand-muted">Contato</Link>
          <Link 
            href="https://wa.me/5542999472922" 
            className="bg-brand-blue text-white text-center py-4 rounded-xl font-bold flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} /> Falar no WhatsApp
          </Link>
        </div>
      )}
    </nav>
  );
}