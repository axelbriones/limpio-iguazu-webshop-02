
import { Button } from "@/components/ui/button";
import { Droplets, Sun, Shield, Plus } from "lucide-react";

const Pools = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl text-corporate-blue mb-4">
            Clorotec vs. Cloro líquido
          </h2>
          <p className="font-opensans text-lg text-gray-600 max-w-2xl mx-auto">
            Te contamos los beneficios sobre el cloro sólido y por qué tenés que elegirlo a la hora 
            de cuidar el agua de tu pileta.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Droplets className="w-8 h-8 text-corporate-blue" />
            </div>
            <h3 className="font-montserrat font-semibold text-lg text-corporate-blue mb-2">NO MANCHA</h3>
            <p className="font-opensans text-gray-600 text-sm">
              Cuida tu pileta sin dañar las prendas
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sun className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="font-montserrat font-semibold text-lg text-corporate-blue mb-2">MÁS RESISTENTE</h3>
            <p className="font-opensans text-gray-600 text-sm">
              Al sol y a las altas temperaturas
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-corporate-green" />
            </div>
            <h3 className="font-montserrat font-semibold text-lg text-corporate-blue mb-2">MÁS SEGURO</h3>
            <p className="font-opensans text-gray-600 text-sm">
              De transportar y almacenar
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-montserrat font-semibold text-lg text-corporate-blue mb-2">MÁS DURADERO</h3>
            <p className="font-opensans text-gray-600 text-sm">
              2 años de validez
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="font-montserrat font-bold text-2xl mb-4">
            Mantener el agua de tu pile siempre limpia y sana es:
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-cyan-600 text-sm">✓</span>
              </div>
              <span className="font-montserrat font-medium">Más simple</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-cyan-600 text-sm">✓</span>
              </div>
              <span className="font-montserrat font-medium">Más económico</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-cyan-600 text-sm">✓</span>
              </div>
              <span className="font-montserrat font-medium">Más sustentable</span>
            </div>
          </div>
          <Button className="bg-white text-corporate-blue hover:bg-gray-100 font-montserrat font-medium px-8 py-3">
            Ver Productos para Piscinas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pools;
