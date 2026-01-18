import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import Hero from "../hero/Hero";
import ImageTextSlider from "@/components/ImageTextSlider";
import ProductCategory from "@/sections/ProductCategory";
import TrendingProducts from "@/sections/TrendingProducts";
import FlashSales from "@/sections/FlashSales";
import ServiceHighlights from "@/sections/ServiceHighlights";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ImageTextSlider />
      <ProductCategory />
      <TrendingProducts />
      <FlashSales />
      <ServiceHighlights />
    </div> 
  );
};

// Header / Nav
// Hero Banner
// Value Propositions
// Categories
// Featured Products
// Flash Sales
// Recommendations
// Services
// Testimonials
// Newsletter
// Footer
