
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Atención Inmediata",
      description: "Contáctenos para asesoramiento experto y entregas rápidas",
      details: "+54 3757 XXX-XXX",
      action: "Llamar ahora"
    },
    {
      icon: MapPin,
      title: "Ubicación Estratégica",
      description: "Servimos toda la zona de Iguazú con entregas inmediatas",
      details: "Puerto Iguazú, Misiones",
      action: "Ver ubicación"
    },
    {
      icon: Clock,
      title: "Horarios Flexibles",
      description: "Atención personalizada para brindarle la mejor solución",
      details: "Lun-Vie: 8:00-18:00 | Sáb: 8:00-12:00",
      action: "Consultar disponibilidad"
    }
  ];

  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-corporate-blue via-blue-700 to-cyan-600 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-corporate-green/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-white/5 transform rotate-45 blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-montserrat font-medium mb-6">
            Contacto Directo
          </div>
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl mb-6 leading-tight">
            Estamos Aquí
            <span className="block text-corporate-green">para Ayudarle</span>
          </h2>
          <p className="font-opensans text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Brindamos soluciones prácticas e innovadoras con el mejor costo-beneficio. 
            Su satisfacción es nuestra prioridad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <Card key={index} className="bg-white/15 backdrop-blur-lg border-white/20 text-white hover:bg-white/20 transition-all duration-300 group hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-corporate-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl mb-3">{info.title}</h3>
                  <p className="font-opensans text-blue-100 mb-4 leading-relaxed">
                    {info.description}
                  </p>
                  <p className="font-opensans font-semibold text-lg mb-6">{info.details}</p>
                  <div className="text-corporate-green font-montserrat font-medium group-hover:text-white transition-colors duration-300">
                    {info.action}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
            <CardContent className="p-12 text-center">
              <MessageCircle className="w-16 h-16 mx-auto mb-6 text-corporate-green" />
              <h3 className="font-montserrat font-bold text-3xl mb-4">
                ¿Listo para comenzar?
              </h3>
              <p className="font-opensans text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contáctenos hoy mismo y descubra cómo podemos ayudarle a mantener 
                sus espacios impecables con productos de la más alta calidad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-corporate-green hover:bg-green-600 text-white font-montserrat font-semibold px-8 py-4 rounded-xl">
                  <Phone className="w-5 h-5 mr-2" />
                  Llamar Ahora
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white font-montserrat font-semibold px-8 py-4 rounded-xl">
                  <Mail className="w-5 h-5 mr-2" />
                  Enviar Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
