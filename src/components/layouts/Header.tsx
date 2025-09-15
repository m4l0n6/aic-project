import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { APP_INFO } from "@/constants/app";
// import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Trang chủ", href: "#home" },
    { name: "Dịch vụ", href: "#services" },
    { name: "Về chúng tôi", href: "#about" },
    { name: "Liên hệ", href: "#contact" },
  ];

  return (
    <header className="top-0 z-50 fixed bg-background/80 backdrop-blur-lg border-b border-border w-full">
      <nav className="mx-auto px-4 lg:px-6 py-4 container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className="bg-clip-text bg-gradient-primary font-bold text-transparent text-2xl">
              {APP_INFO.NAME}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            {/* <ThemeToggle /> */}
            <Button
              variant="default"
              className="bg-gradient-primary shadow-soft hover:shadow-elegant border-0 transition-all duration-300"
            >
              Bắt đầu
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden hover:bg-muted p-2 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="py-2 text-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center gap-3 mt-4">
                {/* <ThemeToggle /> */}
                <Button
                  variant="default"
                  className="flex-1 bg-gradient-primary border-0"
                >
                  Bắt đầu
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
