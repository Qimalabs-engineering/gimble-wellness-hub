import { LogIn, User, Trash2, Mail, AlertTriangle } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: LogIn,
    step: "Step 1",
    title: "Log in to your account",
    description: "Open the Gimble app and sign in with your registered email address and password.",
  },
  {
    icon: User,
    step: "Step 2",
    title: "Go to your Profile tab",
    description: "Tap the Profile icon in the bottom navigation bar to access your account settings.",
  },
  {
    icon: Trash2,
    step: "Step 3",
    title: "Tap 'Delete Account'",
    description: "Scroll to the bottom of your profile settings and tap 'Delete Account'. Follow the on-screen prompts to confirm your request.",
  },
];

const DeleteAccount = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Delete Your Account | Gimble"
        description="Learn how to delete your Gimble account and what happens to your data after deletion."
        canonical="https://usegimble.io/delete-account"
      />
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full bg-destructive/10 text-destructive font-medium text-sm mb-6">
              Account Management
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Delete Your Account
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              We're sorry to see you go. Here's how to request account deletion and what to expect during the process.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">

            <h2 className="text-2xl font-bold text-foreground mb-8">How to delete your account</h2>

            <div className="space-y-6 mb-14">
              {steps.map((item, index) => (
                <div key={index} className="flex gap-5 bg-card rounded-2xl p-6 shadow-soft">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">{item.step}</p>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* What happens next */}
            <div className="bg-card rounded-2xl p-8 shadow-soft mb-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground">What happens after you request deletion</h2>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  When you request account deletion, we will notify your provider and typically complete the process within <strong className="text-foreground">7–14 business days</strong>.
                </p>
                <p>
                  During this time, you can still log in and use the app. You will receive a confirmation email once the process is complete.
                </p>
                <p>
                  After completion, your login will be disabled and your profile removed in accordance with our{" "}
                  <Link to="/privacy-policy" className="text-primary hover:underline">Terms of Service and Privacy Policy</Link>.
                </p>
              </div>
            </div>

            {/* After deletion */}
            <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0" />
                <h2 className="text-lg font-bold text-foreground">After your account is deleted</h2>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Your personal data has been permanently removed, and you no longer have access to the app. If you need help or change your mind in the future, you can always create a new account.
              </p>
            </div>

            {/* Support */}
            <div className="text-center">
              <p className="text-muted-foreground text-sm mb-4">
                If you're experiencing an issue with the app or have any questions, our support team is here to help.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
              >
                Contact Support →
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default DeleteAccount;
