// O caminho do arquivo é minúsculo, mas o nome da Importação deve ser Maiúsculo
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Trajectory from "@/components/trajectory";
import Portfolio from "@/components/portfolio";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-brand-bg min-h-screen">
      <Navbar />
      <Hero />
      <Trajectory />
      <Portfolio />
      <Footer />
    </main>
  );
}