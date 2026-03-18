"use client";

import { MapPin, ArrowRight, GraduationCap, Briefcase } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center relative">
      
      {/* 1. Nome Principal (Marca Pessoal) - Em uma única linha */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-text mb-16 tracking-tighter leading-none">
        {/* */}
        Bianca <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-accent to-blue-400">Mazotti</span>
      </h1>

      {/* 2. Core Tech Stack (O divisor técnico) */}
      <div className="w-full max-w-3xl pt-8 border-t border-brand-border/50 mb-12">
        <p className="text-[10px] font-bold text-brand-accent uppercase tracking-[0.2em] mb-6 animate-pulse">Core Tech Stack</p>
        <div className="flex flex-wrap justify-center gap-3 mb-3">
          {['PHP', 'Laravel', 'Javascript','PostgreSQL', 'Tailwind'].map((tech) => (
            <span key={tech} className="px-4 py-1.5 rounded-xl bg-brand-border/10 border border-brand-border text-[11px] font-bold text-brand-text uppercase transition-all hover:border-brand-blue/50">
              {tech}
            </span>
          ))}
          
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {['TypeScript', 'Next.js', 'React', 'MySQL', 'Ionic'].map((tech) => (
            <span key={tech} className="px-4 py-1.5 rounded-xl bg-brand-border/10 border border-brand-border text-[11px] font-bold text-brand-text uppercase transition-all hover:border-brand-blue/50">
              {tech}
            </span>
          ))}
          
        </div>
      </div>

      {/* 3. Badges de Status (Contexto rápido) */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-border/20 border border-brand-border text-brand-muted">
          {/* */}
          <MapPin size={14} className="text-brand-blue" />
          <span className="text-xs font-bold uppercase tracking-tight">Curitiba, PR</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-accent">
          {/* */}
          <Briefcase size={14} />
          <span className="text-xs font-bold uppercase tracking-tight">Desenvolvedora Web</span>
        </div>
      </div>

      {/* 4. Título da Trajetória (A Narrativa) */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-6 tracking-tight leading-tight max-w-4xl">
        Da Engenharia de Produção <br />
        <span className="text-brand-blue">ao Desenvolvimento Full-Stack.</span>
      </h2>

      {/* 5. Descrição (O Valor) */}
      <p className="text-base md:text-lg text-brand-muted max-w-2xl leading-relaxed mb-12">
        Sou Bianca Ribeiro Mazotti, graduada em Engenharia de Produção pela UTFPR e atualmente estudante do último período de Análise e Desenvolvimento de Sistemas pela Anhembi Morumbi. 
        Utilizo a lógica analítica e a precisão da engenharia para construir aplicações escaláveis, focando em entregar soluções que otimizam processos reais.
      </p>

      {/* 6. Ações e Formação (Finalização do Hero) */}
      <div className="flex flex-col sm:flex-row gap-8 items-center justify-center w-full">
        <Link 
          href="#portfolio" 
          className="group px-10 py-4 bg-brand-blue hover:bg-blue-600 text-white rounded-2xl font-bold text-lg transition-all flex items-center gap-3 shadow-xl shadow-blue-500/20"
        >
          Explorar Projetos
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
        </Link>

        <div className="flex items-center gap-4 text-brand-muted border-l border-brand-border pl-8 py-2">
          {/* */}
          <GraduationCap className="text-brand-accent" size={32} />
          <div className="text-left">
            <p className="text-[11px] font-black uppercase text-brand-text tracking-wider">Análise e Des. de Sistemas</p>
            <p className="text-[10px] font-medium">Anhembi Morumbi • Conclusão Jun/2026</p>
          </div>
        </div>
      </div>

    </section>
  );
}