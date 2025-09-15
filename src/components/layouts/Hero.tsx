import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

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
              ✨ Chào mừng đến với tương lai
            </span>
          </div>

          {/* Main heading */}
          <h1 className="mb-6 font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight">
            Giải pháp{" "}
            <span className="bg-clip-text bg-gradient-primary text-transparent">
              hoàn hảo
            </span>
            <br />
            cho doanh nghiệp
          </h1>

          {/* Description */}
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground text-xl leading-relaxed">
            Chúng tôi mang đến những giải pháp công nghệ tiên tiến, giúp doanh
            nghiệp của bạn phát triển vượt bậc trong thời đại số.
          </p>

          {/* CTA Buttons */}
          <div className="flex sm:flex-row flex-col justify-center items-center gap-4 mb-12">
            <Button
              size="lg"
              className="group bg-gradient-primary shadow-soft hover:shadow-elegant border-0 transition-all duration-300"
            >
              Bắt đầu ngay hôm nay
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="group hover:bg-muted/50 border-border transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Xem demo
            </Button>
          </div>

          {/* Stats */}
          <div className="gap-8 grid grid-cols-2 md:grid-cols-4 mx-auto max-w-2xl">
            <div className="text-center">
              <div className="mb-1 font-bold text-primary text-3xl">100+</div>
              <div className="text-muted-foreground text-sm">Khách hàng</div>
            </div>
            <div className="text-center">
              <div className="mb-1 font-bold text-primary text-3xl">99%</div>
              <div className="text-muted-foreground text-sm">Hài lòng</div>
            </div>
            <div className="text-center">
              <div className="mb-1 font-bold text-primary text-3xl">24/7</div>
              <div className="text-muted-foreground text-sm">Hỗ trợ</div>
            </div>
            <div className="text-center">
              <div className="mb-1 font-bold text-primary text-3xl">5★</div>
              <div className="text-muted-foreground text-sm">Đánh giá</div>
            </div>
          </div>
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
