const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Automatically find businesses matching your criteria from public sources.",
  },
  {
    number: "02",
    title: "Review",
    description: "Verify and approve each lead before any outreach begins.",
  },
  {
    number: "03",
    title: "Reach",
    description: "Send measured, respectful messages on your schedule.",
  },
];

const Steps = () => {
  return (
    <section className="section-padding border-t border-border">
      <div className="section-container">
        <h2 className="mb-16">How it works</h2>
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="text-sm text-muted-foreground font-mono mb-4 block">
                {step.number}
              </span>
              <h3 className="text-xl font-medium mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
