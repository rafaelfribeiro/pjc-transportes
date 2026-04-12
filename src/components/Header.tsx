import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [open, setOpen] = useState(false);
  const links = ["Início", "Serviços", "Sobre", "Contato"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="text-2xl font-black tracking-tight text-primary-foreground">
          PJC<span className="text-secondary"> Transportes</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-primary-foreground/80 hover:text-secondary transition-colors font-medium text-sm">
              {l}
            </a>
          ))}
          <Button className="bg-secondary text-secondary-foreground hover:bg-orange-light font-semibold px-6">
            Solicitar Cotação
          </Button>
        </nav>

        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-primary border-t border-primary-foreground/10 px-4 pb-4 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-primary-foreground/80 hover:text-secondary py-2 font-medium">
              {l}
            </a>
          ))}
          <Button className="bg-secondary text-secondary-foreground hover:bg-orange-light font-semibold w-full">
            Solicitar Cotação
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
