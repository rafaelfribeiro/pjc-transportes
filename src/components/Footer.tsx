const Footer = () => (
  <footer className="bg-primary py-10 border-t border-primary-foreground/10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <img src="/src/assets/LOGO_PJC.png" alt="PJC Transportes Logo" className="h-20 md:h-24" />
        </div>
        <p className="text-primary-foreground/40 text-sm">
          © {new Date().getFullYear()} PJC Transportes Rodoviários. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
