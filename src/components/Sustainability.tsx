
import { Button } from "@/components/ui/button";
import { Leaf, Recycle, Heart } from "lucide-react";

const Sustainability = () => {
  return (
    <section id="sustentabilidad" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl text-corporate-blue mb-4">
            Responsabilidad Ecológica
          </h2>
          <p className="font-opensans text-xl text-gray-600 max-w-3xl mx-auto">
            Desde 2008 distribuimos productos sustentables comprometidos con el cuidado 
            del medio ambiente y las generaciones futuras.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-corporate-green rounded-full flex items-center justify-center flex-shrink-0">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-lg text-corporate-blue">Sustentables</h3>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-corporate-green rounded-full flex items-center justify-center flex-shrink-0">
              <Recycle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-lg text-corporate-blue">Biodegradables</h3>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-corporate-green rounded-full flex items-center justify-center flex-shrink-0">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-lg text-corporate-blue">Eco-Responsables</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
