
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
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
            <a href="#inicio" className={`font-montserrat transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-corporate-blue' : 'text-white hover:text-corporate-green'
            }`}>
              Inicio
            </a>
            <a href="#servicios" className={`font-montserrat transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-corporate-blue' : 'text-white hover:text-corporate-green'
            }`}>
              Servicios
            </a>
            <a href="#productos" className={`font-montserrat transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-corporate-blue' : 'text-white hover:text-corporate-green'
            }`}>
              Productos
            </a>
            <a href="#sustentabilidad" className={`font-montserrat transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-corporate-blue' : 'text-white hover:text-corporate-green'
            }`}>
              Sustentabilidad
            </a>
            <a href="#contacto" className={`font-montserrat transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-corporate-blue' : 'text-white hover:text-corporate-green'
            }`}>
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
