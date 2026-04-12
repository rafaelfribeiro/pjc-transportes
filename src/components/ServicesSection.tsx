import { Truck, ShieldCheck, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { icon: Truck, title: "Carga Completa (FTL)", desc: "Transporte dedicado para cargas que ocupam todo o veículo, com máxima eficiência e segurança." },
  { icon: MapPin, title: "Rastreamento em Tempo Real", desc: "Acompanhe sua carga 24h por dia com nosso sistema de rastreamento GPS de última geração." },
  { icon: ShieldCheck, title: "Carga Segurada", desc: "Todas as cargas são seguradas com cobertura total para sua tranquilidade." },
  { icon: Clock, title: "Entregas Expressas", desc: "Prazos reduzidos para entregas urgentes com prioridade e dedicação total." },
];

const ServicesSection = () => (
  <section id="serviços" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Nossos Serviços</span>
        <h2 className="text-3xl md:text-4xl font-black text-foreground mt-3">
          Soluções <span className="text-gradient">Completas</span> em Logística
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <Card key={s.title} className="group border-border hover:border-secondary/40 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/5 bg-card">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <s.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
