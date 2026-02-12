import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturedProducts from '@/components/FeaturedProducts';
import ProductCategories from '@/components/ProductCategories';
import FullCatalog from '@/components/FullCatalog';
import DeliverySection from '@/components/DeliverySection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-white">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <FeaturedProducts />
      <ProductCategories />
      <FullCatalog />
      <DeliverySection />
      <Footer />
    </main>
  );
}