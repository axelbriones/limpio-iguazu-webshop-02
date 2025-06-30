
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Servicio Personalizado",
      description: "Asesoramiento experto y atención dedicada para encontrar la solución perfecta según sus necesidades específicas.",
      features: ["Consultoría personalizada", "Análisis de necesidades", "Soporte continuo"]
    },
    {
      icon: Clock,
      title: "Soluciones Inmediatas",
      description: "Entregas rápidas y stock permanente para resolver sus problemas de limpieza e higiene sin demoras.",
      features: ["Entrega el mismo día", "Stock permanente", "Logística eficiente"]
    },
    {
      icon: CheckCircle,
      title: "Responsabilidad Ecológica",
      description: "Priorizamos productos sustentables y amigables con el medio ambiente, cuidando la selva misionera.",
      features: ["Productos eco-friendly", "Compromiso ambiental", "Sustentabilidad"]
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-gradient-to-br from-corporate-gray via-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-corporate-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-corporate-green/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-corporate-blue/10 text-corporate-blue px-4 py-2 rounded-full text-sm font-montserrat font-medium mb-6">
            Nuestros Servicios
          </div>
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-corporate-blue mb-6 leading-tight">
            Soluciones Integrales
            <span className="block text-corporate-green">para su Negocio</span>
          </h2>
          <p className="font-opensans text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Estamos capacitados para cubrir cualquier necesidad en productos y sistemas 
            de limpieza institucional y hogareña, brindándole siempre una solución integral 
            con compromiso ecológico desde 2008.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-corporate-blue/5 to-corporate-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <CardHeader className="text-center pb-6 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-corporate-blue to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="font-montserrat font-bold text-2xl text-corporate-blue group-hover:text-corporate-green transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center px-8 pb-8 relative z-10">
                  <p className="font-opensans text-gray-600 mb-8 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-corporate-green mr-3 flex-shrink-0" />
                        <span className="font-opensans text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-center text-corporate-blue font-montserrat font-semibold">
                      Saber más
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="font-opensans text-lg text-gray-600 mb-6">
            ¿Necesita una solución personalizada para su empresa?
          </p>
          <div className="inline-flex items-center text-corporate-blue font-montserrat font-semibold text-lg hover:text-corporate-green transition-colors duration-300 cursor-pointer">
            Contactar ahora mismo
            <ArrowRight className="w-5 h-5 ml-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
