import heroImg from "@/assets/hero-trucks.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section id="início" className="relative min-h-[90vh] flex items-center overflow-hidden">
    <img
      src={heroImg}
      alt="Frota de caminhões PJC na estrada"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-navy-gradient opacity-80" />

    <div className="relative z-10 container mx-auto px-4 py-32">
      <div className="max-w-2xl">
        <span className="inline-block bg-secondary/20 text-secondary font-semibold text-sm px-4 py-1.5 rounded-full mb-6 border border-secondary/30">
          🚛 Transporte Rodoviário de Confiança
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-primary-foreground leading-tight mb-6">
          Sua Carga no
          <span className="text-gradient block">Destino Certo</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 leading-relaxed max-w-lg">
          Soluções logísticas completas com segurança, pontualidade e tecnologia de rastreamento em tempo real.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-orange-light font-bold px-8 py-6 text-base">
            Solicitar Cotação <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gray-500 text-gray-800 bg-white shadow-sm hover:bg-gray-200 hover:shadow-lg hover:text-gray-900 font-bold px-8 py-6 text-base transition"
          >
            Nossos Serviços
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
