
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield, Sparkles, Leaf } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')"
        }}
      />
      
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Contenido */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in text-white">
            <h1 className="font-montserrat font-bold text-4xl lg:text-6xl mb-6 leading-tight">
              Soluciones Profesionales en
              <span className="text-corporate-green"> Limpieza Sustentable</span>
            </h1>
            
            <p className="font-opensans text-xl mb-8 text-gray-200 leading-relaxed">
              <strong>Desde 2008</strong> brindamos soluciones integrales de limpieza e higiene 
              con <strong>responsabilidad ecológica</strong>. Protegemos la última selva de Argentina 
              con productos sustentables y asesoramiento experto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" className="bg-corporate-green hover:bg-green-600 text-white font-montserrat font-medium px-8 py-3">
                Solicitar Asesoramiento
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-corporate-blue font-montserrat font-medium px-8 py-3"
              >
                Ver Productos Eco-Friendly
              </Button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-corporate-green" />
                <span className="font-opensans text-sm">Servicio</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-corporate-green" />
                <span className="font-opensans text-sm">Calidad</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-corporate-green" />
                <span className="font-opensans text-sm">Innovación</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-corporate-green" />
                <span className="font-opensans text-sm">Soluciones</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="w-5 h-5 text-corporate-green" />
                <span className="font-opensans text-sm">Eco-Responsable</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-corporate-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-corporate-blue mb-4">
                  Comprometidos con el Medio Ambiente
                </h3>
                <p className="font-opensans text-gray-600 mb-6">
                  En el corazón de la selva misionera, protegemos el futuro con 
                  productos sustentables y soluciones responsables.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-left">
                    <CheckCircle className="w-5 h-5 text-corporate-green mr-3 flex-shrink-0" />
                    <span className="font-opensans text-sm text-gray-700">
                      Productos eco-friendly certificados
                    </span>
                  </div>
                  <div className="flex items-center text-left">
                    <CheckCircle className="w-5 h-5 text-corporate-green mr-3 flex-shrink-0" />
                    <span className="font-opensans text-sm text-gray-700">
                      15+ años cuidando la selva misionera
                    </span>
                  </div>
                  <div className="flex items-center text-left">
                    <CheckCircle className="w-5 h-5 text-corporate-green mr-3 flex-shrink-0" />
                    <span className="font-opensans text-sm text-gray-700">
                      Pensando en las generaciones futuras
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
