import { Heart, Sparkles, BookOpen } from "lucide-react";
import bookGlow from "@/assets/book-glow.jpg";

export const About = () => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"></div>
      
      <div className="container relative z-10 px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <img 
              src={bookGlow} 
              alt="Ebook de Amor Propio y Fe" 
              className="relative rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                Sobre el Ebook
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              Tu Camino Hacia la{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Sanación Interior
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Este ebook es más que una simple lectura: es una experiencia transformadora 
              que te guiará paso a paso hacia el descubrimiento de tu verdadero valor, 
              fortaleciendo tu fe y cultivando el amor propio que mereces.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-4 items-start group hover:translate-x-2 transition-transform duration-300">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:shadow-glow transition-all">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Amor Propio</h3>
                  <p className="text-muted-foreground">Aprende a valorarte y respetarte profundamente</p>
                </div>
              </div>

              <div className="flex gap-4 items-start group hover:translate-x-2 transition-transform duration-300">
                <div className="p-3 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 group-hover:shadow-glow transition-all">
                  <Sparkles className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Fe y Propósito</h3>
                  <p className="text-muted-foreground">Conecta con tu esencia espiritual y tu misión de vida</p>
                </div>
              </div>

              <div className="flex gap-4 items-start group hover:translate-x-2 transition-transform duration-300">
                <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 group-hover:shadow-glow transition-all">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Ejercicios Prácticos</h3>
                  <p className="text-muted-foreground">Herramientas aplicables para tu transformación diaria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
