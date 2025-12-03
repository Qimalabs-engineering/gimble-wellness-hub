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
    },
    {
      icon: ClipboardCheck,
      title: "Assessments",
      description: "PHQ-9, GAD-7 and personality screeners give clarity on emotional patterns while protecting user privacy.",
    },
    {
      icon: Sparkles,
      title: "Daily Activities",
      description: "Track mood, sleep, and stress. Practice breathing exercises, journal privately, and reflect with supportive feedback.",
    },
    {
      icon: BookOpen,
      title: "Custom Library",
      description: "Articles and learning materials that organizations can customize to reflect their values and culture.",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Organizations see only anonymous, aggregated data. Users control what they share.",
    },
    {
      icon: Heart,
      title: "Emergency Support",
      description: "Immediate access to organization-configured support contacts when users need help most.",
    },
  ];

  return (
    <section id="features" className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Platform Features
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Everything your people need to thrive
          </h2>
          <p className="text-lg text-muted-foreground">
            A complete wellness toolkit that supports individual growth while providing valuable organizational insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-3xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-card hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-6 group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
