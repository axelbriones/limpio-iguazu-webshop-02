
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const Brands = () => {
  const brands = [
    {
      name: "Elite Professional",
      url: "https://eliteprofessional.com.ar",
      logo: "https://via.placeholder.com/150x80/0064b6/ffffff?text=Elite+Professional"
    },
    {
      name: "Casa Thames",
      url: "https://casathames.com",
      logo: "https://via.placeholder.com/150x80/4caf50/ffffff?text=Casa+Thames"
    },
    {
      name: "Cahesa",
      url: "https://cahesa.com.ar",
      logo: "https://via.placeholder.com/150x80/0064b6/ffffff?text=Cahesa"
    },
    {
      name: "Wassington",
      url: "https://wassington.com.ar",
      logo: "https://via.placeholder.com/150x80/4caf50/ffffff?text=Wassington"
    },
    {
      name: "Mundo Limpio",
      url: "#",
      logo: "https://via.placeholder.com/150x80/0064b6/ffffff?text=Mundo+Limpio"
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
          <div className="flex animate-[scroll_20s_linear_infinite] hover:pause">
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

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${100 / 3}%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Brands;
