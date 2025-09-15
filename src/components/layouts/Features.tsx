import {
  Zap,
  Shield,
  Users,
  BarChart3,
  Headphones,
  Smartphone,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Tốc độ vượt trội",
      description:
        "Hiệu suất cao với công nghệ tối ưu, giúp tăng tốc quy trình làm việc của bạn.",
    },
    {
      icon: Shield,
      title: "Bảo mật tuyệt đối",
      description:
        "Hệ thống bảo mật đa lớp, bảo vệ dữ liệu của bạn một cách toàn diện.",
    },
    {
      icon: Users,
      title: "Hợp tác nhóm",
      description:
        "Công cụ cộng tác mạnh mẽ, kết nối team làm việc hiệu quả mọi lúc mọi nơi.",
    },
    {
      icon: BarChart3,
      title: "Phân tích thông minh",
      description:
        "Báo cáo chi tiết với AI, giúp đưa ra quyết định kinh doanh chính xác.",
    },
    {
      icon: Headphones,
      title: "Hỗ trợ 24/7",
      description: "Đội ngũ chuyên gia sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi.",
    },
    {
      icon: Smartphone,
      title: "Đa nền tảng",
      description:
        "Tương thích hoàn hảo trên mọi thiết bị, từ desktop đến mobile.",
    },
  ];

  return (
    <section id="services" className="bg-gradient-secondary py-20">
      <div className="mx-auto px-4 lg:px-6 container">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-3xl md:text-5xl">
            Tính năng{" "}
            <span className="bg-clip-text bg-gradient-primary text-transparent">
              nổi bật
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-xl">
            Khám phá những tính năng mạnh mẽ được thiết kế đặc biệt để nâng cao
            trải nghiệm và hiệu quả làm việc của bạn.
          </p>
        </div>

        {/* Features grid */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group bg-card/50 hover:shadow-soft backdrop-blur-sm border-border/50 hover:scale-105 transition-all duration-300"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center items-center bg-gradient-primary shadow-soft group-hover:shadow-elegant mx-auto mb-4 rounded-2xl w-16 h-16 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="mb-2 text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-card/80 shadow-soft backdrop-blur-sm mx-auto p-8 border border-border/50 rounded-3xl max-w-2xl">
            <h3 className="mb-4 font-bold text-2xl">Sẵn sàng bắt đầu?</h3>
            <p className="mb-6 text-muted-foreground">
              Hãy để chúng tôi giúp bạn biến ý tưởng thành hiện thực
            </p>
            <div className="flex sm:flex-row flex-col justify-center gap-4">
              <button className="bg-gradient-primary shadow-soft hover:shadow-elegant px-8 py-3 rounded-xl font-medium text-primary-foreground hover:scale-105 transition-all duration-300">
                Liên hệ ngay
              </button>
              <button className="hover:bg-muted/50 px-8 py-3 border border-border rounded-xl font-medium transition-all duration-300">
                Tìm hiểu thêm
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
