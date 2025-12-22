import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Gimble protect user privacy?",
    answer: "Gimble uses end-to-end encryption and anonymized analytics. Organizations only see aggregate, anonymized insights about team wellbeing trends—never individual data. Users have complete control over what they share.",
  },
  {
    question: "What mental health tools does Gimble offer?",
    answer: "Gimble provides mood tracking, guided meditation, breathing exercises, journaling prompts, stress management techniques, sleep improvement tools, and access to professional counseling resources when needed.",
  },
  {
    question: "How long does it take to implement Gimble in an organization?",
    answer: "Implementation typically takes 1-2 weeks. Our team handles setup, integration with your existing HR systems, and provides training for administrators. Employee onboarding is self-service and takes just minutes.",
  },
  {
    question: "Is Gimble available in multiple languages?",
    answer: "Yes! Gimble is available in English, French, Swahili, Yoruba, Zulu, and many other African languages. We're continuously adding more languages based on user demand.",
  },
  {
    question: "Can individuals use Gimble without an organization?",
    answer: "Absolutely. While we offer enterprise solutions, individuals can download the Gimble app and access core mental wellness features for free. Premium features are available through affordable personal subscriptions.",
  },
  {
    question: "What kind of insights do organizations receive?",
    answer: "Organizations receive aggregated, anonymized insights including overall wellbeing scores, engagement trends, common stressors (department-level only), and ROI metrics like reduced absenteeism and improved productivity indicators.",
  },
  {
    question: "Does Gimble integrate with existing HR systems?",
    answer: "Yes, Gimble integrates seamlessly with popular HR platforms, employee benefits systems, and communication tools like Slack and Microsoft Teams. Our API also allows for custom integrations.",
  },
  {
    question: "What support is available for users in crisis?",
    answer: "Gimble includes a 24/7 crisis support feature that connects users with trained counselors. We also integrate with local emergency services and mental health hotlines across Africa.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked{" "}
            <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Gimble and how it can support your mental wellness journey.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl px-6 border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Contact our team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
