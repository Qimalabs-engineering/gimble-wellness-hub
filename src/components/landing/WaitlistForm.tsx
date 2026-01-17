import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";
import { Loader2, CheckCircle, Mail } from "lucide-react";

const waitlistSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255),
  name: z.string().trim().max(100).optional(),
});

interface WaitlistFormProps {
  showName?: boolean;
  buttonText?: string;
  className?: string;
}

const WaitlistForm = ({ showName = false, buttonText = "Join Waitlist", className = "" }: WaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = waitlistSchema.safeParse({ email, name: name || undefined });
    
    if (!validation.success) {
      toast.error(validation.error.errors[0]?.message || "Invalid input");
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from("waitlist")
        .insert({ 
          email: validation.data.email,
          name: validation.data.name || null
        });

      if (error) {
        if (error.code === "23505") {
          toast.error("You're already on the waitlist!");
        } else {
          toast.error("Something went wrong. Please try again.");
        }
        return;
      }

      setIsSuccess(true);
      setEmail("");
      setName("");
      toast.success("You're on the list! We'll be in touch soon.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={`flex items-center gap-3 p-4 bg-primary/10 rounded-lg border border-primary/20 ${className}`}>
        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
        <p className="text-sm font-medium text-foreground">
          You're on the waitlist! We'll notify you when we launch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-3 ${className}`}>
      {showName && (
        <Input
          type="text"
          placeholder="Your name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isLoading}
          className="h-12"
        />
      )}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            required
            className="h-12 pl-10"
          />
        </div>
        <Button 
          type="submit" 
          disabled={isLoading}
          className="h-12 px-6 whitespace-nowrap"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Joining...
            </>
          ) : (
            buttonText
          )}
        </Button>
      </div>
    </form>
  );
};

export default WaitlistForm;
