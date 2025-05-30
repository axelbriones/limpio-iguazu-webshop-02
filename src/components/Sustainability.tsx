
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Trees, Recycle, Heart } from "lucide-react";

const Sustainability = () => {
  const ecoValues = [
    {
      icon: Trees,
      title: "Protegiendo la Selva Misionera",
      description: "Ubicados en el corazón de la única selva que le queda a Argentina, asumimos la responsabilidad de protegerla para las futuras generaciones."
    },
    {
      icon: Leaf,
      title: "Productos Sustentables",
      description: "Priorizamos productos eco-friendly, biodegradables y certificados que minimizan el impacto ambiental sin comprometer la eficacia."
    },
    {
      icon: Recycle,
      title: "Compromiso Ecológico",
      description: "Desde 2008 promovemos prácticas responsables con el medio ambiente, ofreciendo alternativas sustentables para la limpieza profesional."
    },
    {
      icon: Heart,
      title: "Pensando en el Futuro",
      description: "Cada producto que distribuimos es seleccionado pensando en el impacto que tendrá en las próximas generaciones y nuestro ecosistema."
    }
  ];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {ecoValues.map((value, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-corporate-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="font-montserrat font-semibold text-lg text-corporate-blue">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-opensans text-gray-600 text-sm">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-montserrat font-semibold text-2xl text-corporate-blue mb-4">
                Desde 2008 Cuidando Nuestro Entorno
              </h3>
              <p className="font-opensans text-gray-600 mb-6">
                Con más de 15 años de experiencia, hemos sido testigos de la importancia 
                de preservar nuestro ecosistema único. Por eso, cada decisión que tomamos 
                como empresa está alineada con nuestro compromiso ecológico.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Leaf className="w-5 h-5 text-corporate-green mt-1 mr-3 flex-shrink-0" />
                  <span className="font-opensans text-gray-700">Selección rigurosa de productos eco-certificados</span>
                </li>
                <li className="flex items-start">
                  <Leaf className="w-5 h-5 text-corporate-green mt-1 mr-3 flex-shrink-0" />
                  <span className="font-opensans text-gray-700">Capacitación en uso responsable de productos químicos</span>
                </li>
                <li className="flex items-start">
                  <Leaf className="w-5 h-5 text-corporate-green mt-1 mr-3 flex-shrink-0" />
                  <span className="font-opensans text-gray-700">Promoción de prácticas de limpieza sustentables</span>
                </li>
              </ul>
              <Button className="bg-corporate-green hover:bg-green-600 text-white font-montserrat">
                Conocer Nuestros Productos Eco-Friendly
              </Button>
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
