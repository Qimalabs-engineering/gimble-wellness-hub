import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import FAQ from "@/components/landing/FAQ";
import SEO from "@/components/SEO";

const FAQPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does Gimble protect user privacy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gimble uses end-to-end encryption and anonymized analytics. Organizations only see aggregate, anonymized insights about team wellbeing trends—never individual data. Users have complete control over what they share."
        }
      },
      {
        "@type": "Question",
        "name": "What mental health tools does Gimble offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gimble provides mood tracking, guided meditation, breathing exercises, journaling prompts, stress management techniques, sleep improvement tools, and access to professional counseling resources when needed."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to implement Gimble in an organization?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Implementation typically takes 1-2 weeks. Our team handles setup and provides training for administrators. Employee onboarding is self-service and takes just minutes."
        }
      },
      {
        "@type": "Question",
        "name": "Is Gimble available in multiple languages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Gimble is available in English, French, Swahili, Yoruba, Zulu, and many other African languages. We're continuously adding more languages based on user demand."
        }
      },
      {
        "@type": "Question",
        "name": "Can individuals use Gimble without an organization?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not yet—we're currently focused on serving organizations. However, we plan to introduce individual access in the future. Stay tuned for updates!"
        }
      },
      {
        "@type": "Question",
        "name": "What kind of insights do organizations receive?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Organizations receive aggregated, anonymized insights including overall wellbeing scores, engagement trends, common stressors (department-level only), and ROI metrics like reduced absenteeism and improved productivity indicators."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="FAQ - Gimble Mental Health Platform"
        description="Find answers to frequently asked questions about Gimble's mental health platform, privacy features, implementation, and organizational insights."
        canonical="https://usegimble.io/faq"
        structuredData={structuredData}
      />
      <Navbar />
      <div className="pt-20">
        <FAQ />
      </div>
      <Footer />
    </main>
  );
};

export default FAQPage;
