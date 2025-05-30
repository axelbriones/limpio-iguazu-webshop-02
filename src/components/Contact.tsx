
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-white text-gray-900 border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="font-montserrat font-semibold text-2xl text-corporate-blue">
                  Solicite su Consulta Gratuita
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-opensans font-medium text-gray-700 block mb-2">Nombre</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue"
                      placeholder="Su nombre completo"
                    />
                  </div>
                  <div>
                    <label className="font-opensans font-medium text-gray-700 block mb-2">Teléfono</label>
                    <input 
                      type="tel" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue"
                      placeholder="Su número de teléfono"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="font-opensans font-medium text-gray-700 block mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue"
                    placeholder="su.email@ejemplo.com"
                  />
                </div>

                <div>
                  <label className="font-opensans font-medium text-gray-700 block mb-2">Tipo de Cliente</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue">
                    <option>Institucional</option>
                    <option>Hogareño</option>
                    <option>Comercial</option>
                  </select>
                </div>

                <div>
                  <label className="font-opensans font-medium text-gray-700 block mb-2">Mensaje</label>
                  <textarea 
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-corporate-blue"
                    placeholder="Cuéntenos sobre sus necesidades de limpieza e higiene..."
                  ></textarea>
                </div>

                <Button className="w-full bg-corporate-green hover:bg-green-600 text-white font-opensans font-medium py-3">
                  Enviar Consulta
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-corporate-green rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg mb-2">Atención Inmediata</h3>
                    <p className="font-opensans text-blue-100 mb-3">
                      Contáctenos para asesoramiento experto y entregas rápidas
                    </p>
                    <p className="font-opensans font-medium">+54 3757 XXX-XXX</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-corporate-green rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg mb-2">Ubicación</h3>
                    <p className="font-opensans text-blue-100 mb-3">
                      Servimos toda la zona de Iguazú con entregas inmediatas
                    </p>
                    <p className="font-opensans">Puerto Iguazú, Misiones</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-corporate-green rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg mb-2">Horarios</h3>
                    <p className="font-opensans text-blue-100 mb-3">
                      Atención personalizada para brindarle la mejor solución
                    </p>
                    <p className="font-opensans">Lun - Vie: 8:00 - 18:00</p>
                    <p className="font-opensans">Sáb: 8:00 - 12:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
