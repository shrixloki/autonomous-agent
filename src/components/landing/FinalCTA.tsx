import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="section-padding border-t border-border">
      <div className="section-container text-center">
        <h2 className="mb-6">Ready to run outreach the right way?</h2>
        <p className="text-muted-foreground mb-10 max-w-md mx-auto">
          Start discovering leads and sending disciplined outreach today.
        </p>
        <Link to="/signup">
          <Button variant="hero">
            Start Using the Agent
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FinalCTA;
