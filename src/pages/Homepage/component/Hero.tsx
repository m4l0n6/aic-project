import { Button } from "@/components/ui/button";
import Setting from "@/config";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex justify-center items-center px-4 min-h-screen text-center"
    >
      <div className="mx-auto max-w-5xl">
        {/* Gradient heading */}
        <h1 className="mb-6 font-bold text-[80px] leading-tight">
          <span
            className={`bg-clip-text text-transparent ${Setting.mainGradient}`}
          >
            Get Instant Feedback
          </span>
        </h1>

        {/* Secondary heading */}
        <h2 className="mb-8 font-semibold text-[60px] text-primary leading-snug">
          Progress Faster
        </h2>

        {/* Supporting text */}
        <p className="mx-auto mb-12 max-w-3xl text-[20px] text-gray-400 leading-relaxed">
          Master the piano faster with instant, AI-driven feedback that helps
          refine your playing every step of the way.
        </p>

        {/* CTA */}
        <div
          className={`inline-block rounded-full p-[2px] ${Setting.mainGradient}`}
        >
          <div className="inline-block bg-black rounded-full">
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
