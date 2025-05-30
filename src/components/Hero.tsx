
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-corporate-blue to-blue-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="font-montserrat font-bold text-4xl lg:text-6xl mb-6 leading-tight">
              Soluciones Profesionales en
              <span className="text-corporate-green"> Limpieza e Higiene</span>
            </h1>
            
            <p className="font-opensans text-xl mb-8 text-blue-100 leading-relaxed">
              Distribuidores especializados con <strong>asesoramiento experto</strong> y 
              <strong> entregas inmediatas</strong> en Iguazú. Cubrimos todas sus necesidades 
              institucionales y hogareñas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" className="bg-corporate-green hover:bg-green-600 text-white font-opensans font-medium px-8 py-3">
                Solicitar Asesoramiento
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-corporate-blue font-opensans font-medium px-8 py-3"
              >
                Ver Productos
              </Button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-corporate-green" />
                <span className="font-opensans text-sm">Confianza</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-corporate-green" />
                <span className="font-opensans text-sm">Eficiencia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-corporate-green" />
                <span className="font-opensans text-sm">Innovación</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-corporate-green" />
                <span className="font-opensans text-sm">Accesibilidad</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-corporate-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-corporate-blue mb-4">
                  ¿Necesita productos de limpieza?
                </h3>
                <p className="font-opensans text-gray-600 mb-6">
                  Obtenga asesoramiento personalizado y las mejores soluciones 
                  para su empresa o hogar.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-left">
                    <CheckCircle className="w-5 h-5 text-corporate-green mr-3 flex-shrink-0" />
                    <span className="font-opensans text-sm text-gray-700">
                      Productos institucionales y hogareños
                    </span>
                  </div>
                  <div className="flex items-center text-left">
                    <CheckCircle className="w-5 h-5 text-corporate-green mr-3 flex-shrink-0" />
                    <span className="font-opensans text-sm text-gray-700">
                      Entregas inmediatas en la zona
                    </span>
                  </div>
                  <div className="flex items-center text-left">
                    <CheckCircle className="w-5 h-5 text-corporate-green mr-3 flex-shrink-0" />
                    <span className="font-opensans text-sm text-gray-700">
                      Mejor relación costo-beneficio
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
