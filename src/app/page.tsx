import AnnouncementBar from "@/components/site/AnnouncementBar";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Hero from "@/components/home/Hero";
import BrandStrip from "@/components/home/BrandStrip";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import GradingExplainer from "@/components/home/GradingExplainer";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TradeInBanner from "@/components/home/TradeInBanner";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BrandStrip />
        <Categories />
        <FeaturedProducts />
        <GradingExplainer />
        <WhyChooseUs />
        <TradeInBanner />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
