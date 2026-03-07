import FAQ from "@/components/landingpage/FAQ";
import Hero from "@/components/landingpage/Hero";
import How_we_work from "@/components/landingpage/How_we_work";
import MarqueeDemo from "@/components/landingpage/Marquee";
import Showcase from "@/components/landingpage/Showcase";
import What_we_do_best from "@/components/landingpage/What_we_do_best";
import Videos from "@/components/landingpage/Videos";


export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <Videos />
      <How_we_work />
      <What_we_do_best />
      <MarqueeDemo />
      <Showcase />
      <FAQ />
    </div>
  );
}
