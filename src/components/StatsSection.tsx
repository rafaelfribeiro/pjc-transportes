const stats = [
  { value: "5+", label: "Anos de Experiência" },
  { value: "500+", label: "Clientes Atendidos" },
  { value: "5k+", label: "Entregas Realizadas" },
  { value: "99.5%", label: "Taxa de Pontualidade" },
];

const StatsSection = () => (
  <section className="bg-primary py-16 -mt-1">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl md:text-5xl font-black text-secondary mb-2">{s.value}</div>
            <div className="text-primary-foreground/60 font-medium text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
