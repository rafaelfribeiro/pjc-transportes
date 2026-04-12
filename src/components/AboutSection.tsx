import { CheckCircle2 } from "lucide-react";

const points = [
  "Frota moderna e revisada periodicamente",
  "Motoristas treinados e certificados",
  "Cobertura nacional em todo o território brasileiro",
  "Atendimento personalizado 24/7",
];

const AboutSection = () => (
  <section id="sobre" className="py-20 bg-muted">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Sobre Nós</span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mt-3 mb-6">
            Confiança Construída na <span className="text-gradient">Estrada</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Há mais de 5 anos, a PJC Transportes Rodoviários entrega excelência em logística rodoviária. 
            Nossa missão é garantir que cada carga chegue ao destino com segurança, pontualidade e o melhor custo-benefício do mercado.
          </p>
          <ul className="space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-foreground font-medium text-sm">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-primary rounded-2xl p-10 text-center">
          <div className="text-6xl font-black text-secondary mb-4">PJC</div>
          <div className="text-primary-foreground font-bold text-xl mb-2">Transportes Rodoviários</div>
          <div className="text-primary-foreground/50 text-sm">Movendo o Brasil com segurança</div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
