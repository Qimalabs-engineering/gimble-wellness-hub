import { TrendingUp, Users, Shield, Sparkles } from "lucide-react";

const Benefits = () => {
  const stats = [
    { value: "47%", label: "Reduction in reported stress levels" },
    { value: "3.2x", label: "Increase in wellbeing engagement" },
    { value: "89%", label: "User satisfaction rate" },
    { value: "60%", label: "Improvement in team collaboration" },
  ];

  const outcomes = [
    {
      icon: TrendingUp,
      title: "Informed Decision Making",
      description: "Understand mood patterns, stress levels, and engagement trends to make better decisions about workload, team structure, and support programs.",
    },
    {
      icon: Users,
      title: "Stronger Culture",
      description: "When organizations assign journeys and curate resources, users internalize values like emotional awareness, empathy, and resilience.",
    },
    {
      icon: Shield,
      title: "Privacy You Can Trust",
      description: "Individual data stays private. Organizations only see anonymous, aggregated insights—building trust while gaining visibility.",
    },
    {
      icon: Sparkles,
      title: "Sustainable Performance",
      description: "Teams that think clearly, innovate effectively, and maintain healthy dynamics. Students who manage emotions with confidence.",
    },
  ];

  return (
    <section id="benefits" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-sm lg:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Outcomes */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Why Gimble
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            More than a wellness app
          </h2>
          <p className="text-lg text-muted-foreground">
            Gimble is a strategic partner that helps organizations build environments where people feel supported, capable, and ready to do their best work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {outcomes.map((outcome, index) => (
            <div
              key={outcome.title}
              className="p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-card hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <outcome.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {outcome.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {outcome.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
