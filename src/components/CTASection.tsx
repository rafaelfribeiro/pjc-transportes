import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const CTASection = () => (
  <section id="contato" className="py-20 bg-navy-gradient">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-4">
        Pronto para Transportar sua Carga?
      </h2>
      <p className="text-primary-foreground/60 max-w-lg mx-auto mb-10 text-lg">
        Entre em contato conosco e receba uma cotação personalizada em até 2 horas.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://wa.me/5541991754245?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20de%20frete.%0A%0ARota:%0AOrigem:%0ADestino:%0AData:%0A%0APeso%20aproximado:%0AVolume%20aproximado:"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-orange-light font-bold px-8 py-6 text-base">
            <Phone className="mr-2 h-5 w-5" /> (41) 99175-4245
          </Button>
        </a>
        <a
          href="mailto:contato@pjctransportes.com?subject=Or%C3%A7amento%20de%20frete&body=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20de%20frete.%0A%0ARota:%0AOrigem:%0ADestino:%0AData:%0A%0APeso%20aproximado:%0AVolume%20aproximado:"
          style={{ textDecoration: 'none' }}
        >
          <Button
            size="lg"
            variant="outline"
            className="border-gray-500 text-gray-800 bg-white shadow-sm hover:bg-gray-200 hover:shadow-lg hover:text-gray-900 font-bold px-8 py-6 text-base transition"
          >
            <Mail className="mr-2 h-5 w-5" /> contato@pjctransportes.com
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
