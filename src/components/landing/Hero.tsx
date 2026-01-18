import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="section-padding pt-32 md:pt-40">
      <div className="section-container">
        <div className="max-w-3xl">
          <h1 className="text-balance mb-6">
            Cold outreach that respects everyone.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl">
            Discover businesses, verify leads, and send disciplined outreach—without spam or automation abuse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/signup">
              <Button variant="hero" className="w-full sm:w-auto">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="hero-secondary" className="w-full sm:w-auto">
              View Dashboard Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
