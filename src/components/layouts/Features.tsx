import { FileTextIcon, Piano, GraduationCap, Gamepad } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    Icon: FileTextIcon,
    name: "Audio to sheet",
    description: "Convert audio files to sheet music instantly.",
    href: "#",
    cta: "Try it now",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div></div>
    ),
  },
  {
    Icon: Piano,
    name: "AI tutor piano",
    description: "Get personalized piano lessons with AI.",
    href: "#",
    cta: "Try it now",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div></div> // <AnimatedListDemo className="top-4 right-2 absolute border-none w-full h-[300px] scale-75 group-hover:scale-90 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]" />
    ),
  },
  {
    Icon: GraduationCap,
    name: "Learn piano with AI",
    description: "Interactive AI-powered piano learning experience.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div></div> // <AnimatedBeamMultipleOutputDemo className="top-4 right-2 absolute border-none h-[300px] group-hover:scale-105 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]" />
    ),
  },
  {
    Icon: Gamepad,
    name: "Gamification",
    description: "Make learning fun with game-like elements.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Explore Games",
    background: (
      <div></div>
    ),
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-gradient-secondary py-20">
      <div className="mx-auto px-4 lg:px-6 container">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-3xl md:text-5xl">
            New{" "}
            <span className="bg-clip-text bg-gradient-primary text-transparent">
              Features
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-xl">
            Discover the powerful features that set our product apart and help
          </p>
        </div>

        {/* Features grid */}
        <BentoGrid className="mx-auto max-w-6xl h-auto">
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-card/80 shadow-soft backdrop-blur-sm mx-auto p-8 border border-border/50 rounded-3xl max-w-2xl">
            <h3 className="mb-4 font-bold text-2xl">Get ready?</h3>
            <p className="mb-6 text-muted-foreground">
              Start your journey with us today and unlock your full potential.
            </p>
            <div className="flex sm:flex-row flex-col justify-center gap-4">
              <button className="bg-gradient-primary shadow-soft hover:shadow-elegant px-8 py-3 rounded-xl font-medium text-primary-foreground hover:scale-105 transition-all duration-300">
                Contact Us
              </button>
              <button className="hover:bg-muted/50 px-8 py-3 border border-border rounded-xl font-medium transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
