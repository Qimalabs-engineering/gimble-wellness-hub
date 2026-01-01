import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Smartphone, Apple, Download } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeToggle from "./ThemeToggle";
import gimbleIcon from "@/assets/gimble-icon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  const navItems = [
    {
      label: "Product",
      items: [
        { name: "Features", action: () => scrollToSection("features") },
        { name: "How It Works", action: () => scrollToSection("how-it-works") },
        { name: "Overview", href: "/product" },
      ],
    },
    {
      label: "Solutions",
      items: [
        { name: "Corporate Wellness", href: "/solutions" },
        { name: "Education", href: "/solutions" },
        { name: "Government", href: "/solutions" },
        { name: "Who We Serve", href: "/who-we-serve" },
      ],
    },
    {
      label: "Company",
      items: [
        { name: "About Us", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Resources", href: "/resources" },
        { name: "Contact", href: "/contact" },
      ],
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={gimbleIcon} alt="Gimble" className="h-10 w-auto" />
            <span className="text-xl font-bold text-foreground font-display">Gimble</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium outline-none px-3 py-2 rounded-lg hover:bg-muted/50">
                  {item.label}
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48 bg-popover border border-border shadow-lg">
                  {item.items?.map((subItem) => (
                    <DropdownMenuItem key={subItem.name} asChild>
                      {subItem.action ? (
                        <button onClick={subItem.action} className="cursor-pointer w-full text-left">
                          {subItem.name}
                        </button>
                      ) : (
                        <Link to={subItem.href!} className="cursor-pointer">
                          {subItem.name}
                        </Link>
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
            <button
              onClick={() => scrollToSection("faq")}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-muted/50"
            >
              FAQ
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="w-4 h-4" />
                  Get App
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-popover border border-border shadow-lg">
                <DropdownMenuItem className="gap-2 cursor-pointer">
                  <Apple className="w-4 h-4" />
                  Download for iOS
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2 cursor-pointer">
                  <Smartphone className="w-4 h-4" />
                  Download for Android
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="sm">Sign In</Button>
            <Link to="/contact">
              <Button variant="hero" size="sm">Book a Demo</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-border/30 pb-3">
                  <span className="text-foreground font-semibold text-sm uppercase tracking-wide">
                    {item.label}
                  </span>
                  <div className="flex flex-col gap-1 mt-2">
                    {item.items?.map((subItem) => (
                      subItem.action ? (
                        <button
                          key={subItem.name}
                          onClick={() => { subItem.action(); setIsOpen(false); }}
                          className="text-muted-foreground hover:text-foreground transition-colors duration-200 py-1.5 text-left pl-2"
                        >
                          {subItem.name}
                        </button>
                      ) : (
                        <Link
                          key={subItem.name}
                          to={subItem.href!}
                          className="text-muted-foreground hover:text-foreground transition-colors duration-200 py-1.5 pl-2"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              ))}
              <button
                onClick={() => scrollToSection("faq")}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2 text-left"
              >
                FAQ
              </button>
              <div className="flex flex-col gap-3 pt-4 border-t border-border/50">
                <Button variant="outline" className="justify-start gap-2">
                  <Download className="w-4 h-4" />
                  Download App
                </Button>
                <Button variant="ghost" className="justify-start">Sign In</Button>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="hero" className="w-full">Book a Demo</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;