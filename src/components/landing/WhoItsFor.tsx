const audiences = [
  {
    title: "Founders",
    description: "Run outbound without hiring a team or risking your domain.",
  },
  {
    title: "Agencies",
    description: "Manage client outreach with full accountability and control.",
  },
  {
    title: "Growth teams",
    description: "Scale prospecting while maintaining quality and compliance.",
  },
];

const WhoItsFor = () => {
  return (
    <section className="section-padding border-t border-border bg-secondary/30">
      <div className="section-container">
        <h2 className="mb-16">Who it's for</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="p-6 border border-border bg-background rounded-md"
            >
              <h3 className="text-lg font-medium mb-2">{audience.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
