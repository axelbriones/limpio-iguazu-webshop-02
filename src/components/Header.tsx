
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-corporate-white shadow-sm border-b border-corporate-gray">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-corporate-blue rounded-lg flex items-center justify-center">
              <span className="text-corporate-white font-montserrat font-bold text-lg">ML</span>
            </div>
            <div>
              <h1 className="font-montserrat font-bold text-xl text-corporate-blue">
                Mundo Limpio Iguazú
              </h1>
              <p className="font-opensans text-sm text-gray-600">
                Distribución de productos de limpieza
              </p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#inicio" className="font-opensans text-gray-700 hover:text-corporate-blue transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="font-opensans text-gray-700 hover:text-corporate-blue transition-colors">
              Servicios
            </a>
            <a href="#productos" className="font-opensans text-gray-700 hover:text-corporate-blue transition-colors">
              Productos
            </a>
            <a href="#contacto" className="font-opensans text-gray-700 hover:text-corporate-blue transition-colors">
              Contacto
            </a>
          </nav>

          <Button className="bg-corporate-green hover:bg-green-600 text-white font-opensans">
            Contactar Ahora
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
