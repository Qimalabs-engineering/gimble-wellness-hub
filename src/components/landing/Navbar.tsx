import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Smartphone, Apple, Download } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navItems = [
    {
      label: "Product",
      href: "/product",
      hasDropdown: false,
    },
    {
      label: "Solutions",
      href: "/solutions",
      hasDropdown: true,
      items: [
        { name: "Corporate Wellness", href: "/solutions" },
        { name: "Education", href: "/solutions" },
        { name: "Government", href: "/solutions" },
        { name: "Who We Serve", href: "/who-we-serve" },
      ],
    },
    {
      label: "Resources",
      href: "/resources",
      hasDropdown: true,
      items: [
        { name: "Blog & Articles", href: "/resources" },
        { name: "Guides & Whitepapers", href: "/resources" },
        { name: "Webinars", href: "/resources" },
      ],
    },
    {
      label: "Company",
      href: "/company",
      hasDropdown: true,
      items: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/company" },
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
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">G</span>
            </div>
            <span className="text-xl font-bold text-foreground">Gimble</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {isHomePage && (
              <a
                href="#features"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                Features
              </a>
            )}
            {navItems.map((item) => (
              item.hasDropdown ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium outline-none">
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {item.items?.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link to={subItem.href} className="cursor-pointer">
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
              )
            ))}
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
              <DropdownMenuContent align="end" className="w-48">
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
            <div className="flex flex-col gap-2">
              {isHomePage && (
                <a
                  href="#features"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </a>
              )}
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2 block"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.hasDropdown && item.items && (
                    <div className="pl-4 flex flex-col gap-1">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 py-1.5"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border/50 mt-2">
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