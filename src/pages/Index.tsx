import Header from "@/components/layouts/Header";
import Hero from "@/components/layouts/Hero";
import Features from "@/components/layouts/Features";
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
