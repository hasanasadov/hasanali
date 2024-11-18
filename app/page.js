import About from "@/components/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Security from "@/components/Security";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="rotate-180 lg:top-[-340px] top-[-50px] absolute -z-10">
        <video src="/blackhole.webm" autoPlay loop muted />
      </div>
      <About />
      <Skills />
      <Security />
      <div className="h-full w-full grid projects-m0bile md:grid-cols-2 gap-10 px-10 py-20">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Footer />
    </div>
  );
}
