import { GraduationCap, Briefcase } from "lucide-react";

const events = [
  {
    date: "Jul/2025 - Presente",
    title: "Desenvolvedora Web Júnior",
    company: "AlphaCode IT Solutions",
    description: "Desenvolvimento Full-Stack (PHP/JS) e Mobile (Ionic/TS) em aplicações personalizadas.",
    icon: <Briefcase size={20} />
  },
  {
    date: "Out/2024 - Jul/2025",
    title: "Estágio em Desenvolvimento Full-Stack",
    company: "Grupo Silcom",
    description: "Desenvolvimento de projetos em sistema de gestão industrial (Yii 1.1) e suporte níveis 1 e 2.",
    icon: <Briefcase size={20} />
  },
  {
    date: "Jun/2024 - Jan/2025",
    title: "Desenvolvedora Front-End (Voluntário)",
    company: "ADA (Amigos dos Animais)",
    description: "Criação de componentes reutilizáveis e interfaces com Next.js e Storybook.",
    icon: <Briefcase size={20} />
  },
  {
    date: "Jan/2024 - Presente",
    title: "Análise e Desenvolvimento de Sistemas",
    company: "Universidade Anhembi Morumbi",
    description: "Cursando o ultimo período com previsão de conclusão em Jul/2026.",
    icon: <GraduationCap size={20} />
  },
  {
    date: "2016 - 2021",
    title: "Engenharia de Produção",
    company: "UTFPR",
    description: "Formação sólida em processos e análise lógica.",
    icon: <GraduationCap size={20} />
  }
];

export default function Trajectory() {
  return (
    <section id="trajetoria" className="py-24 px-6 bg-brand-bg border-t border-brand-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-brand-text mb-12 text-center">Minha Trajetória</h2>
        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={index} className="flex gap-6 p-6 rounded-2xl bg-brand-border/10 border border-brand-border hover:border-brand-blue/30 transition-all">
              <div className="p-3 rounded-xl bg-brand-bg border border-brand-border text-brand-blue h-fit">
                {event.icon}
              </div>
              <div>
                <span className="text-xs font-bold text-brand-accent uppercase">{event.date}</span>
                <h3 className="text-xl font-bold text-brand-text mt-1">{event.title}</h3>
                <p className="text-brand-blue text-sm font-medium mb-2">{event.company}</p>
                <p className="text-brand-muted text-sm leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}