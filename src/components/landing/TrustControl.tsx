import { Check } from "lucide-react";

const controls = [
  "No auto-sending—you decide when outreach starts",
  "Full logs of every discovery and message",
  "Built-in rate limits to respect platforms",
  "Pause or stop campaigns instantly",
];

const TrustControl = () => {
  return (
    <section className="section-padding border-t border-border">
      <div className="section-container">
        <div className="max-w-2xl">
          <h2 className="mb-4">Trust through control</h2>
          <p className="text-muted-foreground mb-10">
            This system is designed for operators who need to know exactly what's happening and when.
          </p>
          <ul className="space-y-4">
            {controls.map((control) => (
              <li key={control} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full border border-foreground/20 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-foreground">{control}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrustControl;
