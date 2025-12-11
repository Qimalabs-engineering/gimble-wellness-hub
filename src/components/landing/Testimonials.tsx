import { Star, Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.png";
import testimonial2 from "@/assets/testimonial-2.png";
import testimonial3 from "@/assets/testimonial-3.png";

const testimonials = [
  {
    quote: "Gimble transformed how we support our team's mental health. The insights dashboard gives us visibility without compromising privacy.",
    author: "Sarah Mitchell",
    role: "HR Director",
    company: "TechForward Inc.",
    rating: 5,
    image: testimonial1,
  },
  {
    quote: "Our students are more self-aware and emotionally resilient since implementing Gimble. The journeys feature is particularly impactful.",
    author: "Dr. James Chen",
    role: "Dean of Student Affairs",
    company: "Westbridge University",
    rating: 5,
    image: testimonial2,
  },
  {
    quote: "Finally, a wellness platform that respects user privacy while giving organizations meaningful data. It's exactly what we needed.",
    author: "Amanda Torres",
    role: "Chief People Officer",
    company: "Innovate Labs",
    rating: 5,
    image: testimonial3,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Loved by organizations worldwide
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how companies and schools are transforming wellbeing with Gimble.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-card hover:-translate-y-2 transition-all duration-300 relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 group-hover:text-primary/20 group-hover:scale-110 transition-all duration-300" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current hover:scale-110 transition-transform duration-200" />
                ))}
              </div>

              <p className="text-foreground/90 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
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

export default Testimonials;
