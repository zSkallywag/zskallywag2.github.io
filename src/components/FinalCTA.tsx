import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

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
    <section id="contact" ref={sectionRef} className="py-32 px-6 bg-foreground text-background">
      <div className="container mx-auto max-w-4xl text-center">
        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Sei arrivato fin qui?
          </h2>
          <p className="text-2xl md:text-3xl font-semibold opacity-90">
            Bene. Significa che un po' di paura ti è rimasta.
          </p>
          
          <div className="pt-8">
            <Button 
              size="lg"
              onClick={handleBooking}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-7 rounded-full shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 group"
            >
              <Calendar className="mr-2 group-hover:rotate-12 transition-transform" />
              Prenota una call di 30 minuti oggi stesso
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
