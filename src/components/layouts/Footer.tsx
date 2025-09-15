import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { APP_INFO } from "@/constants/app";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "Về chúng tôi", href: "#about" },
      { name: "Dịch vụ", href: "#services" },
      { name: "Tin tức", href: "#news" },
      { name: "Tuyển dụng", href: "#careers" },
    ],
    support: [
      { name: "Trung tâm trợ giúp", href: "#help" },
      { name: "Liên hệ", href: "#contact" },
      { name: "Báo cáo lỗi", href: "#report" },
      { name: "Trạng thái hệ thống", href: "#status" },
    ],
    legal: [
      { name: "Chính sách bảo mật", href: "#privacy" },
      { name: "Điều khoản dịch vụ", href: "#terms" },
      { name: "Chính sách cookie", href: "#cookies" },
      { name: "Khiếu nại DMCA", href: "#dmca" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
  ];

  return (
    <footer className="bg-gradient-to-br from-muted/30 to-background border-t border-border/50">
      <div className="mx-auto px-4 lg:px-6 py-12 container">
        {/* Main footer content */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="bg-clip-text bg-gradient-primary font-bold text-transparent text-2xl">
                {APP_INFO.NAME}
              </span>
            </div>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              Chúng tôi mang đến những giải pháp công nghệ tiên tiến, giúp doanh
              nghiệp phát triển bền vững trong thời đại số.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">contact@yourbrand.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+84 123 456 789</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Hà Nội, Việt Nam</span>
              </div>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="mb-4 font-semibold">Công ty</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h3 className="mb-4 font-semibold">Hỗ trợ</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="mb-4 font-semibold">Pháp lý</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex md:flex-row flex-col justify-between items-center pt-8 border-t border-border/50">
          <p className="mb-4 md:mb-0 text-muted-foreground text-sm">
            © {currentYear} {APP_INFO.NAME}. Tất cả quyền được bảo lưu.
          </p>

          {/* Social links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="group flex justify-center items-center bg-muted/50 hover:bg-primary/20 rounded-lg w-10 h-10 hover:scale-110 transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
