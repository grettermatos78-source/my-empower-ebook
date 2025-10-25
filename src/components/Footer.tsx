import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>Hecho con</span>
            <Heart className="w-5 h-5 fill-primary text-primary animate-pulse" />
            <span>para tu transformación personal</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Términos y Condiciones
            </a>
            <span className="text-border">•</span>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidad
            </a>
            <span className="text-border">•</span>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
