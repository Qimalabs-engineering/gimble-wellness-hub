import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.png";

const OrganizationSection = () => {
  const benefits = [
    "Anonymous aggregated insights across stress, mood, and wellbeing",
    "Assign guided journeys to prioritize organizational themes",
    "Customize the resource library to reflect your culture",
    "Configure emergency contacts visible to all users",
    "Track engagement trends without compromising privacy",
  ];

  return (
    <section id="organizations" className="py-24 lg:py-32 bg-card relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10">
              <img
                src={dashboardMockup}
                alt="Gimble organization dashboard"
                className="w-full rounded-3xl shadow-card"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              For Organizations
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Insights that drive better decisions
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Stop guessing about your team's wellbeing. Gimble provides clear, ethical visibility into the emotional climate of your workforce or student community.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button variant="accent" size="lg" className="group">
              See Admin Dashboard
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationSection;
