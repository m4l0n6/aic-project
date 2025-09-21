import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Highlighter } from "@/components/ui/highlighter";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex justify-center items-center bg-gradient-hero min-h-screen overflow-hidden"
    >
      {/* Background decoration */}
      <div className="-z-10 absolute inset-0">
        <div className="top-1/4 left-1/4 absolute bg-primary/20 blur-3xl rounded-full w-72 h-72"></div>
        <div className="right-1/4 bottom-1/4 absolute bg-primary-glow/15 blur-3xl rounded-full w-96 h-96"></div>
      </div>

      <div className="mx-auto px-4 lg:px-6 text-center container">
        <div className="mx-auto max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center bg-muted/50 mb-8 px-4 py-2 border border-border/50 rounded-full">
            <span className="text-muted-foreground text-sm">
              ✨ 
            </span>
          </div>

          {/* Main heading */}
          <h1 className="mb-6 font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight">
            Get Instant{" "}
            <span className="bg-clip-text bg-gradient-primary text-transparent">
              Feedback
            </span>
            <br />
            Progress Faster
          </h1>

          {/* Description */}
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground text-xl leading-relaxed">
            The Perfect{" "}
            <Highlighter action="underline" color="#FF9800">
              AI Piano Tutor
            </Highlighter>{" "}
            guiding you to master the piano faster and smarter.
          </p>

          {/* CTA Buttons */}
          <div className="flex sm:flex-row flex-col justify-center items-center gap-4 mb-12">
            <Button
              size="lg"
              className="group bg-gradient-primary shadow-soft hover:shadow-elegant border-0 transition-all duration-300"
            >
              Start Now
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Link to="/demo">
              <Button
                variant="outline"
                size="lg"
                className="group hover:bg-muted/50 border-border transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                View Demo
              </Button>
            </Link>
          </div>

          {/* Stats */}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="bottom-8 left-1/2 absolute -translate-x-1/2 animate-bounce transform">
        <div className="flex justify-center border-2 border-muted-foreground/30 rounded-full w-6 h-10">
          <div className="bg-muted-foreground/50 mt-2 rounded-full w-1 h-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
