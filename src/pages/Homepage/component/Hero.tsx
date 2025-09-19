import { Button } from "@/components/ui/button";
import Setting from "@/config";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen text-center px-4"
    >
      <div className="max-w-5xl mx-auto">
        {/* Gradient heading */}
        <h1 className="text-[80px] font-bold mb-6 leading-tight">
          <span
            className={`bg-clip-text text-transparent ${Setting.mainGradient}`}
          >
            Get Instant Feedback
          </span>
        </h1>

        {/* Secondary heading */}
        <h2 className="text-[60px] font-semibold mb-8 leading-snug text-white">
          Progress Faster
        </h2>

        {/* Supporting text */}
        <p className="text-[20px] text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Master the piano faster with instant, AI-driven feedback that helps
          refine your playing every step of the way.
        </p>

        {/* CTA */}
        <div
          className={`inline-block rounded-full p-[2px] ${Setting.mainGradient}`}
        >
          <div className="inline-block rounded-full bg-black">
            <Button
              size="lg"
              variant="outline"
              className={`relative rounded-full border-2 border-transparent 
                          h-[70px] px-12 py-[12px] 
                          bg-[linear-gradient(#000,#000)_padding-box,${Setting.mainGradient}_border-box] 
                          text-white text-xl`}
            >
              Get started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
