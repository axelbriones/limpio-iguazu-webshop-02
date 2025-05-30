
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-corporate-white shadow-sm border-b border-corporate-gray">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/f233cd73-370b-46c9-a6d7-4863ea11607f.png" 
              alt="Mundo Limpio Iguazú - Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#inicio" className="font-montserrat text-gray-700 hover:text-corporate-blue transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="font-montserrat text-gray-700 hover:text-corporate-blue transition-colors">
              Servicios
            </a>
            <a href="#productos" className="font-montserrat text-gray-700 hover:text-corporate-blue transition-colors">
              Productos
            </a>
            <a href="#sustentabilidad" className="font-montserrat text-gray-700 hover:text-corporate-blue transition-colors">
              Sustentabilidad
            </a>
            <a href="#contacto" className="font-montserrat text-gray-700 hover:text-corporate-blue transition-colors">
              Contacto
            </a>
          </nav>

          <Button className="bg-corporate-green hover:bg-green-600 text-white font-montserrat">
            Contactar Ahora
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
