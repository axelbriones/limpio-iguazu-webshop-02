
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Brands from "@/components/Brands";
import Pools from "@/components/Pools";
import Sustainability from "@/components/Sustainability";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Products />
      <Brands />
      <Pools />
      <Sustainability />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
