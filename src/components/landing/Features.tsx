import { 
  Brain, 
  Heart, 
  BookOpen, 
  Shield, 
  BarChart3, 
  Users,
  Compass,
  ClipboardCheck,
  Sparkles
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Compass,
      title: "Guided Journeys",
      description: "Structured pathways for stress, insomnia, depression, and anxiety. Build healthier habits with expert-curated content.",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: ClipboardCheck,
      title: "Assessments",
      description: "PHQ-9, GAD-7 and personality screeners give clarity on emotional patterns while protecting user privacy.",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Sparkles,
      title: "Daily Activities",
      description: "Track mood, sleep, and stress. Practice breathing exercises, journal privately, and reflect with supportive feedback.",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: BookOpen,
      title: "Custom Library",
      description: "Articles and learning materials that organizations can customize to reflect their values and culture.",
      gradient: "from-orange-500/20 to-amber-500/20",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Organizations see only anonymous, aggregated data. Users control what they share.",
      gradient: "from-primary/20 to-primary/10",
    },
    {
      icon: Heart,
      title: "Emergency Support",
      description: "Immediate access to organization-configured support contacts when users need help most.",
      gradient: "from-red-500/20 to-rose-500/20",
    },
  ];

  return (
    <section id="features" className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/5 rounded-full blur-3xl animate-breathe" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span 
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-in-down"
          >
            Platform Features
          </span>
          <h2 
            className="text-3xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            Everything your people need to{" "}
            <span className="text-primary">thrive</span>
          </h2>
          <p 
            className="text-lg text-muted-foreground animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            A complete wellness toolkit that supports individual growth while providing valuable organizational insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-3xl bg-background border border-border/50 card-modern animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300`}>
                <feature.icon className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover indicator */}
              <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">Learn more</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;