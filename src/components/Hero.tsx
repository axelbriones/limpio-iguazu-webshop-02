
import { Button } from "@/components/ui/button";

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
        <div className="max-w-4xl">
          <div className="animate-fade-in text-white">
            <h1 className="font-montserrat font-bold text-4xl lg:text-6xl mb-6 leading-tight">
              Soluciones Profesionales en
              <span className="text-corporate-green"> Limpieza Sustentable</span>
            </h1>
            
            <p className="font-opensans text-xl mb-8 text-gray-200 leading-relaxed max-w-3xl">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
