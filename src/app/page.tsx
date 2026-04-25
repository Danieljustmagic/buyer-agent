import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import ROI from "@/components/ROI";
import Comparison from "@/components/Comparison";
import Offers from "@/components/Offers";
import Qualification from "@/components/Qualification";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Services />
        <ROI />
        <Comparison />
        <Offers />
        <Qualification />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
