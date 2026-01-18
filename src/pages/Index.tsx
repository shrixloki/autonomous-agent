import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import Steps from "@/components/landing/Steps";
import WhyDifferent from "@/components/landing/WhyDifferent";
import WhoItsFor from "@/components/landing/WhoItsFor";
import TrustControl from "@/components/landing/TrustControl";
import FinalCTA from "@/components/landing/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Steps />
        <WhyDifferent />
        <WhoItsFor />
        <TrustControl />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
