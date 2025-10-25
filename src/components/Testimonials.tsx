import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    text: "Este ebook cambió mi vida completamente. Aprendí a valorarme y a establecer límites sanos. Ahora vivo con más paz y amor propio.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    text: "Los ejercicios prácticos son increíbles. Cada día me siento más conectada con mi fe y con quien realmente soy. ¡Totalmente recomendado!",
    rating: 5,
  },
  {
    name: "Laura Rodríguez",
    text: "Nunca había leído algo tan profundo y a la vez tan práctico. Me ayudó a sanar heridas del pasado y a construir una versión más fuerte de mí misma.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"></div>
      
      <div className="container relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm inline-block">
              Testimonios
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Historias de{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Transformación Real
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-soft hover:-translate-y-2 bg-card/80 backdrop-blur-sm"
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-primary pt-2">
                    — {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
