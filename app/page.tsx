import Navbar from "@/components/common/Navbar";
import FAQ from "@/components/landingpage/FAQ";
import Hero from "@/components/landingpage/Hero";
import How_we_work from "@/components/landingpage/How_we_work";
import MarqueeDemo from "@/components/landingpage/Marquee";
import Footer from "@/components/common/Footer";
import Showcase from "@/components/landingpage/Showcase";
import What_we_do_best from "@/components/landingpage/What_we_do_best";


export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <How_we_work />
      <What_we_do_best />
      <MarqueeDemo />
      <Showcase />
      <FAQ />
      <Footer />
    </div>
  );
}
