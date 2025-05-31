import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Droplets, Building2, Home, Sparkles, CheckCircle, Users } from "lucide-react";
const Products = () => {
  const productCategories = [{
    title: "Limpieza Institucional",
    description: "Productos profesionales para empresas, instituciones y comercios",
    icon: Building2,
    color: "bg-corporate-blue",
    items: ["Desinfectantes industriales", "Detergentes de alto rendimiento", "Sistemas de limpieza profesional", "Productos especializados por sector"]
  }, {
    title: "Higiene Institucional",
    description: "Soluciones completas para mantener la higiene en espacios comerciales",
    icon: Droplets,
    color: "bg-corporate-green",
    items: ["Productos de higiene personal", "Dispensadores y accesorios", "Papel higiénico y toallas", "Jabones y gel antibacterial"]
  }, {
    title: "Limpieza Hogareña",
    description: "Todo lo que necesita para mantener su hogar impecable",
    icon: Home,
    color: "bg-blue-600",
    items: ["Detergentes para ropa", "Productos multipropósito", "Limpiadores especializados", "Accesorios de limpieza"]
  }, {
    title: "Productos Eco-Friendly",
    description: "Línea sustentable para cuidar el medio ambiente",
    icon: Sparkles,
    color: "bg-green-600",
    items: ["Detergentes biodegradables", "Limpiadores naturales", "Productos sin químicos", "Envases reciclables"]
  }, {
    title: "Equipos y Accesorios",
    description: "Herramientas profesionales para limpieza",
    icon: CheckCircle,
    color: "bg-gray-600",
    items: ["Máquinas de limpieza", "Aspiradoras industriales", "Herramientas de limpieza", "Accesorios profesionales"]
  }, {
    title: "Servicios Especializados",
    description: "Asesoramiento y servicios personalizados",
    icon: Users,
    color: "bg-purple-600",
    items: ["Asesoramiento técnico", "Capacitación en productos", "Servicios de instalación", "Mantenimiento preventivo"]
  }];
  const featuredProducts = [{
    name: "Jabón Líquido Baja Espuma",
    category: "Limpieza Profesional",
    description: "FELIPRO - Aromas de Misiones",
    image: "/lovable-uploads/a0c967e0-4070-4214-a8ac-86b3702c6c80.png",
    features: ["Uso profesional", "Baja espuma", "Limpieza profunda"]
  }, {
    name: "Desinfectante Industrial",
    category: "Higiene",
    description: "Elimina 99.9% de virus y bacterias",
    image: "/lovable-uploads/a0c967e0-4070-4214-a8ac-86b3702c6c80.png",
    features: ["Acción rápida", "Sin residuos", "Eco-friendly"]
  }, {
    name: "Detergente Concentrado",
    category: "Hogar",
    description: "Máxima eficacia en el lavado familiar",
    image: "/lovable-uploads/a0c967e0-4070-4214-a8ac-86b3702c6c80.png",
    features: ["Concentrado", "Suave con las telas", "Fragancia duradera"]
  }, {
    name: "Limpiador Multiusos Eco",
    category: "Sustentable",
    description: "Producto biodegradable para uso general",
    image: "/lovable-uploads/a0c967e0-4070-4214-a8ac-86b3702c6c80.png",
    features: ["100% natural", "Biodegradable", "Sin químicos"]
  }, {
    name: "Kit Higiene Completo",
    category: "Institucional",
    description: "Solución integral para baños comerciales",
    image: "/lovable-uploads/a0c967e0-4070-4214-a8ac-86b3702c6c80.png",
    features: ["Dispensadores incluidos", "Refills económicos", "Instalación gratis"]
  }, {
    name: "Aspiradora Industrial",
    category: "Equipos",
    description: "Para limpieza profunda en espacios grandes",
    image: "/lovable-uploads/a0c967e0-4070-4214-a8ac-86b3702c6c80.png",
    features: ["Alta potencia", "Tanque grande", "Filtro HEPA"]
  }];
  return <section id="productos" className="py-20 bg-corporate-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl text-corporate-blue mb-4">
            Nuestros Productos
          </h2>
          <p className="font-opensans text-xl text-gray-600 max-w-3xl mx-auto">
            Somos distribuidores especializados en productos de limpieza e higiene. 
            Nos caracterizamos en la zona por brindar asistencia inmediata en la 
            adquisición del producto correcto.
          </p>
        </div>

        {/* Categorías principales en slider - 6 categorías */}
        <div className="mb-16">
          <h3 className="font-montserrat font-semibold text-2xl text-corporate-blue mb-8 text-center">
            Categorías Principales
          </h3>
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {productCategories.map((category, index) => <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full">
                    <div className={`${category.color} p-6 text-white text-center`}>
                      <category.icon className="w-12 h-12 mx-auto mb-2" />
                      <h4 className="font-montserrat font-semibold text-lg">{category.title}</h4>
                    </div>
                    <CardContent className="p-6">
                      <p className="font-opensans text-gray-600 mb-4 text-sm">
                        {category.description}
                      </p>
                      <ul className="space-y-2">
                        {category.items.map((item, itemIndex) => <li key={itemIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-corporate-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="font-opensans text-gray-700 text-sm">{item}</span>
                          </li>)}
                      </ul>
                    </CardContent>
                  </Card>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Productos destacados en slider - 6 productos */}
        <div className="mb-12">
          <h3 className="font-montserrat font-semibold text-2xl text-corporate-blue mb-8 text-center">
            Productos Destacados
          </h3>
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {featuredProducts.map((product, index) => <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow h-full">
                    <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                      <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="inline-block bg-corporate-green text-white text-xs px-2 py-1 rounded mb-2">
                      {product.category}
                    </span>
                    <h4 className="font-montserrat font-medium text-lg text-corporate-blue mb-2">
                      {product.name}
                    </h4>
                    <p className="font-opensans text-gray-600 text-sm mb-3">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {product.features.map((feature, featureIndex) => <span key={featureIndex} className="bg-blue-100 text-corporate-blue text-xs px-2 py-1 rounded">
                          {feature}
                        </span>)}
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Call to action */}
        <div className="bg-corporate-blue rounded-2xl p-8 text-center text-white">
          <Sparkles className="w-12 h-12 mx-auto mb-4 text-corporate-green" />
          <h3 className="font-montserrat font-semibold text-2xl mb-4">
            ¿Necesita un producto específico?
          </h3>
          <p className="font-opensans mb-6 max-w-2xl mx-auto">
            Nuestro equipo de expertos le ayudará a encontrar exactamente lo que necesita. 
            Brindamos asesoramiento general en el rubro y el negocio.
          </p>
          <Button className="bg-corporate-green hover:bg-green-600 text-white font-opensans font-medium px-8 py-3">
            Consultar Producto
          </Button>
        </div>
      </div>
    </section>;
};
export default Products;