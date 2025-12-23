import Image from "next/image";
// import styles from "./page.module.css";
import Navbar from "../Navbar/Navbar";
import Hero from "../hero/Hero";
import ImageTextSlider from "@/components/ImageTextSlider";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ImageTextSlider />
    </div> 
  );
}
