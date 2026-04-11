import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Reframe from "@/components/Reframe";
import Positioning from "@/components/Positioning";
import Process from "@/components/Process";
import Offers from "@/components/Offers";
import Benefits from "@/components/Benefits";
import Differentiation from "@/components/Differentiation";
import Testimonials from "@/components/Testimonials";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Reframe />
        <Positioning />
        <Process />
        <Offers />
        <Benefits />
        <Differentiation />
        <Testimonials />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
