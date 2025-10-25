import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";
import { toast } from "sonner";

const features = [
  "Acceso inmediato al ebook completo",
  "Más de 200 páginas de contenido transformador",
  "Ejercicios prácticos y herramientas aplicables",
  "Formato PDF descargable",
  "Actualizaciones gratuitas de por vida",
  "Garantía de satisfacción 30 días",
];

export const Pricing = () => {
  const handlePurchase = () => {
    toast.success("¡Redirigiendo al proceso de pago seguro!", {
      description: "Serás redirigido a nuestra plataforma de pago en un momento...",
    });
    // Aquí se integraría Stripe u otro procesador de pagos
  };

  return (
    <section id="precio" className="py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm inline-block">
              Oferta Especial
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Invierte en{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Tu Mejor Versión
              </span>
            </h2>
          </div>

          <Card className="border-2 border-primary/50 shadow-glow bg-card/80 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <div className="bg-gradient-to-r from-accent to-primary text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                <Sparkles className="w-4 h-4" />
                ¡Precio de Lanzamiento!
              </div>
            </div>

            <CardHeader className="text-center pt-16 pb-8">
              <div className="space-y-2">
                <p className="text-muted-foreground line-through text-2xl">$49.99</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    $9.99
                  </span>
                  <span className="text-2xl text-muted-foreground">USD</span>
                </div>
                <p className="text-primary font-semibold text-lg">
                  ¡50% de descuento - Solo por tiempo limitado!
                </p>
              </div>
            </CardHeader>

            <CardContent className="space-y-8 pb-12">
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4 items-center">
                    <div className="p-1 rounded-full bg-gradient-to-br from-primary to-secondary flex-shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-lg">{feature}</p>
                  </div>
                ))}
              </div>

              <Button 
                onClick={handlePurchase}
                size="lg"
                className="w-full text-lg py-8 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500 hover:shadow-glow hover:scale-105"
              >
                Comprar Ahora y Transformar Mi Vida
              </Button>

              <div className="text-center space-y-2 pt-4">
                <p className="text-sm text-muted-foreground">
                  🔒 Pago 100% seguro y encriptado
                </p>
                <p className="text-sm text-muted-foreground">
                  ✨ Garantía de devolución de 30 días
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
