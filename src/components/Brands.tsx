
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const Brands = () => {
  const brands = [
    {
      name: "Elite Professional",
      url: "https://eliteprofessional.com.ar",
      logo: "https://www.eliteprofessional.com.ar/assets/dist/frontend/images/elite-logo.png"
    },
    {
      name: "Casa Thames",
      url: "https://casathames.com",
      logo: "https://www.casathames.com/images/logo.gif"
    },
    {
      name: "Cahesa",
      url: "https://cahesa.com.ar",
      logo: "https://cahesa.com.ar/images/logo-cahesa.png"
    },
    {
      name: "Wassington",
      url: "https://wassington.com.ar",
      logo: "https://wassington.com.ar/wp-content/uploads/2024/03/Logo-Wassington-Corporativo_Black.png"
    },
    {
      name: "Vulcano",
      url: "https://vulcano-sa.com.ar",
      logo: "https://vulcano-sa.com.ar/wp-content/uploads/2024/01/logo-VULCANO-50-ANOS-e1709234751800-150x65.png"
    },
    {
      name: "Nataclor",
      url: "https://nataclor.com.ar",
      logo: "https://www.nataclor.com.ar/cdn/shop/files/Nataclor_celeste.png?v=1724255942&width=280"
    }
  ];

  // Duplicamos las marcas para efecto infinito
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl text-corporate-blue mb-4">
            Principales Marcas
          </h2>
          <p className="font-opensans text-lg text-gray-600">
            Distribuimos las mejores marcas del mercado
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll hover:pause">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 mx-6"
              >
                <a
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="flex items-center justify-center h-20">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
