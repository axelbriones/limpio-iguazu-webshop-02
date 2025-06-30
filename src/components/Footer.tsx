
import { MapPin, Phone, Mail, Clock, Award, Users, Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <img 
                  src="/lovable-uploads/85cbc0aa-d6b6-43f8-9c23-8f2d9e642a5a.png" 
                  alt="Mundo Limpio Iguazú - Logo" 
                  className="h-16 w-auto"
                />
              </div>
              <p className="font-opensans text-gray-300 mb-8 max-w-lg text-lg leading-relaxed">
                Desde 2008 distribuyendo productos de limpieza e higiene con responsabilidad 
                ecológica en el corazón de la selva misionera. Comprometidos con las 
                generaciones futuras y el cuidado del medio ambiente.
              </p>
              
              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-corporate-blue rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-montserrat font-semibold text-white">+15 Años</div>
                    <div className="font-opensans text-sm text-gray-400">de Experiencia</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-corporate-green rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-montserrat font-semibold text-white">500+</div>
                    <div className="font-opensans text-sm text-gray-400">Clientes Satisfechos</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-corporate-green rounded-lg flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-montserrat font-semibold text-white">100%</div>
                    <div className="font-opensans text-sm text-gray-400">Eco-Responsable</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-corporate-blue rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-montserrat font-semibold text-white">24/7</div>
                    <div className="font-opensans text-sm text-gray-400">Atención Rápida</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-montserrat font-bold text-xl mb-6 text-white">Nuestros Servicios</h3>
              <ul className="space-y-4 font-opensans text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-corporate-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="hover:text-white transition-colors duration-300 cursor-pointer">Asesoramiento experto</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-corporate-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="hover:text-white transition-colors duration-300 cursor-pointer">Entregas inmediatas</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-corporate-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="hover:text-white transition-colors duration-300 cursor-pointer">Productos sustentables</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-corporate-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="hover:text-white transition-colors duration-300 cursor-pointer">Limpieza profesional</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-corporate-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="hover:text-white transition-colors duration-300 cursor-pointer">Higiene institucional</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-corporate-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="hover:text-white transition-colors duration-300 cursor-pointer">Soluciones hogareñas</span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-montserrat font-bold text-xl mb-6 text-white">Información de Contacto</h3>
              <div className="space-y-6 font-opensans text-gray-300">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-corporate-green rounded flex items-center justify-center mt-1">
                    <Phone className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">+54 3757 XXX-XXX</div>
                    <div className="text-sm">Atención inmediata</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-corporate-green rounded flex items-center justify-center mt-1">
                    <Mail className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">info@mundolimpioiguazu.com</div>
                    <div className="text-sm">Consultas generales</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-corporate-green rounded flex items-center justify-center mt-1">
                    <MapPin className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Puerto Iguazú, Misiones</div>
                    <div className="text-sm">Argentina</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-corporate-green rounded flex items-center justify-center mt-1">
                    <Clock className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Lun-Vie: 8:00-18:00</div>
                    <div className="text-sm">Sáb: 8:00-12:00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="font-opensans text-gray-400 text-center lg:text-left">
              © 2024 Mundo Limpio Iguazú. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-8">
              <p className="font-opensans text-gray-400 text-sm text-center lg:text-right">
                Cuidando la selva misionera desde 2008
              </p>
              <div className="flex items-center space-x-2">
                <Leaf className="w-4 h-4 text-corporate-green" />
                <span className="font-montserrat text-corporate-green font-medium text-sm">
                  Comprometidos con las generaciones futuras
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
