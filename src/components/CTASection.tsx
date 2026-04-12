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
        <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-orange-light font-bold px-8 py-6 text-base">
          <Phone className="mr-2 h-5 w-5" /> (41) 99175-4245 
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-gray-500 text-gray-800 bg-white shadow-sm hover:bg-gray-200 hover:shadow-lg hover:text-gray-900 font-bold px-8 py-6 text-base transition"
        >
          <Mail className="mr-2 h-5 w-5" /> pjc.tranportes71@gmail.com
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection;
