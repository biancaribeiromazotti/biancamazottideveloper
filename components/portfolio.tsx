"use client";

import { useState } from 'react';
import { ExternalLink, Github, Code, Layout } from 'lucide-react';

const projects = [
  {
    id: 1,
    category: 'lp',
    title: 'Projeto LB Ateliê - Ateliê de velas artesanais',
    description: 'Desenvolvimento de uma landing page para um ateliê de velas artesanais utilizando HTML, CSS e Javascript.',
    tech: ['HTML', 'CSS', 'Javascript'],
    link: 'https://github.com/biancaribeiromazotti/lbatelie',
    linkDemo: 'https://lbatelie.vercel.app/',
    type: 'Landing Page & UI'
  },
  {
    id: 2,
    category: 'system',
    title: 'Serviço de Emissão de Notas',
    description: 'Desenvolvimento de um serviço interno de emissão de notas fiscais com integração com a FocusNFe.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Git', 'API'],
    type: 'Backend & Integração'
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState<'lp' | 'system'>('lp');

  const filteredProjects = projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 px-6 bg-brand-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-4">
              Meus <span className="text-brand-blue">Projetos</span>
            </h2>
            <p className="text-brand-muted text-lg max-w-xl">
              De interfaces que encantam clientes a sistemas que sustentam operações industriais.
            </p>
          </div>

          <div className="flex bg-brand-border/20 p-1 rounded-xl border border-brand-border">
            <button 
              onClick={() => setFilter('lp')}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${filter === 'lp' ? 'bg-brand-blue text-white shadow-lg' : 'text-brand-muted hover:text-brand-text'}`}
            >
              <Layout size={18} /> Landing Pages
            </button>
            <button 
              onClick={() => setFilter('system')}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${filter === 'system' ? 'bg-brand-blue text-white shadow-lg' : 'text-brand-muted hover:text-brand-text'}`}
            >
              <Code size={18} /> Sistemas & Backend
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative bg-brand-border/10 border border-brand-border rounded-3xl overflow-hidden hover:border-brand-blue/50 transition-all">
              <div className="p-8">
                <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">{project.type}</span>
                <h3 className="text-2xl font-bold text-brand-text mt-2 mb-4">{project.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] px-2 py-1 rounded-md bg-brand-bg border border-brand-border text-brand-muted uppercase font-bold">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.linkDemo && (
                    <a 
                      target="_blank" 
                      rel="noopener noreferrer"
                      href={project.linkDemo} 
                      className="flex items-center gap-2 text-sm font-bold text-brand-text hover:text-brand-blue transition-colors"
                    >
                      <ExternalLink size={18} /> Acessar Projeto
                    </a>
                  )}

                  {project.link && (
                    <a 
                      target="_blank" 
                      rel="noopener noreferrer"
                      href={project.link} 
                      className="flex items-center gap-2 text-sm font-bold text-brand-text hover:text-brand-blue transition-colors"
                    >
                      <Github size={18} /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
