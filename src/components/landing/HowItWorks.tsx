import { UserPlus, BookOpen, ClipboardCheck, TrendingUp } from "lucide-react";
import forestPath from "@/assets/forest-path.png";

const steps = [
  {
    icon: UserPlus,
    title: "Easy Onboarding",
    description: "Get started in minutes. Simple setup for organizations and seamless account creation for users.",
    number: "01",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: BookOpen,
    title: "Engage with Content",
    description: "Access guided journeys, wellness activities, breathing exercises, and a curated library of resources.",
    number: "02",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: ClipboardCheck,
    title: "Complete Assessments",
    description: "Take personality assessments and mental health screeners to gain clarity on emotional patterns.",
    number: "03",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: TrendingUp,
    title: "Track & Improve",
    description: "Monitor your progress, track mood and stress levels, and watch your wellbeing improve over time.",
    number: "04",
    color: "from-primary to-primary/70",
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
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float blob" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span 
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4 animate-fade-in-down"
          >
            How It Works
          </span>
          <h2 
            className="text-3xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            Your journey to better wellbeing
          </h2>
          <p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Four simple steps to transform how your organization supports mental health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              {/* Connector line with animation */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary/30 to-transparent w-full origin-left group-hover:scale-x-110 transition-transform duration-500" />
                </div>
              )}

              <div className="bg-background rounded-3xl p-8 shadow-soft card-modern relative z-10 h-full">
                {/* Step number with glow */}
                <span className="absolute -top-4 -right-2 text-6xl font-bold text-primary/10 group-hover:text-primary/25 transition-all duration-300 group-hover:scale-110">
                  {step.number}
                </span>
                
                {/* Icon with gradient */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-glow transition-all duration-300`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                
                {/* Progress indicator */}
                <div className="mt-6 h-1 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${step.color} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;