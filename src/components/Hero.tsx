import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ebook.jpg";

export const Hero = () => {
  const scrollToPrice = () => {
    document.getElementById('precio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 text-center">
        <div className="mx-auto max-w-4xl space-y-8 animate-fade-in">
          <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 backdrop-blur-sm">
            <p className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Tu Guía Hacia la Transformación Personal
            </p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Descubre el{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Poder del Amor Propio
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Un viaje transformador hacia la autoayuda, el amor propio y la fe. 
            Aprende a valorarte, sanarte y vivir con propósito.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              onClick={scrollToPrice}
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Obtener Mi Ebook Ahora
            </Button>
            <Button 
              onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 hover:bg-primary/10 transition-all duration-300"
            >
              Conocer Más
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};
