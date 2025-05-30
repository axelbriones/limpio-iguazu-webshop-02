
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Asesoramiento Experto",
      description: "Brindamos asistencia especializada para encontrar el producto correcto según sus necesidades específicas.",
      features: ["Consultoría personalizada", "Recomendaciones técnicas", "Soporte continuo"]
    },
    {
      icon: Clock,
      title: "Entregas Inmediatas",
      description: "Nos caracterizamos por nuestras entregas rápidas en toda la zona de Iguazú.",
      features: ["Entrega el mismo día", "Cobertura local completa", "Logística eficiente"]
    },
    {
      icon: Sparkles,
      title: "Productos Innovadores",
      description: "Distribuimos productos de calidad con las últimas innovaciones en limpieza e higiene.",
      features: ["Marcas reconocidas", "Tecnología avanzada", "Calidad garantizada"]
    },
    {
      icon: CheckCircle,
      title: "Mejor Costo-Beneficio",
      description: "Ofrecemos las mejores soluciones prácticas con precios competitivos en el mercado.",
      features: ["Precios competitivos", "Soluciones integrales", "Valor agregado"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-corporate-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl text-corporate-blue mb-4">
            Nuestros Servicios
          </h2>
          <p className="font-opensans text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos capacitados para cubrir cualquier necesidad en productos y sistemas 
            de limpieza institucional y hogareña, brindándole siempre una solución.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="font-montserrat font-semibold text-xl text-corporate-blue">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-opensans text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-corporate-green mr-2 flex-shrink-0" />
                        <span className="font-opensans text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
