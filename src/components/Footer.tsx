
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/lovable-uploads/85cbc0aa-d6b6-43f8-9c23-8f2d9e642a5a.png" 
                alt="Mundo Limpio Iguazú - Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="font-opensans text-gray-400 mb-6 max-w-md">
              Desde 2008 distribuyendo productos de limpieza e higiene con responsabilidad 
              ecológica en el corazón de la selva misionera. Comprometidos con las 
              generaciones futuras.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-corporate-blue rounded flex items-center justify-center text-xs">✓</div>
                <span className="font-opensans text-sm text-gray-300">Servicio</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-corporate-green rounded flex items-center justify-center text-xs">✓</div>
                <span className="font-opensans text-sm text-gray-300">Calidad</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-corporate-green rounded flex items-center justify-center text-xs">🌱</div>
                <span className="font-opensans text-sm text-gray-300">Eco-Responsable</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Nuestros Servicios</h3>
            <ul className="space-y-2 font-opensans text-gray-400">
              <li>• Asesoramiento experto</li>
              <li>• Entregas inmediatas</li>
              <li>• Productos sustentables</li>
              <li>• Limpieza profesional</li>
              <li>• Higiene institucional</li>
              <li>• Soluciones hogareñas</li>
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-3 font-opensans text-gray-400">
              <p>📞 +54 3757 XXX-XXX</p>
              <p>📧 info@mundolimpioiguazu.com</p>
              <p>📍 Puerto Iguazú, Misiones</p>
              <p>🕒 Lun-Vie: 8:00-18:00</p>
              <p>🕒 Sáb: 8:00-12:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-opensans text-gray-400 mb-4 md:mb-0">
              © 2024 Mundo Limpio Iguazú. Todos los derechos reservados.
            </p>
            <p className="font-opensans text-gray-400 text-sm">
              Cuidando la selva misionera desde 2008 | Comprometidos con las generaciones futuras
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
