
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, Building2, Home, Sparkles } from "lucide-react";

const Products = () => {
  const productCategories = [
    {
      title: "Limpieza Institucional",
      description: "Productos profesionales para empresas, instituciones y comercios",
      icon: Building2,
      items: [
        "Desinfectantes industriales",
        "Detergentes de alto rendimiento", 
        "Sistemas de limpieza profesional",
        "Productos especializados por sector"
      ],
      color: "bg-corporate-blue",
      image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Higiene Institucional", 
      description: "Soluciones completas para mantener la higiene en espacios comerciales",
      icon: Droplets,
      items: [
        "Productos de higiene personal",
        "Dispensadores y accesorios",
        "Papel higiénico y toallas",
        "Jabones y gel antibacterial"
      ],
      color: "bg-corporate-green",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Limpieza Hogareña",
      description: "Todo lo que necesita para mantener su hogar impecable",
      icon: Home,
      items: [
        "Detergentes para ropa",
        "Productos multipropósito",
        "Limpiadores especializados",
        "Accesorios de limpieza"
      ],
      color: "bg-blue-600",
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const featuredProducts = [
    {
      name: "Desinfectante Multiusos",
      category: "Institucional",
      description: "Elimina 99.9% de virus y bacterias",
      image: "https://images.unsplash.com/photo-1585435557343-3b092031d8fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      features: ["Acción rápida", "Sin residuos", "Eco-friendly"]
    },
    {
      name: "Kit Higiene Completo",
      category: "Higiene",
      description: "Solución integral para baños comerciales",
      image: "https://images.unsplash.com/photo-1556909114-7a4e5c9b9b9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      features: ["Dispensadores incluidos", "Refills económicos", "Instalación gratis"]
    },
    {
      name: "Detergente Premium",
      category: "Hogar",
      description: "Máxima eficacia en el lavado familiar",
      image: "https://images.unsplash.com/photo-1558618047-3c8c5d1d1f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      features: ["Concentrado", "Suave con las telas", "Fragancia duradera"]
    }
  ];

  return (
    <section id="productos" className="py-20 bg-corporate-gray">
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

        {/* Categorías principales */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {productCategories.map((category, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute inset-0 ${category.color} bg-opacity-80 flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <category.icon className="w-12 h-12 mx-auto mb-2" />
                    <h3 className="font-montserrat font-semibold text-xl">{category.title}</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="font-opensans text-gray-600 mb-4">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-corporate-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="font-opensans text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Productos destacados */}
        <div className="bg-white rounded-2xl p-8 mb-12">
          <h3 className="font-montserrat font-semibold text-2xl text-corporate-blue mb-8 text-center">
            Productos Destacados
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-corporate-gray rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-full h-32 bg-white rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
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
                  {product.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="bg-blue-100 text-corporate-blue text-xs px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
    </section>
  );
};

export default Products;
