
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trees } from "lucide-react";

const Sustainability = () => {
  return (
    <section id="sustentabilidad" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-corporate-green rounded-full flex items-center justify-center">
              <Trees className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="font-montserrat font-bold text-4xl text-corporate-blue mb-4">
            Responsabilidad Ecológica
          </h2>
          <p className="font-opensans text-xl text-gray-600 max-w-4xl mx-auto">
            En Mundo Limpio Iguazú no solo limpiamos espacios, cuidamos el medio ambiente. 
            Ubicados en la selva misionera, la última que le queda a Argentina, asumimos 
            nuestro compromiso con la sustentabilidad y las generaciones futuras.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-corporate-green rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Trees className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-opensans text-gray-700">
                    Protegiendo la Selva Misionera desde 2008
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-corporate-blue rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xs">🌱</span>
                  </div>
                  <span className="font-opensans text-gray-700">
                    Priorizamos productos sustentables y eco-friendly
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-corporate-green rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xs">♻</span>
                  </div>
                  <span className="font-opensans text-gray-700">
                    Comprometidos con las generaciones futuras
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-corporate-blue rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-xs">🌿</span>
                  </div>
                  <span className="font-opensans text-gray-700">
                    Productos amigables con el medio ambiente
                  </span>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="bg-corporate-green hover:bg-green-600 text-white font-montserrat">
                  Conocer Nuestros Productos Eco-Friendly
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Selva Misionera"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-corporate-blue/30 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-montserrat font-semibold">Selva Misionera</p>
                <p className="font-opensans text-sm">Nuestro hogar, nuestra responsabilidad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
