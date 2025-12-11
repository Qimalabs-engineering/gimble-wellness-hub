import { UserPlus, BookOpen, ClipboardCheck, TrendingUp } from "lucide-react";
import forestPath from "@/assets/forest-path.png";

const steps = [
  {
    icon: UserPlus,
    title: "Easy Onboarding",
    description: "Get started in minutes. Simple setup for organizations and seamless account creation for users.",
    number: "01",
  },
  {
    icon: BookOpen,
    title: "Engage with Content",
    description: "Access guided journeys, wellness activities, breathing exercises, and a curated library of resources.",
    number: "02",
  },
  {
    icon: ClipboardCheck,
    title: "Complete Assessments",
    description: "Take personality assessments and mental health screeners to gain clarity on emotional patterns.",
    number: "03",
  },
  {
    icon: TrendingUp,
    title: "Track & Improve",
    description: "Monitor your progress, track mood and stress levels, and watch your wellbeing improve over time.",
    number: "04",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Background image */}
      <div className="absolute right-0 top-0 w-1/3 h-full hidden lg:block">
        <img 
          src={forestPath} 
          alt="Peaceful forest path" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-card via-card/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            How It Works
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Your journey to better wellbeing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Four simple steps to transform how your organization supports mental health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="bg-background rounded-3xl p-8 shadow-soft hover:shadow-card hover:-translate-y-2 transition-all duration-300 relative z-10">
                <span className="absolute -top-4 -right-2 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                  {step.number}
                </span>
                
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
