import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-corporate-blue via-blue-700 to-cyan-500"></div>
      
      {/* Geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-corporate-green/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-white/5 transform rotate-45"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="animate-fade-in">
              <span className="inline-block bg-corporate-green/20 text-corporate-green px-4 py-2 rounded-full text-sm font-montserrat font-medium mb-6">
                Nueva Línea de Productos
              </span>
              
              <h1 className="font-montserrat font-bold text-5xl lg:text-6xl mb-6 leading-tight">
                Soluciones
                <span className="block text-corporate-green">Sustentables</span>
                para Limpieza
              </h1>
              
              <p className="font-opensans text-xl mb-8 text-blue-100 leading-relaxed max-w-2xl">
                Desde 2008 brindamos productos de limpieza e higiene con responsabilidad ecológica. 
                Protegemos la selva misionera con soluciones sustentables y asesoramiento experto.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-corporate-green hover:bg-green-600 text-white font-montserrat font-medium px-8 py-4">
                  Ver Más
                </Button>
                <Button size="lg" variant="outline" className="border-white hover:bg-white hover:text-corporate-blue font-montserrat font-medium px-8 py-4 text-indigo-700">
                  Contactar Ahora
                </Button>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative">
              {/* Product showcase */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <img src="/lovable-uploads/a0c967e0-4070-4214-a8ac-86b3702c6c80.png" alt="Productos de limpieza sustentables" className="w-80 h-80 object-contain mx-auto" />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-corporate-green text-white px-4 py-2 rounded-full text-sm font-montserrat font-medium">
                Eco-Friendly
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-corporate-blue px-4 py-2 rounded-full text-sm font-montserrat font-medium">
                Desde 2008
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;