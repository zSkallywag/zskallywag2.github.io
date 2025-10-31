import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ctaImage from "@/assets/ceo-sleeping-safe.png";

export const FinalCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleBooking = () => {
    window.open("mailto:info@cybernest.it?subject=Richiesta%20Assessment%20Gratuito", "_blank");
  };

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Illustration */}
          <div className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <img 
              src={ctaImage} 
              alt="CEO che dorme tranquillo protetto da scudo digitale" 
              className="w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className={`space-y-8 text-center md:text-left transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Sei arrivato fin qui?
            </h2>
            
            <p className="text-2xl md:text-3xl text-secondary leading-relaxed">
              Bene. Significa che un po' di paura{" "}
              <span className="text-accent font-bold">ti è rimasta.</span>
            </p>

            <div className="pt-4">
              <Button 
                size="lg"
                onClick={handleBooking}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                Prenota una call di 30 minuti
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
