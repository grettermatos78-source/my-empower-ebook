import { Check } from "lucide-react";
import transformationImage from "@/assets/transformation.jpg";

const benefits = [
  "Técnicas probadas para aumentar tu autoestima",
  "Ejercicios de reflexión y meditación guiada",
  "Estrategias para superar creencias limitantes",
  "Herramientas para fortalecer tu fe interior",
  "Métodos para establecer límites saludables",
  "Prácticas diarias de amor propio y autocuidado",
  "Guía para construir relaciones más sanas",
  "Inspiración para vivir con propósito y gratitud",
];

export const Benefits = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm inline-block">
              Lo Que Aprenderás
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Transforma Tu Vida Desde{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Adentro Hacia Afuera
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre las herramientas y conocimientos que cambiarán tu perspectiva para siempre
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex gap-4 items-start p-4 rounded-xl hover:bg-muted/50 transition-all duration-300 group hover:translate-x-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-1.5 rounded-full bg-gradient-to-br from-primary to-secondary group-hover:shadow-glow transition-all flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg pt-1">{benefit}</p>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <img 
                src={transformationImage} 
                alt="Transformación Personal" 
                className="relative rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
