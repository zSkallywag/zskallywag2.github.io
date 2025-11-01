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
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-center overflow-x-clip overflow-y-visible bg-background px-4 sm:px-6 pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl font-bold opacity-5 animate-float">0</div>
        <div
          className="absolute top-40 right-20 text-6xl font-bold opacity-5 animate-float"
          style={{ animationDelay: "1s" }}
        >
          1
        </div>
        <div
          className="absolute bottom-20 left-1/4 text-6xl font-bold opacity-5 animate-float"
          style={{ animationDelay: "2s" }}
        >
          @
        </div>
        <div
          className="absolute bottom-40 right-1/3 text-6xl font-bold opacity-5 animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          #
        </div>
      </div>

      {/* Illustration (mobile-first order) */}
      <div className="relative w-full md:w-1/2 flex justify-center mb-10 md:mb-0 z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <img
            src={heroImage}
            alt="CEO preoccupato con hacker alle spalle"
            className="max-w-[90%] md:max-w-full h-auto mx-auto animate-float object-contain"
            style={{ animationDuration: "8s" }}
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 space-y-8 text-center md:text-left z-20">
        <div className="space-y-4">
          <h1
            className={`text-4xl sm:text-5xl md:text-7xl font-black leading-tight transition-all duration-800 ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            Un CEO dovrebbe{" "}
            <span className="block text-foreground">dormire tranquillo.</span>
          </h1>
          <h1
            className={`text-4xl sm:text-5xl md:text-7xl font-black leading-tight transition-all duration-800 ${
              isVisible ? "animate-slide-up-delay" : "opacity-0"
            }`}
          >
            <span className="text-accent">Sei sicuro di poterlo fare?</span>
          </h1>
        </div>

        <p
          className={`text-lg sm:text-xl md:text-2xl text-secondary leading-relaxed transition-all duration-800 ${
            isVisible ? "animate-slide-up-delay-2" : "opacity-0"
          }`}
        >
          Ti senti al sicuro? Perfetto.
          <br />
          <span className="font-semibold">Io inizio sempre da chi lo pensa.</span>
        </p>

        <div
          className={`transition-all duration-800 ${
            isVisible ? "animate-slide-up-delay-2" : "opacity-0"
          }`}
        >
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
          >
            Richiedi un assessment gratuito
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
