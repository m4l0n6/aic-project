import Header from "@/components/layouts/Header";
import Hero from "@/pages/Homepage/component/Hero";
import Features from "@/pages/Homepage/component/Features";
import Footer from "@/components/layouts/Footer";

function HomePage() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
