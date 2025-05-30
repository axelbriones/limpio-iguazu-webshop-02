
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-corporate-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-montserrat font-bold text-sm">ML</span>
              </div>
              <span className="font-montserrat font-bold text-lg">Mundo Limpio Iguazú</span>
            </div>
            <p className="font-opensans text-gray-400 mb-4">
              Distribuidores especializados en productos de limpieza e higiene 
              institucional y hogareña en la zona de Iguazú.
            </p>
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-corporate-blue rounded flex items-center justify-center text-xs">✓</div>
              <span className="font-opensans text-sm text-gray-300">Confianza</span>
              <div className="w-6 h-6 bg-corporate-green rounded flex items-center justify-center text-xs">✓</div>
              <span className="font-opensans text-sm text-gray-300">Calidad</span>
            </div>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Nuestros Servicios</h3>
            <ul className="space-y-2 font-opensans text-gray-400">
              <li>• Asesoramiento experto</li>
              <li>• Entregas inmediatas</li>
              <li>• Productos institucionales</li>
              <li>• Limpieza hogareña</li>
              <li>• Soluciones personalizadas</li>
            </ul>
          </div>

          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-3 font-opensans text-gray-400">
              <p>📞 +54 3757 XXX-XXX</p>
              <p>📧 info@mundolimpioiguazu.com</p>
              <p>📍 Puerto Iguazú, Misiones</p>
              <p>🕒 Lun-Vie: 8:00-18:00 | Sáb: 8:00-12:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="font-opensans text-gray-400">
            © 2024 Mundo Limpio Iguazú. Todos los derechos reservados. | 
            Distribución especializada en productos de limpieza e higiene.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
