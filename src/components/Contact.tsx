
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-corporate-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl mb-4">
            Contáctenos
          </h2>
          <p className="font-opensans text-xl text-blue-100 max-w-2xl mx-auto">
            Estamos aquí para brindarle soluciones prácticas e innovadoras con el mejor costo-beneficio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-corporate-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-3">Atención Inmediata</h3>
              <p className="font-opensans text-blue-100 mb-4">
                Contáctenos para asesoramiento experto y entregas rápidas
              </p>
              <p className="font-opensans font-medium text-lg">+54 3757 XXX-XXX</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-corporate-green rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-3">Ubicación</h3>
              <p className="font-opensans text-blue-100 mb-4">
                Servimos toda la zona de Iguazú con entregas inmediatas
              </p>
              <p className="font-opensans font-medium">Puerto Iguazú, Misiones</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-corporate-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-3">Horarios</h3>
              <p className="font-opensans text-blue-100 mb-4">
                Atención personalizada para brindarle la mejor solución
              </p>
              <p className="font-opensans font-medium">Lun - Vie: 8:00 - 18:00</p>
              <p className="font-opensans font-medium">Sáb: 8:00 - 12:00</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
