import { User, Shield, Eye, Server } from "lucide-react";

const features = [
  {
    icon: User,
    title: "Human-in-the-loop",
    description: "Every lead requires your approval. No automated mass sending.",
  },
  {
    icon: Shield,
    title: "No spam",
    description: "Rate limits and sending rules built in. Designed to protect your reputation.",
  },
  {
    icon: Eye,
    title: "Full transparency",
    description: "Complete logs of every action. Know exactly what the system does.",
  },
  {
    icon: Server,
    title: "Self-hosted option",
    description: "Run on your own infrastructure. Your data stays yours.",
  },
];

const WhyDifferent = () => {
  return (
    <section className="section-padding border-t border-border">
      <div className="section-container">
        <h2 className="mb-4">Why it's different</h2>
        <p className="text-muted-foreground mb-16 max-w-xl">
          Built for professionals who value control and reputation over volume.
        </p>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-md border border-border flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-base font-medium mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
