import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
import gimbleIcon from "@/assets/gimble-icon.png";

const Footer = () => {
  const links = {
    Product: ["Features", "Pricing", "Security", "Integrations", "API"],
    Solutions: ["For Companies", "For Schools", "For Government", "Enterprise"],
    Resources: ["Blog", "Help Center", "Webinars", "Case Studies", "Research"],
    Company: ["About", "Careers", "Press", "Contact", "Partners"],
  };

  const socialLinks = [
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/usegimble" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/company/gimble" },
    { name: "Facebook", icon: Facebook, url: "https://facebook.com/usegimble" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/usegimble" },
  ];

  return (
    <footer className="bg-foreground text-background py-16 lg:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 mb-6 lg:mb-0">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={gimbleIcon} alt="Gimble icon" className="h-9 w-auto brightness-0 invert" />
              <span className="text-2xl font-display text-background tracking-tight">Gimble</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed mb-6">
              Wellbeing that works for everyone. Supporting individuals while empowering organizations.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-background/20 hover:scale-110 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-background/60 group-hover:text-background transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold text-background mb-4">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-background/60 hover:text-background transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2024 Gimble. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
