import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-ceo-hacker.png";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-6 py-20 pt-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl font-bold opacity-5 animate-float">0</div>
        <div className="absolute top-40 right-20 text-6xl font-bold opacity-5 animate-float" style={{ animationDelay: "1s" }}>1</div>
        <div className="absolute bottom-20 left-1/4 text-6xl font-bold opacity-5 animate-float" style={{ animationDelay: "2s" }}>@</div>
        <div className="absolute bottom-40 right-1/3 text-6xl font-bold opacity-5 animate-float" style={{ animationDelay: "1.5s" }}>#</div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className={`text-5xl md:text-7xl font-black leading-tight transition-all duration-800 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
                Un CEO dovrebbe{" "}
                <span className="block text-foreground">dormire tranquillo.</span>
              </h1>
              <h1 className={`text-5xl md:text-7xl font-black leading-tight transition-all duration-800 ${isVisible ? "animate-slide-up-delay" : "opacity-0"}`}>
                <span className="text-accent">Sei sicuro di poterlo fare?</span>
              </h1>
            </div>

            <p className={`text-xl md:text-2xl text-secondary leading-relaxed transition-all duration-800 ${isVisible ? "animate-slide-up-delay-2" : "opacity-0"}`}>
              Ti senti al sicuro? Perfetto.
              <br />
              <span className="font-semibold">Io inizio sempre da chi lo pensa.</span>
            </p>

            <div className={`transition-all duration-800 ${isVisible ? "animate-slide-up-delay-2" : "opacity-0"}`}>
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                Richiedi un assessment gratuito
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <img 
                src={heroImage} 
                alt="CEO preoccupato con hacker alle spalle" 
                className="w-full h-auto animate-float"
                style={{ animationDuration: "8s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
