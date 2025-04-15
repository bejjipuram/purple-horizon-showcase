
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Resume from "@/components/Resume";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Resume />
      <Testimonials />
      <Contact />
      <ScrollToTop />
    </div>
  );
};

export default Index;
