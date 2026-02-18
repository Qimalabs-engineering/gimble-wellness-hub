import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, GraduationCap, Shield, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import companiesWellness from "@/assets/african-companies.png";
import studentsWellness from "@/assets/african-students.png";
import governmentWellness from "@/assets/african-government.png";
import nonprofitWellness from "@/assets/african-nonprofit.png";

const audiences = [
  {
    icon: Building2,
    title: "Companies",
    subtitle: "Build healthier, more productive teams",
    description: "From startups to enterprises, Gimble helps companies support employee wellbeing while gaining insights into team health. Reduce burnout, improve retention, and create a culture where people thrive.",
    features: [
      "Anonymous wellness insights dashboard",
      "Custom journey assignments for teams",
      "Branded resource library",
      "Integration with HR systems",
    ],
    stats: { value: "34%", label: "reduction in burnout" },
    image: companiesWellness,
  },
  {
    icon: GraduationCap,
    title: "Schools & Universities",
    subtitle: "Support student mental health at scale",
    description: "Educational institutions use Gimble to proactively support student wellbeing, identify trends early, and provide resources that help students manage stress, anxiety, and academic pressure.",
    features: [
      "Age-appropriate content & journeys",
      "Early intervention insights",
      "Parent & counselor dashboards",
      "Crisis support integration",
    ],
    stats: { value: "42%", label: "improvement in student resilience" },
    image: studentsWellness,
  },
  {
    icon: Shield,
    title: "Government Agencies",
    subtitle: "Support public sector workforce wellbeing",
    description: "Government agencies use Gimble to meet the mental health needs of public sector employees with secure, compliant wellness programs. Track welfare metrics, improve organizational health, and support your teams in serving the community effectively.",
    features: [
      "Secure, compliant data handling",
      "Department-level wellness insights",
      "Crisis support & intervention tools",
      "Custom wellness programs for public service",
    ],
    stats: { value: "89%", label: "employee satisfaction rate" },
    image: governmentWellness,
  },
  {
    icon: Briefcase,
    title: "Non-profits & NGOs",
    subtitle: "Support your community's wellbeing",
    description: "Non-profit organizations use Gimble to support volunteers, staff, and the communities they serve with accessible mental health resources and wellness tracking.",
    features: [
      "Flexible pricing for non-profits",
      "Multi-language support",
      "Community wellness programs",
      "Impact measurement tools",
    ],
    stats: { value: "500+", label: "organizations served" },
    image: nonprofitWellness,
  },
];

const WhoWeServe = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO 
        title="Who We Serve - Companies, Schools, Government & Non-profits | Gimble"
        description="Gimble serves companies, schools, government agencies, and non-profits with tailored mental health solutions. See how we support employee and student wellbeing."
        canonical="https://usegimble.io/who-we-serve"
      />
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-50" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Who We Serve
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Wellbeing solutions for{" "}
              <span className="text-primary">every organization</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Whether you're a company, school, government agency, or non-profit, Gimble adapts to your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {audiences.map((audience, index) => (
              <div 
                key={index}
                className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""} animate-fade-in-up`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center">
                      <audience.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium text-primary">{audience.subtitle}</span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    {audience.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {audience.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {audience.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 group">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-8">
                    <Link to="/contact">
                      <Button variant="hero" className="group">
                        Learn More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                    <div className="text-center px-6 py-3 bg-primary/10 rounded-2xl">
                      <p className="text-4xl lg:text-5xl font-bold text-primary">{audience.stats.value}</p>
                      <p className="text-sm text-muted-foreground font-medium">{audience.stats.label}</p>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""} relative animate-fade-in-up`}>
                  <img 
                    src={audience.image} 
                    alt={audience.title}
                    className="w-full rounded-3xl shadow-card"
                  />
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ready to get started?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Book a demo to see how Gimble can support your organization's unique needs.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="group">
                Book a Demo
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WhoWeServe;
