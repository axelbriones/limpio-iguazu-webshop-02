
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Products = () => {
  const productCategories = [
    {
      title: "Limpieza Institucional",
      description: "Productos profesionales para empresas, instituciones y comercios",
      items: [
        "Desinfectantes industriales",
        "Detergentes de alto rendimiento", 
        "Sistemas de limpieza profesional",
        "Productos especializados por sector"
      ],
      color: "bg-corporate-blue"
    },
    {
      title: "Higiene Institucional", 
      description: "Soluciones completas para mantener la higiene en espacios comerciales",
      items: [
        "Productos de higiene personal",
        "Dispensadores y accesorios",
        "Papel higiénico y toallas",
        "Jabones y gel antibacterial"
      ],
      color: "bg-corporate-green"
    },
    {
      title: "Limpieza Hogareña",
      description: "Todo lo que necesita para mantener su hogar impecable",
      items: [
        "Detergentes para ropa",
        "Productos multipropósito",
        "Limpiadores especializados",
        "Accesorios de limpieza"
      ],
      color: "bg-blue-600"
    }
  ];

  return (
    <section id="productos" className="py-20 bg-white">
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

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {productCategories.map((category, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className={`${category.color} p-6 text-white`}>
                <CardHeader className="p-0">
                  <CardTitle className="font-montserrat font-semibold text-xl">
                    {category.title}
                  </CardTitle>
                </CardHeader>
              </div>
              <CardContent className="p-6">
                <p className="font-opensans text-gray-600 mb-6">
                  {category.description}
                </p>
                <ul className="space-y-3">
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

        <div className="bg-corporate-gray rounded-2xl p-8 text-center">
          <h3 className="font-montserrat font-semibold text-2xl text-corporate-blue mb-4">
            ¿Necesita un producto específico?
          </h3>
          <p className="font-opensans text-gray-600 mb-6 max-w-2xl mx-auto">
            Nuestro equipo de expertos le ayudará a encontrar exactamente lo que necesita. 
            Brindamos asesoramiento general en el rubro y el negocio.
          </p>
          <Button className="bg-corporate-blue hover:bg-blue-700 text-white font-opensans font-medium px-8 py-3">
            Consultar Producto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
