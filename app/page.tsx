export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white p-6">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
          Bianca <span className="text-blue-500">Mazotti</span>
        </h1>
        <p className="text-xl text-slate-400">
          Desenvolvedora Full Stack | React | Next.js | TypeScript | PHP | Javascript
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition">
            Ver Projetos
          </button>
          <button className="px-6 py-2 border border-slate-700 hover:bg-slate-900 rounded-full font-medium transition">
            Contato
          </button>
        </div>
      </div>
    </main>
  );
}