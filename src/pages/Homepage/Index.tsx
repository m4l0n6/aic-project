import Header from "@/components/layouts/Header";
import Hero from "@/pages/Homepage/component/Hero";
import Features from "@/pages/Homepage/component/Features";
import Footer from "@/components/layouts/Footer";
import Testimonial02 from "@/components/testimonial-02/testimonial-02";
import Pricing from "./component/Pricing";
import Testimonial04 from "@/components/testimonial-04/testimonial-04";

function HomePage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonial04 />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
