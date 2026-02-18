import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";

const sections = [
  {
    title: "1. Introduction",
    content: `Gimble ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the Gimble application and website (collectively, the "Service").

Please read this policy carefully. By using our Service, you agree to the collection and use of information in accordance with this policy.`,
  },
  {
    title: "2. Information We Collect",
    content: `We collect the following types of information:

**Information you provide directly:**
- Account registration details (name, email address)
- Wellness check-in responses and mood entries
- Journal entries and notes you create within the app
- Support requests and communications

**Information collected automatically:**
- Device information (device type, operating system, app version)
- Usage data (features used, session duration, in-app activity)
- Log data (IP address, browser type, pages visited on our website)

**Information we do NOT collect:**
- We do not collect biometric data
- We do not track your location unless explicitly requested
- We do not sell your personal data to third parties`,
  },
  {
    title: "3. How We Use Your Information",
    content: `We use the information we collect to:

- Provide, maintain, and improve the Gimble Service
- Personalize your wellness experience and recommendations
- Generate anonymized, aggregated insights for your organization (never individual-level data)
- Send you relevant notifications and updates about the Service
- Respond to your support requests and inquiries
- Comply with legal obligations and enforce our Terms of Service
- Detect, investigate, and prevent fraudulent or unauthorized activity`,
  },
  {
    title: "4. How Your Data Is Shared",
    content: `**With your organization:**
Your organization (employer, institution, or group) receives only anonymized, aggregated trend data — never individual entries, names, or identifiable information. Your personal wellness data is strictly private to you.

**With service providers:**
We may share data with trusted third-party service providers who assist us in operating our platform (e.g., cloud hosting, analytics). These providers are contractually obligated to protect your data.

**Legal requirements:**
We may disclose your information if required by law, court order, or governmental authority, or to protect the rights, property, or safety of Gimble, our users, or the public.

**Business transfers:**
In the event of a merger, acquisition, or sale of assets, your data may be transferred. We will notify you before your data is subject to a different privacy policy.

We do not sell, rent, or trade your personal information to third parties for marketing purposes.`,
  },
  {
    title: "5. Data Security",
    content: `We implement industry-standard security measures to protect your personal information, including:

- Encryption of data in transit (TLS/SSL) and at rest
- Access controls limiting who can view your data
- Regular security audits and vulnerability assessments
- Anonymization of data shared at the organizational level

While we take every reasonable precaution, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.`,
  },
  {
    title: "6. Data Retention",
    content: `We retain your personal data for as long as your account is active or as needed to provide the Service. If you request account deletion, we will process your request within 7–14 business days.

After deletion is complete:
- Your personal data is permanently removed from our systems
- Your login will be disabled and your profile removed
- Anonymized, aggregated data that has already been included in organizational trend reports may be retained as it cannot be re-identified

You will receive a confirmation email once the deletion process is complete.`,
  },
  {
    title: "7. Your Rights",
    content: `Depending on your location, you may have the following rights regarding your personal data:

- **Access:** Request a copy of the personal data we hold about you
- **Correction:** Request correction of inaccurate or incomplete data
- **Deletion:** Request deletion of your personal data (see Account Deletion below)
- **Portability:** Request your data in a portable format
- **Objection:** Object to certain processing of your data
- **Withdrawal of consent:** Withdraw consent at any time where processing is based on consent

To exercise any of these rights, contact us at privacy@gimble.app.`,
  },
  {
    title: "8. Account Deletion",
    content: `You may request deletion of your account at any time through the Gimble app:

1. Log in to your Gimble account
2. Navigate to the Profile tab
3. Tap "Delete Account" and follow the prompts

Upon request, we will notify your provider and typically complete the process within 7–14 business days. During this period, you can still log in and use the app. Once deletion is complete, your login will be disabled and your profile removed in accordance with this Privacy Policy and our Terms of Service.`,
  },
  {
    title: "9. Children's Privacy",
    content: `The Gimble Service is not intended for children under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected data from a child under 16 without verified parental consent, we will take steps to delete that information promptly.

If you believe a child has provided us with personal information, please contact us at privacy@gimble.app.`,
  },
  {
    title: "10. Third-Party Links",
    content: `Our Service may contain links to third-party websites or services. We are not responsible for the privacy practices of those third parties. We encourage you to review the privacy policies of any third-party sites you visit.`,
  },
  {
    title: "11. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.

Continued use of the Service after changes are posted constitutes your acceptance of the updated policy.`,
  },
  {
    title: "12. Contact Us",
    content: `If you have questions, concerns, or requests regarding this Privacy Policy, please contact us:

**Gimble Privacy Team**
Email: privacy@gimble.app
Website: https://gimble.app/contact

We aim to respond to all privacy-related inquiries within 30 days.`,
  },
];

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Privacy Policy | Gimble"
        description="Learn how Gimble collects, uses, and protects your personal data. Your privacy and mental wellness data are handled with the highest care."
        canonical="https://gimble.app/privacy-policy"
      />
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Legal
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: February 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-12">
              <p className="text-foreground font-medium mb-1">Our commitment to you</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                At Gimble, your mental wellness data is yours. Your organization only ever sees anonymized, aggregated trends — never your individual entries, name, or identity. Privacy is not a feature; it is the foundation of everything we build.
              </p>
            </div>

            <div className="space-y-10">
              {sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-xl font-bold text-foreground mb-4">{section.title}</h2>
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm space-y-3">
                    {section.content.split("\n\n").map((paragraph, i) => (
                      <p key={i} dangerouslySetInnerHTML={{
                        __html: paragraph
                          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                          .replace(/^- (.*)/gm, "• $1")
                      }} />
                    ))}
                  </div>
                  {index < sections.length - 1 && (
                    <div className="mt-10 border-b border-border/50" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
